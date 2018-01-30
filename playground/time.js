var moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth()); // 0-11 Jan-Dec

// http://momentjs.com/docs/#/displaying/
// var date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY hh:mm:ss a'));

// var date = moment();
// //date.subtract(3, 'hours');
// console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
