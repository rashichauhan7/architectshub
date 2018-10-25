import React from 'react';
import videos from '../css/img/video.mp4';
import '../css/Video.css';
export default class Video extends React.Component {


    render() {
        return (
            <div>

            <div className="videos">
            <video loop autoPlay>
                <source src={videos}
                        type="video/mp4"/>
            </video>
                <div className="container-fluid current">
                    <h1 style={{textAlign: 'center'}} className="mainline"> Welcome to Architects Hub</h1>
                    <h2 style={{textAlign: 'center'}} className="mainline2"> Find your local architect here</h2>
                    <h1 style={{textAlign: 'center'}} className="mainline">Current projects</h1>
                </div>
            </div>
        </div>
        );
    }
}
