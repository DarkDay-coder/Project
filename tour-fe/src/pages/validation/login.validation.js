import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
   email: Yup.string().email().required('Name is required for login!'),
   password: Yup.string().required('password is required login!').min(8),
});
