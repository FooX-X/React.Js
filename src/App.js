import React, { Component } from 'react';
import './App.css';
class App extends Component {
    constructor () {
        super();
        this.state = {
            value1: '1das',
            value2: '2sad',
            value3: '3dasd',
        }
    }

    handleChange (event, value) {
        let paramsToSet = {}
        paramsToSet[value] = event.target.value
        this.setState(paramsToSet)
    }

    render() {
        return (
            <div className="App">
                <input onChange={(event)=>this.handleChange(event, 'value1')} value={this.state.value1} />
                <div>
                    {this.state.value1}
                </div>
                <input onChange={(event)=>this.handleChange(event, 'value2')} value={this.state.value2} />
                <div>
                    {this.state.value2}
                </div>
                <input onChange={(event)=>this.handleChange(event, 'value3')} value={this.state.value3} />
                <div>
                    {this.state.value3}
                </div>
                <br/>
                <div onMouseDown={()=>alert("Mouse is Down")}>Hi</div>
                <br/>
                <div onMouseUp={()=>alert("Mouse is Up")}>Hi2</div>
            </div>
        );
    }
}

export default App;

