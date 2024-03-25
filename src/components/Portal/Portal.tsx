import { createPortal } from "react-dom";

let el = document.getElementById("root");

export default function Portal({ children }: { children: any }) {
  return createPortal(children, el!);
}
