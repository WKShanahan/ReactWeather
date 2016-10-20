// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function (){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   })
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('Promise error', err);
// })

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A and b need to be numbers');
    }
  });
}

var a = 10;
var b = 11;

addPromise(a, b).then(function(result) {
  console.log(a + ' plus ' + b + ' is equal to', result);
}, function (err) {
  console.log('Promise error', err);
})
