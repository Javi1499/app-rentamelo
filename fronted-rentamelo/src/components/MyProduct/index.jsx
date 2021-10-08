import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import axios from 'axios'
import { faPause, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageComponent, Button } from 'components'
import { ImageContainer, ProductContainer, Price, Title, Description, Location, Controls, ButtonContainer, Icon } from './styled'
import ReactTooltip from 'react-tooltip';
const url = "http://localhost:3000"
const urlServidor = "http://localhost:4006"
const MyProduct = ({ dataProduct: { producto, change, setChange }, isMyProduct }) => {

    const pausarPublicacion = async () => {
        await axios.post(`${urlServidor}/productos/pausar-publicacion/${producto.id_producto}`);
        setChange(!change);
        return;
    }
    const reanudarPublicacion = async () => {
        await axios.post(`${urlServidor}/productos/reanudar-publicacion/${producto.id_producto}`);
        setChange(!change);
        return;
    }
    const eliminarPublicacion = async () => {
        await axios.post(`${urlServidor}/productos/eliminar-publicacion/${producto.id_producto}`);
        setChange(!change);
        return;
    }
    const { uri_img_1, nombre, descripcion, id_producto, precio_dia, ubicacion } = producto;
    return (

        <ProductContainer>
            <ImageContainer>
                <ImageComponent src={uri_img_1} />
            </ImageContainer>
            <Title>{nombre}</Title>
            <Description>
                <LinesEllipsis
                    text={descripcion}
                    maxLine='2'
                />
            </Description>
            <Price >${precio_dia} x dia</Price>
            <Location >{ubicacion}</Location>
            <ButtonContainer>
                <Button onClick={() => window.location.href = `${url}/producto/${id_producto}`} children={`${isMyProduct ? "Ver publicación" : "Ver detalles"}`} />

            </ButtonContainer>
            {isMyProduct && <Controls>
                {
                    producto.id_estatus === "1" ? <Icon><FontAwesomeIcon data-tip="Pausar publicacion" icon={faPause} onClick={() => pausarPublicacion()} /></Icon>
                        :
                        <Icon><FontAwesomeIcon data-tip="Reanudar publicacion" icon={faPlay} onClick={() => reanudarPublicacion()} /></Icon>

                }
                <Icon><FontAwesomeIcon data-tip="Eliminar publicacion" icon={faTrash} onClick={() => eliminarPublicacion()} /></Icon>
                <ReactTooltip place="top" type="dark" effect="solid" />
            </Controls>}

        </ProductContainer>

    );
}


export default MyProduct;