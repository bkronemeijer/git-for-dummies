import React, { Component, useState, useRef, useEffect } from "react";
import Terminal from "terminal-in-react";

export default function TerminalA(props) {
  const [staged, set_staged] = useState(false);
  const [commited, set_commited] = useState(false);
  const initialize = useRef(false);

  // useEffect(() => {
  //   initialize.current = true
  // })

  const showMsg = () => "Hellooooo";
  const { level } = props;

  const commands = {
    "open-google": () => window.open("https://www.google.com/", "blank"),
    showmsg: showMsg,
    popup: () => alert("Terminal in React"),
    git: {
      method: (args, print, runCommand) => {
        const command = args._[0];
        if (command === "init") {
          if (
            level === 1 &&
            staged === false &&
            commited === false &&
            initialize.current === false
          ) {
            print("Well done! First step completed.");
            initialize.current = true;
          } else {
            print(
              "Git init has already been declared. You don't need to do this again"
            );
            // or print(props.onMessage)
          }
        } else if (level === 2 || level === 3) {
          print(
            "Git init has already been declared. You don't need to do this again"
          );
        }
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Terminal
        color="white"
        backgroundColor="black"
        barColor="black"
        style={{ fontWeight: "bold", fontSize: "1em" }}
        commands={commands}
        ////////////////////////
        descriptions={{
          "open-google": "opens google.com",
          alert: "alert",
          popup: "alert",
        }}
        msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
      />
    </div>
  );
}