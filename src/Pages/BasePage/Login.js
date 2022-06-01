import { React } from 'react';
import { Link } from 'react-router-dom';
import validateInfo from '../Validation/validateInfo';
import useForm from '../Validation/useForm';
import Logo from '../../Assets/Img/NPLogo1.1.png';

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors, isSubmit } = useForm(submitForm, validateInfo);

  return (
    <div className="container mx-auto px-2 max-w-5xl top-1/2 w-[30%]">
      {Object.keys(errors).length === 0 && isSubmit ? (window.location.href = '/home') : <pre></pre>}
      <div className="form-content shadow-form">
        <h1 className="text-center font-bold text-5xl text-gray-700 pb-4 pt-8 ">Login</h1>
        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-8 text-center relative" noValidate>
          <div className="text-left relative pb-2 flex flex-col">
            <label className="mb-2 text-base text-gray-800">Email</label>
            <input className="bg-gray-200 py-2 px-3 border-2 outline-none" type="email" name="email" placeholder="Input your email" value={values.email} onChange={handleChange} />
            {errors.email && <p className="text-[red] ">{errors.email}</p>}
          </div>
          <div className="text-left relative pb-2 flex flex-col">
            <label className="mb-2 text-base text-gray-800">Password</label>
            <input className="bg-gray-200 py-2 px-3 border-2 outline-none" type="password" name="password" placeholder="Input your password" value={values.password} onChange={handleChange} />
            {errors.password && <p className="text-[red]">{errors.password}</p>}
          </div>
          <button className="flex flex-col w-full items-center bg-indigo-600 text-white py-2 px-6 mt-10 mb-3 rounded hover:bg-indigo-700" type="submit">
            Login
          </button>
          <span className="pt-[-10px] text-[14px]">
            <nav>
              Don't have an account yet ?{' '}
              <Link to="/register" className="text-[blue] ">
                Create Account
              </Link>
            </nav>
          </span>
          <div className="logo mt-10">
            <img src={Logo} className="w-12 mx-auto relative" alt="logo" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormLogin;
