import React from 'react';
import './form.css';
export default function FTable({ data }) {
  return (
    <div className="form" style={{marginTop:"20px"}}>
      <div className="container mt-4 w-75" >
        <h3 className="text-center" style={{ color: 'rgb(255, 255, 255)' }}>Table</h3>
        <table className="table table-bordered table-striped mt-4">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No Data Available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}