import React, { Component } from 'react'
import withToolTip from './withToolTip';

 class Movies extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between">
                <div className=" p-5 border">Movies</div>
                <div className=" p-5 border">Movies</div>
                <div className=" p-5 border">Movies</div>
                <div className=" p-5 border">Movies</div>
                {this.props.showTool && <div>Tooltip</div>}
            </div>
        )
    }
}

export default withToolTip(Movies);