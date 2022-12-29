import { useFormik } from 'formik';
import { Fragment } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHeader from './layout/headerLayout.page';
import { registerValidationSchema } from './validation/register.validation';
let socialList = [
   {
      link: '#',
      iconName: 'icofont-facebook',
      className: 'facebook',
   },
   {
      link: '#',
      iconName: 'icofont-twitter',
      className: 'twitter',
   },
   {
      link: '#',
      iconName: 'icofont-linkedin',
      className: 'linkedin',
   },
   {
      link: '#',
      iconName: 'icofont-instagram',
      className: 'instagram',
   },
];
let initialValues = { name: '', email: '', password: '', confirmPassword: '' };
const RegisterPage = () => {
   const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
      useFormik({
         initialValues,
         validationSchema: registerValidationSchema,
         onSubmit: (values, action) => {
            action.resetForm();
            console.log(values);
         },
      });

   return (
      <Fragment>
         <PageHeader title={'Register Now'} curPage={'Register'} />
         <div className="login-section p-2 section-bg">
            <Container>
               <div className="account-wrapper p-2 pb-5">
                  <h3>Glad to see you here!</h3>
                  <h3 className="title">Registration Form</h3>
                  <Form className="account-form" onSubmit={handleSubmit}>
                     <Form.Group className="form-group">
                        <Form.Control
                           className="form-control"
                           type="text"
                           name="name"
                           value={values.name}
                           placeholder="Enter your Name...."
                           onChange={handleChange}
                           onBlur={handleBlur}
                        />
                        <span className="text-danger">
                           {errors.name && touched.name ? errors.name : ''}
                        </span>
                     </Form.Group>
                     <Form.Group className="form-group">
                        <Form.Control
                           className="form-control"
                           type="email"
                           value={values.email}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           name="email"
                           placeholder="Enter Your Email Address..."
                        />
                        <span className="text-danger">
                           {errors.email && touched.email ? errors.email : ''}
                        </span>
                     </Form.Group>
                     <Form.Group className="form-group">
                        <div className="d-flex flex-row">
                           <Form.Control
                              className="form-control h-25"
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Enter your Password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <Button
                              className="w-25 m-1 p-0"
                              onClick={(e) => {
                                 let pass = document.getElementById('password');
                                 if (pass.type == 'text') {
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
                           {errors.password && touched.password
                              ? errors.password
                              : ''}
                        </span>
                     </Form.Group>
                     <Form.Group className="form-group">
                        <div className="d-flex">
                           <Form.Control
                              className="form-control h-25"
                              type="password"
                              name="confirmPassword"
                              id="confirmPassword"
                              value={values.confirmPassword}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Re-enter your password..."
                           />
                           <Button
                              className="w-25 m-1 p-0"
                              onClick={(e) => {
                                 let pass =
                                    document.getElementById('confirmPassword');
                                 if (pass.type == 'text') {
                                    pass.type = 'password';
                                 } else pass.type = 'text';
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
                     <Form.Group className="form-group">
                        <Button className="lab-btn" type="submit">
                           <i className="icofont-check"> </i> Proceed!{' '}
                           <i className="icofont-check"></i>
                        </Button>
                     </Form.Group>
                  </Form>
                  <div className="account-bottom">
                     <span className="d-block cate pt-10">
                        Are you a member? <Link to="/login">Login</Link>
                     </span>
                     <span className="or">
                        <span>or</span>
                     </span>
                     <h5 className="subtitle">Register with Social Media</h5>
                     <ul className="lab-ul social-icons justify-content-center">
                        {socialList.map((val, i) => (
                           <li key={i}>
                              <Link href={val.link} className={val.className}>
                                 <i className={val.iconName}></i>
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </Container>
         </div>
         {/* <Footer /> */}
      </Fragment>
   );
};

export default RegisterPage;
