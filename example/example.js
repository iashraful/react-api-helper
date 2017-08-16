import React from 'react'
import ReactDOM from 'react-dom'
import APIHelper from '../api-helper';

export default class App extends React.Component {

    onError(error) {
        console.log(error)
    }

    render() {
        return (
            <APIHelper/>
        )
    }

}

class TestComponent extends React.Component {
    render() {

        return (
            <h1>Hello....</h1>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));