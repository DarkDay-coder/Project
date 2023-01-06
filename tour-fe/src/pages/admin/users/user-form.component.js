import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import {
   editUserValidation,
   userValidation,
} from '../../validation/user.Validatin';

const UserForm = ({ data, submitForm, label }) => {
   const params = useParams();
   const formik = useFormik({
      initialValues: data,
      validationSchema: params.id ? editUserValidation : userValidation,
      onSubmit: (values, action) => {
         submitForm(values);
         action.resetForm();
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
         {/* Name */}
         <Form.Group className="my-2">
            <Form.Control
               className="form-control"
               type="text"
               name="name"
               placeholder="Enter User's Name *"
               value={formik.values?.name}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            <span className="text-danger">
               {formik.errors?.name && formik.touched.name
                  ? formik.errors.name
                  : ''}
            </span>
         </Form.Group>
         {/* Email */}
         <Form.Group className="my-2">
            <Form.Control
               className="form-control"
               type="text"
               name="email"
               placeholder="Enter User's Email Address *"
               value={formik.values?.email}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            <span className="text-danger">
               {formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : ''}
            </span>
         </Form.Group>
         {/* Password */}
         <Form.Group className="form-group my-2">
            <div className="d-flex flex-row">
               <Form.Control
                  className="form-control h-25"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter user's Password"
                  value={formik.values?.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               />
               <Button
                  className="w-25 m-1 p-0"
                  onClick={(e) => {
                     let pass = document.getElementById('password');
                     if (pass.type === 'text') {
                        pass.type = 'password';
                     } else {
                        pass.type = 'text';
                     }
                  }}
               >
                  <i className="icofont-eye"></i>
               </Button>
            </div>
            <span className="text-danger">
               {formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : ''}
            </span>
         </Form.Group>
         {/* Password Confirm */}
         <Form.Group className="form-group my-2">
            <div className="d-flex flex-row">
               <Form.Control
                  className="form-control h-25"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter user's Password again"
                  value={formik.values?.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               />
               <Button
                  className="w-25 m-1 p-0"
                  onClick={(e) => {
                     let pass = document.getElementById('confirmPassword');
                     if (pass.type === 'text') {
                        pass.type = 'password';
                     } else {
                        pass.type = 'text';
                     }
                  }}
               >
                  <i className="icofont-eye"></i>
               </Button>
            </div>
            <span className="text-danger">
               {formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? formik.errors.confirmPassword
                  : ''}
            </span>
         </Form.Group>
         {/* TODO: select option to choose between users role */}
         <Form.Group>
            <Form.Select
               size="sm"
               name="role"
               className="my-2"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values?.role}
            >
               <option value={null}>--Select the role--</option>
               <option value={'admin'}>Admin</option>
               <option value={'lead-guide'}>Lead-guide</option>
               <option value={'guide'}>Tour-guide</option>
               <option defaultValue value={'user'}>
                  Normal User
               </option>
            </Form.Select>
            <span className="text-danger">
               {formik.errors.role && formik.touched.role
                  ? formik.errors.role
                  : ''}
            </span>
         </Form.Group>
         {/* Active */}
         <Form.Group>
            <Row>
               <Col sm={2}>Is Active ?</Col>
               <Col sm={10}>
                  <Form.Check
                     type="switch"
                     id="custom-switch"
                     label="Yes"
                     name="active"
                     checked={formik.values.active ? true : false}
                     value={formik.values?.active}
                     onChange={(e) => {
                        formik.setValues({
                           ...formik.values,
                           active: e.target.checked,
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
         {/* Image */}
         <Form.Group className="my-2">
            <Row className="mb-0">
               <Col sm={7}>
                  <Form.Control
                     className="form-control"
                     type="file"
                     name="image"
                     accept="image/*"
                     // value={formik.values?.image}
                     onChange={(e) => {
                        formik.setValues({
                           ...formik.values,
                           image: e.target.files[0],
                        });
                     }}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik?.errors?.image ? formik.errors.image : ''}
                  </span>
               </Col>
               <Col sm={5} className="text-center p-2">
                  {formik?.values?.image ? (
                     <img
                        className="img img-fluid rounded-circle h-50 w-50"
                        src={
                           typeof formik.values.image === 'object'
                              ? URL.createObjectURL(formik.values.image)
                              : `http://localhost:3005/images/${formik.values.image}`
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
            <NavLink className="btn-warning  lab-btn mx-2" to="/admin/users">
               <i className="icofont-exit mx-1"> </i> Cancel{' '}
               <i className="icofont-exit mx-1"></i>
            </NavLink>
         </Form.Group>
      </Form>
   );
};

export default UserForm;
