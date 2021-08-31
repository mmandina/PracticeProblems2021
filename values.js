// add whatever parameters you deem necessary - good luck!
function values(box){
  let array=[];
  for (const key in box) {
    array.push(box[key]);
  }
  return array;
}