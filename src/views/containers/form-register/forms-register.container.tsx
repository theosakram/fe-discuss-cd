import { FC } from "react";
import { Form, InputField } from "../../components";
import { Button, Container } from "@chakra-ui/react";
import { FORM_TEMPLATE } from "./form-template";

export const FormRegister: FC = () => {
    const callApi = (e: any) => {
        alert(JSON.stringify(e));
    };

    const { FormTemplate, ...props } = FORM_TEMPLATE;

    return (
        <Container>
            <Form {...props} onSubmit={callApi}>
                {FormTemplate.map((f, idx) => (
                    <InputField key={idx} {...f} />
                ))}
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    );
};
