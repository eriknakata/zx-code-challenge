import React from 'react';

export default (props) => {
    return (
        <select id="category" onChange={props.onChange}>
            <option value="0">Selecione a categoria</option>
            {
                props.categories.map(category => {
                    return <option key={category.id} value={category.id}>{category.title}</option>
                })
            }
        </select>
    );
}