import React from 'react';

export default class Architect extends React.Component {
    constructor(props)
    {
        super(props);
        this.state =
            {
                architect: []
            };
        this.setArchitect = this.setArchitect.bind(this);
    }

    componentDidMount() {
        this.setArchitect(this.props.match.params.aid);
    }

    setArchitect(architect)
    {

    }

    render() {
     return (
         <div>Architect</div>
     )
    }
}