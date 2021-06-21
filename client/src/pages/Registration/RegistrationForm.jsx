import { Box, Button, Typography } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorCreator,
  registrationRequestCreator,
} from "../../redux/authReducer";
import { MainInput } from "../../components/MainInput";
import { ErrorView } from "../../components/ErrorView";
import { initial, validate } from "./helpers/form";
import { useEffect } from "react";

export function RegistrationForm({ isFetching }) {
  const authError = useSelector((state) => state.auth.error);

  const dispatch = useDispatch();

  const form = useForm({
    //INITIAL FORM STATE
    initial,
    clearError: () => dispatch(clearErrorCreator()),
    onSubmit: (values) => {
      delete values.password2;
      dispatch(registrationRequestCreator(values));
    },
    validate,
    clearAfterValidation: true,
  });

  useEffect(() => {
    form.forceClear();
  }, [authError]);

  const errorsArray = Object.entries(form.errors);

  return (
    <form id="login-form" onSubmit={form.onSubmit}>
      <Typography variant="h4" align="center">
        Registration
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
      <MainInput
        mt={1}
        onChange={form.onChange("password2")}
        value={form.values.password2}
        placeholder="Repeat password"
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
