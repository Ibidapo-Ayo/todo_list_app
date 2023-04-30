import { useState } from "react";

function Signup() {
  const [uname, setUname] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')


  const onChangeUname = (e)=>{
    setUname(e.target.value)
  }
  const onChangeEmail = (e)=>{
    setEmail(e.target.value)
  }

  const onChangePwd = (e)=>{
    setPwd(e.target.value)
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-[400px] shadow-2xl space-y-5 px-2 py-5">
        <div className="">
          <h2 className="text-[30px] font-[700] text-blue">Sign up</h2>
          <p className="text-[12px]">Already had an account? <span className="underline cursor-pointer">Signin</span></p>
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={uname}
              onChange={onChangeUname}
              className="bg-gray focus:outline-none p-3 w-full"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
              className="bg-gray focus:outline-none p-3 w-full"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={pwd}
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

export default Signup;
