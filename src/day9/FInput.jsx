import React, { useState } from "react";
import FTable from "../day9/FTable";
import "../day9/form.css";
export default function FInput() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { id: data.length + 1, name, job, email, age };
    setData([...data, newData]);
    setName("");
    setJob("");
    setEmail("");
    setAge("");
  };

  return (
    <>
     <div className="form">
     <div className="container py-5  w-50">
        <div className="">
          <div className="header">
          <div className=" card-header text-center ">
            <h2>Registration</h2>
          </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
              
                <input type="text" className="form-control" id="name"placeholder="Enter Your Name"value={name} onChange={(e) => setName(e.target.value)}required/>
              </div>
              <div className="mb-3">
               
                <input type="text" className="form-control" id="job" placeholder="Enter Your Job" value={job} onChange={(e) => setJob(e.target.value)} required/>
              </div>
              <div className="mb-3" >
                
                <input type="email" className="form-control" id="email" placeholder="Enter Your E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="mb-3">
                
                <input type="number" className="form-control" id="age" placeholder="Enter Your Age" value={age} onChange={(e) => setAge(e.target.value)} required/>
              </div>
              <div className="b">
                <button type="submit" className=" btn  w-90 ">Add Data</button>
              </div>
            </form>
          </div>
        </div>
      </div>
     </div>
      <FTable data={data} />
    </>
  );
}