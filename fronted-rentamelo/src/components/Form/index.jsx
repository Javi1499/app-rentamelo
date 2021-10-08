import React from 'react';
import { useForm } from "react-hook-form";
import { CustomInput, CustomInputFile, Select } from 'components';
import { arrayCity, arrayTime } from 'utils';
import axios from 'axios'
import { FormContainer, InputName, InputDescription, InputPrice, InputTime, InputImage, Span } from './styled';
const Component = () => {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = async (dataProduct, e) => {
        e.preventDefault()
        const data = new FormData();
        for (let index = 0; index < dataProduct.files.length; index++) {
            data.append("files", dataProduct.files[index])
        }

        data.append('nombre', dataProduct.name)
        data.append('descripcion', dataProduct.description)
        data.append('id_tiempo_entrega', dataProduct.time)
        data.append('id_ubicacion', dataProduct.location)
        data.append('precio_dia', dataProduct.price)
        data.append('precio_hora', 30)


        console.log(data);
        const respuesta = await axios.post("http://localhost:4006/productos/nuevo-producto", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        if (respuesta.status === 200) {
            console.log("TODO OK")
        } else {
            console.log("Error")
        }
        e.target.reset();
    };
    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)} >
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
            <input type="submit" />
        </FormContainer>
    );
}

export default Component;
export { Component as Form }