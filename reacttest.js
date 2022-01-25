 var script = document.createElement('script');
        script.src='https://unpkg.com/react@16/umd/react.production.min.js';
        script.type='text/javascript';
        document.getElementsByTagName('head')[0].appendChild(script);

 var script = document.createElement('script');
        script.src='https://unpkg.com/react-dom@16/umd/react-dom.production.min.js';
        script.type='text/javascript';
        document.getElementsByTagName('head')[0].appendChild(script);

 var script = document.createElement('script');
        script.src='https://unpkg.com/babel-standalone@6/babel.min.js';
        script.type='text/javascript';
        document.getElementsByTagName('head')[0].appendChild(script);

var timer = setInterval(() => {
            class HelloWorld extends React.Component { 
        render() { 
            return (<p>Hello world</p>); 
        } 
    } 
    ReactDOM.render( 
        <HelloWorld />, 
        document.getElementById('root') 
    ); 
        }, 100);
