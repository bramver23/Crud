import React, { Component } from 'react';
import axios from 'axios';

class putData2 extends Component {
    constructor(props) {
        super(props);
        // this.state = { persons:[] }
        this.state = { id: 1, name: "this name will be replace", users: [], message: "After Editing Name please wait.." }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => {
                this.setState({ persons: res.data })
            });
    }
    handleChange = event => {
        this.setState({ name: event.target.value })
    };
    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name
        }
        axios.put(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, { user })
            .then(res => {
                console.log(res)
                console.log("res -> ", res.data)
                this.setState({ message: "Data has been Sent ! open console browser to check your post" })
            });
    }

    render() {
        var { users } = this.state;
        return (
            <div className="container padding25">
                {/* <ul>{this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}</ul> */}
                <div className="row">
                    <div className="col">
                        <ul>
                            <li key={users.id} className="list-group-item list-group-item-action list-group-item-primary"><span>Id: {this.state.id}</span></li>
                            <li className="list-group-item list-group-item-action list-group-item-primary">{this.state.name}</li>
                        </ul>
                        <div className="padding25 ">{this.state.message}</div>

                    </div>

                    <div className="col">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group"><label>Name: <input className="input-group-text" type="text" name="name" onChange={this.handleChange} required></input></label></div>
                            {/* <input type="text" name="name" onChange={this.handleChange}></input> */}
                            <button className="btn btn-primary" type="submit">UPDATE</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default putData2;