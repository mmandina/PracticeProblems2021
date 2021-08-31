// add whatever parameters you deem necessary - good luck!
function includes(collection,value,index){
  console.log(Array.isArray(collection));
if (Array.isArray(collection)===true){
  if (typeof(index)==="number"){
   let arr1=collection.slice(index);
   console.log(arr1);
    return arr1.includes(value);
  }
  return collection.includes(value);
} else if (typeof(collection)==="string") {
  if (typeof(index)==="number"){
    let str1=collection.slice(index);
    return str1.includes(value);
  } else {
    return collection.includes(value);
  }
} else { 
  
  for( let key in collection){
    if(collection[key]===value){
      return true;
    } 
  }return false;
  }

}
  

