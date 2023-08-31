import React, {Component} from "react";

class PropsWithClass extends Component
{
    render() {
        // const {logo, logoalt} = this.props;
        return (
            <div>
                <img src={this.props.logo} 
                    className="App-logo" 
                    alt={this.props.logoalt} />
                {this.props.children}
            </div>
        )
    }
}

export default PropsWithClass