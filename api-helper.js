import React from 'react';
import 'whatwg-fetch';


class APIHelper extends React.Component {
    /**
     * This is simple API Helper Object as React Component for manipulating data
     * from API or to API. 
     */
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
}
export default APIHelper;