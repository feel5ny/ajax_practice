// import square from './lib';

// input
const userid = document.getElementById('userid')
const password = document.getElementById('password')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')

// buttons
const getBtn = document.getElementById('get')
const postBtn = document.getElementById('post')
const putBtn = document.getElementById('put')
const deleteBtn = document.getElementById('del')

// innerTEXT
const codeView = document.getElementById('viewer')
const message = document.getElementById('message')

function getItem(e) {
  const xhr = new XMLHttpRequest();
  const email = /@/;
  const useridVal = userid.value
  if (!useridVal.match(email)) {
    message.innerHTML = '다시 입력하세요';
  }

  xhr.open('GET', `/users/${userid.value}`); // 비동기적인 GET요청을 연다.(open은 요청보낼 준비를 의미)
  xhr.send(); // 매개변수에는 요청에 쓸 데이터만 받는다.
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // console.log("ok")
        const getItemList = JSON.stringify(JSON.parse(xhr.responseText), null, 2); // xhr.responseText는 응답에 포함된 텍스트
        codeView.innerHTML = getItemList;
        // console.log(getItemList)
      } else {
        console.log('status Error : ' + this.status);
      }
    }
  }
}


function postItem(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/users'); // 비동기적인 POST요청을 연다.(open은 요청보낼 준비를 의미)
  xhr.setRequestHeader('Content-type', 'application/json');
  const data = {
    'userid': userid.value, 
    'password': password.value, 
    'firstname': firstname.value, 
    'lastname': lastname.value
  };
  // console.log(data)
  xhr.send(JSON.stringify(data)); // 매개변수에는 요청에 쓸 데이터만 받는다.
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // console.log("ok")
        const postItemList = JSON.stringify(JSON.parse(xhr.responseText), null, 2);
        // console.log(postItemList)
        codeView.innerHTML = '포스트 완료 :) GET버튼을 눌러서 확인하세요'
      } else {
        console.log("status Error : " + this.status);
      }
    }
  }
}
  
function deleteItem(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('delete', `/users/${userid.value}`); // 비동기적인 DELETE요청을 연다.(open은 요청보낼 준비를 의미)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // console.log("delete ok")
        const deleteItemList = JSON.stringify(JSON.parse(xhr.responseText), null, 2); 
        codeView.innerHTML = '삭제 완료 :) GET버튼을 눌러서 확인하세요'
        // console.log(deleteItemList)
      } else {
        console.log("status Error : " + this.status);
      }
    }
  }
} 

function putItem(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('put', `/users/${userid.value}`);
  xhr.setRequestHeader('Content-type', 'application/json');
  const data = {
    'userid': userid.value, 
    'password': password.value, 
    'firstname': firstname.value, 
    'lastname': lastname.value
  };
  // console.log(data)
  xhr.send(JSON.stringify(data)); // 매개변수에는 요청에 쓸 데이터만 받는다.
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("put ok")
        const putItemList = JSON.stringify(JSON.parse(xhr.responseText), null, 2);
        // console.log(putItemList)
      } else {
        console.log("status Error : " + this.status);
      }
    }
  }
} 
  


// eventlistener
getBtn.addEventListener('click', getItem)
postBtn.addEventListener('click', postItem)
putBtn.addEventListener('click', putItem)
deleteBtn.addEventListener('click', deleteItem)