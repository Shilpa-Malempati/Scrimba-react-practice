import React from "react"

class SimpleEx extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes",
            name: "lilly",
            age: 15
        }
    }
    
    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

export default SimpleEx