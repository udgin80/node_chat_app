
// var date = new Date();
// var months = ['Jan', 'Feb'];

// console.log(date.getMonth());

var moment = require('moment');

var dateUnix = moment().valueOf();
var dateNormal = moment(dateUnix).format('h:mm a');

console.log(dateNormal);