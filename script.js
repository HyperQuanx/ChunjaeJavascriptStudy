// let a = (w) => {
//   document.write(`<h1>외부 스크립트 호출 방법 ${w}</h1>`);
// };

// let v = prompt(`write 실험 : `);

// a(v);

let a = (w) => {
  w ? document.write(`확인고름 : ${w}`) : document.write(`취소고름 : ${w}`);
};

let b = confirm(`confirm 실험 예 아니오`);

a(b);
