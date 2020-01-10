import React, {Component, useImperativeHandle} from 'react';
import data from '../data'

class Main extends Component{
    constructor(){
        super()
        
        this.state = {
            d: data,
            i: 0,

        }
    }


  



    handleNext = e => {
    if(this.state.i !== this.state.d.length-1){
        this.setState({
        i: this.state.i + 1
        })
    }else if(this.state.i === this.state.d.length-1){
        this.setState({
            i: 0
        })
    }
}

    handlePrevious = e => {

    if(this.state.i !== 0){
        this.setState({
        i: this.state.i - 1
        })
    }else if(this.state.i === 0){
        this.setState({
            i: this.state.d.length-1
        })
    }
}


    render(){
        let list = this.state.d[this.state.i].favoriteMovies.map((e, i) => {
            return <li key = {i}>{e}</li>
        let Previous = '< Previous'
        })
        return(
            <div className='main'>
                <div className='body'>
                 
                    <div className='content-container'>
                    <h1 className='counter'>{this.state.i + 1}/25</h1>
                       <h1>{this.state.d[this.state.i].name.first} {this.state.d[this.state.i].name.last} </h1>
                       <h3>From: {this.state.d[this.state.i].city}, {this.state.d[this.state.i].country} </h3>
                       <h3>Operator: {this.state.d[this.state.i].title}</h3>
                       <h3>Employer: {this.state.d[this.state.i].employer}</h3>
                        
                    <h3>Favorite Movies: </h3>
                       <ol >{list}</ol>
                    </div>
                </div>

                <div className='button-container'>
                    <button 
                    className='previous'
                    onClick={this.handlePrevious}> Previous </button>
                    <button>Edit </button>
                    <button>Delete </button>
                    <button>New </button>
                    <button 
                    className='next'
                    onClick={this.handleNext}>Next > </button>
                    
                </div>

            </div>
        )
    }
}
export default Main