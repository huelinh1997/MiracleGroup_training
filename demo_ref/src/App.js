import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.inputElement = React.createRef();
    }
    componentDidMount() {
        this.inputElement.current.focus()
    }

    render() {
        return (
            <div className="App">
                <input type="text" ref={this.inputElement}/>
            </div>
        )
    }
}

export default App;
