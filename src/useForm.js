import { useState, useEffect } from "react";

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);
  console.log(values);

  useEffect(() => {
    console.log("useForm");
  }, []);

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];
};
