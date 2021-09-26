import logo from './logo.svg';
import './App.css';
import React, {component, useState, useEffect} from 'react';
import Axios from 'axios';
import StudentsTable from './StudentsTable';

function App () {
  const [studentList, setStudentList] = useState([])
  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [date,setDate] = useState("");

  useEffect(() => {
      Axios.get("http://localhost:3001/api/get").then((response) => {
          setStudentList(response.data)
          console.log(response.data)
      })
  }, [])

  const deleteStudent = (studentId) => {
    Axios.delete('http://localhost:3001/api/delete/'+studentId+'')
    window.location.reload(false);
}

  const addStudent = () => {
      
    Axios.post("http://localhost:3001/api/insert", {id: id, name: name, date:date}).then(() => {
      alert('successfull')
      console.log('success')
    })
    setStudentList([...studentList, {ID: id, Fullname:name, DoB:date},])
    window.location.reload(false);
  }
  
  const updateStudent = (id, name, date) => {
      
    Axios.put("http://localhost:3001/api/update", {id: id, name: name, date:date}).then(() => {
      alert('successfull')
      console.log('success')
      window.alert('updated')
    })
  }

  return (
    <div className="App container">
                    <p>&nbsp;</p>
      <form className="form-horizontal" onSubmit={(event) => {
            event.preventDefault()
            addStudent()
        }}>
        <div className="row">
            <div className="col-md-6">
            <div className="form-group">
                <label className="control-label col-sm-12" htmlFor="id">Id:</label>
                <div className="col-md-10 col-sm-12">
                <input
                    type="number"
                    name="id"
                    className="form-control"
                    placeholder="ID"
                    defaultValue={""}
                    onChange={(e) => {
                        setId(e.target.value)
                    }}
                    required />
                </div>
            </div>
            </div>
            <div className="col-md-6">
            <div className="form-group">
                <label className="control-label col-sm-12" htmlFor="name">Name</label>
                <div className="col-sm-12 col-md-10">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    defaultValue={''}        
                    onChange={(e) => {
                        setName(e.target.value)
                    }}                        
                    placeholder="Name"
                    required />
                </div>
            </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label className="control-label col-sm-12" htmlFor="date">Date of Birth:</label>
                <div className="col-sm-12 col-md-10">
                <input
                    type="date"
                    name="date"
                    className="form-control"
                    defaultValue={''}         
                    onChange={(e) => {
                        setDate(e.target.value)
                    }}                       
                    placeholder="Date"
                    required />
                </div>
            </div>
        </div>
            <div className="col-md-6">
               <p>&nbsp;</p>
                  <div className="form-group">        
                    <div className="col-sm-6 ">
                    <button type="submit" className="btn btn-primary" >Add</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <StudentsTable students={studentList} deleteStudent={deleteStudent} updateStudent={updateStudent}/>
    </div>
  );
}

export default App;
