import React, {Component} from "react"
import ChildLifeCycle from "./ChildLifeCycle"

class ClassLifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 0
        }
        // this.setState({text: 1})
        // console.log(`1 - ${this.state.text}`)
        console.log("Step 1: constructor")
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log("Step 2: getDerivedStateFromProps")
        return null;
    }

    render() {
        console.log("Step 3: render")
        return <ChildLifeCycle />
    }

    componentDidMount()
    {
        console.log("Step 4: componentDidMount")
    }
}

export default ClassLifeCycle