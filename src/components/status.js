import React, { Component } from 'react';
import Player from './selectPlayer';

class Status extends Component {
    handleSetPlayer(e) {
        this.props.setPlayer(e)
    }
    renderHtml() {
        if(this.props.winner=="draw"){
            return (<h4 className="my-4">Match {this.props.winner}</h4>)

        } 
    
        else if (this.props.winner) {
            return (<h4 className="my-4">Winner is {this.props.winner}</h4>)

        }
         
        
        else {
            return this.props.player ?
                <h4 className="my-4">Next player is {this.props.player}</h4> :

                <Player player={(e) => this.handleSetPlayer(e)} />
        }
    }
    render() {
        return (<span>{this.renderHtml()}</span>)
    }
}

export default Status;