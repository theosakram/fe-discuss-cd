import { FC } from "react";
import { Formik, Form as FForm } from "formik";

export const Form: FC<FormProps> = ({ children, ...props }) => {
    return <Formik {...props}>{() => <FForm>{children}</FForm>}</Formik>;
};
