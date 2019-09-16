export const remove = (collection, item) => {
  const index = collection.indexOf(item);
  if (index > -1) {
    collection.splice(index, 1);
    return collection;
  } else {
    return collection;
  }
}

export const removeObject = (collection, id) => {
  let newList = [];
  collection.map(item => {
    if (item.idUser !== id) {
      newList.push(item);
    }
  });
  return newList;
}

export const currentDate = () => {
  const date = new Date();
  return date.toLocaleString();
}

export const create_UUID = () => {
  var dt = new Date().getTime();

  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      // eslint-disable-next-line no-mixed-operators
      return (c==='x' ? r :(r&0x3|0x8)).toString(16);
  });

  return uuid;
}
