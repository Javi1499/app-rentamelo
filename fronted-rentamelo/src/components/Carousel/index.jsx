import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ImageComponent } from "components";
import Carousel from "./styled";

const Component = (props) => {
    const { images, imagesToShow } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(images.length);
    const [content, setContent] = useState(null);

    useEffect(() => {
        setLength(images.length);
        const content = images.map((image, index) => (
            <ImageComponent key={`carousel-image-${index}`} src={image} />
        ));
        setContent(content);
    }, [images]);

    useEffect(() => {
        setCurrentIndex(0);
    }, []);

    const showleftArrow = true;
    const showRightArrow = true;
    console.log(currentIndex, length)

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const next = () => {
        if (currentIndex < length - 1) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    return (
        <Carousel>
            <Carousel.Wrapper>
                {showleftArrow && (
                    <Carousel.ArrowLeft onClick={prev}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Carousel.ArrowLeft>
                )}
                <Carousel.ContentWrapper
                >
                    <Carousel.Content
                        currentIndex={currentIndex}
                        imagesToShow={imagesToShow | 1}
                        totalImages={length}
                    >
                        {content}
                    </Carousel.Content>
                </Carousel.ContentWrapper>

                {showRightArrow && (
                    <Carousel.ArrowRight onClick={next}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Carousel.ArrowRight>
                )}
            </Carousel.Wrapper>
        </Carousel>
    );
};

export default Component;
export { Component as Carousel };
