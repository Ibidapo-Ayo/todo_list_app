import { useState, useEffect } from "react";
import { Link } from 'react-router-dom  '

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
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col w-[500px] shadow-2xl justify-center space-y-5 px-20 py-5 h-[600px]">
        <div className="mb-[20px]">
          <h2 className="text-[30px] font-[700] text-center text-brandColor">Toda</h2>
          <p className="text-[12px] text-center">Remember everything important</p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={uname}
              onChange={onChangeUname}
              className="border-gray border-2 focus:outline-none py-[12px] px-[16px] bg-white w-[314px] h-[44.6px] rounded-[5px] text-[14px]"
            />
           
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
              className="border-gray border-2 focus:outline-none py-[12px] px-[16px] bg-white w-[314px] h-[44.6px] rounded-[5px] text-[14px]"
            />
            
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={pwd}
              onChange={onChangePwd}
              className="border-gray border-2 focus:outline-none py-[12px] px-[16px] bg-white w-[314px] h-[44.6px] rounded-[5px] text-[14px]"
            />
            
          </div>
          <div>
          {uname && email && pwd ?
           <input
              type="submit"
              className='bg-brandColor rounded-[10px] p-3 cursor-pointer text-white px-[16px] w-[314px] h-[44.6px]'
              value="Register" onClick={()=> console.log('True')}
          />: <input
          type="submit"
          className='bg-brandColor opacity-[0.5] rounded-[10px] p-3 cursor-not-allowed text-white px-[16px] w-[314px] h-[44.6px]'
          value="Register" 
      /> }
          </div>
          <div>
            <p className="w-[250px] text-[10px] text-center">By creating an account, you are agreeing to our <a className="text-brandColor" href="#">Terms of Service</a> and <a href="#" className="text-brandColor">Privacy Policy</a>.</p>
          </div>
          <div className="pt-5">
            <p className="w-[310px] text-[13px] text-center">Already have an account?</p>
            <p className="text-brandColor text-center"><Link to='/signin'>Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
