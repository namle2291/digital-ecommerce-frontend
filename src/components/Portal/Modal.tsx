import { Dispatch, SetStateAction, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Portal from "./Portal";

type Props = {
  visible?: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  children?: JSX.Element[] | JSX.Element;
};

function Modal({ visible, setVisible, children }: Props) {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "17px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.marginRight = "0px";
    }
  }, [visible]);

  return (
    <Portal>
      {visible ? (
        <div className="modal-wrapper">
          <div
            className="modal-overlay"
            onClick={() => setVisible(false)}
          ></div>
          <div className="z-50 modal-content">
            <div
              className="modal-close-button"
              onClick={() => setVisible(false)}
            >
              <IoCloseSharp />
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </Portal>
  );
}

export default Modal;
