import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import $ from '../../node_modules/jquery';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        $('.videos').hide();
    }

    componentWillReceiveProps(newProps)
    {
        $('.videos').hide();
    }

    render() {
        return (
            <div>Blog</div>
        )
    }
}