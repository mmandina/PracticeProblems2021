// add whatever parameters you deem necessary - good luck!
function slice(array,num1,num2){
  let outarray=[];
  if (typeof(num2)==="number") {
    
 for (let index = num1; index < array.length && index <num2; index++) {
  console.log(array[index]);
  outarray.push(array[index]);
  
 }
} else {
  
  for (let index = num1; index < array.length; index++) {
    console.log(array[index]);
    outarray.push(array[index]);
    
   }
}
return outarray;
}
