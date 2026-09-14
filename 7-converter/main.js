function converter(sum, srcCurr, outCurr) {
  if (srcCurr === outCurr) {
    return sum;
  }

  switch (true) {
    case srcCurr === "руб" && outCurr === "$":
      return sum * 80;
    case srcCurr === "$" && outCurr === "руб":
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
