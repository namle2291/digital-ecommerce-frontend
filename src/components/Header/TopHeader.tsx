import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../Modals/LoginModal";
import Modal from "../Portal/Modal";

function TopHeader() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="bg-grey_color py-[10px]">
      <div className="wrapper flex justify-between  text-[12px]">
        <div>
          <span className="px-[12px]">Welcome to our Shop!</span>
        </div>
        <div>
          <Link
            to="/wishlist"
            className="px-[10px] cursor-pointer hover:text-main_color"
          >
            My Wishlist
          </Link>
          <span
            className="px-[10px] cursor-pointer hover:text-main_color"
            onClick={() => setVisible(true)}
          >
            My Account
          </span>
          <Modal visible={visible} setVisible={setVisible}>
            <LoginModal />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
