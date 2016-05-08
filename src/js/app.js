import React from 'react';
import ReactDom from 'react-dom';
import TestComponent from './test/test-component';

ReactDom.render((
    <TestComponent />), document.getElementById('root'));
                
console.log("web pack OK");
console.log(require("./test/webpack-check"));