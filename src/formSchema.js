// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("username is required")
    .min(2, "username must be at least 2 characters"),
  size: yup
    .string()
    .oneOf(["small", "medium", "large"], "pizza size is required"),
  gluten: yup.boolean(),
  steak: yup.boolean(),
  pepperoni: yup.boolean(),
  chicken: yup.boolean(),
  olives: yup.boolean(),
  instructions: yup
    .string()
    .max(50, '50 characters maximum')
});