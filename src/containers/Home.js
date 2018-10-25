import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/Home.css'
import {Link} from 'react-router-dom';
import logo from '../css/img/logo.png'
import Video from "../component/Video";
import $ from '../../node_modules/jquery';
export default class Home extends React.Component {
    constructor(props)
    {
        super(props);
    }

    componentWillReceiveProps(newprops)
    {
        $('.videos').show();
    }
    render () {
        return (
            <div>
                <div className="topbar nav navbar navbar-expand-sm ">
                    <div><img src={logo}></img></div>
                    <div className="nav-pills tabs"><Link to=''>Home</Link></div>
                    <div className="nav-pills tabs"><Link to='/directory'>Directory</Link></div>
                    <div className="nav-pills tabs"><Link to='/network'>Network</Link></div>
                    <div className="nav-pills tabs"><Link to='/contact'>Contact</Link></div>
                    <div className="nav-pills tabs"><Link to='/blog'>Blog</Link></div>
                    <div className="nav-pills tabs"><Link to='/gallery'>Gallery</Link></div>
                </div>
                <Video/>

            </div>
        )

    }
}