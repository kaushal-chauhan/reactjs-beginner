import React from "react"

function Child(props)
{
    console.log("Child")
    return <h1>{props.name} Here..</h1>
}

export default React.memo(Child)