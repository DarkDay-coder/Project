import * as Yup from 'yup';

export const tourValidation = Yup.object({
   tour_name: Yup.string().min(5).nullable().required('Tour must have Name!'),
   description: Yup.string()
      .nullable()
      .min(50, 'Tour description should be more than 50 character')
      .required('You should describe the tour..!'),
   summary: Yup.string().min(20).nullable().required(),
   startDates: Yup.date().nullable(),
   duration: Yup.string().nullable().required('duration must be mentioned..!'),
   maxGroupSize: Yup.number()
      .nullable()
      .required('please mention max travellers in a group..!!'),
   difficulty_id: Yup.object().nullable(),
   price: Yup.number().nullable().required().min(1),
   discount: Yup.number().nullable().min(0).max(100),
   imageCover: Yup.object().nullable(),
   images: Yup.array().nullable(),
   startLocation_id: Yup.object().nullable(),
   locations_id: Yup.object().nullable(),
   guides_id: Yup.object().nullable(),
   createdBy_id: Yup.object().nullable(),
   status: Yup.string().nullable(),
});
