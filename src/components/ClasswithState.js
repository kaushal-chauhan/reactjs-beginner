import React, {Component} from "react";

class ClasswithState extends Component
{
    constructor() {
        super()
        this.state = {
            text: "This is A",
            count: 0
        }
        this.buttonClickC = this.buttonClickC.bind(this)
    }
    buttonClickA() {
        this.setState({text: "This is A"})
    }
    buttonClickB() {
        this.setState({text: "This is B"})
    }
    buttonClickC() {
        console.log(`Track Click Event : 1 ${this.state.text}`)
        this.setState(
            {
                text: "This is C"
            },
            () => {
                console.log(`Track Click Event : Callback : 3 ${this.state.text}`)
            }
        )
        console.log(`Track Click Event : 2 ${this.state.text}`)
    }
    buttonClickD = () => {
        this.setState({text: "This is D"})
    }
    minusVal()
    {
        this.setState({count: this.state.count - 1})
    }
    plusVal()
    {
        this.setState((prevCount, props) => ({count: prevCount.count + 1}))
    }
    plusTwoVal()
    {
        this.plusVal()
        this.plusVal()
    }
    render() {
        // const {text, count} = this.state
        return (
            <div>
                {this.state.text}
                <br/>

                {/** Event binding using Arrow Function in render method */}
                <button onClick={() => this.buttonClickA()}>Click A</button>

                {/** Event binding in Render method */}
                <button onClick={this.buttonClickB.bind(this)}>Click B</button>

                {/** Event binding in class constructor */}
                <button onClick={this.buttonClickC}>Click C</button>

                {/** Event binding : Class property as Arrow function */}
                <button onClick={this.buttonClickD}>Click D</button>

                <br /><br /><br />
                <button onClick={() => this.minusVal()}>-</button>
                <input value={this.state.count} readOnly/>
                <button onClick={() => this.plusVal()}>+</button>
                <button onClick={() => this.plusTwoVal()}>+2</button>
            </div>
        )
    }
}

export default ClasswithState