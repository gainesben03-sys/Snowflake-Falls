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
      title: "The Big Kickoff",
      subtitle: "Implementation",
      location: "The Snowflake Falls Town Hall",
      image: "🎄",
      setup:
        "You arrive at Town Hall just as Mayor Eleanor Pruitt is trying to explain the town's new school information system to a room full of frustrated principals. The system is supposed to be ready before the Christmas Festival. It isn't.",
      dialogue: [
        {
          character: "MAYOR ELEANOR PRUITT",
          text: "Oh, thank goodness you're here! We have a situation. The school district is supposed to launch next week, but nobody seems to know what is happening. The superintendent says the project team has disappeared. The project team says the superintendent hasn't answered an email since October."
        },
        {
          character: "MRS. CLAUS",
          text: "And I haven't received a single student attendance report. How am I supposed to know who's been naughty or nice?"
        },
        {
          character: "MAYOR ELEANOR PRUITT",
          text: "So, Executive... what's our first move?"
        }
      ],
      question: "The implementation is behind schedule, stakeholders are frustrated, and nobody agrees on what is left to do. What do you do?",
      choices: [
        {
          title: "Call an emergency kickoff reset",
          description: "Bring the district and project team together. Reconfirm scope, ownership, milestones, risks, and the definition of go-live success.",
          scores: [7, 3, 2, 4],
          feedback: "A strong start. You establish shared expectations and give everyone a common plan. A project needs more than a calendar invite—it needs ownership.",
          outcome: "The superintendent finally puts down her peppermint mocha. For the first time in weeks, everyone is looking at the same plan."
        },
        {
          title: "Tell the team to work faster",
          description: "The deadline is the deadline. Ask everyone to put in extra hours and get the project across the finish line.",
          scores: [3, 1, 5, 2],
          feedback: "Urgency matters, but speed without clarity can create more problems. You may get activity, but you haven't solved the underlying confusion.",
          outcome: "The project team starts working late. Unfortunately, they're still not sure what they're working on."
        },
        {
          title: "Start with the end users",
          description: "Talk to school administrators and teachers. Understand what they need to do on day one and work backward from there.",
          scores: [4, 4, 3, 4],
          feedback: "A customer-centered approach. Understanding the actual user experience helps define what a successful implementation should look like.",
          outcome: "A teacher raises her hand. 'Honestly, I just need to take attendance without calling three people.' Everyone nods."
        },
        {
          title: "Send a project status email",
          description: "Summarize the current situation, list outstanding tasks, and ask each owner to reply with an update by tomorrow.",
          scores: [5, 2, 3, 5],
          feedback: "Documentation and accountability are helpful, but an email alone may not resolve competing expectations or create the alignment this project needs.",
          outcome: "Your inbox receives 47 replies. One includes a recipe for gingerbread cookies. It is unclear why."
        }
      ]
    },

    // SCENE 2
    {
      title: "The Night Before Go-Live",
      subtitle: "Implementation & Customer Success",
      location: "The Town's Very Small IT Office",
      image: "💻",
      setup:
        "It's the night before launch. Snow is falling, the town's Christmas lights are flickering, and the implementation team has discovered that the student data imported from the old system doesn't match the new system.",
      dialogue: [
        {
          character: "JACK FROST",
          text: "I don't want to alarm anyone, but we have 600 duplicate student records, three missing schools, and a spreadsheet called FINAL_FINAL_ACTUAL_FINAL.xlsx."
        },
        {
          character: "MAYOR ELEANOR PRUITT",
          text: "Can we still launch tomorrow? The superintendent has already invited the local newspaper."
        },
        {
          character: "JACK FROST",
          text: "Well, technically, we can turn it on. Whether it works is a different question."
        }
      ],
      question: "The launch is tomorrow. Data quality is questionable. What is your move?",
      choices: [
        {
          title: "Pause and establish launch criteria",
          description: "Identify critical data issues, define what must be fixed before launch, and communicate a realistic go/no-go recommendation.",
          scores: [7, 2, 3, 4],
          feedback: "Excellent judgment. A successful launch is not simply turning the system on. It means protecting the customer and making a responsible decision.",
          outcome: "The superintendent is disappointed, but appreciates the honesty. The team agrees on a controlled launch plan."
        },
        {
          title: "Launch anyway and fix things later",
          description: "The deadline is public. Turn on the system and resolve issues as they come in.",
          scores: [2, 1, 6, 2],
          feedback: "This creates unnecessary risk. Support can help resolve issues, but it should not become the emergency plan for an avoidable implementation failure.",
          outcome: "The system goes live. The newspaper arrives. So do 83 support tickets."
        },
        {
          title: "Create a focused recovery team",
          description: "Bring the right technical and customer-facing people together. Prioritize critical data fixes and communicate progress to the district.",
          scores: [6, 3, 4, 4],
          feedback: "A practical recovery approach. You bring the right people together, prioritize the work, and keep the customer informed.",
          outcome: "The team works through the night. Someone orders pizza shaped like Christmas trees. Morale improves."
        },
        {
          title: "Ask the district to own the data cleanup",
          description: "Explain that the district provided the original data and ask them to correct the records before launch.",
          scores: [4, 2, 3, 5],
          feedback: "Customer ownership matters, but simply shifting responsibility can damage trust. The best approach is collaborative problem-solving.",
          outcome: "The district sends back a spreadsheet. It is named FINAL_FINAL_ACTUAL_FINAL_v2.xlsx."
        }
      ]
    },

    // SCENE 3
    {
      title: "Christmas Training Miracle",
      subtitle: "Training",
      location: "Snowflake Falls Elementary School",
      image: "📚",
      setup:
        "The system is finally live. But the teachers are not exactly celebrating. Most have never used the new platform, the training room is full, and someone has accidentally projected a picture of their cat onto the smartboard.",
      dialogue: [
        {
          character: "EMILY EVERGREEN",
          text: "I've prepared a 94-slide presentation covering every feature, setting, report, and configuration option. We should be done in about four hours."
        },
        {
          character: "MRS. CLAUS",
          text: "Four hours? I have 26 classrooms to visit, 400 presents to wrap, and a reindeer with a scheduling conflict."
        },
        {
          character: "EMILY EVERGREEN",
          text: "Well, the presentation is already printed."
        }
      ],
      question: "The teachers need to become comfortable using the system. How do you approach training?",
      choices: [
        {
          title: "Focus on real-world workflows",
          description: "Teach the most common tasks first. Demonstrate, let users practice, and give them simple job aids they can reference later.",
          scores: [2, 8, 2, 4],
          feedback: "Exactly right. Effective training is about helping people do their jobs—not showing them every button in the software.",
          outcome: "Teachers begin practicing attendance, grading, and reporting. Mrs. Claus successfully submits her first attendance report."
        },
        {
          title: "Deliver the full presentation",
          description: "Cover every feature so users have a complete understanding of the platform before they leave.",
          scores: [2, 4, 2, 2],
          feedback: "Completeness is not the same as effectiveness. Too much information at once can overwhelm users and reduce retention.",
          outcome: "Slide 47 appears. A teacher quietly opens a second browser tab to look at vacation packages."
        },
        {
          title: "Offer office hours and individual help",
          description: "Provide small-group sessions and scheduled opportunities for users to ask questions as they begin working in the system.",
          scores: [2, 6, 5, 4],
          feedback: "A strong support model. Follow-up access helps reinforce learning and gives users confidence when real questions arise.",
          outcome: "The teachers appreciate having someone to call. One asks if you can also help with the copy machine."
        },
        {
          title: "Record a training video and send it out",
          description: "Create a recording so everyone can watch the training when it fits their schedule.",
          scores: [2, 5, 2, 3],
          feedback: "On-demand learning is valuable, but a recording alone doesn't guarantee understanding. Consider practice and opportunities for questions.",
          outcome: "The video gets 312 views. Nobody is entirely sure whether anyone watched the whole thing."
        }
      ]
    },

    // SCENE 4
    {
      title: "Christmas Eve Crisis",
      subtitle: "Support",
      location: "The Snowflake Falls Support Center",
      image: "☎️",
      setup:
        "It's Christmas Eve. The town's festival begins in two hours. Then the support phone starts ringing. A principal can't log in, a parent can't see grades, and the superintendent has sent an email with the subject line: WE NEED TO TALK.",
      dialogue: [
        {
          character: "SAM SNOW",
          text: "We're getting flooded. The login issue is affecting multiple schools. I have 29 open tickets, three voicemails, and someone just sent us a fax."
        },
        {
          character: "MAYOR ELEANOR PRUITT",
          text: "The festival cannot be canceled. Not again. What are we going to do?"
        },
        {
          character: "SAM SNOW",
          text: "I can handle the tickets, but I need someone to help prioritize and communicate."
        }
      ],
      question: "A widespread issue is affecting customers on Christmas Eve. What do you do?",
      choices: [
        {
          title: "Activate incident management",
          description: "Assess impact, assign an incident lead, prioritize the issue, communicate updates, and coordinate technical resolution.",
          scores: [3, 2, 8, 3],
          feedback: "This is the right response. A coordinated incident process reduces confusion, keeps customers informed, and helps the team focus on resolution.",
          outcome: "The team identifies a shared login configuration issue. A fix is underway, and customers receive a clear update."
        },
        {
          title: "Work tickets in the order received",
          description: "Treat every ticket equally and resolve each one as quickly as possible.",
          scores: [2, 2, 5, 2],
          feedback: "Individual ticket resolution matters, but a widespread incident requires prioritization based on customer impact, not just arrival time.",
          outcome: "The team resolves a printer issue before discovering that 300 teachers still cannot log in."
        },
        {
          title: "Send a customer-wide communication",
          description: "Acknowledge the issue, explain what is known, share the next update time, and provide a temporary workaround if available.",
          scores: [2, 2, 6, 6],
          feedback: "Great customer communication. Transparency builds trust, especially when a complete resolution takes time. Pair it with coordinated technical work.",
          outcome: "The superintendent forwards your message to every principal. For once, everyone knows what is happening."
        },
        {
          title: "Ask the team to stay late until everything is fixed",
          description: "Keep everyone online and working until all tickets are closed.",
          scores: [2, 1, 5, 2],
          feedback: "Commitment is important, but effort without prioritization can exhaust the team. A structured response is more effective than simply working longer.",
          outcome: "Everyone stays late. The reindeer are now waiting outside the support center."
        }
      ]
    },

    // SCENE 5
    {
      title: "A Reason to Stay",
      subtitle: "Customer Success",
      location: "The Snowflake Falls Christmas Festival",
      image: "❤️",
      setup:
        "The login issue is resolved. The festival is underway. Children are skating, the town choir is singing, and the mayor has finally stopped checking her email every 90 seconds. But there is one final conversation.",
      dialogue: [
        {
          character: "MAYOR ELEANOR PRUITT",
          text: "You've done something wonderful here. But I don't want this to be a one-week miracle. We need to know our schools are successful next month, next semester, and next year."
        },
        {
          character: "JACK FROST",
          text: "The system is working. But are people actually getting value from it? Are they comfortable? Are they using the tools that could make their lives easier?"
        },
        {
          character: "MAYOR ELEANOR PRUITT",
          text: "So, Executive. What's the plan for keeping Snowflake Falls happy?"
        }
      ],
      question: "The launch is behind you. How do you make sure the customer continues to succeed?",
      choices: [
        {
          title: "Build a customer success plan",
          description: "Establish goals, adoption measures, regular check-ins, success milestones, and a roadmap tied to the district's priorities.",
          scores: [3, 3, 3, 7],
          feedback: "That's customer success. You move beyond resolving issues and focus on outcomes, adoption, relationships, and long-term value.",
          outcome: "The superintendent agrees to quarterly success reviews. Mrs. Claus asks if you can add a reindeer wellness dashboard."
        },
        {
          title: "Wait for the customer to ask for help",
          description: "The system is live. Let the district reach out if they need anything.",
          scores: [1, 1, 3, 2],
          feedback: "Responsive support is important, but customer success requires a proactive relationship. Silence doesn't necessarily mean satisfaction.",
          outcome: "The district goes quiet. You later discover that half the teachers are still using sticky notes."
        },
        {
          title: "Schedule a quarterly business review",
          description: "Review performance, challenges, usage, and future opportunities with district leadership.",
          scores: [2, 2, 3, 6],
          feedback: "A good step toward a strategic relationship. Make sure the discussion focuses on customer outcomes, not just a presentation of activity and metrics.",
          outcome: "The superintendent brings a list of goals for the next semester. You realize this relationship is just getting started."
        },
        {
          title: "Offer additional product features",
          description: "Show the district everything else the platform can do and encourage them to use more features.",
          scores: [2, 3, 2, 4],
          feedback: "Product knowledge can create opportunities, but features should connect to a real customer need. Adoption without purpose isn't success.",
          outcome: "The district is intrigued by the new features. Mrs. Claus asks if one of them can automate gift wrapping."
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

  function renderOpening() {
    stopTimer();

    app.innerHTML = `
      <div class="sf-screen">
        <img src="cover.jpg" alt="A smiling couple laughing together as snow falls around them in a pine forest." style="width:100%;border-radius:12px;display:block;margin-bottom:22px;">
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
            is singing, and Mrs. Claus has finally received her attendance
            reports.
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
      renderOpening();
    });
  }

  // ------------------------------------------------------------
  // 12. START THE GAME
  // ------------------------------------------------------------

  renderOpening();

})();
