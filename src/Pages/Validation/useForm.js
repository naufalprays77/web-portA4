import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useForm = (callback, validate) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      callback();
    }
  }, [errors]);
  {
    // Object.keys(errors).length === 0 && isSubmitting ? (window.location.href = 'https://youtube.com/') : <pre></pre>;
  }

  return { handleChange, handleSubmit, values, errors, isSubmit };
};

export default useForm;
