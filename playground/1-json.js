const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// //obhect to json and json to object
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// // const parsedData = JSON.parse(jsonBook);
// // console.log(parsedData.title);
// //create new file
// fs.writeFileSync('1-jsonBook.JSON', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON);

// console.log(data.title)

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON);

// data.name = 'Aris';
// data.planet = "aris";
// data.age = 31;

// const dataSTR = JSON.stringify(data);
// fs.writeFileSync('1-json.json', dataSTR)
// fs.readFileSync('1-json.json');

const dataBuffer = fs.readFileSync('1-json.json');

const dataJson = dataBuffer.toString();
console.log(dataJson)

const data = JSON.parse(dataJson)
console.log(data)

data.name = 'giannis';
data.planet = 'galatsi';
data.age = 20;

const dataSTR = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataSTR);
fs.readFileSync('1-json.json');









// const dataStr = dataBuffer.s(dataJSON);

// fs.writeFileSync('1-json.json', dataStr);
// fs.readFileSync('1-json.json')