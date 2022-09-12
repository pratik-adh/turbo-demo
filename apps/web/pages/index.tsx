import { useCallback, useMemo, useState } from "react";
import { Button } from "ui";

export default function Web() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <h1>Web</h1>
      <Button title="Press" onPress={() => setShowText(!showText)} />
      {showText && <h2>I am a testing turborepo on Web</h2>}
    </div>
  );
}
