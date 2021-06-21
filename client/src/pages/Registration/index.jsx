import { Box, Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import { RegistrationForm } from "./RegistrationForm";
import { path } from "../../provider/path";

export function RegistrationPage() {
  return (
    <Container maxWidth="lg" disableGutters>
      <Box
        mt={5}
        width={300}
        margin="auto"
        display="flex"
        justifyContent="center"
        minHeight="100vh"
      >
        <Box>
          <RegistrationForm />
          <Box display="flex" justifyContent="flex-end">
            <NavLink to={path.login}> Sign in </NavLink>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
