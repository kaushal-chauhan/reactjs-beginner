import MasterCounter from "./MasterCounter"

function ClickCounter({count, clickEvent})
{
    return <button onClick={clickEvent}>Click Counter - {count}</button>
}

export default MasterCounter(ClickCounter)