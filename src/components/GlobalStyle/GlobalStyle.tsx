import React from "react";
import "./GlobalStyle.scss";

type GlobalStyleProps = {
  children: JSX.Element;
};

function GlobalStyle({ children }: GlobalStyleProps) {
  return <div>{children}</div>;
}

export default GlobalStyle;
