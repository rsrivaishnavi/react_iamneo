// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react';
// import { auth } from '../../firebase';

// const SignUp=()=>
// {
//     const[email,setEmail]=useState("");
//     const[password,setpassword]=useState("");

//     const signUp=(e)=>
//     {
//         e.preventDefault();
//         createUserWithEmailAndPassword(auth,email,password)
//         .then((userCredential)=>{
//             console.log(userCredential)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//     }
//     return(
//         <div className='sign-up-container'>
//             <form onSubmit={signUp}>
//                 <h1>Create Account</h1>
//                 <input type='email' placeholder='Enter you Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
//                 <input type='password' placeholder='Enter your Password' value={password} onChange={(e)=>setpassword(e.target.value)}></input>
//                 <button type='submit'>Sign Up</button>
//             </form>
//         </div>
//     );
// };
// export default SignUp;
// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const signUp = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="sign-up-container">
//       <form onSubmit={signUp}>
//         <h1>Create Account</h1>
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
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase';

// // Accept the 'onSignUpSuccess' prop for navigation
// const SignUp = ({ onSignUpSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const signUp = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//         onSignUpSuccess(); // Navigate to Appbarr on successful signup
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="sign-up-container">
//       <form onSubmit={signUp}>
//         <h1>Create Account</h1>
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
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

// Accept the 'onSignUpSuccess' prop for navigation
const SignUp = ({ onSignUpSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = (e) => {
    e.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setLoading(false);
        onSignUpSuccess(); // Navigate to Appbarr on successful signup
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to create account. Please check your details and try again.');
        setLoading(false);
      });
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
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
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignUp;

