import React, { useState } from 'react'
import Signup from './Signup';
import SignIn from './SignIn';



function LandingPage() {
 

  return (
    <div>
      <Signup onChangeUname={onChangeUname} uvalue={uname} evalue={email} onChangeEmail={(e) => setEmail(e.target.value)} pvalue={pwd} onChangePwd={(e) => setPwd(e.trget.value)} />
      {/* <SignIn evalue={email} onChangeEmail={(e) => setEmail(e.target.value)} pvalue={pwd} onChangePwd={(e) => setPwd(e.trget.value)}/> */}
    </div>
  )
}

export default LandingPage
