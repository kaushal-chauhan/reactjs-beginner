import React, {Component} from "react";

function MasterCounter(OriginalComponent) {
    class UpdatedComponent extends Component {
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
            return <OriginalComponent clickEvent={this.clickEvent} count={this.state.count} {...this.props}/>
        }
    }
    return UpdatedComponent
}

export default MasterCounter
