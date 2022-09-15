import { Input } from "antd";
import { useCallback, useMemo, useState } from "react";
import { Button } from "ui";

export default function Web() {
  const [showText, setShowText] = useState<Boolean>(false);
  const [name, setName] = useState<string>("");
  const [nameoOnClick, setNameOnClick] = useState<string>("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Docs</h1>
      <h2>Turborepo test on Docs</h2>
      <Input placeholder="Enter your name" onChange={onChange} />
      <Button
        title="Press"
        onPress={() => {
          setShowText(name !== "" && true);
          setNameOnClick(name);
        }}
      />
      {showText && <h2>Your name in docs is {nameoOnClick}.</h2>}
    </div>
  );
}
