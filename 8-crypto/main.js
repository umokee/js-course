function crypto(word) {
  const symbols = word.split("");
  const len = symbols.length;
  [
    symbols[0],
    symbols[1],
    symbols[2],
    symbols[len - 3],
    symbols[len - 2],
    symbols[len - 1],
  ] = [
    symbols[len - 3],
    symbols[len - 2],
    symbols[len - 1],
    symbols[0],
    symbols[1],
    symbols[2],
  ];
  return symbols.join("");
}

function check(password, word) {
  const symbols = password.split("");
  const len = symbols.length;
  [
    symbols[len - 3],
    symbols[len - 2],
    symbols[len - 1],
    symbols[0],
    symbols[1],
    symbols[2],
  ] = [
    symbols[0],
    symbols[1],
    symbols[2],
    symbols[len - 3],
    symbols[len - 2],
    symbols[len - 1],
  ];
  const check = symbols.join("");

  if (check === word) {
    return true;
  }
  return false;
}

console.log(crypto("verystrong"));
console.log(check("ongystrver", "verystrong"));

/*
Написать 2 функции:
    шифратор пароля - функция принимает пароль, разбивает по символам,
                      меняет местами какие-то буквы по заданному алгоритму и возвращает строку.
    проверка пароля - принимает зашифрованный пароль и второй пароль.
                      Воспроизводит алгоритм назад на зашифрованном пароле и возвращает true, если он совпадает со втором паролем и false, если нет.
crypto(‘password’) -> ssapdorw
check(‘ssapdorw’, ‘password’) -> true
check(‘ssapdorw’, ‘wrong’) -> false
*/
