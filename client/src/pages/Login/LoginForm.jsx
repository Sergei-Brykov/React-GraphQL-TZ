import { Box, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useForm from "../../hooks/useForm";
import {
  clearErrorCreator,
  logInRequestCreator,
} from "../../redux/authReducer";
import { MainInput } from "../../components/MainInput";
import { ErrorView } from "../../components/ErrorView";
import { initial, validate } from "./helpers/form";

export function LoginForm({ isFetching }) {
  const authError = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const form = useForm({
    //INITIAL FORM STATE
    initial,
    clearError: () => dispatch(clearErrorCreator()),
    onSubmit: (values) => dispatch(logInRequestCreator(values)),
    validate,
  });

  const errorsArray = Object.entries(form.errors);

  return (
    <form id="login-form" onSubmit={form.onSubmit}>
      <Typography variant="h4" align="center">
        Log in
      </Typography>
      <MainInput
        mt={2}
        onChange={form.onChange("login")}
        value={form.values.login}
        placeholder="login"
        error={!!form.errors.login}
      />
      <MainInput
        mt={1}
        onChange={form.onChange("password")}
        value={form.values.password}
        placeholder="Password"
        type="password"
        error={!!form.errors.login || !!form.errors.password}
      />

      <Box mt={1} mb={1}>
        <Button
          disabled={isFetching || form.disabledForm}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit
        </Button>
      </Box>
      {errorsArray.map((err, index) => (
        <ErrorView key={index} error={err[1]} />
      ))}
      {authError && <ErrorView key={authError} error={authError} />}
    </form>
  );
}
