import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import $ from '../../node_modules/jquery';
import DirectoryJS from '../json/table.json';
import {Link } from 'react-router-dom';
import '../css/Directory.css';
import '../../node_modules/font-awesome/css/font-awesome.css';
export default class Directory extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                architects: []
            }
        $('.videos').hide();
        this.renderArchitects = this.renderArchitects.bind(this);
    }
    componentDidMount()
    {
        $('.videos').hide();
         this.setState({architects:DirectoryJS});

    }

    componentWillReceiveProps(newProps)
    {
        $('.videos').hide();
    }

    renderArchitects()
    {
        let architects = this.state.architects.map((architect) => {
           return <li className="archi list-group-item">
               <Link className="link" to ={`/architect/${architect.sid}`}><h2>{architect.Names}</h2></Link>
                <span><i className="fa fa-address-card"/> {architect.Address}</span>
                   <br/>
               {architect.email !== undefined &&  <span><i className="fa fa-mail-forward"/> {architect.email}</span>}
               <br/>
                <span><i className="fa fa-mobile-phone"/> {architect.Phones}</span>
            </li>
    })

        return architects;
    }

    render() {
        return (
            <div className="container-fluid">
                <ul>
                    {this.renderArchitects()}
                </ul>
            </div>
        )
    }
}