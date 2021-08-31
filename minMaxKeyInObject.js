// add whatever parameters you deem necessary - good luck!
function minMaxKeyInObject(object){
  let array = Object.keys(object);
  console.log(array)
  let returnarray=[];
  returnarray[0]=Math.min(...array);
  returnarray[1]=Math.max(...array);
  




return returnarray;}


console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));