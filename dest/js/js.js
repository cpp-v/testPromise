alert("Yes!!!67888881111");






//promise = new Promise(function() {});

/* Возвращаем обещание, которое резолвится через определенный промежуток времени */
/*
function delay(interval) {
    return new Promise(function(resolve) {
        setTimeout(resolve, interval);
    });
}

var oneSecondDelay = delay(1000);
*/



/*
let myFirstPromise = new Promise((resolve, reject) => {
  // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
  // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код. 
  // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
  setTimeout(function(){
    resolve("Success!"); // Ура! Всё прошло хорошо!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
  // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
  console.log("Ура! " + successMessage);
  alert(successMessage);
});
*/

var promiseCount = 0;
function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisPromiseCount + 
      ') Запуск (запуск синхронного кода)');

  // Создаём обещание, возвращающее 'result' (по истечении 3-х секунд)
  var p1 = new Promise(
    // Функция разрешения позволяет завершить успешно или 
    // отклонить обещание
    function(resolve, reject) {       
      log.insertAdjacentHTML('beforeend', thisPromiseCount + 
          ') Запуск обещания (запуск асинхронного кода)');
      // Это всего лишь пример асинхронности
      window.setTimeout(
        function() {
          // Обещание выполнено!
          resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000);
    });

  // Указываем, что сделать с выполненным обещанием
  p1.then(
    // Записываем в протокол
    function(val) {
      log.insertAdjacentHTML('beforeend', val +
          ') Обещание выполнено (асинхронный код завершён)\
');
    });

  log.insertAdjacentHTML('beforeend', thisPromiseCount + 
      ') Обещание создано (синхронный код завершён)\
');
}

if ("Promise" in window) {
  let btn = document.getElementById("btn");
  btn.addEventListener("click",testPromise);
} else {
  log = document.getElementById('log');
  log.innerHTML = "Демонстрация невозможна, поскольку ваш браузер не поддерживает интерфейс <code>Promise<code>.";
}



