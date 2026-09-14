function converter(sum, srcCur, outCur) {
  switch (outCur) {
    case "руб":
      if (srcCur === "руб") {
        return sum;
      }
      return sum * 80;
    case "$":
      if (srcCur === "$") {
        return sum;
      }
      return sum / 80;
    default:
      return null;
  }
}

console.log(converter(1000, "руб", "$"));

/*
Написать функцию, которая получает на вход 3 параметра:
    суммой средств - 1000
    валютой средств - руб
    целевой валютой - $
Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет.
Ставки конвертации хранятся внутри функции.
*/
