// import { signInWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react';
// import { auth } from '../../firebase';
// const SignIn=(open)=>
// {
    
//     const[email,setEmail]=useState("");
//     const[password,setpassword]=useState("");

//     const signIn=(e)=>
//     {
//         e.preventDefault();
//         signInWithEmailAndPassword(auth,email,password)
//         .then((userCredential)=>{
//             console.log(userCredential)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//     }

//     return(
//         <div className='sign-in-container'>
//             <form onSubmit={signIn}>
//                 <h1>Log In to your Account</h1>
//                 <input type='email' placeholder='Enter you Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
//                 <input type='password' placeholder='Enter your Password' value={password} onChange={(e)=>setpassword(e.target.value)}></input>
//                 <button type='submit'>Log In</button>
//             </form>
//         </div>
//     );
// };
// export default SignIn;
// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase';

// // Accept the 'onSignUp' prop for navigation
// const SignIn = ({ onSignUp }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const signIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="sign-in-container">
//       <form onSubmit={signIn}>
//         <h1>Log In to your Account</h1>
//         <input
//           type="email"
//           placeholder="Enter your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter your Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Log In</button>
//       </form>
//       {/* Button to navigate to the SignUp page */}
//       <button onClick={onSignUp}>New User? Sign Up</button>
//     </div>
//   );
// };

// export default SignIn;
// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase';

// // Accept the 'onSignUp' and 'onLoginSuccess' props for navigation
// const SignIn = ({ onSignUp, onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const signIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//         onLoginSuccess(); // Navigate to Appbarr on successful login
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="sign-in-container">
//       <form onSubmit={signIn}>
//         <h1>Log In to your Account</h1>
//         <input
//           type="email"
//           placeholder="Enter your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter your Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Log In</button>
//       </form>
//       <button onClick={onSignUp}>New User? Sign Up</button>
//     </div>
//   );
// };

// export default SignIn;
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

// Accept the 'onSignUp' and 'onLoginSuccess' props for navigation
const SignIn = ({ onSignUp, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setLoading(false);
        onLoginSuccess(); // Navigate to Appbarr on successful login
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to log in. Please check your email and password.');
        setLoading(false);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In to your Account</h1>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
      <button onClick={onSignUp}>New User? Sign Up</button>
    </div>
  );
};

export default SignIn;
