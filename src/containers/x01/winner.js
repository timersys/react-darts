import React from 'react';
import classNames from 'classnames/bind';

const RenderWinner = React.createClass({

    render: function() {
        if( !this.props.winner )
            return (<div></div>);
        const winnerClass = classNames({
          'winner': true,
          'visible': (this.props.winner.ID || false),
        });

        return (
            <div className={winnerClass}>
    			<h1>Ganó {this.props.winner.name} !!</h1>
    			<table>
    				<thead>
    					<tr>
    						<th></th>
    						{ this.props.players.map( (player) => <th key={player.name}>{player.name}</th>) }
    					</tr>
    				</thead>
    				<tbody>
    					<tr>
    						<td>Dardos lanzados</td>
    						{ this.props.players.map( (player) => {
                                let one_shot = this.props.winner.name == player.name ?  3 - parseInt(this.props.temp.last_shot)  : 0;
                                return (<td>{player.shots.length * 3 - one_shot}</td>)
                            } ) }
    					</tr>
    					<tr>
    						<td>Mayor puntaje</td>
                                { this.props.players.map( (player) => {
                                    let max_shot = 0;
                                    player.shots.map( ( shot ) => {
                                        shot = parseInt(shot);
                                        if( shot > max_shot )
                                            max_shot = shot
                                    });
                                    return (<td>{max_shot}</td>)
                                } ) }
    					</tr>
    					<tr>
    						<td>Checkout</td>
                                { this.props.players.map( (player) => {
                                    if( this.props.winner.name == player.name ) {
                                        const last_shot = player.shots.pop();
                                        return (<td>{last_shot}</td>)
                                    }
                                    return (<td>-</td>)
                                } ) }
    					</tr>
    					<tr>
    						<td>1 dardo Avg</td>
                                { this.props.players.map( (player) => {
                                    let total = 0;
                                    for (const shot of player.shots) {
                                      total += parseInt(shot);
                                    }
                                    let total_darts = player.shots.length * 3;
                                    if( this.props.winner.name == player.name ) {
                                        total_darts -= (3 - parseInt(this.props.temp.last_shot) );
                                    }
                                    console.log(total_darts);
                                    console.log(total);
                                    return (<td>{total / total_darts}</td>)
                                } ) }
    					</tr>
    					<tr>
    						<td>3 dardo Avg</td>
    						<td>344</td>
    						<td>344</td>
    					</tr>
    					<tr>
    						<td>PPD</td>
    						<td>PPD</td>
    						<td>PPD</td>
    					</tr>
    				</tbody>
    			</table>
    		</div>
        );
    }

});

export default RenderWinner;
