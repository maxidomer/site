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
  Push.create("тестовое уведомление", {
    body:"просто тестирование",
    icon:'on_construction.png',
    action:"эм"
  });
}
document.querySelector('#button').addEventListener('click',() => start());
