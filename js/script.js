// бинарный поиск
function between(item, arr, start, end){
    toSort(arr);
    let midle = Math.floor((start + end) / 2);
    if(item > midle){
        return between(item, arr, midle + 1, end);
    }else if(item < midle) {
        return between(item,arr, start, midle + 1);
    }else if(item == midle){
        return true;
    }else{
        return false;
    }
}

function toSort(arr){
    return arr.sort((a,b) => a - b);
}

const arr = [1,2,5,3,4,8,7,6,9]
console.log(between(3, arr, 2, 9));

// переворот строки
function reverseString(string) {
    if (string.length === 0) {
        return "";
    } else {
        return string[string.length - 1] + reverseString(string.substring(0, string.length - 1));
    }
}

console.log(reverseString('я ничего не понимаю))'))