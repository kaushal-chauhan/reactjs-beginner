import React, {Component} from "react";

class RenderProps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    clickEvent = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return <>{this.props.render(this.state.count, this.clickEvent)}</>
    }
}
export default RenderProps