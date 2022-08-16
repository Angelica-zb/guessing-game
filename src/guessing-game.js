class GuessingGame {

    constructor() {
        this.n = 0;
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.n = Math.ceil((this.max - this.min) / 2 + this.min);
    }

    lower() {
        this.max = this.n;
    }

    greater() {
        this.min = this.n;
    }
}

module.exports = GuessingGame;