
function HoverCounter({count, clickEvent})
{
    return <button onMouseOver={clickEvent}>Click Counter - {count}</button>
}
export default HoverCounter