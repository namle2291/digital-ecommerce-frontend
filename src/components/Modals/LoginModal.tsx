import { useState } from "react";
import { Link } from "react-router-dom";

function LoginModal() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h3 className="uppercase mb-[20px] text-center text-[18px] font-[600]">
        {isLogin ? "Login" : "Create Account"}
      </h3>
      <div className="flex flex-col gap-[15px]">
        {!isLogin && (
          <>
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-[8px] py-[10px]"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-[8px] py-[10px]"
              />
            </div>
          </>
        )}
        <div>
          <input
            type="text"
            placeholder="Email"
            className="w-full px-[8px] py-[10px]"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-[8px] py-[10px]"
          />
        </div>
        <div className="uppercase font-[600] cursor-pointer bg-main_color px-[11px] py-[15px] text-white text-center mb-[15px]">
          {isLogin ? "Sign In" : "Create"}
        </div>
        {isLogin ? (
          <>
            <div className="flex justify-between">
              <Link className="hover:text-main_color" to={""}>
                Forgot your password?
              </Link>
              <span
                className="hover:text-main_color cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Create Account
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <span
                className="uppercase font-[400] cursor-pointer bg-main_color px-[11px] py-[15px] text-white text-center"
                onClick={() => setIsLogin(true)}
              >
                Cancel
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
