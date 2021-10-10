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
                <Category src={sports} name={"Deportes"} />
            </Item>
            <Item>
                <Category src={tools} name={"Herramientas"} />
            </Item>
            <Item>
                <Category src={house} name={"Hogar"} />
            </Item>
            <Item>
                <Category src={technology} name={"Tecnología"} />
            </Item>


        </CategoriesList>
    );
}

export default Component;
export { Component as CategoriesList }