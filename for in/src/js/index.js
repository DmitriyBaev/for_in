export default function orderByProps(object, property) {
  const sortArray = [];
  const array = [];
  for (const prop in object) {
    if (property.includes(prop)) {
      sortArray.push({ key: prop, value: object[prop] });
    } else {
      array.push({ key: prop, value: object[prop] });
    }
  }

  array.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1;
    }
    return 0;
  });

  array.forEach((elem) => {
    sortArray.push(elem);
  });
  return sortArray;
}

//orderByProps(obj, ['name', 'level']);
