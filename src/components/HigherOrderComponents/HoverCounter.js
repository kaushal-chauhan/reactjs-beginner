import MasterCounter from "./MasterCounter"

function HoverCounter({title, count, clickEvent})
{
    return <button onMouseOver={clickEvent}>{title} Counter - {count}</button>
}

export default MasterCounter(HoverCounter)