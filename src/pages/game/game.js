import React from "react";
import { Glob } from "../../tools/glo.js"; // Import your globe component

const Game = () => {
  return (
    <div style={{
      width: "100%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    }}>
        <iframe
          loading="lazy"
          title="Solution"
          style={{
            position: "absolute",
            width: "80%",
            height: "100%",
            top: "0",
            left: "0",
            border: "none",
            padding: "0",
            margin: "0",
          }}
          src="https://www.canva.com/design/DAGSwebHLcU/I5u6ehrhwwuwAPyK6ce5Dg/view?embed"
          allowfullscreen="allowfullscreen"
          allow="fullscreen"
        ></iframe>
      <a
        href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGSs8yVlu8&#x2F;6uJAsFnW1_BHk286W6CHzg&#x2F;view?utm_content=DAGSs8yVlu8&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
        target="_blank"
        rel="noopener"
      >
      </a>
    </div>
  );
};

export default Game;
