
import { UserConsumer } from "./userContext"

const ComponentC = () => {
    return (
        <UserConsumer>
            {userName => {
            return <h1>{userName}</h1>
            }}
        </UserConsumer>
    )
}
export default ComponentC