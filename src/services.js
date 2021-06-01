export default function findMaxPrice(data) {
  return data.reduce((a, b) => {
    if (Math.max(a.price, b.price) === a.price) return a;
    else return b;
  });
}

export function findMinPrice(data) {
  return data.reduce((a, b) => {
    if (Math.min(a.price, b.price) === a.price) return a;
    else return b;
  });
}

export function countMarques(data) {
  var marques = {};
  for (let i = 0; i < data.length; i++) {
    if (marques[data[i].marque]) {
      marques[data[i].marque]++;
    } else {
      marques[data[i].marque] = 1;
    }
  }
  return marques;
}
export function initializeFilterMarque(data) {
  var marquesFilter = {};

  for (let i = 0; i < data.length; i++) {
    if (!marquesFilter[data[i].marque]) {
      marquesFilter[data[i].marque] = true;
    }
  }
  return marquesFilter;
}

export function calculSum(data) {
  return data.reduce((acc, current) => {
    return acc + current.qte * current.price;
  }, 0);
}
