import React, {useState} from 'react';
import { Route } from 'react-router-dom';

const State = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <ul>
                    <dt>useState is Unique to Functional Components</dt>
                    <dd>Class components have a seperate means of using and changing state.</dd>
                    <dt>useState Uses Array Destructuring</dt>
                    <dd>UseState proves a state variable and a setState function.</dd>
                    <dt>useState is a Hook</dt>
                    <dd>useState is a hook baked into React.</dd>
                    <dt>Triggers Re-renders</dt>
                    <dd>Like with props changes, changing the state of a component re-renders the whole component.</dd>
                </ul>
                <StateExample />
            </div>
        </div>
    );
};

export default State;

function StateExample() {
    const [text, setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);

    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <br />
            <img 
            style={{ width: '100px', height: '100px' }}
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png"
            onClick={e => setLikeNum(likeNum +1)} alt=""
            />
            <span>{likeNum}</span>
        </div>
    );
};

