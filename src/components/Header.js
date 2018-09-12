import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    render() {
        return (
        <div>
            <h1 className='f1'>Champion Masteries</h1>
            <CounterButton color={'red'} />
        </div>
        )
    }
}

export default Header;