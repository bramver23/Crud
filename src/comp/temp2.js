import React, { Component } from 'react';
import axios from 'axios';

class putData2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emps: [],
            isLoaded: false
        }
    }
    // getEmployee() {
    //     axios.get('http://dummy.restapiexample.com/api/v1/employees')
    //         .then(res => {
    //             const emps = res.data;
    //             this.setState({ emps });
    //             // console.log("=> ",res.data);
    //             console.log("=> ",emps);
    //         })

    // }
    // componentDidMount() {
    //     this.getEmployee();
    // }
    async componentDidMount() {
        const url = 'http://dummy.restapiexample.com/api/v1/employees';
        const res = await fetch(url)
        const data = await res.json()
        console.log(data);

        this.setState({
            emps: data,
            isLoaded: true
        })
        // console.log("Emps => ",{emps:data} );
    }

    onSubmit(e) {
        e.preventDefault();
        const employee = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            salary: this.state.salary,
        }
        axios.post('http://dummy.restapiexample.com/api/v1/employees', employee)
            .then(res => console.log(res.data));
    }


    update(e) {
        e.preventDefault();
        const employee = {
            name: this.state.name,
            age: this.state.age,
            salary: this.state.salary,
        }
        axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
            .then(res => console.log(res.data));
    }
    render() {
        var { emps, isLoaded } = this.state;
        return (
            <div>
                {emps.map(emps =>


                    <table key={emps.id} className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Id #</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{emps.id}</td>
                                <td>{emps.name}</td>
                                <td>{emps.username}</td>
                                <td>{emps.email}</td>
                                
                            </tr>

                        </tbody>
                    </table>

                )}            </div>
        )
    }
}

export default putData2;


=======================================================

import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: [
        ]
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    handleChange2 = event => {
        this.setState({ id: event.target.value });
    }

    handleSubmit2 = event => {
        event.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (

            <div>
                <ul>
                    {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                    <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>

                <div>
                    <form onSubmit={this.handleSubmit2}>
                        <label>
                            Person ID:
            <input type="text" name="id" onChange={this.handleChange2} />
                        </label>
                        <button type="submit">Delete</button>
                    </form>
                </div>
            </div>
        )
    }
}


=================================================================================

import React, { Component } from 'react';


class postData extends Component {
    constructor(props) {
        super(props);
        var obj={};
        this.handleSubmit = this.handleSubmit.bind(this);
        obj = this.state = {
                name: '',
                salary: '',
                age: ''
        };
    }
    handleChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({ [nam]: val });
        console.log(({ [nam]: val }));

    };

    async handleSubmit(e) {
        e.preventDefault();
        let url = 'http://dummy.restapiexample.com/api/v1/create';
        let info = this.state;
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        let data = await response.json();
        console.log("=> response ", JSON.stringify(data));
        this.setState({obj : data})
        console.log("data => ",JSON.stringify(data));
       // console.log("setState => ",this.setState({obj : JSON.stringify(data)}));
        
    };


    render() {
        return (
            <div>
                <ul><li>{this.state.id}</li></ul>
                <ul><li>{this.state.name}</li></ul>
                <form onSubmit={this.handleSubmit}>
                    {/* <div><label>UserId: <input type="text"  value={this.state.userId} name="name"   onChange={this.handleChange} /></label></div> */}
                    <div><label>Name: <input type="text"  value={this.state.name}  name="salary" onChange={this.handleChange} /></label></div>
                    <div><label>Age  :  <input type="text"  value={this.state.age}   name="age"    onChange={this.handleChange} /></label></div>
                    <div><button type="submit">SEND</button></div>
                </form>
            </div>
        );
    }
}

export default postData;