import React, {Component} from 'react';
import {MDBDataTable} from 'mdbreact';
import {Link, Redirect, useHistory} from 'react-router-dom';


 class StudentsTable extends Component{

    render() {const data = {
        columns: [
          {
            label: 'ID',
            field: 'id',
            sort: 'asc'
          },
          {
            label: 'Name',
            field: 'name',
            sort: 'asc'
          },
          {
            label: 'Date of Birth',
            field: 'date',
            sort: 'asc'
          },
          {
              label:"Actions",
              field:"actions",
              sort: "asc"
          }
        ],
        rows: [
          ...this.props.students.map((student,key) => {
            return(
          {
            id:student.ID,
            name: student.Fullname,
            date: student.DoB,
            actions:<div><Link to= {{ pathname: '/update', data:{_student:student}, function:{_updateStudent:this.props.updateStudent}}} className="btn btn-primary btn-sm" >Edit</Link>  <button className="btn btn-danger btn-sm" onClick={
                (event) => {
                event.preventDefault()
                this.props.deleteStudent(student.ID)
                }}>Delete</button></div>
            })
          }
        )]
      }
      
      return (
        <div>
          <MDBDataTable
            striped
            bordered
            small
            data={data}
          />
        </div>
      );
      }
 }

 export default StudentsTable