import * as yup  from "yup";
export const ticketUploadSchema = yup.object().shape({
    eventName: yup.string().required("Please input event name"),
    eventDate: yup
      .date("Date type is required").typeError("This should be a date")
      .required("Please input event date"),
    eventTime: yup.date().typeError("This should be a date").required("Time is required"),
    eventLocation: yup.string().required("Please provide event location"),
    eventFlier: yup.mixed().typeError("This should be a file").required("Ticket image is required"),
  });