import React from "react";

const UsersData = ({ data }) => {
  return (
    <div className="container">
      <h1>Display users data</h1>
      <table class="table table-striped">
        <thead>
          <tr className="bg-warning">
            <th scope="col">Sr.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((x, ind) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{x.id}</th>
                  <td>{x.name}</td>
                  <td>{x.address.city}</td>
                  <td>
                    <a className="btn btn-primary">Edit</a>
                    <a className="btn btn-danger">Delete</a>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default UsersData;
