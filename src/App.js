import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import { DisplayFormikState } from "./helper"

const schema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match")
    .required("Confirm Password is required"),
  birthMon: Yup.number().required("Birth Month is required"),
  birthDay: Yup.number().required("Birth Day is required"),
  birthYear: Yup.number().required("Birth Year is required"),
  phone: Yup.number().typeError("Invalid phone number"),
  country: Yup.string().required("Country is required"),
  zip: Yup.number().required("Zip code is required"),
  terms: Yup.boolean().oneOf(
    [true],
    "Must accept terms & conditions and privacy policy"
  ),
  offers: Yup.boolean(),
})

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  birthMon: "",
  birthDay: "",
  birthYear: "",
  phone: "",
  country: "",
  zip: "",
  terms: false,
  offers: false,
}

const birthMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]
const birthDays = Array(31)
  .fill(1)
  .map((x, y) => x + y)
const birthYears = Array(100)
  .fill(1935)
  .map((x, y) => x + y)

const App = () => (
  <div class="container">
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
              <Form.Label>First Name *</Form.Label>
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
            <Form.Group controlId="validationFormikLastName">
              <Form.Label>Last Name *</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                placeholder="Odinson"
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={errors.lastName}
              />
              {errors.lastName && touched.lastName && (
                <div>{errors.lastName}</div>
              )}
            </Form.Group>
            <Form.Group controlId="validationFormikEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={values.email}
                placeholder="thor.odinson@asgard.com"
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={errors.email}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </Form.Group>
            <Form.Group controlId="validationFormikPassword">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={errors.password}
              />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
            </Form.Group>
            <Form.Group controlId="validationFormikConfirmPassword">
              <Form.Label>Confirm Password *</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.confirmPassword && !errors.confirmPassword}
                isInvalid={errors.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div>{errors.confirmPassword}</div>
              )}
            </Form.Group>
            <Form.Label htmlFor="birthMon">Birthdate *</Form.Label>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormikBirthMon">
                <Form.Control
                  as="select"
                  name="birthMon"
                  value={values.birthMon}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.birthMon && !errors.birthMon}
                  isInvalid={errors.birthMon}
                >
                  <option value="" defaultValue disabled hidden>
                    Select Month
                  </option>
                  {birthMonths.map((month, index) => (
                    <option key={month} value={index}>
                      {month}
                    </option>
                  ))}
                </Form.Control>
                {errors.birthMon && touched.birthMon && (
                  <div>{errors.birthMon}</div>
                )}
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikBirthDay">
                <Form.Control
                  as="select"
                  name="birthDay"
                  value={values.birthDay}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.birthDay && !errors.birthDay}
                  isInvalid={errors.birthDay}
                >
                  <option value="" defaultValue disabled hidden>
                    Select Day
                  </option>
                  {birthDays.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </Form.Control>
                {errors.birthDay && touched.birthDay && (
                  <div>{errors.birthDay}</div>
                )}
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikBirthYear">
                <Form.Control
                  as="select"
                  name="birthYear"
                  value={values.birthYear}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.birthYear && !errors.birthYear}
                  isInvalid={errors.birthYear}
                >
                  <option value="" defaultValue disabled hidden>
                    Select Year
                  </option>
                  {birthYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Form.Control>
                {errors.birthYear && touched.birthYear && (
                  <div>{errors.birthYear}</div>
                )}
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="validationFormikPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                value={values.phone}
                placeholder="333-333-3333"
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.phone && !errors.phone}
                isInvalid={errors.phone}
              />
              {errors.phone && touched.phone && <div>{errors.phone}</div>}
            </Form.Group>
            <Form.Group controlId="validationFormikCountry">
              <Form.Label>Country *</Form.Label>
              <Form.Row>
                <Form.Check
                  type="radio"
                  name="country"
                  value="usa"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.country && !errors.country}
                  isInvalid={errors.country}
                />
                <span>usa img</span>
                <Form.Check
                  type="radio"
                  name="country"
                  value="can"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.country && !errors.country}
                  isInvalid={errors.country}
                />
                <span>can img</span>
              </Form.Row>
              {errors.country && touched.country && <div>{errors.country}</div>}
            </Form.Group>
            <Form.Group controlId="validationFormikZip">
              <Form.Label>Zip/Postal Code *</Form.Label>
              <Form.Control
                type="number"
                name="zip"
                value={values.zip}
                placeholder="12345"
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.zip && !errors.zip}
                isInvalid={errors.zip}
              />
              {errors.zip && touched.zip && <div>{errors.zip}</div>}
            </Form.Group>
            <Form.Group controlId="validationFormikTerms">
              <Form.Row>
                <Form.Check
                  type="checkbox"
                  name="terms"
                  checked={values.terms}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.terms && !errors.terms}
                  isInvalid={errors.terms}
                />
                <Form.Label>
                  Yes, I accept the Terms & Conditions and Privacy Policy *
                </Form.Label>
              </Form.Row>
              {errors.terms && touched.terms && <div>{errors.terms}</div>}
            </Form.Group>
            <Form.Group controlId="validationFormikOffers">
              <Form.Row>
                <Form.Check
                  type="checkbox"
                  name="offers"
                  checked={values.offers}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.offers && !errors.offers}
                  isInvalid={errors.offers}
                />
                <Form.Label>
                  Yes, I'd like to receive news and special offers
                </Form.Label>
              </Form.Row>
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
