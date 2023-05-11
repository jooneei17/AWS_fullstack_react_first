// function increase(number, callback) {
//   setTimeout(() => {
//     const result = number + 10;
//     if (callback) {
//       callback(result);
//     }
//   }, 3000);
// }

// increase(0, (result) => {
//   console.log(result);
//   increase(result, (result) => {
//     console.log(result);
//     increase(result, (result) => {
//       console.log(result);
//       increase(result, (result) => {
//         console.log(result);
//         console.log("작업 완료");
//       });
//     });
//   });
// });

function increase(number) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        //50보다 높으면 에러 발생시키기
        return rej(new Error("Number Too Big"));
      }
      res(result);
    }, 1000);
  });
  return promise;
}

increase(0)
  .then((number) => {
    //Promise에서 resolve된 값은 .then을 통해 받아올 수 있음
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    //또 .then으로 처리 가능
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    //또 .then으로 처리 가능
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    //또 .then으로 처리 가능
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    //또 .then으로 처리 가능
    console.log(number);
    return increase(number);
  })
  .catch((e) => {
    //도중에 에러가 발생하면 .catch를 통해 알 수 있음
    console.log(e);
  });
