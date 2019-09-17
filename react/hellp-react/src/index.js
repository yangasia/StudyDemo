import React,{ Component } from 'react';
// import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
import Content from './Content'
// import App from './App';
import * as serviceWorker from './serviceWorker';

function createStore() {
    let state = null
    const listeners = []
    const  subscribe = (listener) => listeners.push(listener)
    const getState = ()=>state
    const dispatch = (action)=>{
        state = reducer(state,action)
        listeners.forEach((listener)=>listener())
    }
    dispatch({})
    return { getState,dispatch,subscribe}
}

class Index extends Component {
    render() {
        return (
                <div>
                    <Header />
                    <Content />
                </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
