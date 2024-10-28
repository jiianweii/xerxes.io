import { useState } from "react";
import { Button } from "./Button";

export default function Extender({ children }) {
  const [extendText, setExtendText] = useState(false);

  let modified = children;

  if (extendText) modified = children.split(" ").slice(0, 20).join(" ") + "...";
  return (
    <p>
      {modified}{" "}
      <Button onClick={() => setExtendText(!extendText)}>
        {extendText ? "Show More" : "Show Less"}
      </Button>
    </p>
  );
}
