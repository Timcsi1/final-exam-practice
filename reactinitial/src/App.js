import React, { useEffect, useState } from "react";
import Character from "./components/Character";
import "./components/LoadingMask";
import LoadingMask from "./components/LoadingMask";

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://demoapi.com/api/series/howimetyourmother`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    // console.log(data);

    return (
        <>
            <h1>Series Api</h1>
            {data.length > 0 ? (
                <Character data={data} setData={setData} />
            ) : (
                <LoadingMask />
            )}
        </>
    );
};

export default App;
