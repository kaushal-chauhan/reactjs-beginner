import React, {Component} from "react";
import ForwardRefChild from "./ForwardRefChild"

class ForwardRefTest extends Component {
    constructor(props) {
        super(props)
        this.refVar = React.createRef();
    }
    componentDidMount() {
        this.refVar.current.focus()
    }
    render() {
        return (
            <div>
                <ForwardRefChild ref={this.refVar} />
            </div>
        )
    }
}
export default ForwardRefTest