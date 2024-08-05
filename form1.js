// let frmfrm = document.querySelector("frm");
// // frm.action = "dom3.html";
// frmfrm.method = "GET";
// frmfrm.submit();

// frmfrm.addEventListener("click", () => {
//   frmfrm.method = "POST";
//   frmfrm.submit();
// });

let testL = document.querySelector("#test");
testL.addEventListener("click", () => {
  testL.style.width = "100px";
  console.log("나와");
});

// let frmOk = () => {
//   let frm = document.querySelector("#frm");
//   let name = frm.name;
//   let id = frm.id;
//   let sex = frm.sex;
//   let email = frm.email;
//   let introduce = frm.introduce;
//   let school = frm.school;
//   //이름
//   if (name.value.length < 2 && name.value.length > 10) {
//     alert("이름을 2자리 이상 10자 이내로 작성하시오");
//     name.focus();
//   }
//   //아이디
//   if (id.value.length < 8 && id.value.length > 20) {
//     alert("아이디를 8자리 이상 20자 이내로 작성하시오");
//     id.focus();
//   }
//   //성별
//   if (sex[0].value == null || sex[1].value == null) {
//     alert("성별을 선택하세요");
//   }
//   //이메일
//   if (email.value.length < 10 || email.value.length > 200) {
//     alert("이메일을 10자리 이상 200자 이내로 작성하시오");
//     email.focus();
//   }
//   //자기소개
//   if (introduce.value > 1000) {
//     alert("1000자 이내로 작성하시오");
//   }

//   frm.addEventListener("submit", () => {
//     frm.method = "GET";
//     frm.action = "dom3.html";
//     frm.submit();
//   });
// }
let sch = document.querySelector("#school");
let schAdd = document.querySelector("#addSchool");
schAdd.addEventListener(
  "click",
  (e) => {
    console.log("맞음?");
    e.preventDefault();
    e.stopPropagation();
    let ul = document.querySelector("#ul");
    let tmpHTML =
      "<li><span>초등학교</span><span>2020.03.01~2023.02.26</span><span onclick='deleteLi(this)'>-</span></li>";
    ul.innerHTML += tmpHTML;
  },
  false
);

// let frmOk2 = function () {
//   let frm = document.querySelector("#frm");
//   let name = frm.name;
//   let id = frm.id;
//   let sex = frm.sex;
//   let email = frm.email;
//   let introduce = frm.introduce;
//   //이름
//   if (name.value.length < 2 && name.value.length > 10) {
//     alert("이름을 2자리 이상 10자 이내로 작성하시오");
//     name.focus();
//   }
//   //아이디
//   if (id.value.length < 8 && id.value.length > 20) {
//     alert("아이디를 8자리 이상 20자 이내로 작성하시오");
//     id.focus();
//   }
//   //성별
//   if (sex[0].value == null || sex[1].value == null) {
//     alert("성별을 선택하세요");
//   }
//   //이메일
//   if (email.value.length < 10 || email.value.length > 200) {
//     alert("이메일을 10자리 이상 200자 이내로 작성하시오");
//     email.focus();
//   }
//   //자기소개
//   if (introduce.value > 1000) {
//     alert("1000자 이내로 작성하시오");
//   }
// };

// function frmOk3() {
//   let frm = document.querySelector("#frm");
//   let name = frm.name;
//   let id = frm.id;
//   let sex = frm.sex;
//   let email = frm.email;
//   let introduce = frm.introduce;
//   //이름
//   if (name.value.length < 2 && name.value.length > 10) {
//     alert("이름을 2자리 이상 10자 이내로 작성하시오");
//     name.focus();
//   }
//   //아이디
//   if (id.value.length < 8 && id.value.length > 20) {
//     alert("아이디를 8자리 이상 20자 이내로 작성하시오");
//     id.focus();
//   }
//   //성별
//   if (sex[0].value == null || sex[1].value == null) {
//     alert("성별을 선택하세요");
//   }
//   //이메일
//   if (email.value.length < 10 || email.value.length > 200) {
//     alert("이메일을 10자리 이상 200자 이내로 작성하시오");
//     email.focus();
//   }
//   //자기소개
//   if (introduce.value > 1000) {
//     alert("1000자 이내로 작성하시오");
//   }
// }
