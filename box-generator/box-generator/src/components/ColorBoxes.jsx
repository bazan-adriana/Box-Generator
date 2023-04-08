import React from 'react';


const ColorBoxes = (props) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            
            {props.boxes.map((box, index) => (
                <div
                    key={index}
                    style={{
                        width: "150px",
                        height: "150px",
                        backgroundColor: box,
                        margin: "55px",
                    }}
                />
            ))}
        </div>
    );
};

export default ColorBoxes;
