import * as React from "react";

export const Button = (props: any) => {
  return <button onClick={props.onPress}>{props.title}</button>;
};
