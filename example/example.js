import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import APIHelper from './api-helper';

class Example extends Component {
    getData(data) {
        console.log("Data");
        console.log(data);
    }

    render() {
    	const url = "https://api.github.com/";

        return (
            <APIHelper
                apiUrl={url}
                method="GET"
                apiData={this.getData.bind(this)}
            />
        );
    }
}

ReactDOM.render(<Example />, document.getElementById('root'));
