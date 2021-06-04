import findMaxPrice from "../services";
import {
  findMinPrice,
  calculSum,
  countMarques,
  validateForm,
  initializeFilterMarque,
} from "../services";

describe("Testing service", () => {
  it("sum an array", () => {
    expect(
      calculSum([
        { qte: 5, price: 10 },
        { qte: 1, price: 200 },
        { qte: 2, price: 20 },
      ])
    ).toEqual(290);

    expect(calculSum([])).toEqual(0);
    expect(
      calculSum([
        { qte: 20, price: 70 },
        { qte: 10, price: 1200 },
      ])
    ).toEqual(13400);
  });

  it("find min price", () => {
    expect(
      findMinPrice([{ price: 40 }, { price: 50 }, { price: 400 }])
    ).toEqual({ price: 40 });

    expect(
      findMinPrice([{ price: 50 }, { price: 20 }, { price: 100 }])
    ).toEqual({ price: 20 });
  });

  it("find max price", () => {
    expect(
      findMaxPrice([{ price: 100 }, { price: 50 }, { price: 500 }])
    ).toEqual({
      price: 500,
    });

    expect(
      findMaxPrice([{ price: 1000 }, { price: 420 }, { price: 900 }])
    ).toEqual({ price: 1000 });
  });

  it("count marques", () => {
    expect(
      countMarques([
        { marque: "toshiba" },
        { marque: "HP" },
        { marque: "toshiba" },
      ])
    ).toEqual({ toshiba: 2, HP: 1 });

    expect(
      countMarques([
        { marque: "toshiba" },
        { marque: "DELL" },
        { marque: "HP" },
        { marque: "samsung" },
        { marque: "toshiba" },
        { marque: "HP" },
        { marque: "samsung" },
        { marque: "HP" },
      ])
    ).toEqual({ toshiba: 2, HP: 3, samsung: 2, DELL: 1 });
  });

  it("initialize filter marques", () => {
    expect(initializeFilterMarque([{ marque: "toshiba" }])).toEqual({
      toshiba: true,
    });

    expect(initializeFilterMarque([{}])).toEqual({});
    expect(
      initializeFilterMarque([
        { marque: "HP" },
        { marque: "HP" },
        { marque: "DELL" },
      ])
    ).toEqual({ HP: true, DELL: true });
  });

  it("validate form", () => {
    expect(validateForm({ name: "" })).toEqual({
      name: "Name is required",
      lastName: "Lastname is required",
      address: "Address is required",
      tel: "Mobile number is required",
      email: "Email is required",
    });
    expect(validateForm({})).toEqual({
      name: "Name is required",
      lastName: "Lastname is required",
      address: "Address is required",
      tel: "Mobile number is required",
      email: "Email is required",
    });
    expect(validateForm({ name: "hssan", lastName: "bouzlima" })).toEqual({
      address: "Address is required",
      tel: "Mobile number is required",
      email: "Email is required",
    });

    expect(
      validateForm({
        name: "hssan",
        email: "hh@",
        address: "cite ezzouhour rue tunis",
        tel: 500,
      })
    ).toEqual({
      email: "Invalid email",
      tel: "Invalid mobile number",
      lastName: "Lastname is required",
    });

    expect(
      validateForm({
        name: "79sds",
        email: "hh@live.fr",
        address: "cite ezzouhour rue tunis",
        tel: 10,
      })
    ).toEqual({
      name: "Invalid name",
      tel: "Invalid mobile number",
      lastName: "Lastname is required",
    });

    expect(
      validateForm({
        name: "Hssan",
        lastName: "  _",
        email: "hh@live.fr",
        address: "rue tunis",
        tel: 50,
      })
    ).toEqual({
      lastName: "Invalid lastname",
      address: "Invalid address",
      tel: "Invalid mobile number",
    });
  });
});
