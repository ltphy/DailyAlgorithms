import pkg from "ml-hclust";
import concaveman from "concaveman";

const {agnes} = pkg;

const polygon1 = [[1,4], [1,5], [2,6], [4,7], [6,5], [3,4],[3,3],[4,5]];


const polygon2 = [[1,4], [1,5],[3,3],[3,4]];

// const tree = agnes(polygon, {method: 'ward'});
const polygon3 = [[1,4], [1,5], [2,6], [4,7], [4,5], [6,5], [3,4],[3,3]];


const concavedHull = concaveman(polygon3);
console.log(JSON.stringify(concavedHull));