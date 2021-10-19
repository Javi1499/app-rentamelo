import React from 'react';
import { Category } from 'components';
import { CategoriesList, Item } from './styled';
import sports from "assets/sports.png"
import tools from "assets/tools.png"
import house from "assets/house.png"
import technology from "assets/technology.png"

const Component = () => {
    return (
        <CategoriesList>
            <Item>
                <Category src={sports} name={"Deportes"} idCategory={1} />
            </Item>
            <Item>
                <Category src={tools} name={"Herramientas"} idCategory={2} />
            </Item>
            <Item>
                <Category src={house} name={"Hogar"} idCategory={3} />
            </Item>
            <Item>
                <Category src={technology} name={"Tecnología"} idCategory={4} />
            </Item>


        </CategoriesList>
    );
}

export default Component;
export { Component as CategoriesList }