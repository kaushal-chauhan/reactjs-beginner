import React, {Component} from "react"

class ChildLifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '1'
        }
        console.log("C: Step 1: constructor")
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log("C: Step 2: getDerivedStateFromProps")
        return null
    }

    handleClick = (event) => {
        this.setState({text: '4'})
        console.log("C : handleClick")
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log(`C: shouldComponentUpdate ${nextState.text}`)
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log(`C: getSnapshotBeforeUpdate ${prevState.text}`)
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log(`C: componentDidUpdate ${prevState.text}`)
        return null
    }

    render() {
        console.log("C: Step 3: render")
        return (
            <div>
                <h1>Child Class Component Life Cycle</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }

    componentDidMount()
    {
        console.log("C: Step 4: componentDidMount")
    }
}

export default ChildLifeCycle