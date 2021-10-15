import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Alert, Button, CustomInput, CustomInputFile, Select } from 'components';
import { arrayCategories, arrayCity, arrayTime } from 'utils';
import axios from 'axios'
import { FormContainer, InputName, InputDescription, InputPrice, InputTime, InputImage, Span, InputCategory, ButtonContainer, Wrapper } from './styled';
const Component = () => {
    const [showAlert, setShowAlert] = useState(false)
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = async (dataProduct, e) => {
        e.preventDefault()
        const data = new FormData();
        for (let index = 0; index < dataProduct.files.length; index++) {
            data.append("files", dataProduct.files[index])
        }

        data.append('name', dataProduct.name)
        data.append('description', dataProduct.description)
        data.append('idDeliveryTime', dataProduct.time)
        data.append('idLocation', dataProduct.location)
        data.append('price', dataProduct.price)
        data.append('idCategory', dataProduct.category)


        console.log(data);
        const respuesta = await axios.post("http://localhost:4006/productos/nuevo-producto", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        if (respuesta.status === 200) {
            console.log("TODO OK")
            setTimeout(() => {
                setShowAlert(false);
                window.location.href = "/mis-productos"
            }, 4000)
            setShowAlert(true)
        } else {
            alert("error")
            return;
        }
        e.target.reset();
    };
    return (
        <Wrapper>
            {showAlert && <Alert information={"Producto agregado correctamente"} onClick={() => setShowAlert(false)} setShowAlert={() => { setShowAlert(false); window.location.href = "/mis-productos" }} />}
            <FormContainer onSubmit={handleSubmit(onSubmit)}  >
                <InputName>
                    <CustomInput
                        type={"string"}
                        placeholder={"Ej. Bocina Bluetooth"}
                        label="Nombre del producto"
                        {...register("name",)}
                    />
                    <Span>{errors?.name?.message}</Span>
                </InputName>
                <InputDescription>
                    <CustomInput
                        type={"string"}
                        placeholder={"Ej. Bocina Bluetooth "}
                        label={"Descripción del producto"}
                        {...register("description",)}
                    />
                </InputDescription>
                <InputCategory>
                    <Select label={"Categoría de tu producto"}
                        options={arrayCategories}
                        {...register("category",)}
                    />
                </InputCategory>
                <InputPrice>
                    <CustomInput
                        type="number"
                        label={"Precio por día"}
                        {...register("price",)}
                    />
                </InputPrice>
                <InputTime>
                    <Select label={"¿En cuánto tiempo puedes entregar el producto?"}
                        options={arrayTime}
                        {...register("time",)}
                    />
                </InputTime>
                <InputTime>
                    <Select label={"¿En dónde tienes el producto?"}
                        options={arrayCity}
                        {...register("location",)}
                    />
                </InputTime>
                <InputImage>
                    <CustomInputFile {...register("files",)} />
                </InputImage>
                <ButtonContainer>
                    <Button children={"Publicar producto"} type="submit" />
                </ButtonContainer>
            </FormContainer>
        </Wrapper>
    );
}

export default Component;
export { Component as Form }