import React, {PureComponent} from "react"

class PureComp extends PureComponent {
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
        console.log("Pure Comp")
        return <button onClick={this.handleClick}>Click Pure</button>
    }
}

export default PureComp