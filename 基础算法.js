// 1.对 [49, 38, 65, 97, 76, 13, 27, 49]进行冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length;i++) {
    for(let j = 0; j < arr.length - 1 - i;j++) {
      // 第一轮结束最后一个一定是最大值,故第二轮最后一个不需要再比，即内层循环j<arr.length-1-i的原因
      if (arr[j] > arr[j + 1]) {
        // 交换位置
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        // es6可以这样写
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
const arr = [49, 38, 65, 97, 76, 13, 27, 49];
const sortArr = bubbleSort(arr); // 数组sort方法同原理
console.log(sortArr);
