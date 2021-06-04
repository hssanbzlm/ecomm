import { mount, shallow } from "enzyme";
import Pagination from "../Pagination";

describe("Testing pagination component", () => {
  it("renders without crashing", () => {
    shallow(<Pagination />);
  });

  it("does not render", () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.find("li")).toHaveLength(0);
  });

  it("does render", () => {
    const wrapper = shallow(
      <Pagination numberOfPagination={4} activePage={2} />
    );
    expect(wrapper.find("li")).toHaveLength(4);
  });

  it("check callback", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <Pagination
        numberOfPagination={4}
        activePage={1}
        getPageNumber={mockFn}
      />
    );
    const li = wrapper.find(".is-active");
    li.simulate("click", { target: { page: 0 } });
    expect(mockFn.mock.calls.length).toBe(1);
  });
});
