"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ code, language = "bash" }) {
  return (
    <div className="code-block">
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        customStyle={{
          margin: 0,
          padding: "15px",
          borderRadius: "var(--border-radius)",
          backgroundColor: "var(--secondary-color)",
          direction: "ltr",
          textAlign: "left",
        }}
      >
        {code}
      </SyntaxHighlighter>
      <button
        className="copy-button"
        onClick={() => navigator.clipboard.writeText(code)}
      >
        کپی
      </button>
    </div>
  );
} 