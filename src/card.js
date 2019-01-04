export const Card = function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
};

Card.prototype.toString = function toString() {
    return `${this.rank} of ${this.suite}`;
};
