import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './containers/Home';
import Directory from './component/Directory';
import Network from './component/Network';
import Contact from './component/Contact';
import Blog from './component/Blog';
import Gallery from './component/Gallery';
import Architect from './component/Architect';
export default class Routes extends React.Component {
    constructor()
    {
        super();
    }

    render () {
        return (
            <Router>
                <div>
                    <Route path='' component={Home}/>
                    <Route path='/directory' component={Directory}/>
                    <Route path='/network' component={Network}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/blog' component={Blog}/>
                    <Route path='/gallery' component={Gallery}/>
                    <Route path='/architect/:aid' component={Architect}/>

                </div>
            </Router>
        );
    }
    }