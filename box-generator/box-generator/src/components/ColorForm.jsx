import React, { useState } from 'react';
// input --> state variables (keep track of the change)


    const ColorForm = (props) => {
        const [color, setColor] = useState("");

        const handleColorChange = (e) => {
            setColor(e.target.value);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            props.onNewBox(color);  // logic after submit
            setColor("");
        };

        return (
            <form onSubmit={handleSubmit}>
                <h1 className='text-primary'>Add Box</h1>
                <input
                    type="text"
                    placeholder="Enter a color"
                    onChange={handleColorChange}
                    value={color}
                />
                <input className='btn btn-warning' type="submit" value="Add Box" />
            </form>
        );
    };

    export default ColorForm;