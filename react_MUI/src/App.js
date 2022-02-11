import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function App() {
  
  // required 반드시 입력
  // Grid에 container 라고하는 prop을 가지고있는 컴포넌트가 두 개를 묶어준다.
  return (
    <Container coponent="main" maxWidth="xs">
      <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Avatar sx={{ m: 1, bgcolor:'secondary.main'}}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField margin="normal" label="Email Address" required name="email" autoFocus/>
        <TextField margin="normal" label="Password" type="password" required name="password"/>
        <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Remember me"/>
        <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>Sign in</Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link>Sing up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;