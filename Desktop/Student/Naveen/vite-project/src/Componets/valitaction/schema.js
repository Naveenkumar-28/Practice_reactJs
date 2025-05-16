import * as Yup from "yup";

export const registerSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username cannot exceed 15 characters"),
  email: Yup.string()
    .required("email is required")
    .min(7, "Username must be at least 7 characters")
    .max(20, "Username cannot exceed 20 characters"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(10, "Password cannot exceed 10 characters")
    .matches(/[a-z]/, "password must be alphapaic character only")
    .matches(/[0-9]/, "password should be atleast one numetric"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .min(6, "Confirm Password must be at least 6 characters")
    .max(10, "Confirm Password cannot exceed 10 characters")
    .oneOf([Yup.ref("password")], "Confirm password doesn't matched"),
  age: Yup.number()
    .transform((value, originalValue) => {
      console.log(value, originalValue);

      return originalValue === "" ? undefined : value;
    })
    .required("Age is required")
    .min(18, "Age should be above 18")
    .max(99, "Age should be below 100")
    .typeError("Age should be numeric"),
});
export const loginSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .min(7, "Email must be at least 7 characters")
    .max(20, "Email cannot exceed 20 characters"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(10, "Password cannot exceed 10 characters"),
});
