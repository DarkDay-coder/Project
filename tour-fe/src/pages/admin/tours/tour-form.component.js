import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { tourValidation } from '../../validation/tour.Validation';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TourForm = ({ data, submitForm }) => {
   const [std, setStd] = useState(1);
   const params = useParams();
   const formik = useFormik({
      initialValues: data,
      validationSchema: tourValidation,
      onSubmit: (values, action) => {
         submitForm(values);
         // action.resetForm();
      },
   });
   useEffect(() => {
      if (data) {
         formik.setValues({
            ...data,
         });
      }
   }, [data]);
   return (
      <Form onSubmit={formik.handleSubmit}>
         {/* Name and Summary  */}
         <Row>
            {/* Name */}
            <Col sm={6}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     name="tour_name"
                     placeholder="Enter Tour's Name *"
                     value={formik.values?.tour_name}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors?.tour_name && formik.touched.tour_name
                        ? formik.errors.tour_name
                        : ''}
                  </span>
               </Form.Group>
            </Col>
            {/* Summary */}
            <Col sm={6}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     name="summary"
                     placeholder="Enter Discriptive Summary of the Tour *"
                     value={formik.values?.summary}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors.summary && formik.touched.summary
                        ? formik.errors.summary
                        : ''}
                  </span>
               </Form.Group>
            </Col>
         </Row>

         {/* Description TODO: CK editor implementation */}
         <Form.Group className="my-2">
            <Form.Control
               className="form-control"
               type="text"
               name="description"
               placeholder="Enter Description of the Tour *"
               value={formik.values?.description}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            <span className="text-danger">
               {formik.errors.description && formik.touched.description
                  ? formik.errors.description
                  : ''}
            </span>
         </Form.Group>

         <Row>
            <Col sm={3}>
               {/* Total Upcoming Start Dates */}
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     placeholder="Enter number of start dates"
                     id="sdn"
                     onChange={(e) => {
                        setStd(e.target.value);
                     }}
                  />
               </Form.Group>
            </Col>
            {/* Duration */}
            <Col sm={3}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     name="duration"
                     placeholder="Enter Duration *"
                     value={formik.values?.duration}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors.duration && formik.touched.duration
                        ? formik.errors.duration
                        : ''}
                  </span>
               </Form.Group>
            </Col>
            {/* Max Group Size */}
            <Col sm={3}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     name="maxGroupSize"
                     placeholder="Enter Group Size *"
                     value={formik.values?.maxGroupSize}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors.maxGroupSize && formik.touched.maxGroupSize
                        ? formik.errors.maxGroupSize
                        : ''}
                  </span>
               </Form.Group>
            </Col>
            {/* TODO: TODO: TODO:  */}
            {/* Difficulty Level Select Field */}
            {/* FIXME:  */}
            <Col sm={3}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     name="difficulty"
                     placeholder="Enter Level of Difficulty"
                     value={formik.values?.difficulty}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors.difficulty && formik.touched.difficulty
                        ? formik.errors.difficulty
                        : ''}
                  </span>
               </Form.Group>
            </Col>
         </Row>

         {/* show on the basis of total upcoming start dates */}
         <Form.Group className="my-2">
            <Form.Control
               className="form-control"
               type="date"
               name="startDates"
               value={formik.values?.startDates}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            <span className="text-danger">
               {formik.errors.startDates && formik.touched.startDates
                  ? formik.errors.startDates
                  : ''}
            </span>
         </Form.Group>

         {/* Pricing section */}
         <Row>
            {/* Price */}
            <Col sm={4}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="number"
                     name="price"
                     placeholder="Enter Tour's Package Price *"
                     value={formik.values?.price}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors?.price && formik.touched.price
                        ? formik.errors.price
                        : ''}
                  </span>
               </Form.Group>
            </Col>
            {/* Discount */}
            <Col sm={4}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="number"
                     name="discount"
                     placeholder="Enter Discount % for this Package *"
                     value={formik.values?.discount}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors?.discount && formik.touched.discount
                        ? formik.errors.discount
                        : ''}
                  </span>
               </Form.Group>
            </Col>
            {/* Actual Price */}
            <Col sm={4}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="number"
                     name="actualPrice"
                     disabled
                     value={
                        formik.values?.price -
                        (formik.values?.price * formik.values?.discount) / 100
                     }
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
               </Form.Group>
            </Col>
         </Row>

         {/* Image Cover */}
         <Form.Group className="my-2">
            <Row className="mb-0">
               <Col
                  sm={2}
                  as="label"
                  className="form-label my-1 py-1 text-warning bg-dark"
               >
                  Cover Image:{' '}
               </Col>
               <Col sm={4} className="mx-0 px-0">
                  <Form.Control
                     className="form-control "
                     type="file"
                     name="imageCover"
                     accept="image/*"
                     onBlur={formik.handleBlur}
                     onChange={(e) => {
                        //
                        formik.setValues({
                           ...formik.values,
                           imageCover: e.target.files[0],
                        });
                     }}
                  />
                  <span className="text-danger">
                     {formik.errors?.imageCover ? formik.errors.imageCover : ''}
                  </span>
               </Col>
               <Col
                  sm={6}
                  className="text-center p-2"
                  style={{ maxHeight: '200px' }}
               >
                  {formik?.values?.imageCover ? (
                     <img
                        className="img fluid rounded h-100 w-100"
                        src={
                           typeof formik.values.imageCover === 'object'
                              ? URL.createObjectURL(formik.values.imageCover)
                              : `http://localhost:3005/images/${formik.values.imageCover}`
                        }
                     />
                  ) : (
                     <div className="text-danger bg-warning">
                        {' '}
                        Cover Image Thumbnai
                     </div>
                  )}
               </Col>
            </Row>
         </Form.Group>

         {/* Locations and Guides */}
         {/* FIXME:  */}
         <Row>
            {/* Start Location */}
            {/* Select from given option of Locations */}
            <Col sm={3}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     name="startLocation_id"
                     placeholder="Enter start location of the Tour *"
                     value={formik.values?.startLocation_id}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors.startLocation_id &&
                     formik.touched.startLocation_id
                        ? formik.errors.startLocation_id
                        : ''}
                  </span>
               </Form.Group>
            </Col>

            {/* Locations */}
            {/* Select from given option of Locations */}
            <Col sm={3}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     name="locations_id"
                     multiple
                     placeholder="Enter available locations for the Tour *"
                     value={formik.values?.locations_id}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors.locations_id && formik.touched.locations_id
                        ? formik.errors.locations_id
                        : ''}
                  </span>
               </Form.Group>
            </Col>

            {/* Guides List */}
            <Col sm={3}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     name="guides_id"
                     placeholder="Enter Guide list for this tour *"
                     value={formik.values?.guides_id}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors?.guides_id && formik.touched.guides_id
                        ? formik.errors.guides_id
                        : ''}
                  </span>
               </Form.Group>
            </Col>

            {/* Created By  */}
            <Col sm={3}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="text"
                     name="createdBy_id"
                     placeholder="Created By "
                     value={formik.values?.createdBy_id}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  <span className="text-danger">
                     {formik.errors?.createdBy_id && formik.touched.createdBy_id
                        ? formik.errors.createdBy_id
                        : ''}
                  </span>
               </Form.Group>
            </Col>
         </Row>

         {/* Images */}
         <Row>
            <Col
               as="label"
               className="form-label my-1 py-1 text-warning bg-dark"
               sm={3}
            >
               Select Images about the tour:
            </Col>
            <Col sm={9}>
               <Form.Group className="my-2">
                  <Form.Control
                     className="form-control"
                     type="file"
                     name="images"
                     accept="image/*"
                     multiple
                     onBlur={formik.handleBlur}
                     // value={formik.values?.images}
                     onChange={(e) => {
                        //
                        formik.setValues({
                           ...formik.values,
                           images: Object.values(e.target.files),
                        });
                     }}
                  />
                  <span className="text-danger">
                     {formik.errors?.images ? formik.errors.images : ''}
                  </span>
               </Form.Group>
            </Col>
         </Row>

         {/* Buttons */}
         <Form.Group className="text-center">
            <Button className="btn-success lab-btn mx-2" type="submit">
               <i className="icofont-paper-plane mx-1"> </i> Create Tour{' '}
               <i className="icofont-paper-plane mx-1"></i>
            </Button>
            <NavLink className="btn-warning  lab-btn mx-2" to="/admin/tours">
               <i className="icofont-exit mx-1"> </i> Cancel{' '}
               <i className="icofont-exit mx-1"></i>
            </NavLink>
         </Form.Group>
      </Form>
   );
};

export default TourForm;
