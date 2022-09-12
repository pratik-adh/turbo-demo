import { useCallback, useMemo, useState } from "react";
import { Button } from "ui";

export default function Docs() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <h1>Docs</h1>
      <Button title="Press" onPress={() => setShowText(!showText)} />
      {showText && <h2>I am a testing turborepo on docs</h2>}
    </div>
  );
}
