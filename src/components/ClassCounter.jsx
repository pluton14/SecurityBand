import React from 'react';
class ClassCounter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: 0
        }
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }
    inc(){
        this.setState({value: this.state.value + 1})
    }
    dec(){
        this.setState({value: this.state.value - 1})
    }
    render(){
        return(
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.inc}>+++</button>
                <button onClick={this.dec}>---</button>
            </div>
        );
    }
}
export default ClassCounter;