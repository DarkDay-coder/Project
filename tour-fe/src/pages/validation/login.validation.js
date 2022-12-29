import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
   email: Yup.string().required('Name is required for login!').min(3),
   password: Yup.string().required('password is required login!').min(8),
});
