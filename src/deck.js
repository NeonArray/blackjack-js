import { Card } from './card.js';

export const Suits = ['Hearts', 'Spades', 'Clubs', 'Dimaond'];
export const Ranks = new Map();
Ranks.set('Two', 2);
Ranks.set('Three', 3);
Ranks.set('Four', 4);
Ranks.set('Five', 5);
Ranks.set('Six', 6);
Ranks.set('Seven', 7);
Ranks.set('Eight', 8);
Ranks.set('Nine', 9);
Ranks.set('Ten', 10);
Ranks.set('Jack', 10);
Ranks.set('Queen', 10);
Ranks.set('King', 10);
Ranks.set('Ace', 11);

export const Deck = function Deck() {
    this.cards = [];
    this.createDeck();
    this.shuffleDeck();
};

Deck.prototype.shuffleDeck = function shuffleDeck() {
    const array = this.cards.slice(0);
    const length = array == null ? 0 : array.length;
    
    if (!length) {
        return [];
    }

    let index = -1;
    const lastIndex = length - 1;
    const result = array.slice(0);

    while (++index < length) {
        const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
        const value = result[rand];
        result[rand] = result[index];
        result[index] = value;
    }

    this.cards = result;
};

Deck.prototype.createDeck = function createDeck() {
    for (let i = 0; i < Suits.length; i++) {
        for (let key of Ranks.keys()) {
            this.cards.push(new Card(Suits[i], key));
        }
    }
};

Deck.prototype.drawCard = function drawCard() {
    return this.cards.pop();
};
