function TestError(props) {
    if (props.hasError) {
        throw new Error("Err")
    }
    return <h1>Kaushal Here...</h1>
}

export default TestError