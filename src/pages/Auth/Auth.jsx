// import React, { useState } from 'react';
// import './Auth.css';
// import icon from '../../assets/icon.png';
// const Auth = () => {
//   const [isSignup, setIsSignup] = useState(true);

//   return (
//     <section className="auth-section">
//       <div className="auth-container">
//         {!isSignup && <img src="icon" alt="stack overflow" className="login-logo" />}
//         <form>
//           <label htmlFor="email">
//             <h4>Email</h4>
//             <h4>email</h4>
//             <input type="email" name="email" id="email" />
//           </label>

//           <label htmlFor="password">
//             <div>
//               <h4>Password</h4>
//               <h4>Forgot password</h4>
//             </div>
//             <input type="password" name="password" id="password" />
//           </label>
//           <button type="submit" className="auth-btn">
//             {isSignup ? 'Sign up' : 'Log in'}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Auth;


import React, { useState } from 'react';
import './Auth.css';
import icon from '../../assets/icon.png';
import AboutAuth from './AboutAuth'
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch=()=>{
    setIsSignup(!isSignup)
  }

  return (
    <section className="auth-section">
      {isSignup &&<AboutAuth/>}
      <div className="auth-container-2">
        {!isSignup && <img src={icon} alt="stack overflow" className="login-logo" />}

        <form>

          { isSignup && (
            <label htmlFor='name'>
              <h4>Display name</h4>
              <input type='text' id='name' name='name' />
            </label>
          )}
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type='email' name='email' id='email;'/>
          </label>

          <label htmlFor='password'>
            <div style={{display:"flex",justifyContent:'space-between'}}>
            <h4>Password</h4>
            { !isSignup &&<p style={{color:"#0000FF"  , fontSize:"13px"}}>Forget Password</p>}
            </div>
            <input type='password' name='password' id='password;'/>
            {isSignup && <p style={{color:"#666767"  , fontSize:"13px"}}>Passwords must contain at least eight <br/> characters, including at least 1 letter and 1 number. </p>}
          </label>
          {
            isSignup && (
              <label htmlFor='check'>
                <input type='checkbox' id='check'/>
                <p style={{  fontSize:"13px"}}> Opt-in to receive occasional,<br /> product updates, user research invitations, company announcements, and digests.</p>

              </label>
            )
          }
          <button type='submit' className='auth-btn'> { isSignup ? 'Signup':'Log in'}</button>
          {
            isSignup && (
              <p style={{color:"#666767"  , fontSize:"13px"}}>
               By clicking “Sign up”, you agree to our
               <span style={{color:"#007ac6"}}> terms of<br/> service</span> ,
               <span style={{color:"#007ac6"}} > privacy policy </span>and
               <span style={{color:"#007ac6"}}  > cookie policy</span> 

              </p>
            )
          }
        </form>
        <p>
          {isSignup ? 'already have an account?' : "Don' t have an account ?"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ?"Log in":"Sign up"}</button>
        </p>
     
      </div>
    </section>
  );
};

export default Auth;
