import ReactDom from "react-dom"

function PortalTest()
{
    return ReactDom.createPortal((
        <div>
            <h1>Kaushal Here...</h1>
        </div>
    ), document.getElementById("portal-elm"))
}
export default PortalTest