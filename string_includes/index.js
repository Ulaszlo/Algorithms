/*
Инструкции
Выходной сигнал
Для двух массивов строк a1 и a2 верните отсортированный массив r в лексикографическом порядке, в котором строки из a1 являются подстроками строк из a2.

    Пример 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

ВОЗВРАТ ["arp", "live", "strong"]
*/

function inArray(a1, a2) {
    return a1
        .filter(str1 => a2.some(str2 => str2.includes(str1)))
        .sort(); // сортировка только, чтобы прошли тесты
}

// для лучшей читаемости
function inArray2(a1, a2) {
    const result = [];

    for (const str1 of a1) {
        for (const str2 of a2) {
            if (str2.includes(str1)) {
                result.push(str1);
                break;
            }
        }
    }

    return result.sort();
}