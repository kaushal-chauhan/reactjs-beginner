import React, {Component} from "react"

class FetchData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
                    .then(response => response.json())
                    .then(data => this.setState({posts: data}))
    }

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         // Add parameters here
    //     }),
    //     headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //     }
    // })
    //                 .then(response => response.json())
    //                 .then(data => this.setState({posts: data}))
    //                 .catch((err) => {
    //                     console.log(err.message);
    //                  })    

    render() {
        return (
            <ul>
                {this.state.posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        )
    }
}
export default FetchData