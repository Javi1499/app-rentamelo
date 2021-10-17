import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { Alert, Button, CustomInput } from 'components';
import { FormContainer, InputName, InputLastName, InputPhoneNumber, InputBirthday, InputEmail, InputPassword, Wrapper, Span, ButtonContainer } from './styled'
const Component = ({ onSubmit, showAlert, setShowAlert }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    // const onSubmit = async (dataProduct) => {
    //     console.log(dataProduct)
    // };
    console.log(showAlert.status)
    return (
        <Wrapper>
            {showAlert.status && <Alert information={showAlert.message}
                onClick={() => setShowAlert({ ...showAlert, status: false })}
                setShowAlert={() => setShowAlert({ ...showAlert, status: false })} />}
            <FormContainer onSubmit={handleSubmit(onSubmit)}  >
                <InputName>
                    <CustomInput
                        type={"string"}
                        placeholder={"Ej. Rocky"}
                        label="Nombre"
                        {...register("firstName", { required: "Este campo es requerido" })}
                    />
                    <Span>{errors?.firstName?.message}</Span>
                </InputName>
                <InputLastName>
                    <CustomInput
                        type={"string"}
                        placeholder={"Apellidos"}
                        label="Apellidos"
                        {...register("lastName", { required: "Este campo es requerido" })}
                    />
                    <Span>{errors?.lastName?.message}</Span>
                </InputLastName>
                <InputPhoneNumber>
                    <CustomInput
                        type={"tel"}
                        placeholder={"3131150580"}
                        label="Ej. Numero de teléfono"
                        {...register("phoneNumber", { required: "Este campo es requerido" })}
                    />
                    <Span>{errors?.phoneNumber?.message}</Span>
                </InputPhoneNumber>
                <InputBirthday>
                    <CustomInput
                        type={"date"}
                        placeholder={"14/11/1999"}
                        label="Fecha de nacimiento"
                        {...register("birthday", { required: "Este campo es requerido" })}
                    />
                    <Span>{errors?.birthday?.message}</Span>
                </InputBirthday>
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
                <InputPassword>
                    <CustomInput
                        type={"password"}
                        placeholder={"*********"}
                        label="Confirma tu contraseña"
                        {...register("passwordValidate", { required: "Este campo es requerido" })}
                    />
                    <Span>{errors?.passwordValidate?.message}</Span>
                </InputPassword>
                <ButtonContainer>
                    <Button children={"Crear cuenta"} type="submit" />
                </ButtonContainer>
            </FormContainer>
        </Wrapper>
    );
}

export default Component;
export { Component as SignUp }