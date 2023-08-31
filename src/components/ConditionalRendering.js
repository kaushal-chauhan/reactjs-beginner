import React, {Component} from "react"

class ConditionalRendering extends Component
{
    constructor() {
        super()
        this.state = {
            text: "1",
            flag: false
        }
    }
    buttonClick(arg1) {
        this.setState({text: arg1})
    }

    render() {

        // Short circuit  operator
        // return this.state.flag && <h1>Section A</h1>

        // Ternary conditional rendering
        // return this.state.flag ? <h1>Section A</h1> : <h1>Section B</h1>

        // Element variable
        let section = <h1>A</h1>
        switch(this.state.text) {
            case "1": section = <h1>A</h1>; break;
            case "2": section = <h1>B</h1>; break;
            case "3": section = <h1>C</h1>; break;
            case "4": section = <h1>D</h1>; break;
            default: break;
        }
        return (
            <div>
                Section - {section}
                <br /><br /><br />
                <button onClick={() => this.buttonClick("1")}>Click A</button>
                <button onClick={() => this.buttonClick("2")}>Click B</button>
                <button onClick={() => this.buttonClick("3")}>Click C</button>
                <button onClick={() => this.buttonClick("4")}>Click D</button>
            </div>
        )
    }

    // if / else rendering
    // render() {
    //     if (this.state.text == "1")
    //     return (
    //         <div>
    //             Section - A
    //             <br /><br /><br />
    //             <button onClick={() => this.buttonClick("1")}>Click A</button>
    //             <button onClick={() => this.buttonClick("2")}>Click B</button>
    //             <button onClick={() => this.buttonClick("3")}>Click C</button>
    //             <button onClick={() => this.buttonClick("4")}>Click D</button>
    //         </div>
    //     )
    //     if (this.state.text == "2")
    //     return (
    //         <div>
    //             Section - B
    //             <br /><br /><br />
    //             <button onClick={() => this.buttonClick("1")}>Click A</button>
    //             <button onClick={() => this.buttonClick("2")}>Click B</button>
    //             <button onClick={() => this.buttonClick("3")}>Click C</button>
    //             <button onClick={() => this.buttonClick("4")}>Click D</button>
    //         </div>
    //     )
    // }
}

export default ConditionalRendering