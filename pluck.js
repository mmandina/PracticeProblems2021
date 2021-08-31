// add whatever parameters you deem necessary - good luck!
function pluck(array,inkey){
  let outArray=[];
for (let index = 0; index < array.length; index++) {
  
   outArray.push(array[index][inkey])
 
} return outArray;
}
