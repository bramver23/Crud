import React, { Component } from 'react';
import axios from 'axios';

class postData extends Component {
    constructor(props) {
        super(props);
        // this.state = { users:[] }
        this.state = {
            name: "", username: "", email: "", users: [], message: "After posting data please wait",
            count: 0
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({ users: res.data })
            });
    }
    handleChange = event => {
        // this.setState({ name: event.target.value })
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
        //console.log(({ [nam]: val }));
    };
    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
        }
        axios.post(`https://jsonplaceholder.typicode.com/users/`, { user })
            .then(res => {
                //console.log("-> ", res);
                console.log("POST -> ", res.data);
                this.setState({
                    message: "Data has been Sent ! open console browser to check your post",
                    count: this.state.count + 1
                })
            });

        //console.log("=> ",this.state.users.push(user));


    }

    render() {
        var { users } = this.state;
        return (
            <div className="padding25   ">
                <div className="row">
                    <div className="col-sm">
                        <ul className="list-group list-group-horizontal">{users.map(user => <li className="list-group-item d-flex justify-content-between align-items-center"
                            key={user.id}>{user.name}
                            <span className="badge badge-primary badge-pill">1</span>
                        </li>)}
                            <li className="list-group-item d-flex justify-content-between align-items-center">{this.state.name}
                                <span className="badge badge-primary badge-pill">{this.state.count}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action list-group-item-primary">{this.state.name}</li>
                            <li className="list-group-item list-group-item-action list-group-item-primary">{this.state.username}</li>
                            <li className="list-group-item list-group-item-action list-group-item-primary">{this.state.email}</li>
                        </ul>
                        <div className="padding25 ">{this.state.message}</div>
                    </div>
                    <div className="container col-sm">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group"><label>Name: <input className="input-group-text" type="text" name="name" onChange={this.handleChange} required></input></label></div>
                            <div className="form-group"><label>UserN:<input className="input-group-text" type="text" name="username" onChange={this.handleChange} required></input></label></div>
                            <div className="form-group"><label htmlFor="email">Email: <input className="input-group-text" type="email" name="email" onChange={this.handleChange} required></input></label></div>
                            <div><button type="submit" className="btn btn-primary">POST</button></div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default postData;