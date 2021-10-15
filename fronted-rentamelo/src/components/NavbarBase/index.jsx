import React from 'react';
import { NavbarBase, Item } from './styled';
const Component = ({ items, filterValue, setFilterValue }) => {

    const renderItems = items.map((item, index) => <Item key={`${index}-item`} isSelect={item.value === filterValue} onClick={() => setFilterValue(item.value)}>{item.name}</Item>)

    return (
        <NavbarBase>
            {renderItems}
            <Item onClick={() => window.location.href = "/rentas-arrendador"}>Historial de rentas</Item>
        </NavbarBase>
    );
}

export default Component;
export { Component as NavbarBase }