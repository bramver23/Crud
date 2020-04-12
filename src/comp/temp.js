import React, { Component } from 'react';
import ReactDOM from "react-dom";

class PostData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state);
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>

                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name="userId"
                            value={userId}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="body"
                            value={body}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>

                <p>Title : {this.state.title}</p>
                <p>Body : {this.state.body}</p>
                <p>UserId : {this.state.userId}</p>
            </div>
        )
    }
}
export default PostData;


// const url = 'https://jsonplaceholder.typicode.com/posts';
        // const response = await fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         title: '',
        //         body: '',
        //         userId: ''
        //     }),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // });
        // const data = await response.json();
        // console.log(data);
        // this.setState({ user: data })
////////////////////////////////////////////////////////////

// PostData
// import React, { Component } from 'react';
// import ReactDOM from "react-dom";

// class PostData extends Component {
//     constructor(props) {
//         super(props)
//         var obj={};
//         this.submitHandler = this.submitHandler.bind(this);

//         var obj = this.state = {
//             name: '',
//             salary: '',
//             age: ''
//         }
//     }

//     changeHandler = (e) => {
//         var obj1 = this.setState({ [e.target.name]: e.target.value })
//         console.log("=>", obj1);
//     }

//     async submitHandler(e) {
//         e.preventDefault()

//         console.log("=> ",this.state);
//         const info = this.state;
//         const url = 'http://dummy.restapiexample.com/api/v1/create';
//         const response = await fetch(url, {
//             method: 'POST',
//             body: JSON.stringify(info),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         });
//         const data = await response.json();
//         // this.setState({ name:'works', salary:"yes it does", age:"yeah"})
//         this.setState({obj : data})
//         console.log(JSON.stringify(data));
//         console.log(this.setState({obj : JSON.stringify(data)}));
//     }



//     render() {
//         // const { userId, title, body } = this.state
//         return (
//             <div>

//                 <form onSubmit={this.submitHandler}>
//                     <div>
//                         <input
//                             type="text"
//                             value={this.state.name} name="name"
//                            // onChange={(data) => { this.setState({ name: data.target.value }) }}
//                            onChange ={this.changeHandler}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             value={this.state.salary} name="salary"
//                             //onChange={(data) => { this.setState({ salary: data.target.value }) }}
//                             onChange ={this.changeHandler}

//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             value={this.state.age} name="age"
//                            // onChange={(data) => { this.setState({ age: data.target.value }) }}
//                            onChange ={this.changeHandler}

//                         />
//                     </div>
//                     <button onClick={this.submitHander}>Submit</button>
//                 </form>

//                 <p>Title : {this.state.name}</p>
//                 <p>Body : {this.state.salary}</p>
//                 <p>UserId : {this.state.name}</p>
//             </div>
//         )
//     }
// }
// export default PostData;

===============================================================

import React, { Component } from 'react';


class postData extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            data: {
                name: '',
                salary: '',
                age: ''
            }

        };

    }
    handleChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({ [nam]: val });

    };

    async handleSubmit(e) {
        e.preventDefault();
        let url = 'http://dummy.restapiexample.com/api/v1/create';
        //let info = this.state;
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                name: '',
                salary: '',
                age: ''
            }),
        });
        let data1 = await response.json();

        console.log("=> response ", JSON.stringify(data1));
        // this.setState({
        //     items:data
        // });
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div><input type="text" name="userId" value={this.state.userId} onChange={this.handleChange} /></div>
                    <div><input type="text" name="title" value={this.state.title} onChange={this.handleChange} /></div>
                    <div><input type="text" name="body" value={this.state.body} onChange={this.handleChange} /></div>
                    <div><button type="submit">SEND</button></div>
                </form>
            </div>
        );
    }
}

export default postData;


==========================THE ONE THAT WORKS=====================================

import React, { Component } from 'react';
import ReactDOM from "react-dom";

class PostData extends Component {
    constructor(props) {
        super(props)
        var obj={};
        this.submitHandler = this.submitHandler.bind(this);

        var obj = this.state = {
            name: '',
            salary: '',
            age: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log("onChange => ", { [e.target.name]: e.target.value });
    }

    async submitHandler(e) {
        e.preventDefault()

        console.log("=> ",this.state);
        const info = this.state;
        const url = 'http://dummy.restapiexample.com/api/v1/create';
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await response.json();
        // this.setState({ name:'works', salary:"yes it does", age:"yeah"})
        this.setState({obj : data})
        console.log(JSON.stringify(data));
        console.log(this.setState({obj : JSON.stringify(data)}));
    }



    render() {
        // const { userId, title, body } = this.state
        return (
            <div>

                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            value={this.state.name} name="name"
                           // onChange={(data) => { this.setState({ name: data.target.value }) }}
                           onChange ={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={this.state.salary} name="salary"
                            //onChange={(data) => { this.setState({ salary: data.target.value }) }}
                            onChange ={this.changeHandler}

                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={this.state.age} name="age"
                           // onChange={(data) => { this.setState({ age: data.target.value }) }}
                           onChange ={this.changeHandler}

                        />
                    </div>
                    <button onClick={this.submitHander}>Submit</button>
                </form>

                <p>Title : {this.state.name}</p>
                <p>Body : {this.state.salary}</p>
                <p>UserId : {this.state.name}</p>
            </div>
        )
    }
}
export default PostData;