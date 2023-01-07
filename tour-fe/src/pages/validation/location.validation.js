import * as Yup from 'yup';

export const locationValidation = Yup.object({
   location_name: Yup.string()
      .required('location Name is required!')
      .nullable(),
   country: Yup.string().required('locatin must have country name!').nullable(),
   imageCover: Yup.object().nullable(),
});
