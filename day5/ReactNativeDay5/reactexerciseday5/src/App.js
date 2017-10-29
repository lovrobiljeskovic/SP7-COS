import React, { Component } from 'react';
import data from "./data/data.json"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/all" component={AllUsers} />
                    <Route path="/details/:index" render={(props) => {
                        return (
                            <UserDetails
                                {...props}
                                users={data.users}
                            />
                        )
                    }} />

                </Switch>
            </Router>
        </div>
    );
}
const Welcome = () => (
    <div>
        <h2>Welcome to our friends site</h2>
        <Link to="/all">Go to all users</Link>
    </div>
)
class AllUsers extends React.Component {
    constructor() {
        super()
        this.state = { users: [] }
    }
    componentDidMount() {
        this.setState({
            users: data.users
        })
    }
    render() {
        return (
            <div>
                <h2>ALL USERS</h2>
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        {this.state.users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <img src={user.picture.thumbnail} />
                                    </td>
                                    <td>
                                        {user.first} {user.last}
                                    </td>
                                    <td><Link to={`/details/${index}`}>Details</Link></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>

            </div>
        )
    }
}
const UserDetails = (props) => {

    const user = props.users[props.match.params.index]
    console.log("user", user)
    return (
        <div>
            <table>
            <thead>
            </thead>
            <tbody>
            <tr>
            <td>
            Gender:
            {user.gender}
            </td>
            </tr>
            <tr>
            <td>
            First Name:
            {user.first}
            </td>
            </tr>
            <tr>
            <td>
            Last Name:
            {user.last}
            </td>
            </tr>
            </tbody>
            </table>
        </div>
    )
}
export default App;
