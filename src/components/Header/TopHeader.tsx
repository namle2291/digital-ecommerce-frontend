import { Link } from "react-router-dom";

function TopHeader() {
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
          <Link
            to="/account"
            className="px-[10px] cursor-pointer hover:text-main_color"
          >
            My Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
