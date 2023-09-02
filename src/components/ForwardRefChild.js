import React from "react"

const ForwardRefChild = React.forwardRef(
    (props, ref) => {
        return (
            <div>
                Test : <input ref={ref}/>
            </div>
        )
    }
)

export default ForwardRefChild