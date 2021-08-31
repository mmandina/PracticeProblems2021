// add whatever parameters you deem necessary - good luck!
function lastIndexOf(arr,num){
let lastFound=-1;
for (let index = 0; index < arr.length; index++) {
 if (arr[index]===num) {
   lastFound=index;
 }
  
}return lastFound;

}