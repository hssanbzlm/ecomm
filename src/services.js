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

export function validateForm(data) {
  let errors = {};
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!data.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Invalid email address";
  }
  if (!data.name) {
    errors.name = "Name is required";
  } else if (!nameRegex.test(data.name)) {
    errors.name = "Invalid name ";
  }

  if (!data.lastName) {
    errors.lastName = "Lastname is required";
  } else if (!nameRegex.test(data.lastName)) {
    errors.lastName = "Invalid lastname ";
  }
  if (!data.address) {
    errors.address = "Address is required";
  } else if (data.address.trim().length < 15) {
    errors.address = "Invalid Adress";
  }
  if (!data.tel) {
    errors.tel = "Mobile number is required";
  } else {
    const numString = data.tel.toString(10);
    const firstTwoDigit = parseInt(
      numString.split("").slice(0, 2).join(""),
      10
    );
    if (
      numString.length < 8 ||
      numString.length > 8 ||
      firstTwoDigit < 20 ||
      (firstTwoDigit > 59 && firstTwoDigit < 90) ||
      (firstTwoDigit > 29 && firstTwoDigit < 50)
    ) {
      errors.tel = "Invalid mobile number";
    }
  }
  return errors;
}
