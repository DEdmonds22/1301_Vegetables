import React from "react";

function Show({veggie}) {
    return (
        <>
            <h1>Veggie Information</h1>
            <div>
                Veggie: {veggie.name}
                <br />
                Color: {veggie.color}
                <br />
                Ready to Eat? {veggie.readyToEat ? "yes" : "no"}
            </div>
            <a href="/vegetables">BACK</a>
        </>
    )
}

module.exports = Show