import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { locationValidation } from '../../validation/location.validation';

const LocationForm = ({ data, submitForm, label, user }) => {
   // const params = useParams();
   const formik = useFormik({
      initialValues: data,
      validationSchema: locationValidation,
      onSubmit: (values, action) => {
         submitForm(values);
         // console.log(values);
         // action.resetForm();
      },
   });

   useEffect(() => {
      if (data) {
         formik.setValues({
            ...data,
         });
      }
   }, [data]);
   return (
      <Form>
         <Row>
            {/* Name */}
            <Col sm={6}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     name="location_name"
                     placeholder="Enter Location Name *"
                     value={formik.values?.location_name}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors?.location_name &&
                     formik.touched.location_name
                        ? formik.errors.location_name
                        : ''}
                  </span>
               </Form.Group>
            </Col>
            {/* Country */}
            <Col sm={6}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     name="country"
                     placeholder="Enter country of the location *"
                     value={formik.values?.country}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors.country && formik.touched.country
                        ? formik.errors.country
                        : ''}
                  </span>
               </Form.Group>
            </Col>
            {/* City */}
            <Col sm={6}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     name="city"
                     placeholder="Enter city of the location *"
                     value={formik.values?.city}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors.city && formik.touched.city
                        ? formik.errors.city
                        : ''}
                  </span>
               </Form.Group>
            </Col>
         </Row>

         <Row>
            {/* Status */}
            <Col sm={6}>
               <Form.Group>
                  <Row>
                     <Col sm={4}>Is Active ?</Col>
                     <Col sm={8}>
                        <Form.Check
                           type="switch"
                           label="Yes"
                           name="status"
                           checked={formik.values.status ? true : false}
                           value={formik.values?.status}
                           onChange={(e) => {
                              formik.setValues({
                                 ...formik.values,
                                 status: e.target.checked,
                              });
                           }}
                        />
                     </Col>
                  </Row>

                  <span className="text-danger">
                     {formik.errors.active && formik.touched.active
                        ? formik.errors.active
                        : ''}
                  </span>
               </Form.Group>
            </Col>
            {/* Created By */}
            <Col sm={6}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     name="createdBy"
                     value={user.name}
                     // value={formik.setValues({
                     //    ...formik.values,
                     //    createdBy: user.name,
                     // })}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
               </Form.Group>
            </Col>
         </Row>

         {/* Image */}
         <Form.Group className="my-2">
            <Row className="mb-0">
               <Col sm={7}>
                  <Form.Control
                     className="form-control"
                     type="file"
                     name="imageCover"
                     accept="image/*"
                     // value={formik.values?.image}
                     onChange={(e) => {
                        formik.setValues({
                           ...formik.values,
                           imageCover: e.target.files[0],
                        });
                     }}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik?.errors?.imageCover
                        ? formik.errors.imageCover
                        : ''}
                  </span>
               </Col>
               <Col sm={5} className="text-center p-2">
                  {formik?.values?.imageCover ? (
                     <img
                        className="img img-fluid rounded-circle h-50 w-50"
                        src={
                           typeof formik.values.imageCover === 'object'
                              ? URL.createObjectURL(formik.values.imageCover)
                              : `http://localhost:3005/images/${formik.values.imageCover}`
                        }
                     />
                  ) : (
                     <></>
                  )}
               </Col>
            </Row>
         </Form.Group>

         {/* Buttons */}
         <Form.Group className="text-center">
            <Button
               className="btn-success lab-btn mx-2"
               onClick={formik.handleSubmit}
            >
               <i className="icofont-paper-plane mx-1"> </i> {label}
               <i className="icofont-paper-plane mx-1"></i>
            </Button>
            <NavLink
               className="btn-warning  lab-btn mx-2"
               to="/admin/locations"
            >
               <i className="icofont-exit mx-1"> </i> Cancel{' '}
               <i className="icofont-exit mx-1"></i>
            </NavLink>
         </Form.Group>
      </Form>
   );
};

export default LocationForm;
