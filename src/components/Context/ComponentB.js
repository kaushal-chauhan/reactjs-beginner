import React, {Component} from "react"
import ComponentC from "./ComponentC"
import UserContext from "./userContext"

class ComponentB extends Component {
    render() {
        return (
            <>
                {this.context}
                <ComponentC />
            </>
        )
    }
}
ComponentB.contextType = UserContext

export default ComponentB