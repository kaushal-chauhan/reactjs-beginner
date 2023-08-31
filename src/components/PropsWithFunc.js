
/** Simple props */
// function PropsWithFunc(props)
// {
//     return (
//         <img src={props.logo} className="App-logo" alt={props.logoalt} />
//     )
// }

/** Destructuring props in function body. */
// function PropsWithFunc(props)
// {
//     const {logo, logoalt} = props;
//     return (
//         <img src={logo} className="App-logo" alt={logoalt} />
//     )
// }

/** Destructuring props in function Argument with components children */
function PropsWithFunc({logo, logoalt, children})
{
    return (
        <div>
            <img src={logo} className="App-logo" alt={logoalt} />
            {children}
        </div>
    )
}

export default PropsWithFunc