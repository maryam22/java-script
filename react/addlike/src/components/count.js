import React,{Component} from 'react';

class Count extends Component {

    constructor(props){
        super(props)
        this.state ={
             count:0

        }
      
    }
    render()
    {
        return( 

            <h1>{this.state.count}</h1>
        )
    }                     
}

export default Count