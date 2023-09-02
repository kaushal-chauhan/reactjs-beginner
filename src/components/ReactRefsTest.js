import React, {Component} from "react";

class ReactRefsTest extends Component {
    constructor(props) {
        super(props)
        this.refVar = React.createRef()
        this.callbackRef = null
        this.setCallbackRef = (element) => this.callbackRef = element
    }
    componentDidMount() {
        // this.refVar.current.focus()
        if (this.callbackRef) {
            this.callbackRef.focus()
        }
    }

    // this.refVar.current.value

    render() {
        return(
            <div>
                <input type="text" name="first-name" />
                <br />
                {/* <input ref={this.refVar} type="text" name="email" /> */}
                <input ref={this.setCallbackRef} type="text" name="email" />
            </div>
        )
    }
}

export default ReactRefsTest