import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import axios from 'axios'
import { faPause, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageComponent, Button } from 'components'
import { ImageContainer, ProductContainer, Price, Title, Description, Location, Controls, ButtonContainer, IconPause, IconPlay, IconDelete } from './styled'
import ReactTooltip from 'react-tooltip';
// const url = "http://localhost:3000"
const urlServidor = "http://localhost:4006"
const MyProduct = ({ dataProduct, change, setChange, isMyProduct }) => {
    console.log(dataProduct)
    const pausarPublicacion = async () => {
        await axios.post(`${urlServidor}/productos/pausar-publicacion/${dataProduct.idProduct}`);
        setChange(!change);
        window.location.reload()
        return;
    }
    const reanudarPublicacion = async () => {
        await axios.post(`${urlServidor}/productos/reanudar-publicacion/${dataProduct.idProduct}`);
        setChange(!change);
        window.location.reload()
        return;
    }
    const eliminarPublicacion = async () => {
        await axios.post(`${urlServidor}/productos/eliminar-publicacion/${dataProduct.idProduct}`);
        setChange(!change);
        return;
    }
    const { img1, name, description, idProduct, price, ubicacion, idStatus } = dataProduct;

    const isInRent = idStatus === 6 || idStatus === 5;

    console.log(isInRent)
    if (isMyProduct) return (

        <ProductContainer>
            <ImageContainer>
                <ImageComponent src={img1} />
            </ImageContainer>
            <Title>{name}</Title>
            <Description>
                <LinesEllipsis
                    text={description}
                    maxLine='2'
                />
            </Description>
            <Price >${price} x día</Price>
            <Location >{ubicacion}</Location>
            <ButtonContainer>
                <Button onClick={() => window.location.href = `/producto/${idProduct}`} children={`${isMyProduct ? "Ver publicación" : "Ver detalles"}`} />

            </ButtonContainer>
            {!isInRent && <Controls>
                {
                    dataProduct.idStatus === 1 ? <IconPause><FontAwesomeIcon data-tip="Pausar publicacion" icon={faPause} onClick={() => pausarPublicacion()} /></IconPause>
                        :
                        <IconPlay><FontAwesomeIcon data-tip="Reanudar publicacion" icon={faPlay} onClick={() => reanudarPublicacion()} /></IconPlay>

                }
                <IconDelete><FontAwesomeIcon data-tip="Eliminar publicacion" icon={faTrash} onClick={() => eliminarPublicacion()} /></IconDelete>
                <ReactTooltip place="top" type="dark" effect="solid" />
            </Controls>}

        </ProductContainer>

    );
    return (
        <ProductContainer>
            <ImageContainer>
                <ImageComponent src={img1} />
            </ImageContainer>
            <Title>{name}</Title>
            <Description>
                <LinesEllipsis
                    text={description}
                    maxLine='2'
                />
            </Description>
            <Price >${price} x día</Price>
            <Location >{ubicacion}</Location>
            <ButtonContainer>
                <Button onClick={() => window.location.href = `/producto/${idProduct}`} children={`${isMyProduct ? "Ver publicación" : "Ver detalles"}`} />

            </ButtonContainer>
        </ProductContainer>
    )
}


export default MyProduct;