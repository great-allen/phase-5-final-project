import * as React  from 'react';
import { useState } from 'react';

// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
function SignupForm({onLogin,setShowLogin}) {
    const [username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isLoading,setIsLoading]=useState(false)
    const handleSignUp = (event) => {
        event.preventDefault();
        
        setIsLoading(true);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
        password,
        password_confirmation: passwordConfirmation,
        
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => alert(err.errors));
          }
        });
      };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/starwars.jpeg)`,
            // backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                
                label="Username"
                
                // autoComplete="email"
                autoFocus
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                
                label="Email Address"
                
                // autoComplete="email"
                autoFocus
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                // name="password"
                label="Password"
                type="password"
               
                // autoComplete="current-password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                // name="password Confirmation"
                label="password Confirmation"
                type="password"
                // id="passwordConfirmation"
                autoComplete="current-password"
                value={passwordConfirmation}
                onChange={(e)=>setPasswordConfirmation(e.target.value)}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="#" variant="body2">
                  Already have an account? &nbsp;
                  <Button color="secondary" onClick={() => setShowLogin(true)}>
              Sign in
            </Button>
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default SignupForm