import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { DisplayFormikState } from "./helper"

const schema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  // lastName: Yup.string().required("Required"),
  // email: Yup.string()
  //   .email("Invalid email")
  //   .required("Required"),
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
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props

        return (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="validationFormikFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                placeholder="Thor"
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={errors.firstName}
              />
              {errors.firstName && touched.firstName && (
                <div>{errors.firstName}</div>
              )}
            </Form.Group>
            <Button
              variant="info"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </Button>
            <Button type="submit">Register</Button>
            <DisplayFormikState {...props} />
          </Form>
        )
      }}
    </Formik>
  </div>
)

export default App
