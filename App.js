// import React, { useState } from 'react';
// import './App.css';
// //import SignIn from './components/auth/SignIn';
// import SignUp from './components/auth/SignUp';
// import AuthDetails from './components/auth/AuthDetails';
// import Appbarr from './components/Appbarr';

// function App()
// {
//   const [view, setView] = useState('signup');
//   const handleViewChange = (newView) => {
//     setView(newView);
//   return(
//     <div className="App">
//       <Appbarr />
      
//       <SignUp />
//       <AuthDetails />
//     </div>
//   );
// }
// export default App;
// import React, { useState } from 'react';
// import './App.css';
// import Appbarr from './components/Appbarr';
// import SignUp from './components/auth/SignUp';
// import SignIn from './components/auth/SignIn';
// import AuthDetails from './components/auth/AuthDetails';


// function App() {
//   // State to track the current page
//   const [currentPage, setCurrentPage] = useState('appbar');

//   // Function to change the page
//   const navigateTo = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="App">
//       {currentPage === 'appbar' && <Appbarr onLogin={() => navigateTo('signin')} />}
//       {currentPage === 'signin' && <SignIn onSignUp={() => navigateTo('signup')} />}
//       {currentPage === 'signup' && <SignUp />}
//       <AuthDetails />
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import './App.css';
// import Appbarr from './components/Appbarr';
// import SignUp from './components/auth/SignUp';
// import SignIn from './components/auth/SignIn';
// import AuthDetails from './components/auth/AuthDetails';

// function App() {
//   // State to track the current page
//   const [currentPage, setCurrentPage] = useState('appbar');

//   // Function to change the page
//   const navigateTo = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="App">
//       {currentPage === 'appbar' && <Appbarr onLogin={() => navigateTo('signin')} />}
//       {currentPage === 'signin' && (
//         <SignIn 
//           onSignUp={() => navigateTo('signup')}
//           onLoginSuccess={() => navigateTo('appbar')} // Navigate to Appbarr after login
//         />
//       )}
//       {currentPage === 'signup' && (
//         <SignUp 
//           onSignUpSuccess={() => navigateTo('appbar')} // Navigate to Appbarr after signup
//         />
//       )}
//       <AuthDetails />
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import Appbarr from './components/Appbarr';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import AuthDetails from './components/auth/AuthDetails';

function App() {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState('appbar');

  // Function to change the page
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'appbar' && <Appbarr onLogin={() => navigateTo('signin')} />}
      {currentPage === 'signin' && (
        <SignIn 
          onSignUp={() => navigateTo('signup')}
          onLoginSuccess={() => navigateTo('appbar')} // Navigate to Appbarr after login
        />
      )}
      {currentPage === 'signup' && (
        <SignUp 
          onSignUpSuccess={() => navigateTo('appbar')} // Navigate to Appbarr after signup
        />
      )}
      <AuthDetails />
    </div>
  );
}

export default App;
