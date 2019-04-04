import React, { Component } from "react"
import { Formik } from "formik"
import * as yup from "yup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
class App extends Component {
  schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    birthMon: yup.string().required(),
    birthDay: yup.number().required(),
    birthYear: yup.number().required(),
    phone: yup.number(),
    country: yup.bool().required(),
    zip: yup.number().required(),
    terms: yup.bool().required(),
    offers: yup.bool(),
  })

  initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthMon: "",
    birthDay: "",
    birthYear: "",
    phone: "",
    country: false,
    zip: "",
    terms: false,
    offers: false,
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={this.initialValues}
          validationSchema={this.schema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="validationFormikFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  placeholder="Thor"
                />
                <Form.Control.Feedback type="invalid">
                  Looks bad!
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit">Register</Button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default App
