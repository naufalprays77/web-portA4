export default function validateInfoRegister(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be 8 characters or more';
  }

  if (!values.confrimPassword) {
    errors.confrimPassword = 'Confrim Password is required';
  } else if (values.confrimPassword !== values.password) {
    errors.confrimPassword = 'Passwords do not match';
  }

  if (!values.name) {
    errors.name = 'Name is required';
  }

  return errors;
}
