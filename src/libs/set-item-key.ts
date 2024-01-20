export default function setItemKey(data: any[]) {
  let temp = [];

  for (const key in data) {
    temp.push({
      key: Math.floor(100000 + Math.random() * 900000),
      ...data[key],
    });
  }

  return temp;
}
