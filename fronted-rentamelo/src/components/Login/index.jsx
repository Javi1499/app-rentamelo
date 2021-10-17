import React from 'react';
import { useForm } from "react-hook-form";
import { Alert, Button, CustomInput } from 'components';
import { FormContainer, InputEmail, InputPassword, Wrapper, Span, ButtonContainer } from './styled'
const Component = ({ onSubmit, showAlert, setShowAlert }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    console.log(showAlert.status)
    return (
        <Wrapper>
            {showAlert.status && <Alert information={showAlert.message}
                onClick={() => setShowAlert({ ...showAlert, status: false })}
                setShowAlert={() => setShowAlert({ ...showAlert, status: false })} />}
            <FormContainer onSubmit={handleSubmit(onSubmit)}  >
                <InputEmail>
                    <CustomInput
                        type={"email"}
                        placeholder={"Ej.correo@correo.com"}
                        label="Correo electrónico"
                        {...register("email", { required: "Este campo es requerido" })}
                    />
                    <Span>{errors?.email?.message}</Span>
                </InputEmail>
                <InputPassword>
                    <CustomInput
                        type={"password"}
                        placeholder={"*********"}
                        label="Contraseña"
                        {...register("password", { required: "Este campo es requerido" })}
                    />
                    <Span>{errors?.password?.message}</Span>
                </InputPassword>
                <ButtonContainer>
                    <Button children={"Iniciar sesión"} type="submit" />
                </ButtonContainer>
            </FormContainer>
        </Wrapper>
    );
}

export default Component;
export { Component as Login }