// бинарный поиск
function between(item, arr, start, end){
    if(end >= start) {
        let midle = Math.floor((start + end) / 2);
        if(item > arr[midle]){
            return between(item, arr, midle + 1, end);
        }else if(item < arr[midle]) {
            return between(item,arr, start, midle - 1);
        }else if(item === arr[midle]){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function toSort(arr){
    return arr.sort((a,b) => a - b);
}

const arr = [1,2,5,3,4,8,7,6,9];
const array = toSort(arr);
console.log(between(3, array, 2, 9));

// переворот строки
function reverseString(string) {
    if (string.length === 0) {
        return "";
    } else {
        return string[string.length - 1] + reverseString(string.substring(0, string.length - 1));
    }
}

console.log(reverseString('я ничего не понимаю))'))