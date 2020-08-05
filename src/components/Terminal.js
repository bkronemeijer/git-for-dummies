import React, { Component } from "react";
import Terminal from "terminal-in-react";

export default function TerminalA() {
  const showMsg = () => "Hellooooo";

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
        commands={{
          "open-google": () => window.open("https://www.google.com/", "_blank"),
          showmsg: showMsg,
          popup: () => alert("Terminal in React"),

          git: {
            method: (args, print, runCommand) => {
              args._[0] === "commit"
                ? print("i will commit!")
                : args._[0] === "status"
                ? print("I'll show you the status!")
                : print("NOT FOUND");
            },
          },
        }}
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
