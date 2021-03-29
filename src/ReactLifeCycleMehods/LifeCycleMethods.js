import React, {Component} from "react"

class LifeCycleMethods extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    componentDidMount() {
        // GET the data I need to correctly display
        console.log("componentDidMount")
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.whatever !== this.props.whatever) {
            // do something important here
            console.log("componentWillReceiveProps")
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
        console.log("ShouldcomponentUpdate")
    }
    
    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listeners)
        console.log("componentWillMount")
    }
    
    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default LifeCycleMethods

