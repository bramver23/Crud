import React, { Component } from 'react';


class getData extends Component {

  constructor() {
    super();

    this.state = {
      users: [],
      search: null
    };
  }
  async componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ users: data })
  }
  searchSpace = (event) => {
    const keyword = event.target.value;
    this.setState({ search: keyword })
  }

  render() {
    const { users, search } = this.state;
    console.log("users => ", users);
    const items = users.filter((data) => {
      if (search == null)
        return data
      else if (data.name.toLowerCase().includes(search.toLowerCase())) {
        return data
      }
    }).map(data => {
      return (
        <div key={data.id} className="padding25 ">
          <div className="card centerData boxShadow">
            <div className="card-header">
              {data.company.name}
            </div>
            <div className="card-body">
              Name:<h1 className="card-title">{data.name}</h1>
              <p className="card-text"> {data.address.street}</p>
              <p className="card-text"> {data.address.suite}</p>
              <p className="card-text"> {data.address.city}</p>
              <a href="#" className="btn btn-primary">{data.email}</a>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="padding25">
        <div className="form-group"><label>Search: <input className="form-group input-group-text" type="text" placeholder="Type Name" onChange={(e) => this.searchSpace(e)} /></label></div>
        {items}
      </div>
    )
  }
}

export default getData;
