import React, { useRef } from "react";
import Terminal from "terminal-in-react";

export default function TerminalA(props) {
  const initialise = useRef(false);
  const committed = useRef(false)
  const staged = useRef(false)
  const push = useRef(false)
  const commitMessage = useRef("");

  const showMsg = () => "Hellooooo";
  const { level } = props;

  const commands = {
    "open-google": () => window.open("https://www.google.com/", "blank"),
    showmsg: showMsg,
    popup: () => alert("Terminal in React"),
    git: {
      method: (args, print, runCommand) => {
        const command = args._[0];
        const command2 = args._[1];
        const command3 = args._[2];
        if (command === "init") {
          if (
            level === 1 &&
            initialise.current === false
          ) {
            print("Well done! First step completed.");
            initialise.current = true;
          } else if (level === 2 || level === 3) {
            print(
              "Git init has already been declared. You don't need to do this again"
            );
          } else {
            print(
              "Git init has already been declared. You don't need to do this again"
            );
          }
        } else if (command === "add") {
          if (initialise.current === true) {
            if (level === 1) {
              if  (command2 === ".") {
                print (
                  "Well done! This adds all unstracked files to the staging area"
                )
                staged.current = true
              } else if (!command2) {
                print (
                  "Place either a dot or a filename behind the git add command"
                )
              } else if (command2) {
                print (
                  `You added a file with name ${command2} to the staging area`
                )
              }
            } else if (level === 2 || level === 3) {
              if  (command2 === ".") {
                print (
                  "Well done! You added all untracked files to the staging area"
                )
                staged.current = true
              } else if (!command2) {
                print (
                  "Don't you need something else?"
                )
              } else if (command2) {
                print (
                  `You added a file with name ${command2} to the staging area`
                )
              }
            }
          } else if (initialise.current === false) {
            if (level === 1) {
              print (
                "You should initialise your repository first, before you can add anything"
              )
            } else if (level === 2 || level === 3) {
              print (
                "Didn't you forget something?"
              )
            }
          }
        } else if (command === "log") {
          if (props.level === 1 || props.level === 2) {
            if (committed.current) {
              print(
                `commit 564d42c588fb80a340c2a1ff9d0d735ceb317eff (origin/master)\nAuthor: Mr.Awesome <awesomedeveloper@gmail.com>\nDate:   ${new Date()}`
              );
            } else {
              print("No committed changes.")
            }
          } else if (props.level === 3) {
            if (committed.current) {
              print(
                `commit 564d42c588fb80a340c2a1ff9d0d735ceb317eff (origin/feature/new-feature)\nAuthor: Mr.Awesome <awesomedeveloper@gmail.com>\nDate:   ${new Date()}`
              );
            } else {
              print("No committed changes.")
            }
          }
        } else if (command === "commit") {
          if (initialise.current === false) {
            print("This is not a git repository! (You haven't initialised it)");
          } else if (staged.current === false) {
            print(`You cannot commit yet!`);
          } else if (!command2) {
            console.log(`command2:`, command2);
            print("Your commit needs a description message!");
          } else if (command2 !== "m") {
            console.log(`command2:`, command2);
            print(`Remember how to add a description message?`);
          } else if (command2 === "m" && command3) {
            commitMessage.current = command3;
            print(`You have successfully made this commit:
            ${commitMessage.current}`);
          }
        } else if (command === "checkout") {
          if (initialise.current === false) {
            print("This is not a git repository! (You haven't initialised it)");
          } else if (!command2 && props.level === 1) {
            print("Either add a dot, a branch name or the b flag with a new branch name");
          } else if (!command2 && props.level !== 1) {
            print("Aren't you missing something?");
          } else if (command2 === ".") {
            print(`Going back to last committed state`);
          } else if (command2 !== "b") {
            print(`Moving to branch ${command2}`);
          } else if (command2 === "b") {
            print(`Creating a new branch called ${command3}`);
          } 
        } else if (command === "push") {
          if (!command2) {
            print("You didn't specify the remote nor the branch.");
          } else if (command2 === "origin" && !command3) {
            print("You forgot to specify the branch.");
          } else if (
            command2 === "origin" &&
            command3 !== "master" &&
            command3 !== "feature/more-awesomeness"
          ) {
            print("Unknown branch name");
          } else if (command2 === "origin" && command3 && !committed.current) {
            print("You can't push uncommitted changes.");
          } else if (
            command2 === "origin" &&
            command3 === "master" &&
            committed.current
          ) {
            if (props.level === 1) {
              print(
                "There's no remote repository in this level, just a local one."
              );
            } else if (props.level === 2) {
              push.current = true;
              print(
                "Well done! You pushed your committed changes to the remote central repository"
              );
            } else if (props.level === 3) {
              print(
                "Almost, but you'd want to push your own branch name, not master."
              );
            }
          } else if (
            command2 === "origin" &&
            command3 === "feature/more-awesomeness" &&
            committed.current
          ) {
            if (props.level === 3) {
              push.current = true;
              print(
                "Well done! You pushed your committed changes on your branch to the remote repository"
              );
            }
          }
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