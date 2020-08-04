import React from "react";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <div>
      <div>
        <h1>Git started!</h1>
        <h3>New to Git? Take a look at this tutorial below</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uUuTYDg9XoI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h2>How to play</h2>
        <p>
          Git Started is an educational tool for learning Git. <br />
          Work your way through the levels in a learn-by-doing environment.{" "}
          <br />
          The goal is to write correct commands in the correct order in the
          terminal.{" "}
        </p>
        <h4>Rules </h4>
        <p>
          1. Read the assignment in each level carefully. <br />
          2. Use the terminal to write your commands. <br />
          3. If you get stuck, click on "hints". <br />
          4. If you enter commands correctly and in the right order, you proceed
          to the next level. If you don't, try the level again!
        </p>
        <h4>Overview of built-in terminal commands </h4>
        <p>
          git status - List the files you've changed and those you still need to
          add or commit. <br />
          git log - shows a log of the commits you made, if there are any.{" "}
          <br />
          clear - Clears the screen. <br />
          show - Shows a message, if there is any. <br />
          echo - Display the input message. <br />
        </p>
        <div>
          <h2>Feeling ready?</h2>
          <Link to="/level-1">
            <button>Let's Git Started!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
