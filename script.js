/* ============================================================
   SNOWFLAKE FALLS
   A GradeMark Studios Christmas CX Experience
   Complete replacement for script.js
   ============================================================ */

(() => {
  "use strict";

  // ------------------------------------------------------------
  // 1. GAME SETTINGS
  // ------------------------------------------------------------

  const GAME_TITLE = "Snowflake Falls";
  const DECISION_TIME = 40;
  const MAX_SCORE = 80;

  const categories = [
    "Implementation",
    "Training",
    "Support",
    "Customer Success"
  ];

  const categoryIcons = ["🚀", "🎓", "🎧", "❤️"];

  let playerName = "";
  let currentScene = 0;
  let scores = [0, 0, 0, 0];
  let answers = [];
  let timerInterval = null;
  let timeLeft = DECISION_TIME;
  let locked = false;

  // ------------------------------------------------------------
  // 2. THE OPENING LETTER
  // ------------------------------------------------------------

  const openingLetter = {
    title: "The Letter from Snowflake Falls",
    paragraphs: [
      "Ten years in the city. A corner office with a view of other corner offices. Forty-hour days, and a phone that buzzes even in the shower.",

      "Then the letter arrived. Snowflake Falls, population 1,812, was in trouble. Its Christmas Festival was one week away, its customer service had collapsed into a snowball fight, and unless things changed by Christmas Eve, Mayor Eleanor Pruitt would have to cancel the festival for good. She had one request: come home.",

      "So you packed two suits, four cashmere sweaters, and a laptop you swore you'd only open once. The highway was closed, the GPS said \"recalculating\" eleven times, and the last mile ended at a snowbank with a sign: Welcome to Snowflake Falls."
    ],
    prompt: "Now, Executive. What's your name?"
  };

  // ------------------------------------------------------------
  // 3. THE FIVE SCENES
  // Each choice awards points across the four CX disciplines.
  // Every choice is worth 16 possible points.
  // ------------------------------------------------------------

  const scenes = [

    // SCENE 1
    {
      title: "The Festival Is in Trouble",
      subtitle: "Implementation",
      location: "The Snowflake Falls Town Square",
      image: "🎄",
      setup:
        "The Christmas Festival is one week away. The lights are half-hung, the vendor booths have no assigned spots, and the tree-lighting schedule went out to everyone except the choir.",
      dialogue: [
        {
          character: "MAYOR ELEANOR PRUITT",
          text: "Oh, thank goodness you're here. The festival is one week away, and half the vendors don't know where their booths are."
        },
        {
          character: "MRS. CLAUS",
          text: "And the choir hasn't been told when to sing. I've had three people ask me whether the tree is still coming."
        },
        {
          character: "MAYOR ELEANOR PRUITT",
          text: "So, Executive... what's our first move?"
        }
      ],
      question: "The festival plan is scattered across emails, clipboards, and a whiteboard nobody can read. How do you get it back on track?",
      choices: [
        {
          title: "Call a festival planning kickoff",
          description: "Bring vendors, volunteers, and town leaders together. Confirm the schedule, roles, booth assignments, and what 'festival ready' means.",
          scores: [7, 3, 2, 4],
          feedback: "A clear plan gives everyone the same picture. A festival is built by a team that knows its job, not by a flurry of emails.",
          outcome: "The bakery owner finally finds her booth number. For the first time in weeks, everyone is looking at the same schedule."
        },
        {
          title: "Tell the volunteers to hurry",
          description: "The festival is in a week. Ask everyone to work extra hours and get the setup finished.",
          scores: [3, 1, 5, 2],
          feedback: "Urgency helps, but rushing without a plan creates confusion. You'll get activity, but not yet a festival.",
          outcome: "The volunteers work late and hang the lights in the wrong color. Nobody has told them which way the tree faces."
        },
        {
          title: "Start with the families who will attend",
          description: "Ask what families need on festival day: a clear map, easy parking, and something to do while they wait.",
          scores: [4, 4, 3, 4],
          feedback: "Starting with the guest experience keeps the festival focused on what families actually need.",
          outcome: "A little girl asks where the cocoa is. Everyone realizes the festival map is missing."
        },
        {
          title: "Send an update email to the town",
          description: "Summarize the current situation, list outstanding tasks, and ask each vendor to reply with an update by tomorrow.",
          scores: [5, 2, 3, 5],
          feedback: "Communication matters, but an email alone can't resolve competing plans. The people who run the booths need to be in the room.",
          outcome: "Your inbox receives 47 replies. One includes a recipe for gingerbread cookies. It is unclear why."
        }
      ]
    },

    // SCENE 2
    {
      title: "The Night Before the Festival",
      subtitle: "Implementation & Customer Success",
      location: "The Cozy Mug Bakery",
      image: "🎠",
      setup:
        "It's the night before the festival opens. Snow is starting to fall, the carousel is decorated, and the online ticket system has sold far more carousel rides than the carousel can hold.",
      dialogue: [
        {
          character: "CLAIRE HOLLIS",
          text: "I don't want to alarm anyone, but we've sold 600 carousel tickets. The carousel seats 240, and the horses are getting nervous."
        },
        {
          character: "MAYOR ELEANOR PRUITT",
          text: "Can we still open tomorrow? The newspaper has already announced it."
        },
        {
          character: "CLAIRE HOLLIS",
          text: "Well, technically, we can open. Whether the carousel survives the crowd is a different question."
        }
      ],
      question: "Tickets are oversold and the festival opens tomorrow morning. What is your move?",
      choices: [
        {
          title: "Pause and set the opening plan",
          description: "Identify the ticket problem, set a timed-entry plan for the carousel, and give the mayor a realistic recommendation.",
          scores: [7, 2, 3, 4],
          feedback: "Excellent judgment. Protecting families from a chaotic opening is part of the job. A clear plan for the carousel line is the best gift you can give them.",
          outcome: "The mayor is disappointed, but appreciates the honesty. The team agrees on a timed-entry plan for the carousel."
        },
        {
          title: "Open anyway and sort it out on the day",
          description: "The newspaper has already announced it. Open the gates and handle problems as they come up.",
          scores: [2, 1, 6, 2],
          feedback: "This creates unnecessary risk. Volunteers should not become the emergency plan for an avoidable overbooking.",
          outcome: "The gates open. The newspaper arrives. So do 83 families asking where to stand in line."
        },
        {
          title: "Create a festival recovery team",
          description: "Bring the right people together to fix the ticket problem, prioritize the work, and keep families informed.",
          scores: [6, 3, 4, 4],
          feedback: "A practical response. You bring the right people together, prioritize the work, and keep families informed.",
          outcome: "The team works through the night. Someone bakes gingerbread cookies shaped like carousel horses. Morale improves."
        },
        {
          title: "Ask the ticket vendor to fix it",
          description: "Explain that the vendor's system caused the overbooking and ask them to correct the tickets before the gates open.",
          scores: [4, 2, 3, 5],
          feedback: "Vendors matter, but shifting blame can damage trust. Collaborative problem-solving gets families through the gate.",
          outcome: "The vendor sends back a spreadsheet named FINAL_FINAL_ACTUAL_FINAL_v2.xlsx."
        }
      ]
    },

    // SCENE 3
    {
      title: "Training the Festival Volunteers",
      subtitle: "Training",
      location: "The Snowflake Falls Community Hall",
      image: "🍪",
      setup:
        "Forty volunteers have signed up to run the cocoa stand, the ticket booth, and the reindeer petting pen. Most have never worked a festival before, and someone has accidentally projected a photo of a cat onto the screen.",
      dialogue: [
        {
          character: "EMILY EVERGREEN",
          text: "I've prepared a 94-slide guide covering every booth, every schedule, and every cocoa recipe. We should be done in about four hours."
        },
        {
          character: "MRS. CLAUS",
          text: "Four hours? I have a choir that needs rehearsal and a reindeer with a scheduling conflict."
        },
        {
          character: "EMILY EVERGREEN",
          text: "Well, the guide is already printed."
        }
      ],
      question: "The volunteers need to be ready to work the festival tomorrow. How do you prepare them?",
      choices: [
        {
          title: "Teach each booth's real tasks first",
          description: "Cover the most common jobs first: pouring cocoa, taking tickets, and guiding families. Let volunteers practice, and give them simple cards to keep at their booth.",
          scores: [2, 8, 2, 4],
          feedback: "Exactly right. Volunteers need to know how to run their booth, not every detail of the festival.",
          outcome: "Volunteers practice pouring cocoa and taking tickets. Mrs. Claus successfully sells her first cookie to a reindeer."
        },
        {
          title: "Deliver the full 94-slide guide",
          description: "Cover every booth, schedule, and recipe so volunteers understand the whole festival before they start.",
          scores: [2, 4, 2, 2],
          feedback: "Completeness is not the same as readiness. Too much information at once overwhelms volunteers.",
          outcome: "Slide 47 appears. A volunteer quietly sneaks a peek at a vacation brochure."
        },
        {
          title: "Offer shift leads and on-site help",
          description: "Assign a shift lead to each booth and schedule short practice sessions so volunteers have someone to ask on festival day.",
          scores: [2, 6, 5, 4],
          feedback: "A strong support model. Someone to ask on the day keeps volunteers confident when real questions come up.",
          outcome: "The volunteers appreciate having someone to call. One asks if you can also fix the copy machine."
        },
        {
          title: "Record a how-to video",
          description: "Create a short video of each booth's tasks so volunteers can watch it when it fits their schedule.",
          scores: [2, 5, 2, 3],
          feedback: "On-demand learning helps, but a recording alone doesn't guarantee volunteers will be ready on the day.",
          outcome: "The video gets 312 views. Nobody is entirely sure whether anyone watched the whole thing."
        }
      ]
    },

    // SCENE 4
    {
      title: "The Christmas Eve Crisis",
      subtitle: "Support",
      location: "The Snowflake Falls Festival Info Tent",
      image: "🎫",
      setup:
        "It's Christmas Eve. The tree lighting begins in two hours. Then the ticket scanner at the main gate freezes. Families are stuck in the snow, and the mayor is holding a letter that reads: THE FESTIVAL MAY HAVE TO BE CANCELED.",
      dialogue: [
        {
          character: "SAM SNOW",
          text: "We're flooded. The gate scanners aren't working, the map is down, and I have 29 open messages. Someone just sent us a fax."
        },
        {
          character: "MAYOR ELEANOR PRUITT",
          text: "The festival cannot be canceled. Not again. What are we going to do?"
        },
        {
          character: "SAM SNOW",
          text: "I can handle the messages, but I need someone to help prioritize and communicate."
        }
      ],
      question: "Families are stuck at the gate on Christmas Eve. What do you do?",
      choices: [
        {
          title: "Activate incident management",
          description: "Assess the impact, assign an incident lead, prioritize the gate problem, communicate updates, and coordinate the fix.",
          scores: [3, 2, 8, 3],
          feedback: "This is the right response. A coordinated plan keeps families informed and helps the team focus on fixing the gate first.",
          outcome: "The team finds the problem: one scanner was set to the wrong date. The gate reopens, and families cheer."
        },
        {
          title: "Help families in the order they arrived",
          description: "Treat every family equally and help them in the order they reached the gate.",
          scores: [2, 2, 5, 2],
          feedback: "Serving people in order sounds fair, but a jammed gate needs fixing first, not a longer line of people waiting to get in.",
          outcome: "The team helps 40 families at the front, while 300 more still can't get through the gate."
        },
        {
          title: "Send a message to every family",
          description: "Acknowledge the problem, explain what is known, share the next update time, and tell families where to wait for cocoa.",
          scores: [2, 2, 6, 6],
          feedback: "Great communication. Families who know what's happening are patient. Pair it with the fix so the update stays true.",
          outcome: "Families read the update and head to the Cozy Mug Bakery for cocoa while they wait. The line stops feeling like a line."
        },
        {
          title: "Ask the volunteers to stay late",
          description: "Keep everyone on duty until the gate and every family are taken care of.",
          scores: [2, 1, 5, 2],
          feedback: "Effort matters, but without a plan, tired volunteers only add to the chaos.",
          outcome: "Everyone stays late. The reindeer are now waiting outside the info tent."
        }
      ]
    },

    // SCENE 5
    {
      title: "The Tree Lighting",
      subtitle: "Customer Success",
      location: "The Snowflake Falls Town Square",
      image: "❄️",
      setup:
        "The gate is open and the tree lighting is underway. Children are skating, the choir is singing, and then, right on cue, the first snowflake falls on the tree. But there is one final conversation.",
      dialogue: [
        {
          character: "MAYOR ELEANOR PRUITT",
          text: "You've done something wonderful here. But I don't want this to be a one-night miracle. I want families to come back next year, and the year after that."
        },
        {
          character: "CLAIRE HOLLIS",
          text: "The festival is working. But did families have fun? Did the volunteers enjoy it? Will they want to do it again?"
        },
        {
          character: "MAYOR ELEANOR PRUITT",
          text: "So, Executive. What's the plan for keeping the Snowflake Falls Christmas magic alive?"
        }
      ],
      question: "The festival is a success tonight. How do you make sure it becomes a tradition?",
      choices: [
        {
          title: "Build a plan for next year's festival",
          description: "Set goals, gather feedback from families and volunteers, schedule a review, and start planning next year's festival now.",
          scores: [3, 3, 3, 7],
          feedback: "That's customer success. You're looking beyond tonight, with goals, feedback, and a plan families will want to come back to.",
          outcome: "The mayor agrees to a yearly review, and Mrs. Claus asks if next year's festival can include a reindeer wellness booth."
        },
        {
          title: "Wait for families to ask what's next",
          description: "The festival was a success. Let families reach out if they want to know about next year.",
          scores: [1, 1, 3, 2],
          feedback: "Responding to requests matters, but a tradition needs someone planning the next one. Silence doesn't mean families loved it.",
          outcome: "The town goes quiet until spring. You later hear half the families weren't sure the festival would happen again."
        },
        {
          title: "Schedule a debrief with the town council",
          description: "Review attendance, feedback, and what worked, with the council that supports the festival.",
          scores: [2, 2, 3, 6],
          feedback: "A good step toward a lasting partnership. Focus on families' experience, not just attendance numbers.",
          outcome: "The council brings a list of ideas for next year's festival. You realize this tradition is just getting started."
        },
        {
          title: "Add more booths and rides",
          description: "Expand the festival with more attractions so there is even more to do next year.",
          scores: [2, 3, 2, 4],
          feedback: "More attractions can bring in crowds, but they should match what families actually enjoyed. Growth without purpose isn't success.",
          outcome: "The new booths are popular. Mrs. Claus asks if one of them can gift-wrap presents for the reindeer."
        }
      ]
    }
  ];


  // ------------------------------------------------------------
  // 4. FIND THE GAME CONTAINER
  // ------------------------------------------------------------

  let app = document.querySelector(
    "#game, #game-container, #app, main"
  );

  if (!app) {
    app = document.createElement("div");
    app.id = "snowflake-falls-game";
    document.body.appendChild(app);
  }

  app.innerHTML = "";
  app.classList.add("snowflake-game");

  // ------------------------------------------------------------
  // 5. ADD THE GAME STYLES
  // ------------------------------------------------------------

  const style = document.createElement("style");
  style.id = "snowflake-game-styles";

  style.textContent = `
    .snowflake-game {
      font-family: Georgia, 'Times New Roman', serif;
      color: #243447;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      box-sizing: border-box;
    }

    .snowflake-game * {
      box-sizing: border-box;
    }

    .sf-screen {
      background: #fffdf9;
      border: 1px solid #e8e1d7;
      border-radius: 18px;
      padding: 36px;
      box-shadow: 0 12px 35px rgba(24, 47, 66, .10);
      text-align: center;
      overflow: hidden;
    }

    .sf-brand {
      color: #a63d40;
      font-family: Arial, sans-serif;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    .sf-title {
      color: #173b50;
      font-size: clamp(38px, 7vw, 62px);
      line-height: 1.05;
      margin: 8px 0 12px;
    }

    .sf-subtitle {
      color: #a63d40;
      font-size: 18px;
      font-style: italic;
      margin-bottom: 26px;
    }

    .sf-snow {
      font-size: 34px;
      letter-spacing: 12px;
      margin: 10px 0 22px;
    }

    .sf-letter {
      background: #fffaf0;
      border: 1px solid #e8d9bb;
      border-radius: 10px;
      padding: 28px;
      margin: 25px auto;
      max-width: 720px;
      text-align: left;
      box-shadow: 0 5px 15px rgba(0,0,0,.04);
    }

    .sf-letter h2 {
      color: #9d393e;
      text-align: center;
      font-size: 27px;
      margin: 0 0 24px;
    }

    .sf-letter p {
      font-size: 17px;
      line-height: 1.8;
      margin: 0 0 18px;
    }

    .sf-input {
      width: 100%;
      max-width: 390px;
      display: block;
      margin: 14px auto 18px;
      padding: 15px;
      border: 1px solid #c9d3d8;
      border-radius: 8px;
      font-size: 17px;
      text-align: center;
      font-family: Arial, sans-serif;
    }

    .sf-button {
      background: #a63d40;
      color: white;
      border: none;
      padding: 15px 27px;
      border-radius: 7px;
      font-size: 15px;
      font-weight: bold;
      letter-spacing: .5px;
      cursor: pointer;
      transition: .2s;
      font-family: Arial, sans-serif;
      margin: 7px;
    }

    .sf-button:hover {
      background: #7e292e;
      transform: translateY(-1px);
    }

    .sf-button.secondary {
      background: #244c61;
    }

    .sf-button.secondary:hover {
      background: #173b50;
    }

    .sf-scene-header {
      background: #173b50;
      color: white;
      padding: 26px;
      border-radius: 12px;
      margin-bottom: 22px;
    }

    .sf-scene-number {
      font-family: Arial, sans-serif;
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      opacity: .8;
    }

    .sf-scene-title {
      font-size: 35px;
      margin: 9px 0;
      color: white;
    }

    .sf-location {
      color: #f0d9a9;
      font-size: 14px;
      font-style: italic;
    }

    .sf-scene-icon {
      font-size: 44px;
      margin: 15px 0;
    }

    .sf-story {
      font-size: 17px;
      line-height: 1.75;
      text-align: left;
      margin: 22px 0;
    }

    .sf-dialogue {
      text-align: left;
      background: #f4f7f8;
      border-left: 4px solid #a63d40;
      padding: 17px 20px;
      margin: 13px 0;
      border-radius: 5px;
    }

    .sf-character {
      font-family: Arial, sans-serif;
      color: #a63d40;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.5px;
      margin-bottom: 7px;
    }

    .sf-dialogue p {
      font-size: 16px;
      line-height: 1.6;
      margin: 0;
    }

    .sf-question {
      color: #173b50;
      font-size: 23px;
      line-height: 1.4;
      margin: 28px 0 20px;
    }

    .sf-timer-wrap {
      background: #e8edf0;
      height: 9px;
      border-radius: 20px;
      overflow: hidden;
      margin: 12px 0 8px;
    }

    .sf-timer-bar {
      background: #a63d40;
      height: 100%;
      width: 100%;
      transition: width 1s linear;
    }

    .sf-timer-label {
      font-family: Arial, sans-serif;
      color: #657681;
      font-size: 12px;
      text-align: right;
    }

    .sf-choices {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 13px;
      margin: 20px 0;
    }

    .sf-choice {
      background: white;
      border: 1px solid #d6dfe3;
      border-radius: 10px;
      padding: 18px;
      text-align: left;
      cursor: pointer;
      transition: .2s;
      color: #243447;
      font-family: inherit;
    }

    .sf-choice:hover {
      border-color: #a63d40;
      background: #fff8f5;
      transform: translateY(-2px);
    }

    .sf-choice:disabled {
      cursor: default;
      opacity: .75;
    }

    .sf-choice strong {
      display: block;
      color: #173b50;
      font-size: 16px;
      margin-bottom: 9px;
    }

    .sf-choice span {
      font-size: 14px;
      line-height: 1.5;
      color: #5c6b73;
    }

    .sf-feedback {
      background: #f1f7f2;
      border: 1px solid #c8dfcd;
      border-radius: 10px;
      padding: 23px;
      margin: 20px 0;
      text-align: left;
    }

    .sf-feedback h3 {
      color: #315f3e;
      margin: 0 0 10px;
      font-size: 21px;
    }

    .sf-feedback p {
      font-size: 15px;
      line-height: 1.65;
    }

    .sf-score-strip {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin: 20px 0;
    }

    .sf-score-pill {
      background: #edf2f4;
      border-radius: 20px;
      padding: 9px 13px;
      font-family: Arial, sans-serif;
      font-size: 12px;
    }

    .sf-result-total {
      font-size: 65px;
      color: #a63d40;
      font-weight: bold;
      margin: 10px 0;
    }

    .sf-result-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin: 25px 0;
    }

    .sf-result-card {
      background: #f1f5f6;
      border-radius: 9px;
      padding: 18px;
    }

    .sf-result-card .icon {
      font-size: 25px;
    }

    .sf-result-card h4 {
      color: #173b50;
      margin: 8px 0;
      font-size: 15px;
    }

    .sf-result-card strong {
      font-size: 26px;
      color: #a63d40;
    }

    .sf-recap {
      text-align: left;
      margin: 25px 0;
    }

    .sf-recap-item {
      border-bottom: 1px solid #e4e8e9;
      padding: 13px 0;
      font-size: 14px;
      line-height: 1.5;
    }

    .sf-footer {
      color: #8b969b;
      font-family: Arial, sans-serif;
      font-size: 11px;
      letter-spacing: 1px;
      margin-top: 30px;
    }

    .sf-poster {
      padding: 28px;
    }

    .sf-kicker {
      color: #a63d40;
      font-family: Arial, sans-serif;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 14px;
    }

    .sf-cover {
      display: block;
      width: 100%;
      border-radius: 12px;
      border: 6px solid #c9a24a;
      box-shadow: 0 12px 30px rgba(0, 0, 0, .25);
      margin-bottom: 22px;
    }

    .sf-poster-title {
      color: #173b50;
      font-size: clamp(32px, 6vw, 52px);
      line-height: 1.1;
      margin: 6px 0 12px;
    }

    .sf-billing {
      font-family: Arial, sans-serif;
      font-size: 13px;
      letter-spacing: 1px;
      color: #657681;
      margin: 0 0 22px;
    }

    @media (max-width: 650px) {
      .sf-screen {
        padding: 20px;
      }

      .sf-choices,
      .sf-result-grid {
        grid-template-columns: 1fr;
      }

      .sf-letter {
        padding: 20px;
      }

      .sf-scene-title {
        font-size: 28px;
      }
    }
  `;

  document.head.appendChild(style);

  // ------------------------------------------------------------
  // 6. HELPER FUNCTIONS
  // ------------------------------------------------------------

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char]));
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function renderFooter() {
    return `
      <div class="sf-footer">
        A GRADEMARK STUDIOS CHRISTMAS EXPERIENCE
        <br>SNOWFLAKE FALLS · WHERE EVERY CUSTOMER MATTERS
      </div>
    `;
  }

  // ------------------------------------------------------------
  // 7. OPENING SCREEN
  // ------------------------------------------------------------

  // Title screen: cover photo, title, and Start the Movie button.
  function renderPoster() {
    stopTimer();

    app.innerHTML = `
      <div class="sf-screen sf-poster">
        <div class="sf-kicker">A Holiday Romance in Five Challenges</div>

        <img class="sf-cover" src="cover.jpg" alt="A smiling couple laughing together as snow falls around them in a pine forest.">

        <h1 class="sf-poster-title">Mistletoe, Main Street &amp; the Customer Journey</h1>
        <div class="sf-subtitle">One town. Five challenges. One Christmas miracle.</div>
        <div class="sf-billing">Starring The Executive Team &nbsp;·&nbsp; Snowflake Falls</div>

        <button class="sf-button" id="sf-start-movie">Start the Movie</button>

        ${renderFooter()}
      </div>
    `;

    document.getElementById("sf-start-movie").addEventListener("click", renderOpening);
  }

  function renderOpening() {
    stopTimer();

    app.innerHTML = `
      <div class="sf-screen">
        <div class="sf-brand">GradeMark Studios Presents</div>
        <div class="sf-snow">❄️ ✨ ❄️</div>
        <h1 class="sf-title">Snowflake Falls</h1>
        <div class="sf-subtitle">
          A Christmas story about coming home... and saving the customer experience.
        </div>

        <div class="sf-letter">
          <h2>${openingLetter.title}</h2>
          ${openingLetter.paragraphs.map(p => `<p>${escapeHTML(p)}</p>`).join("")}
          <p style="text-align:center;font-size:25px;margin-top:25px;">❄️</p>
        </div>

        <h3 style="color:#173b50;font-size:22px;">
          ${openingLetter.prompt}
        </h3>

        <input
          class="sf-input"
          id="sf-player-name"
          type="text"
          maxlength="35"
          placeholder="Enter your name..."
          autocomplete="given-name"
        >

        <button class="sf-button" id="sf-start">
          Come Home to Snowflake Falls →
        </button>

        <div style="color:#78878e;font-size:13px;margin-top:15px;">
          Five scenes. Five decisions. One very important Christmas.
        </div>

        ${renderFooter()}
      </div>
    `;

    const input = document.getElementById("sf-player-name");
    const button = document.getElementById("sf-start");

    button.addEventListener("click", () => {
      const enteredName = input.value.trim();

      if (!enteredName) {
        input.focus();
        input.placeholder = "Your name is required, Executive!";
        return;
      }

      playerName = enteredName;
      currentScene = 0;
      scores = [0, 0, 0, 0];
      answers = [];

      renderScene();
    });

    input.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        button.click();
      }
    });

    input.focus();
  }

  // ------------------------------------------------------------
  // 8. SCENE SCREEN
  // ------------------------------------------------------------

  function renderScene() {
    stopTimer();
    locked = false;
    timeLeft = DECISION_TIME;

    const scene = scenes[currentScene];

    app.innerHTML = `
      <div class="sf-screen">

        <div class="sf-brand">GradeMark Studios Presents</div>

        <div class="sf-scene-header">
          <div class="sf-scene-number">
            Chapter ${currentScene + 1} of ${scenes.length}
          </div>
          <h2 class="sf-scene-title">${scene.title}</h2>
          <div class="sf-location">${scene.location}</div>
        </div>

        <div class="sf-scene-icon">${scene.image}</div>

        <div style="font-family:Arial,sans-serif;color:#a63d40;font-size:11px;font-weight:bold;letter-spacing:2px;">
          ${scene.subtitle.toUpperCase()}
        </div>

        <div class="sf-story">
          ${scene.setup}
        </div>

        ${scene.dialogue.map(line => `
          <div class="sf-dialogue">
            <div class="sf-character">${line.character}</div>
            <p>${line.text}</p>
          </div>
        `).join("")}

        <h3 class="sf-question">${scene.question}</h3>

        <div class="sf-timer-label">
          Time remaining: <strong id="sf-time">${timeLeft}</strong> seconds
        </div>

        <div class="sf-timer-wrap">
          <div class="sf-timer-bar" id="sf-timer-bar"></div>
        </div>

        <div class="sf-choices" id="sf-choices">
          ${scene.choices.map((choice, index) => `
            <button class="sf-choice" data-choice="${index}">
              <strong>${String.fromCharCode(65 + index)}. ${choice.title}</strong>
              <span>${choice.description}</span>
            </button>
          `).join("")}
        </div>

        <div id="sf-feedback-area"></div>

        ${renderFooter()}
      </div>
    `;

    document.querySelectorAll(".sf-choice").forEach(button => {
      button.addEventListener("click", () => {
        chooseOption(Number(button.dataset.choice), false);
      });
    });

    startTimer();
  }

  // ------------------------------------------------------------
  // 9. TIMER
  // ------------------------------------------------------------

  function startTimer() {
    stopTimer();

    timerInterval = setInterval(() => {
      if (locked) {
        stopTimer();
        return;
      }

      timeLeft--;

      const timeDisplay = document.getElementById("sf-time");
      const timerBar = document.getElementById("sf-timer-bar");

      if (timeDisplay) {
        timeDisplay.textContent = timeLeft;
      }

      if (timerBar) {
        timerBar.style.width =
          Math.max(0, (timeLeft / DECISION_TIME) * 100) + "%";
      }

      if (timeLeft <= 0) {
        stopTimer();
        chooseOption(0, true);
      }
    }, 1000);
  }

  // ------------------------------------------------------------
  // 10. PROCESS THE PLAYER'S CHOICE
  // ------------------------------------------------------------

  function chooseOption(choiceIndex, timedOut) {
    if (locked) return;

    locked = true;
    stopTimer();

    const scene = scenes[currentScene];
    const choice = scene.choices[choiceIndex];

    if (!timedOut) {
      choice.scores.forEach((points, index) => {
        scores[index] += points;
      });
    }

    answers.push({
      scene: scene.title,
      choice: timedOut ? "No decision (time expired)" : choice.title,
      feedback: choice.feedback,
      outcome: choice.outcome,
      timedOut
    });

    document.querySelectorAll(".sf-choice").forEach(button => {
      button.disabled = true;
    });

    const feedbackArea = document.getElementById("sf-feedback-area");

    feedbackArea.innerHTML = `
      <div class="sf-feedback">
        <h3>${timedOut ? "⏰ Time's up!" : "✨ Your decision is in!"}</h3>

        <p>
          <strong>Your move:</strong> ${timedOut ? "No decision (time expired)" : choice.title}
        </p>

        <p>${timedOut ? "The clock ran out before a decision was made, so no points were earned for this scene." : choice.feedback}</p>

        <p>
          <strong>And then...</strong> ${timedOut ? "The snow kept falling, but the moment had passed." : choice.outcome}
        </p>

        <div class="sf-score-strip">
          ${categories.map((category, index) => `
            <div class="sf-score-pill">
              ${categoryIcons[index]} ${category}: +${timedOut ? 0 : choice.scores[index]}
            </div>
          `).join("")}
        </div>

        <div style="text-align:center;margin-top:20px;">
          <button class="sf-button" id="sf-continue">
            ${currentScene === scenes.length - 1
              ? "See How Our Story Ends →"
              : "Continue the Story →"}
          </button>
        </div>
      </div>
    `;

    document.getElementById("sf-continue").addEventListener("click", () => {
      currentScene++;

      if (currentScene < scenes.length) {
        renderScene();
      } else {
        renderResults();
      }
    });
  }

  // ------------------------------------------------------------
  // 11. FINAL RESULTS
  // ------------------------------------------------------------

  function renderResults() {
    stopTimer();

    const totalScore = scores.reduce((sum, value) => sum + value, 0);
    const percentage = Math.round((totalScore / MAX_SCORE) * 100);

    let resultTitle;
    let resultMessage;

    if (totalScore >= 72) {
      resultTitle = "The Christmas Miracle";
      resultMessage =
        "Snowflake Falls is saved! You've brought the town together through thoughtful decisions, strong customer experiences, and a little Christmas magic. Mayor Pruitt is already asking you to stay through next year.";
    } else if (totalScore >= 60) {
      resultTitle = "The Holiday Hero";
      resultMessage =
        "The festival is on! You've made some excellent decisions and helped the town find its footing. There are a few opportunities to make the customer experience even stronger, but Snowflake Falls has a reason to celebrate.";
    } else if (totalScore >= 45) {
      resultTitle = "A Christmas Comeback";
      resultMessage =
        "The town made it through Christmas, but there is work left to do. A few stronger connections across implementation, training, support, and customer success could make all the difference next time.";
    } else {
      resultTitle = "A Snowy Situation";
      resultMessage =
        "Well... it was a memorable Christmas. Snowflake Falls still needs a little help. The good news? Every great customer experience starts with learning, adapting, and trying again.";
    }

    app.innerHTML = `
      <div class="sf-screen">

        <div class="sf-brand">GradeMark Studios Presents</div>
        <div class="sf-snow">❄️ 🎄 ❄️</div>

        <h1 class="sf-title" style="font-size:42px;">
          The End... or a New Beginning?
        </h1>

        <div class="sf-subtitle">
          A Snowflake Falls Christmas Story
        </div>

        <div class="sf-letter">
          <h2>${resultTitle}</h2>

          <p>
            Dear ${escapeHTML(playerName)},
          </p>

          <p>${resultMessage}</p>

          <p>
            Thanks to you, the Snowflake Falls Christmas Festival is
            officially back on. The town square is glowing, the choir
            is singing, and the first snow has started falling on the tree.
          </p>

          <p>
            But more importantly, the town has learned something:
            a great customer experience doesn't happen in one department.
            It takes all of us.
          </p>

          <p style="text-align:right;margin-top:25px;">
            With gratitude and Christmas cheer,<br>
            <strong>Mayor Eleanor Pruitt</strong><br>
            Snowflake Falls
          </p>
        </div>

        <h2 style="color:#173b50;">Your Executive Scorecard</h2>

        <div class="sf-result-total">${totalScore}<span style="font-size:25px;"> / ${MAX_SCORE}</span></div>
        <div style="color:#a63d40;font-weight:bold;font-size:17px;">
          ${percentage}% CX Score
        </div>

        <div class="sf-result-grid">
          ${categories.map((category, index) => `
            <div class="sf-result-card">
              <div class="icon">${categoryIcons[index]}</div>
              <h4>${category}</h4>
              <strong>${scores[index]}</strong>
              <div style="font-size:11px;color:#77858b;">
                Points earned
              </div>
            </div>
          `).join("")}
        </div>

        <div class="sf-recap">
          <h3 style="color:#173b50;">Your Story, Scene by Scene</h3>

          ${answers.map((answer, index) => `
            <div class="sf-recap-item">
              <strong>Scene ${index + 1}: ${answer.scene}</strong><br>
              Your decision: ${answer.choice}
              ${answer.timedOut ? "<br><em>Time expired before a decision was made.</em>" : ""}
            </div>
          `).join("")}
        </div>

        <div class="sf-letter">
          <h2>A Little Christmas Reminder</h2>
          <p>
            Implementation gets customers started.
            Training helps them succeed.
            Support is there when things go wrong.
            Customer Success makes sure the relationship keeps growing.
          </p>
          <p>
            The magic happens when all four work together.
          </p>
          <p style="text-align:center;font-size:24px;">
            Merry Christmas from Snowflake Falls! 🎄
          </p>
        </div>

        <button class="sf-button" id="sf-replay">
          Play Again ↻
        </button>

        ${renderFooter()}
      </div>
    `;

    document.getElementById("sf-replay").addEventListener("click", () => {
      playerName = "";
      currentScene = 0;
      scores = [0, 0, 0, 0];
      answers = [];
      renderPoster();
    });
  }

  // ------------------------------------------------------------
  // 12. START THE GAME
  // ------------------------------------------------------------

  renderPoster();

})();
