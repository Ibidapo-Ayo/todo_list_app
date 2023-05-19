import React from "react";
import { Link } from 'react-router-dom'

function SignIn({
  evalue,
  onChangeEmail,
  pvalue,
  onChangePwd
}) {
  return (
    <div className="flex flex-col items-center justify-center">
    <div className="flex flex-col w-[500px] shadow-2xl justify-center space-y-5 px-20 py-5 h-[600px]">
      <div className="mb-[20px]">
        <h2 className="text-[30px] font-[700] text-center text-brandColor">Toda</h2>
        <p className="text-[12px] text-center">Remember everything important</p>
      </div>
      <div className="flex flex-col space-y-4 items-center">
        <div>
          <input
            type="email"
            placeholder="Email"
            value={evalue}
            onChange={onChangeEmail}
            className="border-gray border-2 focus:outline-none py-[12px] px-[16px] bg-white w-[314px] h-[44.6px] rounded-[5px] text-[14px]"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={pvalue}
            onChange={onChangePwd}
            className="border-gray border-2 focus:outline-none py-[12px] px-[16px] bg-white w-[314px] h-[44.6px] rounded-[5px] text-[14px]"
          />
        </div>
        <div>
          <input
            type="submit"
            className="bg-brandColor rounded-[10px] p-3 cursor-pointer text-white px-[16px] w-[314px] h-[44.6px]"
            value="Login"
          />
        </div>
        <div className="pt-5">
          <p className="w-[310px] text-[13px] text-center">Not yet a member?</p>
          <p className="text-brandColor text-center"><Link to='/'>Sign up</Link></p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SignIn;
