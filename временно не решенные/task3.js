let button = document.querySelector('.btn');
let input = document.querySelector('.inp');
let textBox = document.querySelector('.text');
let imgBox = document.querySelector('.result');


button.addEventListener('click', () =>{
    numShearch();
})

function numShearch (){
    if (input.value<1 || input.value>10)
    {
        textBox.textContent="число вне диапазона от 1 до 10";
        console.log('ok');
    }
    else{
        textBox.textContent=" ";
        useRequest('https://loremflickr.com', displayResult);
    }
};

function displayResult(apiData){
    
    imgBox.innerHTML = `<img src="${apiData}">`;
    console.log("ok");
    console.log("apiData");
};

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };