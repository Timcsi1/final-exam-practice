import React, { useState } from "react";

function Character({ data, setData }) {
    const [showDetails, setShowDetails] = useState({});
    const [showMore, setShowMore] = useState({});

    const handleClick1 = (index) => {
        // Use the spread operator to create a new object with the same properties as showMore
        const newShowMore = { ...showMore };
        // Toggle the state of the button at the given index
        newShowMore[index] = !newShowMore[index];
        // Update the state with the new object
        setShowMore(newShowMore);
    };

    const handleClick = (data) => {
        setShowDetails((prevState) => ({
            ...prevState,
            [data.name]: !prevState[data.name],
        }));
    };

    console.log(data);
    return (
        <div>
            {data.map((item, index) => (
                <div key={item.name}>
                    {item.name}
                    <button
                    key={index}
                        onClick={() => {
                            handleClick(item);
                            handleClick1(index)
                            }}
                    >
                        {showMore[index] ? 'Show Less' : 'Show More'}
                    </button>
                    {showDetails[item.name] && <div>{item.details}</div>}
                </div>
            ))}
            {/* {data.map((e, index) => (
                <div key={index}>
                <>
                    {e.name}
                    <button onClick={handleClick}>More info</button>
                    {showText && <div>{e.details}</div>}
                </>
                
                </div>
            ))} */}
        </div>
    );
}

export default Character;
