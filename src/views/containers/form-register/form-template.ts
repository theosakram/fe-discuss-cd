import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    password: "",
};

const validationSchema = Yup.object({
    name: Yup.string().required("Tidak boleh kosong"),
    email: Yup.string().email("Format email salah").required("Tidak boleh kosong"),
    password: Yup.string().required("Tidak boleh kosong"),
});

const FormTemplate: InputFieldProps[] = [
    {
        name: "name",
        type: "text",
        placeholder: "Masukkan Nama",
        label: "Nama",
    },
    {
        name: "email",
        type: "email",
        placeholder: "Masukkan Email",
        label: "Email",
    },
    {
        name: "password",
        type: "password",
        placeholder: "Masukkan Password",
        label: "Password",
    },
];

export const FORM_TEMPLATE = {
    initialValues,
    validationSchema,
    FormTemplate,
};
