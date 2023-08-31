import React, {Component} from "react";
import QtyButton from "./QtyButton";

class InputBox extends Component
{
    constructor()
    {
        super()
        this.state = {
            qty: 0
        }
        this.plusQty = this.plusQty.bind(this)
        this.minusQty = this.minusQty.bind(this)
    }
    plusQty()
    {
        this.setState({qty: this.state.qty + 1})
    }
    minusQty()
    {
        this.setState({qty: this.state.qty - 1})
    }
    render()
    {
        return (
            <div>
                <QtyButton eventmethod={this.minusQty}>-</QtyButton>
                <input value={this.state.qty} readOnly />
                <QtyButton eventmethod={this.plusQty}>+</QtyButton>
            </div>
        )
    }
}

export default InputBox