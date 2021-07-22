import { useField } from "formik";
import { FC, InputHTMLAttributes } from "react";
import { FormControl, FormLabel, FormErrorMessage, Input } from "@chakra-ui/react";

export const InputField: FC<InputFieldProps & InputHTMLAttributes<HTMLInputElement>> = ({
    size: _,
    ...props
}) => {
    const [field, { error, touched }] = useField(props);

    return (
        <FormControl isInvalid={!!error && touched}>
            <FormLabel htmlFor="name">{props.label}</FormLabel>
            <Input {...field} {...props} id="name" placeholder={props.placeholder} />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};
