import React, {Component} from "react"
import Child from "./Child"

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "Kaushal"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                text: "Kayra"
            })
        }, 2000)
    }
    render() {
        console.log("Parent")
        return (
            <>
                <Child name={this.state.text} />
            </>
        )
    }
}

export default Parent