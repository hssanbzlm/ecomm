import { shallow } from "enzyme";
import ItemCard from "../ItemCard";

describe("Item card testing", () => {
  it("renders without crashing", () => {
    shallow(
      <ItemCard
        item={{ id: 1, description: "hssan", title: "Test", marque: "HP" }}
      />
    );
  });

  it("displays description title marque", () => {
    const wrapper = shallow(
      <ItemCard
        item={{ id: 1, description: "hssan", title: "Test", marque: "HP" }}
      />
    );
    const title = <h5 className="card-title">Test</h5>;
    const description = <p className="card-text">hssan</p>;
    const marque = <p className="card-text">HP</p>;

    expect(wrapper.contains(title)).toEqual(true);
    expect(wrapper.contains(description)).toEqual(true);
    expect(wrapper.contains(marque)).toEqual(true);
  });

  it("displays button", () => {
    const expectedNode = shallow(
      <button className="btn btn-primary">Add to cart</button>
    );

    const actualNode = shallow(
      <ItemCard
        item={{ id: 1, description: "hssan", title: "Test", marque: "HP" }}
      />
    );
    expect(actualNode.html()).toContain(expectedNode.html());
  });
});
