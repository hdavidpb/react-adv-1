import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Campo requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 10 caracteres o menos")
            .required("Campo requerido"),
          email: Yup.string()
            .email("Sintaxin incorrecta")
            .required("Campo requerido"),
          terms: Yup.bool().isTrue("Debe aceptar los terminos y condiciones"),
          jobType: Yup.string().required("Campo requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">FirstName</label>
            <Field name="firstName" type="text" />

            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">lastName</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label> Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="frontend">Frontend React</option>
              <option value="backend">Backend ssr node js</option>
              <option value="devops">Dev ops</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />
            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
