import React from "react";
import { Glob } from "./glo.js"; // Import your globe component

const Solution = () => {
  return (
    <div>
      <h1>Solution</h1>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "0",
          paddingTop: "56.2500%",
          paddingBottom: "0",
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "1.6em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          title="Solution"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            border: "none",
            padding: "0",
            margin: "0",
          }}
          src="https://www.canva.com/design/DAGSs8yVlu8/6uJAsFnW1_BHk286W6CHzg/view?embed"
          allowfullscreen="allowfullscreen"
          allow="fullscreen"
        ></iframe>
      </div>
      <a
        href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGSs8yVlu8&#x2F;6uJAsFnW1_BHk286W6CHzg&#x2F;view?utm_content=DAGSs8yVlu8&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
        target="_blank"
        rel="noopener"
      >
        Design
      </a>{" "}
      by Shyngys Karishev
    </div>
  );
};

export default Solution;
