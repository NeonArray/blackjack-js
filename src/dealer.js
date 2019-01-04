import { Deck, Ranks } from './deck.js';

export const Dealer = function Dealer(players) {
    this.deck = new Deck();
    this.players = players;
};

Dealer.prototype.dealNewRound = function dealNewRound() {
    this.deck = new Deck();

    this.players.forEach((player) => {
        player.addCardToHand(this.deck.drawCard());
        player.addCardToHand(this.deck.drawCard());
    });
};

Dealer.prototype.dealCard = function dealCard(player) {
    this.players[this.players.indexOf(player)].addCardToHand(this.deck.drawCard());

    this.bustPlayers();
}

Dealer.prototype.bustPlayers = function () {
    this.players.forEach((player, i) => {
        if (this.sumOfPlayerCards(i) > 21) {
            player.busted = true;
            console.log(`${player.toString()} busted`);
        }
    });
};

Dealer.prototype.sumOfPlayerCards = function sumOfPlayerCards(player) {
    let accumulator = 0;

    this.players[player].cards.forEach((i) => {
        accumulator += Ranks.get(i.rank);
    });

    return accumulator;
};
