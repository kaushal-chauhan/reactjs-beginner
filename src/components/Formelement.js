import React, {Component} from "react"

class Formelement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            accountType: ""
        }
    }
    formElementValues = (event) => {
        switch (event.target.name) {
            case 'first-name':
                this.setState({firstName: event.target.value});
                break;
            case 'last-name':
                this.setState({lastName: event.target.value});
                break;
            case 'email':
                this.setState({email: event.target.value});
                break;
            case 'account-type':
                this.setState({accountType: event.target.value});
                break;
            default: break;
        }
    }
    formSubmitAction = (event) => {
        event.preventDefault()
        alert(`${this.state.firstName} ${this.state.lastName} ${this.state.email} ${this.state.accountType}`)
    }
    render() {
        return(
            <form onSubmit={this.formSubmitAction}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            First Name : <input type="text" name="first-name" value={this.state.firstName} onChange={this.formElementValues}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Name : <input type="text" name="last-name" value={this.state.lastName} onChange={this.formElementValues}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email : <input type="text" name="email" value={this.state.email} onChange={this.formElementValues}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Account Type : <select name="account-type" value={this.state.accountType} onChange={this.formElementValues}>
                                <option></option>
                                <option value="Seller">Seller</option>
                                <option value="Buyer">Buyer</option>
                            </select>
                            <br /><br />
                            <button type="submit">Submit</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

export default Formelement