const objectPattern = "\{[^{}]*\}";

const objectString = '[info] [FeedbackEmail] : [FROM: zmpjp] /logs POST {"message": "This trip is boring"}';

const match = objectString.match(objectPattern);

const objectMatch = JSON.parse(match[0]);
const objectNull = JSON.parse('null');
console.log("objectNull", objectNull);
const objectUndefined = JSON.parse('"undefined"');

console.log("objectUndefined", objectUndefined);