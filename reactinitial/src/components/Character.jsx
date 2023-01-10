import React, { useState } from "react";

function Character({ data, setData }) {
    const [showDetails, setShowDetails] = useState({});
    const [showMore, setShowMore] = useState({});
    const [email, setEmail] = useState("");

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

    const handleSubmit = (event) => {
        event.preventDefault();

        // const emailRegex = /^[^@]+@[^@.]+\.[^@.]+$/;
        // if (!emailRegex.test(email)) {
        //     return;
        // }

        fetch("https://demoapi.com/api/series/newsletter", {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: { "Content-Type": "application/json" },
        }).then((response) => {
           console.log(response)
        });
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
                            handleClick1(index);
                        }}
                    >
                        {showMore[index] ? "Show Less" : "Show More"}
                    </button>
                    {showDetails[item.name] && <div>{item.details}</div>}
                </div>
            ))}

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default Character;
