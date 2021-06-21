export function validate(values) {
  const errors = {};

  if (values.login.trim().length < 3) {
    errors.login = "Please enter your name";
  }

  if (values.password !== values.password2) {
    errors.password = "Enter the same passwords";
  }

  if (values.password.length < 6) {
    errors.password = "Your password is too short";
  }

  return errors;
}

export const initial = { login: "", password: "", password2: "" };
