import React, {Component} from "react"

// #1
class SimpleExample extends React.Component {
    render() {
        return (
            <div>
                <Header username="madam"/>
                <Greeting />
            </div>
        )    
    }
}

// #2
class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )    
    }
}

// #3
class Greeting extends Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

export default SimpleExample

