'use strict';

const animals = require('./const/animals.json');
const adjectives = require('./const/adjectives.json');

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

exports.animals = animals;
exports.adjectives = adjectives;
exports.generateID = (length = 3, separator = '_') => {
    return Array.apply(null, Array(length - 1))
        .map(() => getRandomElement(adjectives))
        .concat(getRandomElement(animals))
        .join(separator);
};
