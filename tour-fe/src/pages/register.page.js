import { useFormik } from 'formik';
import { Fragment, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../component/loader.component';
import AuthService from '../services/auth.service';
// import AuthService from '../services/auth.service';
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
let initialValues = {
   name: '',
   email: '',
   password: '',
   confirmPassword: '',
   image: '',
};

const RegisterPage = () => {
   document.title = 'Tour | Register';

   const auth_svc = new AuthService();

   let [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   // let [token] = useState(localStorage.getItem('token_tour'));
   // useEffect(() => {
   //    if (token) {
   //       let user = JSON.parse(localStorage.getItem('user'));
   //       if (user.role === 'admin' || user.role === 'lead-guide') {
   //          setLoading(false);
   //          toast.success('You are already logged in as admin');
   //          navigate('/admin');
   //       } else {
   //          setLoading(false);
   //          toast.success('You are already logged in!');
   //          navigate('/');
   //       }
   //    } else {
   //       setLoading(false);
   //    }
   // }, [token, navigate]);

   const {
      values,
      errors,
      touched,
      setValues,
      handleChange,
      handleBlur,
      handleSubmit,
   } = useFormik({
      initialValues,
      validationSchema: registerValidationSchema,
      onSubmit: async (values, action) => {
         console.log(values);
         try {
            let data = await auth_svc.signup(values);
            action.resetForm();
            if (data) {
               toast.success(`Hello mr. ${data.name}`, { theme: 'dark' });
               setLoading(false);
               navigate('/');
            } else {
               toast.warning('sorry, something went wrong !!');
            }
         } catch (error) {
            console.log(error);
         }
      },
   });

   return loading ? (
      <Loader />
   ) : (
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
                                 if (pass.type === 'text') {
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
                     {/* <Form.Group className="my-2">
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
                     </Form.Group> */}
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
