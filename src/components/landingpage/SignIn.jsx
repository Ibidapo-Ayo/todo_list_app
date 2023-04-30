import React from "react";

function SignIn({
  evalue,
  onChangeEmail,
  pvalue,
  onChangePwd
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-[400px] shadow-2xl space-y-5 px-2 py-5">
        <div className="">
          <h2 className="text-[30px] font-[700] text-blue">Sign in</h2>
          <p className="text-[12px]">
            Not yet a member?{" "}
            <span className="underline cursor-pointer">Signup</span>
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={evalue}
              onChange={onChangeEmail}
              className="bg-gray focus:outline-none p-3 w-full"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={pvalue}
              onChange={onChangePwd}
              className="bg-gray focus:outline-none p-3 w-full"
            />
          </div>
          <div>
            <input
              type="submit"
              className="bg-blue w-full p-3 cursor-pointer text-white"
              value="Register"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
