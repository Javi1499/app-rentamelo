import React from 'react';
import { Filter, Option } from './styled';
const Component = (props) => {
    const { filterValue, setFilterValue } = props;

    return (
        <Filter value={filterValue} onChange={e => setFilterValue(e.target.value)}>
            <Option value={0}>Todos</Option>
            <Option value={6}>En espera de confirmacion</Option>
            <Option value={3}>En pausa</Option>
            <Option value={5}>En renta</Option>
        </Filter>
    );
}

export default Component;
export { Component as Filter }