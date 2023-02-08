import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MySelect, MyCheckbox, MyTextInput } from "../components/";

import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

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
            <MyTextInput
              placeholder="Firstname"
              label="First Name"
              name="firstName"
            />
            <MyTextInput
              placeholder="Lastname"
              label="Last Name"
              name="lastName"
            />
            <MyTextInput placeholder="Email" label="Email" name="email" />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="frontend">Frontend React</option>
              <option value="backend">Backend ssr node js</option>
              <option value="devops">Dev ops</option>
            </MySelect>
            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
