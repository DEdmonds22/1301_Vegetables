import React from "react";

function New() {
    return (
        <div>
            <form action='/fruits' method='POST'>
                Name: <input type="text" name="name" />
                <br />
                Color: <input type="text" name="color" />
                <br />
                Is Ready To Eat: <input type="checkbox" name="readyToEat" />
                <br />
                <input type="submit" value="Create Veggie" />
            </form>
        </div>
    )
}

module.exports = New;