import { Box, Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import { path } from "../../provider/path";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
  return (
    <Container maxWidth="lg" disableGutters>
      <Box
        mt={8}
        width={300}
        margin="auto"
        display="flex"
        justifyContent="center"
      >
        <Box>
          <LoginForm />
          <Box mt={1} display="flex" justifyContent="flex-end">
            <NavLink to={path.registration}> Sign up </NavLink>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
