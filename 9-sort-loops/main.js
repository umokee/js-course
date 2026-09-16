const arr = [1, 40, -5, 10, 0];

function sort(arr) {
  let temp = 0;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = false;
      }
    }
  }

  return arr;
}

console.log(`До сортировки: ${arr}`);
const res = sort(arr);
console.log(`После сортировки: ${res}`);

/*
Дан массив чисел: arr = [1, 40, -5, 10, 0]
Написать функцию, которая сортирует данный массив при помощи циклов.
Подсказка:
    Нужно использовать 2 цикла, вложенных друг в друга
    Нужно сравнивать и менять элементы
*/
