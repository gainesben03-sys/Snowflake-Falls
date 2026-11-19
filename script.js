
/* =========================================================
   SNOWFLAKE FALLS
   A GradeMark Studios Production
   Five-scene CX holiday adventure
   ========================================================= */

(() => {
  "use strict";

  const categories = [
    "Implementation",
    "Training",
    "Support",
    "Customer Success"
  ];

  const scenes = [
    {
      title: "The Big Kickoff",
      chapter: "ACT I — A TOWN FULL OF EXPECTATIONS",
      category: "Implementation",
      setting: "Snowflake Falls Town Hall",

      intro:
        "Snow is falling, the cocoa is flowing, and the school district's new student information system is supposed to bring the whole town together. Unfortunately, nobody agrees on what 'ready' means.",

      dialogue: [
        ["MAYOR ELEANOR PRUITT",
          "Welcome, everyone! By January, I want every school using GradeMark. Smoothly. Joyfully. Preferably with a ribbon-cutting."],

        ["SUPERINTENDENT HOLLIS",
          "The board expects attendance, grades, schedules, and parent access on day one."],

        ["JAMIE — IMPLEMENTATION LEAD",
          "Our kickoff notes say phase one is attendance and schedules. Grades and family access are in phase two."],

        ["MAYOR ELEANOR",
          "Well, this is awkward. I already ordered the ribbon."]
      ],

      question:
        "What should the executive team do first?",

      choices: [
        {
          text: "Agree to every request so the superintendent feels heard.",
          scores: { Implementation: 0, Training: 0, Support: 0, "Customer Success": 0 },
          feedback:
            "A cheerful yes creates a very unhappy launch. Scope is now unclear and the team has no shared definition of success.",
          consequence:
            "The superintendent leaves believing every feature is guaranteed."
        },
        {
          text: "Align stakeholders on outcomes, scope, owners, and decision dates. Document the agreed launch plan.",
          scores: { Implementation: 10, Training: 2, Support: 1, "Customer Success": 3 },
          feedback:
            "Excellent. You turned competing expectations into a shared plan with clear ownership and measurable milestones.",
          consequence:
            "The superintendent signs the one-page launch charter. The ribbon is moved to phase two."
        },
        {
          text: "Send the technical project plan and ask everyone to read it.",
          scores: { Implementation: 4, Training: 0, Support: 0, "Customer Success": 0 },
          feedback:
            "Documentation helps, but it does not replace alignment. People need a conversation about what matters and who decides.",
          consequence:
            "Three departments reply with three different interpretations."
        },
        {
          text: "Ask the superintendent to choose the features while the team starts configuring.",
          scores: { Implementation: 2, Training: 0, Support: 0, "Customer Success": 1 },
          feedback:
            "The customer should guide priorities, but the team still needs to clarify dependencies, feasibility, and trade-offs.",
          consequence:
            "The team starts building before the destination is agreed."
        }
      ],

      twist:
        "As the meeting ends, the registrar quietly mentions that the district's student records are stored in four different formats. Go-live is in two weeks."
    },

    {
      title: "The Night Before Go-Live",
      chapter: "ACT II — THE DATA BEFORE CHRISTMAS",
      category: "Implementation",
      setting: "District Office — 8:47 p.m.",

      intro:
        "The launch charter is signed. The team has a plan. But the data conversion test has revealed duplicate student records, missing guardian contacts, and a school whose mascot is somehow listed as a student.",

      dialogue: [
        ["MORGAN — DATA SPECIALIST",
          "We found 186 records that don't reconcile. Also, someone enrolled the Wildcat mascot in Algebra II."],

        ["JAMIE — IMPLEMENTATION LEAD",
          "The mascot has excellent attendance. The guardian data, however, is a real concern."],

        ["SUPERINTENDENT HOLLIS",
          "Can we still launch Monday? The board announcement is already scheduled."],

        ["MAYOR ELEANOR",
          "I can delay the announcement. I cannot delay Christmas. I've checked."]
      ],

      question:
        "How do you handle the launch-readiness issue?",

      choices: [
        {
          text: "Load everything and fix errors after launch.",
          scores: { Implementation: 0, Training: 0, Support: 0, "Customer Success": 0 },
          feedback:
            "That risks incorrect student information and undermines trust. A deadline is not a substitute for readiness.",
          consequence:
            "The mascot receives six automated absence notices."
        },
        {
          text: "Hide the exceptions from the customer so confidence stays high.",
          scores: { Implementation: 0, Training: 0, Support: 0, "Customer Success": 0 },
          feedback:
            "Never trade transparency for temporary reassurance. Customers need facts to make informed decisions.",
          consequence:
            "The registrar discovers the issue during the first morning of school."
        },
        {
          text: "Triage errors by risk, validate critical records with district owners, run a focused retest, and make a go/no-go decision together.",
          scores: { Implementation: 10, Training: 1, Support: 2, "Customer Success": 3 },
          feedback:
            "Strong launch leadership. You protect data integrity, involve the right customer owners, and make the decision based on evidence.",
          consequence:
            "The district agrees to a short, controlled delay for one school while the others proceed."
        },
        {
          text: "Ask the vendor team to work overnight until every record is perfect.",
          scores: { Implementation: 3, Training: 0, Support: 1, "Customer Success": 0 },
          feedback:
            "Effort matters, but an arbitrary all-night push does not establish data quality or customer acceptance criteria.",
          consequence:
            "The team gets very little sleep and still needs the registrar to validate the records."
        }
      ],

      twist:
        "The registrar catches the mascot record and laughs for the first time all week. Then she shares the real concern: her staff have never been shown how to handle the new workflow."
    },

    {
      title: "Christmas Training Miracle",
      chapter: "ACT III — EVERYONE LEARNS DIFFERENTLY",
      category: "Training",
      setting: "Snowflake Falls Middle School",

      intro:
        "The data plan is back on track. Now the district's registrars, teachers, and administrators are asking for training — and they all mean something different.",

      dialogue: [
        ["CASEY — TRAINING LEAD",
          "Registrars need hands-on enrollment practice. Teachers need attendance and gradebook workflows. Administrators need reports and oversight."],

        ["MR. BELL — TEACHER",
          "I have 27 minutes between classes. Please don't give me a 90-slide presentation."],

        ["TANYA — HEAD REGISTRAR",
          "I need to practice the messy real-life cases, not just watch someone click through the happy path."],

        ["SUPERINTENDENT HOLLIS",
          "And I need to know whether people are actually ready."]
      ],

      question:
        "Which training approach gives the district the best chance to succeed?",

      choices: [
        {
          text: "Run one large webinar for everyone and send the recording.",
          scores: { Implementation: 0, Training: 2, Support: 1, "Customer Success": 0 },
          feedback:
            "A recording is useful reinforcement, but a single generic session misses role-specific workflows and practice.",
          consequence:
            "Teachers fast-forward to the end. Registrars start a separate group chat titled 'Help?'"
        },
        {
          text: "Deliver role-based sessions with realistic practice, quick-reference guides, office hours, and a readiness check.",
          scores: { Implementation: 1, Training: 10, Support: 3, "Customer Success": 3 },
          feedback:
            "Exactly right. Role-based learning, practice, reinforcement, and a way to measure readiness make training actionable.",
          consequence:
            "The registrar completes a practice enrollment and proudly declares the mascot officially withdrawn."
        },
        {
          text: "Train administrators first and ask them to train everyone else.",
          scores: { Implementation: 0, Training: 3, Support: 0, "Customer Success": 1 },
          feedback:
            "Train-the-trainer can work when trainers have time, materials, and support. Simply passing responsibility along is risky.",
          consequence:
            "The principal prints the slides. Nobody knows who is teaching the afternoon shift."
        },
        {
          text: "Tell staff to use the system and contact support if they get stuck.",
          scores: { Implementation: 0, Training: 0, Support: 2, "Customer Success": 0 },
          feedback:
            "Support is not a substitute for enablement. Preventable confusion becomes avoidable ticket volume.",
          consequence:
            "The support inbox receives 43 messages asking where the attendance button went."
        }
      ],

      twist:
        "At the end of training, Mr. Bell stays behind. He has built a clever attendance shortcut — and asks whether the team would like to see it."
    },

    {
      title: "Christmas Eve Crisis",
      chapter: "ACT IV — THE TICKET THAT SAVED CHRISTMAS",
      category: "Support",
      setting: "GradeMark Support Center — Christmas Eve",

      intro:
        "The district launches. Training pays off. Then, just before the holiday break, a login issue prevents several families from accessing the parent portal. The superintendent posts that the team needs an answer now.",

      dialogue: [
        ["RILEY — SUPPORT MANAGER",
          "We're seeing a spike in family login failures. It appears limited to accounts with recently updated email addresses."],

        ["SUPERINTENDENT HOLLIS",
          "Parents are calling our schools. What do I tell them?"],

        ["JAMIE — IMPLEMENTATION LEAD",
          "We need one coordinated message. No guessing."],

        ["MAYOR ELEANOR",
          "I have one question: is the cocoa portal affected?"]
      ],

      question:
        "What is the best response?",

      choices: [
        {
          text: "Send a quick message saying everything is fixed, then investigate.",
          scores: { Implementation: 0, Training: 0, Support: 0, "Customer Success": 0 },
          feedback:
            "Never announce a resolution before it is verified. False reassurance damages credibility.",
          consequence:
            "The issue continues, and the superintendent has to correct the public update."
        },
        {
          text: "Wait until engineering has a complete root-cause analysis before communicating.",
          scores: { Implementation: 0, Training: 0, Support: 2, "Customer Success": 0 },
          feedback:
            "The technical facts matter, but silence leaves the customer managing the anxiety alone. Communicate what is known and when you'll update.",
          consequence:
            "The district writes its own explanation — and gets some details wrong."
        },
        {
          text: "Acknowledge the impact, share confirmed scope and workarounds, assign an incident lead, and give the district a specific next-update time.",
          scores: { Implementation: 1, Training: 1, Support: 10, "Customer Success": 3 },
          feedback:
            "Excellent incident communication: empathy, verified facts, ownership, practical guidance, and a predictable update cadence.",
          consequence:
            "Families receive a clear workaround. Engineering confirms the fix and support verifies recovery."
        },
        {
          text: "Tell the district to have families reset all passwords.",
          scores: { Implementation: 0, Training: 0, Support: 3, "Customer Success": 0 },
          feedback:
            "A broad workaround can create more confusion and may not address the actual issue. Validate targeted steps before recommending them.",
          consequence:
            "The help desk gets a second wave of password-reset requests."
        }
      ],

      twist:
        "The issue is resolved before midnight. The superintendent sends a thank-you note — and asks for a January meeting to talk about what success should look like beyond fixing tickets."
    },

    {
      title: "A Reason to Stay",
      chapter: "ACT V — THE BEST GIFT IS WHAT HAPPENS NEXT",
      category: "Customer Success",
      setting: "Snowflake Falls — New Year's Eve",

      intro:
        "The holidays pass. The district is stable, staff are using the system, and the support queue is quiet. But the team knows a quiet inbox is not the same thing as a successful customer.",

      dialogue: [
        ["ALEX — CUSTOMER SUCCESS",
          "Let's look at adoption, data quality, time saved, training confidence, and the district's goals for next semester."],

        ["SUPERINTENDENT HOLLIS",
          "I want to know whether this made life better for our schools — not just whether we turned it on."],

        ["TANYA — HEAD REGISTRAR",
          "Our new enrollment workflow is saving us hours. And Mr. Bell's shortcut should absolutely be in the next training."],

        ["MAYOR ELEANOR",
          "And I would like to formally recognize the person who rescued the mascot's academic career."]
      ],

      question:
        "How do you turn a successful launch into a lasting partnership?",

      choices: [
        {
          text: "Celebrate go-live, close the project, and move on to the next customer.",
          scores: { Implementation: 0, Training: 0, Support: 0, "Customer Success": 0 },
          feedback:
            "A launch is a milestone, not the finish line. Without follow-through, adoption and value can fade.",
          consequence:
            "The district wonders who to call when its next big goal arrives."
        },
        {
          text: "Schedule a quarterly business review focused only on open tickets.",
          scores: { Implementation: 0, Training: 0, Support: 2, "Customer Success": 2 },
          feedback:
            "Operational health matters, but a success conversation should connect product use to customer outcomes and future priorities.",
          consequence:
            "The meeting ends in 12 minutes. The superintendent still has questions about impact."
        },
        {
          text: "Review agreed success measures, adoption and outcomes; gather feedback; identify next goals; and create a shared improvement plan.",
          scores: { Implementation: 2, Training: 2, Support: 2, "Customer Success": 10 },
          feedback:
            "That's customer success: measurable value, a listening partnership, and a forward-looking plan tied to the customer's goals.",
          consequence:
            "The district commits to a second-semester roadmap and offers to be a reference."
        },
        {
          text: "Offer every new feature at no cost to keep the district happy.",
          scores: { Implementation: 1, Training: 0, Support: 0, "Customer Success": 2 },
          feedback:
            "More features do not automatically mean more value. Start with the customer's goals and prioritize what will help them achieve those outcomes.",
          consequence:
            "The district receives a very long feature list and asks for a simpler plan."
        }
      ],

      twist:
        "At the New Year's Eve celebration, Mayor Eleanor reveals that the town's annual Snowflake Festival will now use GradeMark for its volunteer sign-ups. Jamie and Alex exchange a look — and maybe, just maybe, a little holiday magic."
    }
  ];

  const state = {
    scene: 0,
    total: 0,
    scores: Object.fromEntries(categories.map(c => [c, 0])),
    answers: [],
    seconds: 40,
    timer: null,
    locked: false
  };

  const $ = selector => document.querySelector(selector);

  function mount() {
    return $("#game") ||
           $("#game-container") ||
           $("#app") ||
           $("main") ||
           document.body;
  }

  function addStyles() {
    if ($("#snowflake-script-styles")) return;

    const style = document.createElement("style");
    style.id = "snowflake-script-styles";

    style.textContent = `
      .sf-wrap {
        max-width: 900px;
        margin: auto;
        padding: 24px;
        color: #243044;
        font-family: Georgia, serif;
      }

      .sf-card {
        background: #fffdf8;
        border: 1px solid #e7dccb;
        border-radius: 16px;
        padding: clamp(20px,4vw,36px);
        box-shadow: 0 12px 35px #14213a12;
      }

      .sf-kicker {
        letter-spacing: .16em;
        text-transform: uppercase;
        font: 700 11px Arial,sans-serif;
        color: #a33b45;
      }

      .sf-title {
        font-size: clamp(32px,6vw,52px);
        line-height: 1.05;
        margin: 10px 0;
        color: #17324d;
      }

      .sf-sub {
        color: #6b7280;
        font: 14px Arial,sans-serif;
      }

      .sf-scene {
        font: 700 12px Arial,sans-serif;
        color: #a33b45;
        letter-spacing: .1em;
      }

      .sf-dialogue {
        margin: 20px 0;
        padding: 14px 16px;
        background: #f6f2ea;
        border-left: 3px solid #b64c55;
        border-radius: 8px;
      }

      .sf-line {
        margin: 10px 0;
        line-height: 1.45;
      }

      .sf-speaker {
        font: 700 11px Arial,sans-serif;
        letter-spacing: .08em;
        color: #a33b45;
      }

      .sf-question {
        font-size: 22px;
        line-height: 1.3;
        color: #17324d;
        margin: 22px 0 14px;
      }

      .sf-choice {
        display: block;
        width: 100%;
        text-align: left;
        margin: 10px 0;
        padding: 14px 16px;
        border: 1px solid #d9d4ca;
        border-radius: 10px;
        background: white;
        color: #243044;
        font: 15px/1.4 Arial,sans-serif;
        cursor: pointer;
      }

      .sf-choice:hover {
        border-color: #a33b45;
        background: #fff9f7;
      }

      .sf-choice:disabled {
        cursor: default;
        opacity: .8;
      }

      .sf-choice.sf-selected {
        border: 2px solid #2f765d;
        background: #f1faf5;
      }

      .sf-btn {
        border: 0;
        border-radius: 999px;
        padding: 13px 22px;
        background: #a33b45;
        color: white;
        font: 700 13px Arial,sans-serif;
        cursor: pointer;
      }

      .sf-btn:hover {
        background: #842d37;
      }

      .sf-timer {
        float: right;
        font: 700 13px Arial,sans-serif;
        color: #a33b45;
      }

      .sf-meter {
        height: 7px;
        background: #eee7dd;
        border-radius: 9px;
        overflow: hidden;
        margin: 16px 0 24px;
      }

      .sf-meter span {
        display: block;
        height: 100%;
        background: #a33b45;
        transition: width .3s;
      }

      .sf-feedback {
        margin: 18px 0;
        padding: 16px;
        border-radius: 10px;
        background: #f1f7f3;
        font: 14px/1.5 Arial,sans-serif;
      }

      .sf-twist {
        margin: 18px 0;
        padding: 16px;
        background: #fff5e8;
        border-radius: 10px;
        line-height: 1.5;
      }

      .sf-scoregrid {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(145px,1fr));
        gap: 12px;
        margin: 22px 0;
      }

      .sf-score {
        padding: 16px;
        background: #f6f2ea;
        border-radius: 12px;
      }

      .sf-score strong {
        display: block;
        font: 700 24px Arial,sans-serif;
        color: #17324d;
        margin: 6px 0;
      }

      .sf-score small {
        display: block;
        font: 12px/1.4 Arial,sans-serif;
        color: #6b7280;
      }

      .sf-footer {
        font: 12px Arial,sans-serif;
        color: #7a7a7a;
        text-align: center;
        margin-top: 22px;
      }

      @media(max-width:560px) {
        .sf-wrap { padding: 12px; }
        .sf-title { font-size: 34px; }
      }
    `;

    document.head.appendChild(style);
  }

  function renderIntro() {
    mount().innerHTML = `
      <div class="sf-wrap">
        <div class="sf-card">

          <div class="sf-kicker">
            GradeMark Studios presents
          </div>

          <h1 class="sf-title">Snowflake Falls</h1>

          <p class="sf-sub">
            A holiday story about big expectations,
            brave decisions, and the magic of great customer experience.
          </p>

          <div class="sf-dialogue">

            <div class="sf-speaker">
              A LETTER FROM MAYOR ELEANOR PRUITT
            </div>

            <p>Dear friends,</p>

            <p>
              Welcome to Snowflake Falls, where the snow
              is always falling, the cocoa is always warm,
              and the town's biggest project is about to get
              a very public holiday deadline.
            </p>

            <p>
              Our schools are counting on GradeMark to make
              life easier for students, families, teachers,
              and staff.
            </p>

            <p>
              The journey from kickoff to lasting success
              will take more than a ribbon-cutting.
              It will take listening, teamwork, thoughtful
              decisions, and a little Christmas spirit.
            </p>

            <p>
              We hope you'll help us make this the most
              wonderful implementation our town has ever seen.
            </p>

            <p>
              With warm wishes,<br>
              <strong>Mayor Eleanor Pruitt</strong>
            </p>

          </div>

          <p>
            <strong>Your mission:</strong>
            Guide the executive team through five connected
            moments. Each decision affects the district's
            experience and your final score across four CX disciplines.
          </p>

          <p class="sf-sub">
            Five scenes · 40 seconds per decision ·
            Choose the response you'd want your team to deliver.
          </p>

          <button class="sf-btn" id="sf-start">
            Start the movie
          </button>

        </div>

        <div class="sf-footer">
          A GradeMark Studios holiday production
        </div>
      </div>
    `;

    $("#sf-start").addEventListener("click", renderScene);
  }

  function renderScene() {
    clearInterval(state.timer);

    state.seconds = 40;
    state.locked = false;

    const scene = scenes[state.scene];

    mount().innerHTML = `
      <div class="sf-wrap">
        <div class="sf-card">

          <div class="sf-scene">
            ${scene.chapter}
            <span class="sf-timer" id="sf-timer">40s</span>
          </div>

          <div class="sf-meter">
            <span style="width:${(state.scene / scenes.length) * 100}%"></span>
          </div>

          <div class="sf-kicker">${scene.setting}</div>

          <h1 class="sf-title">${scene.title}</h1>

          <p>${scene.intro}</p>

          <div class="sf-dialogue">
            ${scene.dialogue.map(([speaker,line]) => `
              <div class="sf-line">
                <div class="sf-speaker">${speaker}</div>
                ${line}
              </div>
            `).join("")}
          </div>

          <div class="sf-question">
            ${scene.question}
          </div>

          <div id="sf-choices">
            ${scene.choices.map((choice,i) => `
              <button class="sf-choice" data-choice="${i}">
                ${String.fromCharCode(65+i)}. ${choice.text}
              </button>
            `).join("")}
          </div>

          <p class="sf-sub">
            CX focus: ${scene.category}
          </p>

        </div>

        <div class="sf-footer">
          Snowflake Falls · Scene ${state.scene+1} of ${scenes.length}
        </div>
      </div>
    `;

    document.querySelectorAll(".sf-choice").forEach(button => {
      button.addEventListener("click", () => {
        choose(Number(button.dataset.choice));
      });
    });

    state.timer = setInterval(() => {
      state.seconds--;

      const timer = $("#sf-timer");

      if (timer) {
        timer.textContent = `${state.seconds}s`;
      }

      if (state.seconds <= 0) {
        clearInterval(state.timer);

        if (!state.locked) {
          choose(-1);
        }
      }
    }, 1000);
  }

  function choose(index) {
    if (state.locked) return;

    state.locked = true;
    clearInterval(state.timer);

    const scene = scenes[state.scene];
    const choice = index < 0 ? null : scene.choices[index];

    document.querySelectorAll(".sf-choice").forEach((button,i) => {
      button.disabled = true;

      if (i === index) {
        button.classList.add("sf-selected");
      }
    });

    if (choice) {
      categories.forEach(category => {
        state.scores[category] += choice.scores[category] || 0;
      });

      state.total += Object.values(choice.scores)
        .reduce((sum,value) => sum + value,0);
    }

    state.answers.push({
      scene: scene.title,
      category: scene.category,
      choice: choice
        ? choice.text
        : "Time expired — no decision selected",
      feedback: choice
        ? choice.feedback
        : "The clock ran out. Timely decisions and clear ownership matter.",
      consequence: choice
        ? choice.consequence
        : "The team moves forward without a clear decision."
    });

    const feedback = choice
      ? choice.feedback
      : "The clock ran out. Timely decisions and clear ownership matter.";

    const consequence = choice
      ? choice.consequence
      : "The team moves forward without a clear decision.";

    const box = document.createElement("div");

    box.className = "sf-feedback";

    box.innerHTML = `
      <strong>${choice ? "Your decision" : "Time's up!"}</strong>

      <p>${feedback}</p>

      <strong>What happens next:</strong>

      <p>${consequence}</p>

      <div class="sf-twist">
        <strong>THE PLOT THICKENS…</strong>
        <br>
        ${scene.twist}
      </div>

      <button class="sf-btn" id="sf-next">
        ${state.scene === scenes.length-1
          ? "See the final score"
          : "Continue the story"}
      </button>
    `;

    $("#sf-choices").after(box);

    $("#sf-next").addEventListener("click", () => {
      state.scene++;

      if (state.scene < scenes.length) {
        renderScene();
      } else {
        renderResults();
      }
    });
  }

  function renderResults() {
    const maxTotal = 80;
    const total = state.total;
    const percentage = Math.round((total / maxTotal) * 100);

    let rating;

    if (percentage >= 85) {
      rating = "The Holiday CX Hero";
    } else if (percentage >= 65) {
      rating = "The Trusted Partner";
    } else if (percentage >= 40) {
      rating = "The Goodwill Builder";
    } else {
      rating = "The Snow-Day Rookie";
    }

    const summaries = {
      Implementation:
        "Align on outcomes, scope, owners, data quality, and launch readiness.",

      Training:
        "Enable each role with relevant practice, reinforcement, and readiness checks.",

      Support:
        "Respond with empathy, verified information, ownership, and predictable updates.",

      "Customer Success":
        "Measure customer outcomes, listen to feedback, and plan the next chapter together."
    };

    const scoreCards = categories.map(category => `
      <div class="sf-score">

        <span>${category}</span>

        <strong>${state.scores[category]} pts</strong>

        <small>${summaries[category]}</small>

      </div>
    `).join("");

    const recap = state.answers.map((answer,i) => `
      <p>
        <strong>${i+1}. ${answer.scene}</strong>
        <br>
        <span class="sf-sub">${answer.choice}</span>
      </p>
    `).join("");

    mount().innerHTML = `
      <div class="sf-wrap">
        <div class="sf-card">

          <div class="sf-kicker">
            GradeMark Studios · The End
          </div>

          <h1 class="sf-title">
            A Snowflake Falls Christmas
          </h1>

          <p class="sf-sub">
            Your executive team's customer experience report
          </p>

          <div class="sf-scoregrid">

            <div class="sf-score">
              <span>Overall score</span>

              <strong>${total} / ${maxTotal}</strong>

              <small>${percentage}% · ${rating}</small>
            </div>

            ${scoreCards}

          </div>

          <h2>What your team demonstrated</h2>

          <p>
            ${rating}. The strongest customer experiences
            happen when implementation, training, support,
            and customer success work as one continuous journey —
            not as separate departments or disconnected moments.
          </p>

          <h2>Your movie recap</h2>

          ${recap}

          <div class="sf-dialogue">

            <div class="sf-speaker">
              A FINAL LETTER FROM MAYOR ELEANOR PRUITT
            </div>

            <p>Dear friends,</p>

            <p>
              They say the magic of Snowflake Falls isn't
              in the snow, the lights, or even the cocoa.
              It's in the people who show up for one another
              when things get complicated.
            </p>

            <p>
              You helped our schools move from a big idea
              to a thoughtful launch, gave our staff the
              confidence to learn, stood beside our families
              when they needed help, and reminded us that
              success is measured by the difference we make
              long after launch day.
            </p>

            <p>
              On behalf of our entire town, thank you for
              making this season brighter.
            </p>

            <p>
              May your projects be well-scoped, your data
              be clean, your training be practical, and
              your support queue be merry and very, very quiet.
            </p>

            <p>
              With gratitude and holiday cheer,<br>
              <strong>Mayor Eleanor Pruitt</strong>
            </p>

          </div>

          <button class="sf-btn" id="sf-replay">
            Play again
          </button>

        </div>

        <div class="sf-footer">
          The End · Or perhaps just the beginning…
        </div>
      </div>
    `;

    $("#sf-replay").addEventListener("click", () => {
      state.scene = 0;
      state.total = 0;
      state.answers = [];

      state.scores = Object.fromEntries(
        categories.map(category => [category,0])
      );

      renderIntro();
    });
  }

  function init() {
    addStyles();
    renderIntro();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded",init);
  } else {
    init();
  }

})();
