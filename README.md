# react-api-helper

This is simple API helper library for handaling API requests and responses.



### Installing

Follow the instructions accordingly,

```
$ npm install react-api-helper --save
```

### Example code

```jsx
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
```

## Note: 
Remember one thing, the props `apiData` is going to receive the response from `<APIHelper />` component. Now it's really up to you that, how you gonna use this. In this example I have shown a way on `getData()` method.  

End with an example of getting some data out of the system or using it for a little demo

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/iamashraful/react-api-helper/blob/master/LICENSE) file for details

## Acknowledgments

* Github Fetch (https://github.com/github/fetch)


#### You are welcome to send me pull requests. :) 
