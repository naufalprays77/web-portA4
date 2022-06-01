import { React } from 'react';
import { Link } from 'react-router-dom';
import validateInfoRegister from '../Validation/validateInforegister';
import useForm from '../Validation/useForm';
import Logo from '../../Assets/Img/NPLogo1.1.png';

const FormRegister = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors, isSubmit } = useForm(submitForm, validateInfoRegister);

  return (
    <div className="">
      {Object.keys(errors).length === 0 && isSubmit ? (window.location.href = '/') : <pre></pre>}
      <div className="form-content shadow-form">
        <h1 className="text-center font-bold text-5xl text-gray-700 pb-4 pt-8 ">Register</h1>
        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-8 text-center relative flex flex-row flex-wrap gap-5 justify-center" noValidate>
          <div className="text-left relative pb-2 flex flex-col basis-[35%]">
            <label className="mb-2 text-base text-gray-800">Name</label>
            <input className="bg-gray-200 py-2 px-3 border-2 outline-none" type="text" name="name" placeholder="Input your name" value={values.name} onChange={handleChange} />
            {errors.name && <p className="text-[red] ">{errors.name}</p>}
          </div>
          <div className="text-left relative pb-2 flex flex-col basis-[35%]">
            <label className="mb-2 text-base text-gray-800">Email</label>
            <input className="bg-gray-200 py-2 px-3 border-2 outline-none" type="text" name="email" placeholder="Input your email" value={values.email} onChange={handleChange} />
            {errors.email && <p className="text-[red] ">{errors.email}</p>}
          </div>
          <div className="text-left relative pb-2 flex flex-col basis-[35%]">
            <label className="mb-2 text-base text-gray-800">Password</label>
            <input className="bg-gray-200 py-2 px-3 border-2 outline-none" type="password" name="password" placeholder="Input your password" value={values.password} onChange={handleChange} />
            {errors.password && <p className="text-[red]">{errors.password}</p>}
          </div>
          <div className="text-left relative pb-2 flex flex-col basis-[35%]">
            <label className="mb-2 text-base text-gray-800">Confrim Password</label>
            <input className="bg-gray-200 py-2 px-3 border-2 outline-none" type="password" name="confrimPassword" placeholder="Input your confrim password" value={values.confrimPassword} onChange={handleChange} />
            {errors.confrimPassword && <p className="text-[red]">{errors.confrimPassword}</p>}
          </div>
          <button className="flex flex-col basis-[72%] w-full items-center bg-indigo-600 text-white py-2 px-6 mt-10 mb-3 rounded hover:bg-indigo-700" type="submit">
            Register
          </button>
          <span className=" pt-[-10px] text-[14px] basis-[100%]">
            <nav>
              Already have an account ?{' '}
              <Link to="/" className="text-[blue] ">
                Login
              </Link>
            </nav>
          </span>
          <div className="logo">
            <img src={Logo} className="w-12 mx-auto relative" alt="logo" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormRegister;
