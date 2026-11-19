(function () {
  "use strict";

  // ---------- Content ----------
  // Correct answer is B for every round, per the build spec.
  const ROUNDS = [
    {
      label: "Round 1 · Implementation",
      title: "The Big Arrival",
      story: "The new system is arriving in Snowflake Falls just in time for the tree-lighting ceremony. The town is excited, but nobody knows who is responsible for what. How should you launch the rollout?",
      answers: [
        "Send everyone a link to the software and let them explore on their own.",
        "Hold a kickoff meeting that sets goals, assigns responsibilities, and shares an implementation plan.",
        "Wait until after the festival, then decide what to do.",
        "Ask the mayor to announce the launch on the town radio."
      ],
      correct: 1,
      explanation: "A kickoff meeting aligns everyone on goals, clarifies who owns what, and gives the team a clear implementation plan. Without those three things, even the best tools arrive to a confused town."
    },
    {
      label: "Round 2 · Training",
      title: "The Training Disaster",
      story: "Elf volunteers are struggling with the new system during the Christmas Market rush. The training handbook is 84 pages long and nobody has read it. What is the best fix?",
      answers: [
        "Print a longer handbook and leave copies on every cocoa cart.",
        "Provide role-specific training, live demonstrations, and accessible resources people can use on the job.",
        "Tell volunteers to learn by trial and error during the rush.",
        "Replace all volunteers with trained reindeer."
      ],
      correct: 1,
      explanation: "People learn fastest when training matches their actual job, they can see it done, and they have resources they can reach when they need them. A longer handbook nobody reads does none of those things."
    },
    {
      label: "Round 3 · Customer Support",
      title: "The Christmas Eve Emergency",
      story: "At 9 p.m. on Christmas Eve, the town's online gift-ordering system goes down. Hundreds of customers are waiting for their presents to arrive by morning. What should the support team do first?",
      answers: [
        "Post a cheerful 'Happy Holidays!' banner and hope the problem resolves itself.",
        "Acknowledge the urgency, assess the impact, communicate clearly with customers, and coordinate a resolution.",
        "Shut the website down until January.",
        "Tell customers to pick up their gifts from Santa's workshop."
      ],
      correct: 1,
      explanation: "Customers in a crisis need to know someone is taking them seriously. Acknowledging the problem, understanding how far it reaches, communicating honestly, and coordinating a fix is what turns a holiday disaster into a story of trust."
    },
    {
      label: "Round 4 · Customer Success",
      title: "The Mayor's Big Question",
      story: "The mayor wants to know whether the new customer program has actually made Snowflake Falls better. Nobody has checked the results against the original goals. How should you answer?",
      answers: [
        "Declare victory based on how the town feels about it.",
        "Review the original goals, measure outcomes, gather customer feedback, and identify what to improve next.",
        "Skip the review so the festival can focus on fun.",
        "Ask the mayor to give the program a five-star rating."
      ],
      correct: 1,
      explanation: "Checking outcomes against the original goals, listening to customers, and identifying improvements is how a program proves its value and keeps getting better. Gut feelings make a nice story but a poor report card."
    },
    {
      label: "Round 5 · Customer Experience",
      title: "The Christmas Miracle",
      story: "A customer's order arrives on time, the store's greeter remembers her name, and the follow-up email feels like it was written just for her. But the website and the store still feel like two different companies. What should the team aim for?",
      answers: [
        "Keep each channel independent so every team can be creative in its own way.",
        "Deliver a personal, seamless, thoughtful, and consistent experience across every touchpoint.",
        "Focus only on the store, since most customers still shop in person.",
        "Send the same discount code to everyone and call it personal."
      ],
      correct: 1,
      explanation: "Customers judge the whole journey, not one channel. A personal, seamless, and consistent experience across every touchpoint is what makes people feel the town really cares about them."
    }
  ];

  const POINTS_PER_CORRECT = 10;
  const TIMER_SECONDS = 40; // within the 30–45 second window

  const AWARDS = [
    { min: 40, title: "The Christmas Miracle Maker", desc: "Snowflake Falls is glowing thanks to you. The mayor has asked for your autograph, and the reindeer have written a song in your honor." },
    { min: 30, title: "The Holiday Hero in Training", desc: "A few cookies burned and a sleigh got stuck in the snowbank, but you clearly have a gift for helping customers. Keep the cocoa coming." },
    { min: 20, title: "The Mistletoe Manager", desc: "You got a few things under the tree wrapped beautifully and a few things tangled in the lights. Another season and you'll have it all sorted." },
    { min: 0,  title: "The Grinch of Customer Experience", desc: "Snowflake Falls is a little colder than before. Don't worry: even the Grinch's heart grew three sizes, and there's always next Christmas." }
  ];

  const FEEDBACK_CORRECT = [
    "Ho ho HOLY MISTLETOE! You nailed it!",
    "The snow is falling in slow motion because of your brilliance!",
    "Even the reindeer are applauding.",
    "A perfect decision worthy of a Hallmark ending!"
  ];
  const FEEDBACK_WRONG = [
    "Oh no! The town's gingerbread house just collapsed.",
    "The mayor sighed dramatically and reached for the hot cocoa.",
    "A single snowflake fell on your bad decision. Dramatic, but true.",
    "Not the answer the movie script was hoping for!"
  ];
  const FEEDBACK_TIMEOUT = "Time's up! The snow kept falling, but the clock didn't wait for you.";

  // ---------- State (kept in browser memory only) ----------
  const state = {
    name: "",
    roundIndex: 0,
    score: 0,
    selected: null,
    locked: false,
    timerId: null,
    timeLeft: TIMER_SECONDS
  };

  // ---------- Elements ----------
  const $ = (id) => document.getElementById(id);
  const screens = {
    poster: $("screen-poster"),
    intro: $("screen-intro"),
    round: $("screen-round"),
    final: $("screen-final"),
    credits: $("screen-credits")
  };
  const restartBar = $("restart-bar");

  function showScreen(name) {
    Object.values(screens).forEach((s) => s.classList.remove("active"));
    screens[name].classList.add("active");
    restartBar.hidden = (name === "poster");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- Snowfall ----------
  function buildSnow() {
    const layer = $("snow-layer");
    const count = window.innerWidth < 600 ? 30 : 60;
    for (let i = 0; i < count; i++) {
      const flake = document.createElement("span");
      flake.className = "snowflake";
      flake.textContent = ["❄", "❅", "❆"][i % 3];
      flake.style.left = Math.random() * 100 + "vw";
      flake.style.fontSize = (10 + Math.random() * 18) + "px";
      flake.style.animationDuration = (8 + Math.random() * 12) + "s";
      flake.style.animationDelay = (-Math.random() * 15) + "s";
      flake.style.opacity = (0.4 + Math.random() * 0.5).toString();
      layer.appendChild(flake);
    }
  }

  // Burst of sparkles for correct answers
  function celebrate() {
    const symbols = ["✨", "❄", "⭐", "🎄"];
    for (let i = 0; i < 18; i++) {
      const s = document.createElement("span");
      s.className = "sparkle";
      s.textContent = symbols[i % symbols.length];
      s.style.left = "50%";
      s.style.top = "40%";
      s.style.setProperty("--dx", (Math.random() * 480 - 240) + "px");
      s.style.setProperty("--dy", (Math.random() * 360 - 180) + "px");
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 1300);
    }
  }

  // ---------- Score helpers ----------
  function getAward(score) {
    return AWARDS.find((a) => score >= a.min) || AWARDS[AWARDS.length - 1];
  }

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  // ---------- Intro ----------
  $("btn-start").addEventListener("click", () => showScreen("intro"));

  let introPending = false;
  let introTimeoutId = null;

  $("name-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (introPending) return; // ignore double submits during the welcome pause
    const name = $("player-name").value.trim();
    if (!name) {
      $("name-error").hidden = false;
      return;
    }
    $("name-error").hidden = true;
    state.name = name;
    introPending = true;
    $("btn-save").disabled = true;
    $("welcome-line").textContent =
      `Welcome to Snowflake Falls, ${name}. You've just been appointed Chief Christmas Officer.`;
    // Pause so the welcome line can be read before the first round begins.
    introTimeoutId = setTimeout(() => {
      introPending = false;
      introTimeoutId = null;
      $("btn-save").disabled = false;
      startRounds();
    }, 3000);
  });

  function startRounds() {
    state.roundIndex = 0;
    state.score = 0;
    loadRound();
  }

  // ---------- Rounds ----------
  function loadRound() {
    const round = ROUNDS[state.roundIndex];
    state.selected = null;
    state.locked = false;

    $("round-progress").textContent = `Scene ${state.roundIndex + 1} of ${ROUNDS.length}`;
    $("round-label").textContent = round.label;
    $("round-title").textContent = round.title;
    $("round-story").textContent = round.story;

    const answersEl = $("answers");
    answersEl.innerHTML = "";
    round.answers.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer";
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", "false");
      btn.dataset.index = i;
      btn.innerHTML = `<span class="letter">${String.fromCharCode(65 + i)}</span><span></span>`;
      btn.lastChild.textContent = text;
      btn.addEventListener("click", () => selectAnswer(i));
      answersEl.appendChild(btn);
    });

    $("btn-submit").disabled = true;
    $("feedback").hidden = true;
    showScreen("round");
    startTimer();
  }

  function selectAnswer(index) {
    if (state.locked) return;
    state.selected = index;
    document.querySelectorAll(".answer").forEach((btn) => {
      const isSel = Number(btn.dataset.index) === index;
      btn.classList.toggle("selected", isSel);
      btn.setAttribute("aria-checked", isSel ? "true" : "false");
    });
    $("btn-submit").disabled = false;
  }

  function startTimer() {
    stopTimer();
    state.timeLeft = TIMER_SECONDS;
    updateTimerDisplay();
    state.timerId = setInterval(() => {
      state.timeLeft -= 1;
      updateTimerDisplay();
      if (state.timeLeft <= 0) {
        stopTimer();
        handleTimeout();
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  function updateTimerDisplay() {
    const t = $("timer");
    t.textContent = state.timeLeft;
    t.classList.toggle("warning", state.timeLeft <= 10);
  }

  function lockAnswers() {
    state.locked = true;
    document.querySelectorAll(".answer").forEach((btn) => {
      btn.classList.add("locked");
      btn.disabled = true;
    });
    $("btn-submit").disabled = true;
  }

  function showFeedback(isCorrect, message, correctIndex, timedOut) {
    const round = ROUNDS[state.roundIndex];
    // Mark the correct answer, and the user's wrong pick if any
    document.querySelectorAll(".answer").forEach((btn) => {
      const i = Number(btn.dataset.index);
      if (i === correctIndex) btn.classList.add("correct");
      if (!timedOut && state.selected !== null && i === state.selected && !isCorrect) btn.classList.add("wrong");
    });

    const verdict = $("feedback-verdict");
    verdict.textContent = isCorrect
      ? `Correct! +${POINTS_PER_CORRECT} points`
      : (timedOut ? "Time's up! 0 points" : "Not quite. 0 points");
    verdict.className = "feedback-verdict " + (isCorrect ? "correct" : "wrong");

    $("feedback-message").textContent = message;
    $("feedback-explanation").textContent = round.explanation;
    $("btn-next").textContent = state.roundIndex === ROUNDS.length - 1
      ? "See Your Final Score"
      : "Continue to Next Scene";
    $("feedback").hidden = false;
    if (isCorrect) celebrate();
  }

  function handleSubmit() {
    if (state.selected === null || state.locked) return;
    stopTimer();
    lockAnswers();
    const round = ROUNDS[state.roundIndex];
    const isCorrect = state.selected === round.correct;
    if (isCorrect) state.score += POINTS_PER_CORRECT;
    showFeedback(isCorrect, isCorrect ? pick(FEEDBACK_CORRECT) : pick(FEEDBACK_WRONG), round.correct);
  }

  function handleTimeout() {
    if (state.locked) return;
    lockAnswers();
    const round = ROUNDS[state.roundIndex];
    // Timeout records zero points, per the spec.
    showFeedback(false, FEEDBACK_TIMEOUT, round.correct, true);
  }

  $("btn-submit").addEventListener("click", handleSubmit);

  $("btn-next").addEventListener("click", () => {
    state.roundIndex += 1;
    if (state.roundIndex < ROUNDS.length) {
      loadRound();
    } else {
      showFinal();
    }
  });

  // ---------- Final ----------
  function showFinal() {
    const award = getAward(state.score);
    $("final-name").textContent = state.name;
    $("final-score").textContent = state.score;
    $("award-title").textContent = award.title;
    $("award-desc").textContent = award.desc;
    showScreen("final");
    if (state.score >= 40) celebrate();
  }

  $("btn-credits").addEventListener("click", () => showScreen("credits"));

  // ---------- Restart ----------
  function restart() {
    stopTimer();
    state.name = "";
    state.roundIndex = 0;
    state.score = 0;
    state.selected = null;
    state.locked = false;
    if (introTimeoutId) clearTimeout(introTimeoutId);
    introTimeoutId = null;
    introPending = false;
    $("btn-save").disabled = false;
    $("player-name").value = "";
    $("welcome-line").textContent = "";
    showScreen("poster");
  }

  $("btn-restart").addEventListener("click", restart);
  $("btn-restart-final").addEventListener("click", restart);
  $("btn-restart-credits").addEventListener("click", restart);

  // ---------- Init ----------
  buildSnow();
  showScreen("poster");
})();
