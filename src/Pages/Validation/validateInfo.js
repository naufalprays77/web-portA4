export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  } else if (values.email !== 'admin@gmail.com') {
    errors.password = 'Email or password is wrong';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be 8 characters or more';
  } else if (values.password !== '123456789') {
    errors.password = 'Email or password is wrong';
  }

  return errors;
}
