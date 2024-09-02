// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


// export default function ButtonAppBar({onLogin}) {
  

//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit" onClick={onLogin}>Login</Button>
//         </Toolbar>
//       </AppBar>
       
    
//     </>
    
//   );
// }
// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// // Accept the 'onLogin' prop for navigation
// export default function Appbarr({ onLogin }) {
//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Bank Management System
//           </Typography>
//           {/* Button to navigate to the SignIn page */}
//           <Button color="inherit" onClick={onLogin}>
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/futuristic-glowing-credit-card.jpg"></img>
//     </>
//   );
// }
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// Accept the 'onLogin' prop for navigation
export default function Appbarr({ onLogin }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bank Management System
          </Typography>
          {/* Button to navigate to the SignIn page */}
          <Button color="inherit" onClick={onLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <img 
        src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/futuristic-glowing-credit-card.jpg" 
        alt="Futuristic glowing credit card"
        style={{ width: '100%', height: 'auto', marginTop: '20px' }}
      />
    </>
  );
}
