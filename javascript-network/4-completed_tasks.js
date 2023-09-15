#!/bin/usr/node
// A script that computes the number of tasks completed by user id.

const request = require('request');

apiUrl = process.argv[2];
let user = '';

request.get(apiUrl, {encoding:'utf-8'})
.on('data', data => {
  user += data;
})
.on('end', () => {
  const userObj = JSON.parse(user);
  let count = 0;
  let userId = userObj[0].userId;
  for (let i=0; i < userObj.length; i++) {
    userObj.forEach(task => {
      if (task.completed === true  && task.userId === userId) {
        count += 1;
      }
    });
    if (count === 0) {
      break;
    }
    if (userId === 1) {
      console.log('\{ \'' + userId + '\'' + ': ' + count + ',');
    } else if (userId === 10) {
      console.log('  \'' + userId + '\'' + ': ' + count + '\ }');
    } else {
      console.log('  \'' + userId + '\'' + ': ' + count + ',');
    }
    count = 0;
    userId += 1;
  }
  
})