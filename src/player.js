import { Ranks } from './deck.js';

export const Player = function Player(options) {
    this.name = options.name;
    this.ai = options.ai;
    this.cards = [];
    this.busted = false;
};

Player.prototype.addCardToHand = function addCardToHand(card) {
    this.cards.push(card);
};

Player.prototype.sumOfCards = function sumOfCards() {
    let accumulator = 0;

    this.cards.forEach((i) => {
        accumulator += Ranks.get(i.rank);
    });

    return accumulator;
};

Player.prototype.removeCardFromHand = function removeCardFromHand(card) {
    this.cards.splice(this.cards.indexOf(card), 1);
};

Player.prototype.toString = function toString() {
    return this.name;
};
