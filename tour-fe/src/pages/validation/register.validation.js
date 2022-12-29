import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
   name: Yup.string()
      .min(2, 'name must be atleast 2 char')
      .required('Name is required!')
      .max(20, 'name must not longer than 20 char'),
   email: Yup.string().email().required('Email is required!'),
   password: Yup.string()
      .nullable()
      .required('password is a required field!')
      .min(8),
   confirmPassword: Yup.string()
      .required('you must enter your password again')
      .nullable()
      .oneOf(
         [Yup.ref('password')],
         'your password must match with re-password'
      ),
});
