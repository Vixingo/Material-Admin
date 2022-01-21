import React from "react";
import results from "../results.json";
import Cardtable from "./Cardtable";

// let cardlist = results;
// console.log(cardlist);

function Cards() {
    return (
        <>
            <Cardtable />
            {/* <h1>Json data</h1>
            {cardlist.map((value, index, array) => {
                {
                    return <h1>{value.card.id}</h1>;
                }
            })} */}
        </>
    );
}

export default Cards;
