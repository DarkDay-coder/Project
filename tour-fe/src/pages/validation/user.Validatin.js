import * as Yup from 'yup';

export const editUserValidation = Yup.object({
   name: Yup.string()
      .min(2, 'name must be atleast 2 char')
      .required('Name is required!')
      .max(20, 'name must not longer than 20 char'),
   email: Yup.string().email().required('Email is required!'),
   password: Yup.string().min(8),
   confirmPassword: Yup.string().oneOf(
      [Yup.ref('password')],
      'your password and confirmPassword must match'
   ),
   image: Yup.object().nullable(),
   role: Yup.string().required('please select a role'),
   active: Yup.string().required('Please select status'),
});

export const userValidation = Yup.object({
   name: Yup.string()
      .min(2, 'name must be atleast 2 char')
      .required('Name is required!')
      .max(20, 'name must not longer than 20 char'),
   email: Yup.string().email().required('Email is required!'),
   password: Yup.string().required('password is a required field!').min(8),
   confirmPassword: Yup.string()
      .required('you must enter your password again')
      .oneOf(
         [Yup.ref('password')],
         'your password and confirmPassword must match'
      ),
   image: Yup.object().nullable(),
   role: Yup.string().required('please select a role'),
   active: Yup.string(),
});
