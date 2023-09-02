import React, {Component} from "react"
import "../css/styles.css"
import stylesModule from "../css/styles.module.css"

const styles = {
    fontSize: 100
}
class StylesElement extends Component {
    render() {
        return (
            <div>
                <h1 className="error" style={styles}>Hi Kaushal !</h1>
                <h1 className={`${stylesModule.success} font-size`} >Hi Kaushal !</h1>
            </div>
        )
    }
}

export default StylesElement