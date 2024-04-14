import * as Yup from "yup";
import { Field, Formik } from "formik";
import { Form } from "formik";
import { ErrorMessage } from "formik";

const LoginForm = () => {
  const validationSchema = Yup.object({
    login: Yup.string()
      .required("Login is required")
      .min(5, "Login must be at least 5 characters")
      .max(15, "Login must be at most 15 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters")
  });

  const handleSubmit = (values: { login: string; password: string }) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="login">Login</label>
          <Field type="text" name="login" />
          <ErrorMessage name="login" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
