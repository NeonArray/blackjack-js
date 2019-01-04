import { Player } from './player.js';
import { Dealer } from './dealer.js';

export const Manager = function Manager() {
    this.players = [new Player({ name: 'player', ai: false }), new Player({ name: 'bob', ai: true }), new Player({ name: 'jim', ai: true })];
    this.dealer = new Dealer(this.players);    
    this.dealer.dealNewRound();
    this.dealer.dealCard(this.players[0]);
};

Manager.prototype.startRound = function startRound() {
    this.dealer.dealNewRound();
};
