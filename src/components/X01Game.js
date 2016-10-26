import React from 'react';
import classNames from 'classnames/bind';
import css from '../styles/x01.styl';
import _ from 'lodash';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import {getCheckout, getDiferencia} from './helpers';
import RenderWinner from '../containers/x01/winner';

const X01Game = React.createClass({

	componentWillMount() {
        this.inputCallback = _.debounce(function (tempScoreHtml) {
           this.calculateScore();
        }, 200);
		let game_score = parseInt( this.props.xval + '01');
		this.props.setCurrent( 0 );
		this.props.setAllScore( game_score );
    },
	componentDidMount() {


	},
	saveCurrentShot(e) {
		e.preventDefault();
		const currentPlayer = this.props.temp.currentPlayer,
			  currentID 	= this.props.players[currentPlayer].ID,
			  shot 			= this.refs.shot.value,
			  html 			= document.querySelector('.score-column.active .tempScore'),
			  checkout 		= document.querySelector('.checkout'),
			  boton 		= document.querySelector('#shots .btn'),
			  diferencia 		= document.querySelector('.diferencia');

		if( ! this.isValidShot(shot) )
			return;

		this.props.saveShot( shot, currentPlayer);
		this.refs.shots.reset();

		const score = parseInt( (this.props.players[currentPlayer].score ) ) - parseInt(shot);
		const nextPlayer = this.nextPlayer();
		this.props.saveScore(score, currentPlayer);
		this.props.setCurrent(nextPlayer);
		if( score === 0 ) {
			const last_shot = prompt("Cuantos dardos usaste?","3");
			this.props.setWinner( this.props.players[currentPlayer], last_shot );

			boton.disabled = true;

		} else {


			html.innerHTML = '';
			checkout.innerHTML = getCheckout(this.props.players[nextPlayer].score);
			diferencia.innerHTML = getDiferencia(this.props.players[nextPlayer].score, score );
		}
	},
	isValidShot( shot ) {
		const currentPlayer = this.props.players[this.props.temp.currentPlayer],
			  currentID 	= currentPlayer.ID,
			  score 		= currentPlayer.score;
		if( ! shot )
			return false;

		if( shot > score || shot < 0  || score - shot == 1 ) {
			alert( 'El tiro no es válido' );
			return false
		}

		if( shot > 180 ) {
			alert( `Contame como hiciste ${shot} con 3 dardos tramposo!!` );
			return false
		}

		return true;
	},
	nextPlayer() {
		const players = this.props.players,
			  total   = players.length,
			  i 	  = this.props.temp.currentPlayer ;

			if( ( i + 1 ) >= total )
				return 0;

			return i + 1 ;

	},
	shotKeyUp( e ) {
		e.persist();
		this.inputCallback();
	},
	calculateScore() {

		const currentPlayer = this.props.players[this.props.temp.currentPlayer],
			  currentID 	= currentPlayer.ID,
			  score 		= currentPlayer.score,
			  shot 			= ( this.refs.shot && this.refs.shot.value) || 0,
			  tempScore 	= score - ( parseInt( shot ) || 0 ),
			  html 			= document.querySelector('.score-column.active .tempScore');

		if( tempScore )
			html.innerHTML = tempScore;
	},
	render() {
		const currentPlayer = this.props.players[this.props.temp.currentPlayer];

		return (
			<div>
				<RenderWinner {...this.props} winner={this.props.temp.winner} />
			<div className="game-container">
				<div className="scoreboard">
					 { this.props.players.map( (player) => {
					 	const colClass = classNames({
						  'score-column': true,
						  'winner-player': (player.score === 0),
						  'active': ( currentPlayer.ID === player.ID)
						});
					 	return (
							<div className={colClass} key={player.ID}>
								<div className="score-header">
									<span>{player.name}</span>
									<div className="score">
										<ReactCSSTransitionGroup component="div" transitionName="moveUp" transitionEnterTimeout={300} transitionLeaveTimeout={100} transitionAppearTimeout={100} transitionAppear={true}>
											<div key={player.score}>{player.score}</div>
										</ReactCSSTransitionGroup>
										<span className="tempScore"></span>
									</div>
								</div>
								<div className="shots">
									{ player.shots ? player.shots.map( (shot,index) => <div className="shot" key={index}>{shot}</div>) : ''}
								</div>
							</div>
						)
					})}
				</div>
				<div className="shots-form">
					El el turno de
					<h3>{this.props.players[this.props.temp.currentPlayer].name}</h3>
					<form id="shots" ref="shots" onSubmit={this.saveCurrentShot}>
						<input className="shot-input" type="number" ref="shot" onChange={this.shotKeyUp}/>
						<button type="submit" className="btn">Grabar</button>
					</form>
					<div className="diferencia"></div>
					<div className="checkout"></div>
				</div>
			</div>
			</div>
		);
	}
});



export default X01Game;
