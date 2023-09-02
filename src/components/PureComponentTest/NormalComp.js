import React, {Component} from "react"

class NormalComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 0
        }
    }
    handleClick = () => {
        this.setState({text: 0})
    }
    render()
    {
        console.log("Normal Comp")
        return <button onClick={this.handleClick}>Click NormalComp</button>
    }
}

export default NormalComp