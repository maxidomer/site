//let newWin = window.open("about:blank", "hello", "width=500,height=900,left=530");
// const formElement = document.getElementById('form1');  // извлекаем элемент формы [2](https://ru.hexlet.io/qna/javascript/questions/kak-poluchit-dannye-iz-formy-js)
// formElement.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formData = new FormData(formElement);  // создаём объект FormData, передаём в него элемент формы [2](https://ru.hexlet.io/qna/javascript/questions/kak-poluchit-dannye-iz-formy-js)
//   // теперь можно извлечь данные
//   const name = formData.get('name');  // 'John'
//   const surname = formData.get('surname');  // 'Smith'
//   const color = formData.get('color');
//   console.log(name);
//   console.log(surname);
//   console.log(color);
// });
function start() {
  Push.create("Уведомление от t.me/sitodel!", {
    body:"Уведомление о свежих новостях от канала по веб-разработке.",
    icon:'https://static10. tgstat.ru/channnels/_0/f9/f9a29332e2b06463e81938e26ec2adc1.jpg',
    timeout: 4000
  });
}
document.querySelector('#button').addEventListener('click',() => start());
