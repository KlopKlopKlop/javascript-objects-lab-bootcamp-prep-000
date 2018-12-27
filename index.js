var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object[key]);
  delete newObject.object;
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  var newObject = obj;
  delete obj;
  delete recipes.key;
  return recipes;
}