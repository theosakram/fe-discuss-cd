/// <reference types="react-scripts" />

interface InputFieldProps {
    name: string;
    type: "text" | "email" | "password" | "date";
    label: string;
    placeholder?: string;
}

interface AnyObject {
    [key: string]: any;
}

interface FormProps {
    initialValues: AnyObject;
    onSubmit: (k: any) => void;
    validationSchema: any;
}
