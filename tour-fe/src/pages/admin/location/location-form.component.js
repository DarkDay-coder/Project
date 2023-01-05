import { useFormik } from 'formik';
import { Form, Col, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const LocationForm = ({ data, submitForm }) => {
   const locationValidate = Yup.object({
      name: Yup.string()
         .nullable()
         .required('Name is required')
         .min(2, 'name should be alteast 3 character long'),
      country: Yup.string().nullable().required('Country is required'),
      imageCover: Yup.object().nullable(),
   });
   const formik = useFormik({
      initialValues: data,
      validationSchema: locationValidate,
      onSubmit: (values) => {
         submitForm(values);
         console.log(values);
      },
   });

   // useEffect(() => {
   //     if(data) {
   //         formik.setValues({
   //             ...data
   //         })
   //     }
   // },[data])

   return (
      <>
         <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="row mb-3">
               <Col as="label" className="form-label" sm={3}>
                  Location Name:
               </Col>
               <Col sm={9}>
                  <Form.Control
                     type="text"
                     value={formik.values?.name}
                     size="sm"
                     name="name"
                     onChange={formik.handleChange}
                  />
                  <span className="text-danger">{formik?.errors?.name}</span>
               </Col>
            </Form.Group>

            <Form.Group className="row mb-3">
               <Col as="label" className="form-label" sm={3}>
                  Country
               </Col>
               <Col sm={9}>
                  <Form.Control
                     size="sm"
                     name="country"
                     value={formik.values?.country}
                     onChange={formik.handleChange}
                  ></Form.Control>
                  <span className="text-danger">{formik?.errors?.country}</span>
               </Col>
            </Form.Group>
            <Form.Group className="row mb-3">
               <Col as="label" className="form-label" sm={3}>
                  Is Active
               </Col>
               <Col sm={9}>
                  <Form.Check
                     type="switch"
                     id="custom-switch"
                     label="Yes"
                     name="status"
                     checked={formik.values.status ? true : false}
                     onChange={(e) => {
                        formik.setValues({
                           ...formik.values,
                           status: e.target.checked,
                        });
                     }}
                  />
                  <span className="text-danger">{formik?.errors?.status}</span>
               </Col>
            </Form.Group>

            <Form.Group className="row mb-3">
               <Col as="label" className="form-label" sm={3}>
                  Cover Image
               </Col>
               <Col sm={6}>
                  <Form.Control
                     type="file"
                     size="sm"
                     accept="image/*"
                     name="imageCover"
                     onChange={(e) => {
                        formik.setValues({
                           ...formik.values,
                           image: e.target.files[0],
                        });
                     }}
                  />
                  <span className="text-danger">{formik?.errors?.image}</span>
               </Col>
               <Col>
                  {formik?.values?.image ? (
                     <img
                        src={
                           typeof formik.values.image === 'object'
                              ? URL.createObjectURL(formik.values.image)
                              : process.env.REACT_APP_IMAGE_URL +
                                formik.values.image
                        }
                        className="img img-fluid"
                     />
                  ) : (
                     <></>
                  )}
               </Col>
            </Form.Group>

            <Form.Group className="text-center">
               <Button
                  className="btn-success lab-btn mx-2"
                  onClick={formik.handleSubmit}
               >
                  <i className="icofont-paper-plane mx-1"> </i> Create User{' '}
                  <i className="icofont-paper-plane mx-1"></i>
               </Button>
               <NavLink className="btn-warning  lab-btn mx-2" to="/admin/users">
                  <i className="icofont-exit mx-1"> </i> Cancel{' '}
                  <i className="icofont-exit mx-1"></i>
               </NavLink>
            </Form.Group>
         </Form>
      </>
   );
};

export default LocationForm;
