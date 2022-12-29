import { Fragment } from 'react';
import { Button, Container, Form, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginValidationSchema } from './validation/login.validation';
import PageHeader from './layout/headerLayout.page';

const socialList = [
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
   {
      link: '#',
      iconName: 'icofont-pinterest',
      className: 'pinterest',
   },
];
let initialValues = {
   email: '',
   password: '',
};
const LoginPage = () => {
   document.title = 'Tour | Login';
   const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
      useFormik({
         initialValues,
         validationSchema: loginValidationSchema,
         onSubmit: (values, action) => {
            console.log(
               '🚀 ~ file: login.page.js:45 ~ LoginPage ~ values',
               values
            );
            // let response = axios.post(
            //    'http://localhost:15000/api/v1/login',
            //    values,
            //    {
            //       headers: {
            //          'content-type': 'application/json',
            //       },
            //    }
            // );
            action.resetForm();
            console.log(values);
         },
      });

   return (
      <Fragment>
         <PageHeader title={'Login Page'} curPage={'Login'} />
         <div className="login-section p-1 section-bg">
            <Container>
               <div className="account-wrapper p-2 pb-5">
                  <h3 className="text-center">Welcome Back!</h3>
                  <h3 className="title">Login Form</h3>

                  <Form className="account-form" onSubmit={handleSubmit}>
                     <Form.Group className="my-1">
                        <Form.Control
                           className="form-control"
                           type="text"
                           name="email"
                           placeholder="Enter User Email Address *"
                           value={values.email}
                           onChange={handleChange}
                           onBlur={handleBlur}
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
                        <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                           <div className="checkgroup">
                              <input
                                 type="checkbox"
                                 name="remember"
                                 id="remember"
                                 onChange={handleChange}
                              />
                              <label htmlFor="remember">Remember Me</label>
                           </div>
                           {/* TODO: implement forget password code*/}
                           <NavLink className="nav-link" to="/forgetpass">
                              Forget Password?
                           </NavLink>
                        </div>
                     </Form.Group>
                     <Button
                        className="btn-success w-100 d-block lab-btn"
                        type="submit"
                     >
                        <i className="icofont-check"> </i> SIGN IN{' '}
                        <i className="icofont-check"></i>
                     </Button>
                  </Form>
                  <div className="account-bottom">
                     <span className="d-block cate pt-10">
                        Don't Have any Account?
                        <Link to="/register">
                           <i className="icofont-fire"></i>Sign Up
                        </Link>
                     </span>
                     <span className="or">
                        <span>or</span>
                     </span>
                     <h5 className="subtitle">Login With Social Media</h5>
                     <ul className="lab-ul social-icons justify-content-center">
                        {socialList.map((val, i) => (
                           <li key={i}>
                              <NavLink
                                 className="nav-link ${val.className}"
                                 href={val.link}
                              >
                                 <i className={val.iconName}></i>
                              </NavLink>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </Container>
         </div>
      </Fragment>
   );
};

export default LoginPage;
