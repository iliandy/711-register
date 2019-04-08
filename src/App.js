import React from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const schema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
})

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
}

const App = () => (
  <div>
    <h1>Register</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName && (
            <div>{errors.firstName}</div>
          )}
          <Field name="lastName" />
          {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
          <Field name="email" type="email" />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)

export default App
