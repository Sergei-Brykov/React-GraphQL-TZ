import {Box, Button, Container, FilledInput, TextField, Typography} from "@material-ui/core";
import {useState} from "react";

function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      body: JSON.stringify({login, password})
    })
  }

  return (
    <Box>
      <Typography variant="h4" align="center">Log in</Typography>
      <Box mt={2}>
        <TextField value={login} onChange={(e) => setLogin(e.target.value)} className="mt-2" variant="outlined"
                   fullWidth placeholder="Login" size="small"/>
      </Box>
      <Box mt={1}>
        <TextField value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2" variant="outlined"
                   type="password" fullWidth placeholder="Password" size="small"/>
      </Box>
      <Box mt={2}>
        <Button onClick={onSubmit} variant="contained" color="primary" fullWidth>Submit</Button>
      </Box>
    </Box>
  )
}

export function LoginFormComponent() {


  return (
    <Container maxWidth="lg" disableGutters>
      <Box mt={5} width={300} margin="auto" display="flex" justifyContent="center" minHeight="100vh">
        <LoginForm/>
      </Box>
    </Container>
  )
}