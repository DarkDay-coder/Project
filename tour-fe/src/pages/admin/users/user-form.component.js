import { Formik, useFormik } from 'formik';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { userValidation } from '../../validation/user.validation';

const UserForm = ({ data, submitForm }) => {
   const {
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
      setValues,
   } = useFormik({
      initialValues: data,
      validationSchema: userValidation,
      onSubmit: (values, action) => {
         submitForm(values);
         action.resetForm();
      },
   });

   return (
      <Form onSubmit={handleSubmit}>
         <Form.Group className="my-2">
            <Form.Control
               className="form-control"
               type="text"
               name="name"
               placeholder="Enter User's Name *"
               value={values.name}
               onChange={handleChange}
               onBlur={handleBlur}
            />
            <span className="text-danger">
               {errors.name && touched.name ? errors.name : ''}
            </span>
         </Form.Group>
         <Form.Group className="my-2">
            <Form.Control
               className="form-control"
               type="text"
               name="email"
               placeholder="Enter User's Email Address *"
               value={values.email}
               onChange={handleChange}
               onBlur={handleBlur}
            />
            <span className="text-danger">
               {errors.email && touched.email ? errors.email : ''}
            </span>
         </Form.Group>
         <Form.Group className="form-group my-2">
            <div className="d-flex flex-row">
               <Form.Control
                  className="form-control h-25"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter user's Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
               {errors.password && touched.password ? errors.password : ''}
            </span>
         </Form.Group>
         <Form.Group className="form-group my-2">
            <div className="d-flex flex-row">
               <Form.Control
                  className="form-control h-25"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter user's Password again"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
               {errors.confirmPassword && touched.confirmPassword
                  ? errors.confirmPassword
                  : ''}
            </span>
         </Form.Group>
         {/* TODO: select option to choose between users role */}
         <Form.Select
            size="sm"
            name="role"
            className="my-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.role}
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
            {errors.role && touched.role ? errors.role : ''}
         </span>
         <Form.Select
            size="sm"
            name="active"
            className="my-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.active}
         >
            <option value={null}>--Select one--</option>
            <option value={true}>Active</option>
            <option value={false}>In-active</option>
         </Form.Select>
         <span className="text-danger">
            {errors.active && touched.active ? errors.active : ''}
         </span>
         <Form.Group className="my-2">
            <Row className="mb-0">
               <Col sm={9}>
                  <Form.Control
                     className="form-control"
                     type="file"
                     name="image"
                     accept="image/*"
                     // value={values.image}
                     onChange={(e) => {
                        setValues({
                           ...values,
                           image: e.target.files[0],
                        });
                     }}
                     onBlur={handleBlur}
                  />
                  <span className="text-danger">
                     {errors.image && touched.image ? errors.image : ''}
                  </span>
               </Col>
               <Col sm={3} className="text-center p-2">
                  {values.image ? (
                     <img
                        src={URL.createObjectURL(values.image)}
                        className="img img-fluid rounded-circle h-50 w-50"
                     ></img>
                  ) : (
                     ''
                  )}
               </Col>
            </Row>
         </Form.Group>
         <Form.Group className="text-center">
            <Button className="btn-success lab-btn mx-2" type="submit">
               <i className="icofont-paper-plane mx-1"> </i> Create User{' '}
               <i className="icofont-paper-plane mx-1"></i>
            </Button>
            <Button className="btn-warning  lab-btn mx-2" type="reset">
               <i className="icofont-exit mx-1"> </i> Cancel{' '}
               <i className="icofont-exit mx-1"></i>
            </Button>
         </Form.Group>
      </Form>
   );
};

export default UserForm;
