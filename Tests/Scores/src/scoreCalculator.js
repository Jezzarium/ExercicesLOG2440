export default class ScoreCalculator {
    constructor() { }

    getStats(reviews) {
        reviews.forEach(element => {
            if (!this.validateStars(element))
                reviews = reviews.filter(el => el != element);
        });
        let scoreTotal = this.calculateAverages(reviews.map(el => el.stars));
        let scoreAthor = this.calculateAverages(reviews.filter(element => element.author).map(el => el.stars));
        let scoreAnonym = this.calculateAverages(reviews.filter(element => !element.author).map(el => el.stars));
        return {totalAverage: scoreTotal, authoredAverage: scoreAthor, anonymousAverage: scoreAnonym}
    }

    validateStars(review) {
        return review.stars <=5 && review.stars >=1
    }

    calculateAverages(arr) {
        return arr.length > 0 ? arr.reduce((acc, el) => acc + el) / arr.length : NaN;
    }
}