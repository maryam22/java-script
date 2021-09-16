
import React, { Component } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai'
import { RiEditBoxFill } from 'react-icons/ri'
class TodoList extends Component {
    constructor(props){
       super(props)
       this.state ={
          todos:[]
       }
       this.inputVal = React.createRef()
    }

    addTodo =()=>{

      console.log('testing')
      //console.log(this.inputVal.current.value)
      let val = this.inputVal.current.value
      let temp = this.state.todos
      temp.push(val)
      this.setState({
          todos:temp
      })
    }
    render() {
        return (
            <Container>
                <Card className="row">
                    <div className="card-header">Todo List :{this.state.todos.length}</div>
                    <div className="card-body">
                        <Form id="todo-form" name="form">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input className="form-control" name="todo" id="todo" ref={this.inputVal} placeholder="Enter a todo" />
                                    <hr />
                                    {console.log(this.state.todos)}
                                </div>
                                <div className="form-group col-md-4">
                                    <div className="tui-datepicker-input tui-datetime-input tui-has-focus">
                                        <input className="form-control" type="text" id="datepicker-input" aria-label="Date-Time" />
                                        <span className="tui-ico-date"></span>
                                    </div>
                                    <div id="wrapper" style={{ 'marginTop': '-1px' }}></div>

                                </div>
                            </div>
                            <Button variant={"danger"} onClick = {this.addTodo}>Add Todo</Button>
                        </Form>
                    </div>

                    <div className="card-body">
                        <hr />
                        <h5 className="card-title" id="tasks-title">Todos</h5>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input className="form-control" type="text" name="filter" id="filter" placeholder="Search a todo" />
                            </div>
                        </div>
                        <hr />
                        <ul className="list-group">
                            {
                                this.state.todos.map((todo,index)=>(
                                    <li key={index}className="list-group-item d-flex justify-content-between">
                                {todo}

                               <div>
                               <p className="delete-item d-inline"><AiFillDelete /></p>
                                <p className="update-item d-inline"><RiEditBoxFill /></p>
                               </div>

                            </li>







                                ))
                            }
                         
                        </ul>
                        <hr />
                        <Button id="clear-todos" variant={'dark'}>Delete All Todos</Button>
                    </div>
                </Card>
            </Container>
        );
    }
}

export default TodoList;