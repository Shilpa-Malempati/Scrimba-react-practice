import React from "react"

function handleClick() {
    console.log("I was clicked")
}

function SimpleEx() {
    return (
        <div>
            <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default SimpleEx