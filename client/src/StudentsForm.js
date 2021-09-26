import React, {Component, useState} from 'react';

 class StudentsForm extends Component{

    componentWillMount(){
        if(this.props.location.data){
            const {_updateStudent}=this.props.location.function;
            const {_student} = this.props.location.data;
            console.log(_updateStudent)
            this.setState({updateStudent:_updateStudent})
            this.setState({student:_student})
        }
        else{
            window.location.href='/'
        }
    }

    constructor(props){
        super(props)
        this.state = {
            student:null,
            updateStudent(){}
        }
    }

    render() {
      return (
        <div className="container">
                        <p>&nbsp;</p>
      <form className="form-horizontal" onSubmit={(event) => {
            event.preventDefault()
            const name = this._name.value
            const id = this.state.student.ID
            const date = this._date.value
            this.state.updateStudent(id,name,date)
            window.location.href='/'
        }}>
        <div className="row">
            <div className="col-md-6">
            <div className="form-group">
                <label className="control-label col-sm-12" htmlFor="id">Id:</label>
                <div className="col-md-10 col-sm-12">
                <input
                    className="form-control"
                    value={this.state.student.ID}
                    readOnly/>
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
                    ref={(input) => { this._name = input }}
                    className="form-control"
                    defaultValue={this.state.student.Fullname}
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
                    ref={(input) => { this._date = input }}
                    className="form-control"
                    defaultValue={this.state.student.DoB}   
                    placeholder="Date"
                    required />
                </div>
            </div>
        </div>
            <div className="col-md-6">
               <p>&nbsp;</p>
                  <div className="form-group">        
                    <div className="col-sm-6 ">
                    <button type="submit" className="btn btn-primary" >Update</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
        </div>
      );
      }
 }

 export default StudentsForm