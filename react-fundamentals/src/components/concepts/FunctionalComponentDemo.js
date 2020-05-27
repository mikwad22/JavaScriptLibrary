import React from 'react';

import {
     Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col
 } from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        <div className="main">
            <div className="mainDiv">
            <h1>Functional Component</h1>
            <p>Functional components are the primary tool in React to build a small, modular piece to your page.</p>
            <dl>
                <dt>Can use state</dt>
                <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>

                <dt>No 'this' keyword</dt>
                <dd>Older class components use 'this', functional components have no 'this' object.</dd>

                <dt>Can use effects</dt>
                <dd>With the 'useEffect' hook, functional components can perform side effect with any props or state changes.</dd>

                <dt>return()</dt>
                <dd>Must return element, but this element may have nested elements inside.</dd>
            </dl>
                <h1>Functional Syntax versus Arrow Function</h1>
            </div>
        </div>
    );
};

export default FunctionalComponentDemo;

 const HelloWorld = function () {
     return (
         <div>
             <Card>
                 <img width="100%" height="280px" src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt="Card cap" />
                 <CardBody>
                     <CardTitle>Regular Ole Function</CardTitle>
                     <CardSubtitle>A JS Library</CardSubtitle>
                     <CardText><pre>const HelloWorld = function() </pre>.</CardText>
                     <Button>Go somewhere</Button>
                 </CardBody>
             </Card>
         </div>
     )
 };

 //Fat Arrow Functional Component - 3 fewer lines. Common in React....
const HelloWorldFatArrow = () =>
     <div>
         <Card>
             <img width="100%" height="280px" src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxdefault.jpg" alt="Card cap" />
            <CardBody>
                 <CardTitle>Fat Arrow</CardTitle>
                 <CardSubtitle>A JS Library</CardSubtitle>
                 <CardText><pre>const HelloWorld = () => </pre>.</CardText>
                 <Button>Go somewhere</Button>
             </CardBody>
         </Card>
     </div>
