import React, { Component } from 'react';
import './App.css';
class App extends Component {
    constructor () {
      super();
      this.state = {value1: '1das',
                    value2: '2sad',
                    value3: '3dasd',
                  }
    }

    handleChange1 (event, value) {
      this.setState({'value1': event.target.value})
    }
    handleChange2 (event, value) {
      this.setState({'value2': event.target.value})
    }
    handleChange3 (event, value) {
      this.setState({'value3': event.target.value})
    }

    render() {
        return (
            <div className="App">
                <input onChange={this.handleChange1.bind(this)} value={this.state.value1} />
                <div>
                    {this.state.value1}
                </div>
                <input onChange={this.handleChange2.bind(this)} value={this.state.value2} />
                <div>
                    {this.state.value2}
                </div>
                <input onChange={this.handleChange3.bind(this)} value={this.state.value3} />
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