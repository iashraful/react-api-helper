import React from 'react';
/* This gonna import fetch. */
import 'whatwg-fetch';

class APIHelper extends React.Component {
    /**
     * This is simple API Helper Object as React Component for manipulating data
     * from API or to API.
     */
    componentWillMount() {
        /**
         * From the react architecture this method will call first when {this} component render to DOM.
         */
        this.callApi(this.props.apiUrl);
    }

    callApi(url) {
        /**
         * @param url: Actually this is api endpoint. Example: https://iashraful.me/api/v1/some-api/
         * This method has used fetch from (https://github.com/github/fetch)
         * fetch returns promise. This library helps to get json from promise.
         */
        let bodyData = undefined;
        // Declaring empty object
        let meta = {};

        if(this.props.headers) {
            meta.headers = this.props.headers;
        }
        if (this.props.method) {
            meta.method = this.props.method;
            // Simply no reason for body when it is GET method.
            bodyData = this.props.method.toLowerCase() !== 'get' ? this.props.body : undefined;
        }
        if (bodyData) {
            // Only body is added when it is not GET method
            meta.body = bodyData;
        }
        // fetch gonna use here...
        let result = fetch(
            /**
             * First param -> url
             * Second param -> an object for headers, method, body, etc....
             */
            url, meta
        );

        result.then((response) => {
            /* Fetch will return promise here. */
            return response.json();
            /* From here it's returning the JSON of response data */
        }).then((data) => {
            /* It's time to send back the data to parent component via props */
            this.props.apiData(data);
        }).catch((exp) => {
            /* If any errors occur. It will passed to action */
            console.error(exp);
        })
    }

    render() {
        /**
         * This might be worth to return null. But In this case it still need not to return anything.
         */
        return null;
    }
}

export default APIHelper;
