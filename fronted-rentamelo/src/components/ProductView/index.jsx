import React, { useState, useEffect } from 'react';
import { Button, ImageComponent, ImagesPreview, LessorInfo, Modal, ProductDetails, Alert } from 'components';
import axios from 'axios'
import { ProductView, DetailsContainer, LessorContainer, ImageContainer, PreviewContainer, ButtonContainer, } from './styled';

const Component = ({ product, dataLessor, mainImg }) => {
    const [mainImage, setMainImage] = useState(mainImg);
    const [showModal, setShowModal] = useState(false)
    const { img1, img2, img3 } = product;
    const [valueDays, setvalueDays] = useState(0)
    const [showAlert, setShowAlert] = useState(false)
    const [rentData, setRentData] = useState({

        idProduct: product.idProduct,
        rentDays: null
    });
    useEffect(() => {
        setRentData({ ...setRentData, rentDays: valueDays, idProduct: product.idProduct })

    }, [valueDays])

    // //Process for create a rent
    // const realizarRenta = async () => {
    //     const res = await axios.post(`http://localhost:4006/rentas/realizar-renta`, rentData);
    //     if (res.status == 200) {
    //         window.location.href = "/rentas"
    //     } else {
    //         alert("No puedes rentar un producto tuyo")
    //     }
    // }

    const validateRent = async () => {
        const validate = await axios.post(`http://localhost:4006/rentas/validador/${product.idProduct}`)
        if (validate.data.mensaje) return setShowAlert(true);
        handlerModal()

    }

    const handlerModal = () => setShowModal(prev => !prev)
    return (<>
        {showAlert && <Alert information={"No te puedes rentar un producto de tu propiedad"} onClick={() => setShowAlert(false)} setShowAlert={setShowAlert} />}
        {showModal && <Modal valueSelect={valueDays}
            setValueSelect={setvalueDays}
            event={() => window.location.href = `/detallesRenta/${rentData.idProduct}/${rentData.rentDays}`}
            showModal={handlerModal} />}
        <ProductView>

            <PreviewContainer>
                <ImagesPreview images={[img1, img2, img3]} setMainImage={setMainImage} />
            </PreviewContainer>
            <ImageContainer>
                <ImageComponent src={mainImage || mainImg} />
            </ImageContainer>
            <DetailsContainer>
                <ProductDetails dataProduct={product} />
            </DetailsContainer>
            <LessorContainer>
                <LessorInfo dataLessor={dataLessor} />
            </LessorContainer>
            <ButtonContainer>
                <Button children={"RENTAR PRODUCTO"} onClick={() => validateRent()} />
            </ButtonContainer>
        </ProductView>
    </>
    );
}

export default Component;
export { Component as ProductView }