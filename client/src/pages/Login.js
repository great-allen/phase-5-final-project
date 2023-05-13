import * as React  from 'react';
import { useState } from 'react';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
// import Avatar from '@mui/material/Avatar';



export default function Login({onLogin}) {

    const [showLogin, setShowLogin] = useState(true);
    
    // const [isLoading,setIsLoading]=useState(false)
    
    
  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} setShowLogin={setShowLogin} />
         
          
                
                
{/*                   
                  Don't have an account?
                  <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button> */}
                  
                
        </>
      ) : (
        <>
          <SignupForm onLogin={onLogin} setShowLogin={setShowLogin} />
          
          {/* <Grid container>
                
                <Grid item>
                  
                  Already have an account? 
                  <Button color="secondary" onClick={() => setShowLogin(true)}>
              Sign in
            </Button>
                  
                </Grid>
              </Grid> */}
        </>
      )}
    </div>
    
  );
}