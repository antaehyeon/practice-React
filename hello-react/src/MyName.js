import React, { Component } from 'react';

class MyName extends Component {
    render() {
        return (
            <div>
              HI, Myname is <b>{this.props.name}</b> !
            </div>
        );
    }
}

MyName.defaultProps = {
    name: 'DEFAULT_NAME'
};

export default MyName;