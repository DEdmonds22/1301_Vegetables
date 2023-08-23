import React from "react";

const Index = ({veggies}) => {
    return (
        <>
            <h1>List of Veggies!</h1>
            <a href="/vegetables/new">Create a New Veggie</a>
            <ul>
                {veggies.map((veggie, i) => {
                    return (
                        <li key={i}>
                            The <a href={`/vegetables/${veggie._id}`}>{veggie.name}</a> is  {veggie.color} and it's {veggie.readyToEat ? "ready to eat" : "not ready to eat"}.
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

module.exports = Index;