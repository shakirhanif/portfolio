import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscChromeMaximize, VscChromeMinimize } from "react-icons/vsc";
import { BsTerminalFill } from "react-icons/bs";

import { animateScroll as scroll } from "react-scroll";

const TerminalScreen = () => {
  const [theme, setTheme] = React.useState("dark");
  const themeVars =
    theme === "dark"
      ? {
          app: { backgroundColor: "#333444" },
          terminal: { boxShadow: "0 2px 5px #111" },
          window: { backgroundColor: "#222345", color: "#F4F4F4" },
          field: {
            backgroundColor: "#222333",
            color: "#F4F4F4",
            fontWeight: "normal",
          },
          cursor: { animation: "1.02s blink-dark step-end infinite" },
        }
      : {
          app: { backgroundColor: "#ACA9BB" },
          terminal: { boxShadow: "0 2px 5px #33333375" },
          window: { backgroundColor: "#5F5C6D", color: "#E3E3E3" },
          field: {
            backgroundColor: "#E3E3E3",
            color: "#474554",
            fontWeight: "bold",
          },
          cursor: { animation: "1.02s blink-light step-end infinite" },
        };
  return <Terminal theme={themeVars} setTheme={setTheme} />;
};
const Terminal = ({ theme, setTheme }) => {
  const [maximized, setMaximized] = React.useState(false);
  const [title, setTitle] = React.useState("shakirhanif@hotmail.com");
  const [close, setClose] = React.useState(false);
  const handleClose = () => setClose(!close);
  const handleMinMax = () => {
    setMaximized(!maximized);
    scroll.scrollToTop({ duration: 10 });
    document.querySelector("#field").focus();
  };

  return close ? (
    <div
      className="mt-7  text-[#5651e5] hover:cursor-pointer hover:scale-105 ease-in duration-100"
      onClick={handleClose}
    >
      <BsTerminalFill size={40}></BsTerminalFill>
    </div>
  ) : (
    <div
      id="terminal"
      className={
        maximized
          ? "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100] text-left"
          : "text-left"
      }
      style={
        maximized
          ? { height: "100vh", width: "100vw", maxWidth: "100vw" }
          : theme.terminal
      }
    >
      <div id="window" style={theme.window}>
        <div className="">
          <div className="btn red hover:cursor-pointer" onClick={handleClose}>
            <AiOutlineClose></AiOutlineClose>
          </div>
        </div>
        <button id="useless-btn" className="hidden btn yellow" />
        <div className="px-1">
          <div
            className="btn green hover:cursor-pointer"
            onClick={handleMinMax}
          >
            {maximized ? <VscChromeMinimize /> : <VscChromeMaximize />}
          </div>
        </div>
        <span id="title" style={{ color: theme.window.color }}>
          {title}
        </span>
      </div>
      <Field theme={theme} setTheme={setTheme} setTitle={setTitle} />
    </div>
  );
};
class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commandHistory: [],
      commandHistoryIndex: 0,
      fieldHistory: [
        { text: "React Terminal" },
        {
          text: "Type HELP to see the full list of commands.",
          hasBuffer: true,
        },
      ],
      userInput: "",
      isMobile: false,
    };
    this.recognizedCommands = [
      {
        command: "help",
        purpose: "Provides help information for React Terminal commands.",
      },
      {
        command: "date",
        purpose: "Displays the current date.",
      },
      {
        command: "start",
        purpose: "Launches a specified URL in a new tab or separate window.",
        help: [
          "START <URL>",
          "Launches a specified URL in a new tab or separate window.",
          "",
          "URL......................The website you want to open.",
        ],
      },
      {
        command: "cls",
        purpose: "Clears the screen.",
      },
      {
        command: "theme",
        purpose: "Sets the color scheme of the React Terminal.",
        help: [
          "THEME <L|LIGHT|D|DARK> [-s, -save]",
          "Sets the color scheme of the React Terminal.",
          "",
          "L, LIGHT.................Sets the color scheme to light mode.",
          "D, DARK..................Sets the color scheme to dark mode.",
          "",
          "-s, -save................Saves the setting to localStorage.",
        ],
      },
      {
        command: "exit",
        purpose: "Quits the React Terminal and reload portfolio page.",
      },
      {
        command: "time",
        purpose: "Displays the current time.",
      },
      {
        command: "about",
        isMain: true,
        purpose: "Displays basic information about Shakir.",
      },
      {
        command: "skills",
        isMain: true,
        purpose: "Displays information about Shakir's skills as a developer.",
      },
      {
        command: "contact",
        isMain: true,
        purpose: "Displays contact information for Shakir.",
      },
      {
        command: "projects",
        isMain: true,
        purpose:
          "Displays information about what projects Shakir has done in the past.",
      },
      {
        command: "project",
        isMain: true,
        purpose:
          "Launches a specified project in a new tab or separate window.",
        help: [
          "PROJECT <TITLE>",
          "Launches a specified project in a new tab or separate window.",
          "List of projects currently include:",
          "Pak-Explorers",
          "Osum Ecommerce Store",
          "Whatsupp web",
          "Weather App",
          "Sticky",
          "Drum kit",
          "Dice Game",
          "",
          "TITLE....................The title of the project you want to view.",
        ],
      },
      {
        command: "title",
        purpose: "Sets the window title for the React Terminal.",
        help: [
          "TITLE <INPUT>",
          "Sets the window title for the React Terminal.",
          "",
          "INPUT....................The title you want to use for the React Terminal window.",
        ],
      },
      ...["google", "duckduckgo", "bing"].map((cmd) => {
        const properCase =
          cmd === "google"
            ? "Google"
            : cmd === "duckduckgo"
            ? "DuckDuckGo"
            : "Bing";

        return {
          command: cmd,
          purpose: `Searches a given query using ${properCase}.`,
          help: [
            `${cmd.toUpperCase()} <QUERY>`,
            `Searches a given query using ${properCase}. If no query is provided, simply launches ${properCase}.`,
            "",
            `QUERY....................It\'s the same as if you were to type inside the ${properCase} search bar.`,
          ],
        };
      }),
    ];
    this.handleTyping = this.handleTyping.bind(this);
    this.handleInputEvaluation = this.handleInputEvaluation.bind(this);
    this.handleInputExecution = this.handleInputExecution.bind(this);
    this.handleContextMenuPaste = this.handleContextMenuPaste.bind(this);
  }
  componentDidMount() {
    if (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    ) {
      this.setState((state) => ({
        isMobile: true,
        fieldHistory: [
          ...state.fieldHistory,
          { isCommand: true },
          {
            text: `Unfortunately due to this application being an 'input-less' environment, mobile is not supported. I'm working on figuring out how to get around this, so please bear with me! In the meantime, come on back if you're ever on a desktop.`,
            isError: true,
            hasBuffer: true,
          },
        ],
      }));
    } else {
      const userElem = document.querySelector("#field");
      const themePref = window.localStorage.getItem("reactTerminalThemePref");

      // Disable this if you're working on a fork with auto run enabled... trust me.
      userElem.focus();

      document.querySelector("#useless-btn").addEventListener("click", () =>
        this.setState((state) => ({
          fieldHistory: [
            ...state.fieldHistory,
            { isCommand: true },
            {
              text: "SYS >> That button doesn't do anything.",
              hasBuffer: true,
            },
          ],
        }))
      );

      if (themePref) {
        this.props.setTheme(themePref);
      }
    }
  }
  componentDidUpdate() {
    const userElem = document.querySelector("#field");

    userElem.scrollTop = userElem.scrollHeight;
  }
  handleTyping(e) {
    e.preventDefault();

    const { key, ctrlKey, altKey } = e;
    const forbidden = [
      ...Array.from({ length: 12 }, (x, y) => `F${y + 1}`),
      "ContextMenu",
      "Meta",
      "NumLock",
      "Shift",
      "Control",
      "Alt",
      "CapsLock",
      "Tab",
      "ScrollLock",
      "Pause",
      "Insert",
      "Home",
      "PageUp",
      "Delete",
      "End",
      "PageDown",
    ];

    if (!forbidden.some((s) => s === key) && !ctrlKey && !altKey) {
      if (key === "Backspace") {
        this.setState(
          (state) => (state.userInput = state.userInput.slice(0, -1))
        );
      } else if (key === "Escape") {
        this.setState({ userInput: "" });
      } else if (key === "ArrowUp" || key === "ArrowLeft") {
        const { commandHistory, commandHistoryIndex } = this.state;
        const upperLimit = commandHistoryIndex >= commandHistory.length;

        if (!upperLimit) {
          this.setState((state) => ({
            commandHistoryIndex: (state.commandHistoryIndex += 1),
            userInput: state.commandHistory[state.commandHistoryIndex - 1],
          }));
        }
      } else if (key === "ArrowDown" || key === "ArrowRight") {
        const { commandHistory, commandHistoryIndex } = this.state;
        const lowerLimit = commandHistoryIndex === 0;

        if (!lowerLimit) {
          this.setState((state) => ({
            commandHistoryIndex: (state.commandHistoryIndex -= 1),
            userInput:
              state.commandHistory[state.commandHistoryIndex - 1] || "",
          }));
        }
      } else if (key === "Enter") {
        const { userInput } = this.state;

        if (userInput.length) {
          this.setState(
            (state) => ({
              commandHistory:
                userInput === ""
                  ? state.commandHistory
                  : [userInput, ...state.commandHistory],
              commandHistoryIndex: 0,
              fieldHistory: [
                ...state.fieldHistory,
                { text: userInput, isCommand: true },
              ],
              userInput: "",
            }),
            () => this.handleInputEvaluation(userInput)
          );
        } else {
          this.setState((state) => ({
            fieldHistory: [...state.fieldHistory, { isCommand: true }],
          }));
        }
      } else {
        this.setState((state) => ({
          commandHistoryIndex: 0,
          userInput: (state.userInput += key),
        }));
      }
    }
  }
  handleInputEvaluation(input) {
    try {
      const evaluatedForArithmetic = math.evaluate(input);

      if (!isNaN(evaluatedForArithmetic)) {
        return this.setState((state) => ({
          fieldHistory: [
            ...state.fieldHistory,
            { text: evaluatedForArithmetic },
          ],
        }));
      }

      throw Error;
    } catch (err) {
      const { recognizedCommands, giveError, handleInputExecution } = this;
      const cleanedInput = input.toLowerCase().trim();
      const dividedInput = cleanedInput.split(" ");
      const parsedCmd = dividedInput[0];
      const parsedParams = dividedInput.slice(1).filter((s) => s[0] !== "-");
      const parsedFlags = dividedInput.slice(1).filter((s) => s[0] === "-");
      const isError = !recognizedCommands.some((s) => s.command === parsedCmd);

      if (isError) {
        return this.setState((state) => ({
          fieldHistory: [...state.fieldHistory, giveError("nr", input)],
        }));
      }

      return handleInputExecution(parsedCmd, parsedParams, parsedFlags);
    }
  }
  handleInputExecution(cmd, params = [], flags = []) {
    if (cmd === "help") {
      if (params.length) {
        if (params.length > 1) {
          return this.setState((state) => ({
            fieldHistory: [
              ...state.fieldHistory,
              this.giveError("bp", { cmd: "HELP", noAccepted: 1 }),
            ],
          }));
        }

        const cmdsWithHelp = this.recognizedCommands.filter((s) => s.help);

        if (cmdsWithHelp.filter((s) => s.command === params[0]).length) {
          return this.setState((state) => ({
            fieldHistory: [
              ...state.fieldHistory,
              {
                text: cmdsWithHelp.filter((s) => s.command === params[0])[0]
                  .help,
                hasBuffer: true,
              },
            ],
          }));
        } else if (
          this.recognizedCommands.filter((s) => s.command === params[0]).length
        ) {
          return this.setState((state) => ({
            fieldHistory: [
              ...state.fieldHistory,
              {
                text: [
                  `No additional help needed for ${this.recognizedCommands
                    .filter((s) => s.command === params[0])[0]
                    .command.toUpperCase()}`,
                  this.recognizedCommands.filter(
                    (s) => s.command === params[0]
                  )[0].purpose,
                ],
                hasBuffer: true,
              },
            ],
          }));
        }

        return this.setState((state) => ({
          fieldHistory: [
            ...state.fieldHistory,
            this.giveError("up", params[0].toUpperCase()),
          ],
        }));
      }

      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: [
              "Main commands:",
              ...this.recognizedCommands
                .sort((a, b) => a.command.localeCompare(b.command))
                .filter(({ isMain }) => isMain)
                .map(
                  ({ command, purpose }) =>
                    `${command.toUpperCase()}${Array.from(
                      { length: 15 - command.length },
                      (x) => "."
                    ).join("")}${purpose}`
                ),
              "",
              "All commands:",
              ...this.recognizedCommands
                .sort((a, b) => a.command.localeCompare(b.command))
                .map(
                  ({ command, purpose }) =>
                    `${command.toUpperCase()}${Array.from(
                      { length: 15 - command.length },
                      (x) => "."
                    ).join("")}${purpose}`
                ),
              "",
              "For help about a specific command, type HELP <CMD>, e.g. HELP PROJECT.",
            ],
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "cls") {
      return this.setState({ fieldHistory: [] });
    } else if (cmd === "start") {
      if (params.length === 1) {
        return this.setState(
          (state) => ({
            fieldHistory: [
              ...state.fieldHistory,
              { text: `Launching ${params[0]}...`, hasBuffer: true },
            ],
          }),
          () =>
            window.open(
              /http/i.test(params[0]) ? params[0] : `https://${params[0]}`
            )
        );
      }

      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          this.giveError("bp", { cmd: "START", noAccepted: 1 }),
        ],
      }));
    } else if (cmd === "date") {
      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: `The current date is: ${new Date(
              Date.now()
            ).toLocaleDateString()}`,
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "theme") {
      const { setTheme } = this.props;
      const validParams =
        params.length === 1 &&
        ["d", "dark", "l", "light"].some((s) => s === params[0]);
      const validFlags = flags.length
        ? flags.length === 1 && (flags[0] === "-s" || flags[0] === "-save")
          ? true
          : false
        : true;

      if (validParams && validFlags) {
        const themeToSet =
          params[0] === "d" || params[0] === "dark" ? "dark" : "light";

        return this.setState(
          (state) => ({
            fieldHistory: [
              ...state.fieldHistory,
              {
                text: `Set the theme to ${themeToSet.toUpperCase()} mode`,
                hasBuffer: true,
              },
            ],
          }),
          () => {
            if (
              flags.length === 1 &&
              (flags[0] === "-s" || flags[0] === "-save")
            ) {
              window.localStorage.setItem("reactTerminalThemePref", themeToSet);
            }

            setTheme(themeToSet);
          }
        );
      }

      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          this.giveError(
            !validParams ? "bp" : "bf",
            !validParams ? { cmd: "THEME", noAccepted: 1 } : "THEME"
          ),
        ],
      }));
    } else if (cmd === "exit") {
      return (window.location.href = "/");
    } else if (cmd === "time") {
      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: `The current time is: ${new Date(
              Date.now()
            ).toLocaleTimeString()}`,
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "about") {
      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: [
              "Hey there!",
              `I'm a Backend Web Developer building the Back-end of Websites and Web Applications that leads to the success of the overall product. I usually utilize Python fromawork Django for it and have sound knowledge of Node and Express.

              Along with Backend I also am adept in ReactJs and NextJs, and have capability to design web application with great UI and interactivity.
              
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. `,
              `Type CONTACT if you'd like to get in touch - otherwise I hope you enjoy using the rest of the app!`,
            ],
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "skills") {
      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: [
              "Languages:",
              "HTML",
              "CSS",
              "JavaScript",
              "Python",
              "",
              "Libraries/Frameworks:",
              "Node",
              "Express",
              "React",
              "Next",
              "TailwindCss",
              "jQuery",
              "Django",
              "Django-rest",
              "Other:",
              "Git",
              "GitHub",
            ],
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "contact") {
      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: [
              "Email: shakirhanif@hotmail.com",
              "whatsapp or mobile: 0321-4852967",
              "Secondary Email: shakirhanifis@gmail.com",
              "GitHub: https://github.com/shakirhanif",
            ],
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "projects") {
      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: [
              "To view any of these projects live or their source files, type PROJECT <TITLE>, e.g. PROJECT pak-explorers.",
              "",
              "Pak-Explorers",
              "Built with React",
              `This is a simple Landing Page about photography club which capture sceneries in Pakistan.`,
              "",
              "Osum-Store",
              "Built with NextJs,NextAuth,Node,Express,MongoDb,TailwindCss",
              "This is a Simple yet complete ecommerece store with full functionality and backend",
              "",
              "Whatsupp web",
              "Built with React,Express,MongoDb,Socket and MUI",
              " This is clone of Whatsapp Web built with React,Socket, Express and MongoDB. It has authenticate users using Google auth with automatic prompt and save their conversation on database.",
              "",
              "Weather App",
              "Built with Node, Express, EJS",
              "This is single page weather web app made by using express and ejs. It shows weather of a city by searched parameter and retrieve it from openweather api.",
              "",
              "Sticky",
              "Built with React, TailwindCSS, ReactIcons",
              "This is a sticky notes app to keep track of daily tasks.",
              "",
              "Drum Kit",
              "Built with HTML, CSS, JavaScript",
              "a web page which emulate sounds of drum kit, its quite fun actually.",
              "",
              "Dice Game",
              "Built with HTML, CSS, JavaScript",
              "This is a simple website which roll dices randomly, its just fun app if you dont have real dices lying around.",
              "",
            ],
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "project") {
      if (params.length === 1) {
        const projects = [
          {
            title: "pak-explorers",
            live: "https://pak-explorers.vercel.app/",
          },
          {
            title: "osum-store",
            live: "https://ecommerce-osum.vercel.app/",
          },
          {
            title: "Whatsupp",
            live: "https://whatsupp-8fed2.firebaseapp.com/",
          },
          {
            title: "Weather App",
            live: "https://magenta-rose-dog-cap.cyclic.app/",
          },
          {
            title: "Sticky",
            live: "https://sticky-7e0d8.web.app/",
          },
          {
            title: "Drum Kit",
            live: "https://drum-kit-85ef6.firebaseapp.com/",
          },
          {
            title: "Dice Game",
            live: "https://dicegame-435b8.web.app/",
          },
        ];

        return this.setState(
          (state) => ({
            fieldHistory: [
              ...state.fieldHistory,
              { text: `Launching ${params[0]}...`, hasBuffer: true },
            ],
          }),
          () =>
            window.open(projects.filter((s) => s.title === params[0])[0].live)
        );
      }

      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          this.giveError("bp", { cmd: "PROJECT", noAccepted: 1 }),
        ],
      }));
    } else if (cmd === "title") {
      return this.setState(
        (state) => ({
          fieldHistory: [
            ...state.fieldHistory,
            {
              text: `Set the React Terminal title to ${
                params.length > 0 ? params.join(" ") : "<BLANK>"
              }`,
              hasBuffer: true,
            },
          ],
        }),
        () => this.props.setTitle(params.length > 0 ? params.join(" ") : "")
      );
    } else if (["google", "duckduckgo", "bing"].some((s) => s === cmd)) {
      return this.setState(
        (state) => ({
          fieldHistory: [
            ...state.fieldHistory,
            {
              text: params.length
                ? `Searching ${cmd.toUpperCase()} for ${params.join(" ")}...`
                : `Launching ${cmd.toUpperCase()}...`,
              hasBuffer: true,
            },
          ],
        }),
        () =>
          window.open(
            params.length
              ? `https://www.${cmd}.com/${
                  cmd === "google" ? "search" : ""
                }?q=${params.join("+")}`
              : `https://${cmd}.com/`,
            "_blank"
          )
      );
    }
  }
  handleContextMenuPaste(e) {
    e.preventDefault();

    if ("clipboard" in navigator) {
      navigator.clipboard.readText().then((clipboard) =>
        this.setState((state) => ({
          userInput: `${state.userInput}${clipboard}`,
        }))
      );
    }
  }
  giveError(type, extra) {
    const err = { text: "", isError: true, hasBuffer: true };

    if (type === "nr") {
      err.text = `${extra} : The term or expression '${extra}' is not recognized. Check the spelling and try again. If you don't know what commands are recognized, type HELP.`;
    } else if (type === "nf") {
      err.text = `The ${extra} command requires the use of flags. If you don't know what flags can be used, type HELP ${extra}.`;
    } else if (type === "bf") {
      err.text = `The flags you provided for ${extra} are not valid. If you don't know what flags can be used, type HELP ${extra}.`;
    } else if (type === "bp") {
      err.text = `The ${extra.cmd} command requires ${extra.noAccepted} parameter(s). If you don't know what parameter(s) to use, type HELP ${extra.cmd}.`;
    } else if (type === "up") {
      err.text = `The command ${extra} is not supported by the HELP utility.`;
    }

    return err;
  }
  render() {
    const { theme } = this.props;
    const { fieldHistory, userInput } = this.state;

    return (
      <div
        id="field"
        className={theme.app.backgroundColor === "#333444" ? "dark" : "light"}
        style={theme.field}
        onKeyDown={(e) => this.handleTyping(e)}
        tabIndex={0}
        onContextMenu={(e) => this.handleContextMenuPaste(e)}
      >
        {fieldHistory.map(({ text, isCommand, isError, hasBuffer }) => {
          if (Array.isArray(text)) {
            return (
              <MultiText input={text} isError={isError} hasBuffer={hasBuffer} />
            );
          }

          return (
            <Text
              input={text}
              isCommand={isCommand}
              isError={isError}
              hasBuffer={hasBuffer}
            />
          );
        })}
        <UserText input={userInput} theme={theme.cursor} />
      </div>
    );
  }
}
const Text = ({ input, isCommand, isError, hasBuffer }) => (
  <>
    <div>
      {isCommand && <div id="query">RT C:\Users\Guest{">"}</div>}
      <span className={!isCommand && isError ? "error" : ""}>{input}</span>
    </div>
    {hasBuffer && <div></div>}
  </>
);
const MultiText = ({ input, isError, hasBuffer }) => (
  <>
    {input.map((s) => (
      <Text input={s} isError={isError} />
    ))}
    {hasBuffer && <div></div>}
  </>
);
const UserText = ({ input, theme }) => (
  <div>
    <div id="query">RT C:\Users\Guest{">"} </div>
    <span>{input}</span>
    <div id="cursor" style={theme}></div>
  </div>
);

export default TerminalScreen;
