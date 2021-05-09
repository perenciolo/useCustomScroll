import React from "react";
import { shallow } from "enzyme";
import useCustomScroll from "./useCustomScroll";

describe("useCustomScroll", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
  it("should return a fieldRef an call the given callback when it is defined", () => {
    const cbMock = jest.fn();
    const scrollIntoViewMock = jest.fn();
    const expected = {
      behavior: "smooth",
    };
    jest.spyOn(React, "useRef").mockImplementation(() => ({
      current: { scrollIntoView: scrollIntoViewMock },
    }));
    let wrapper = shallow(<HookWrapper hook={() => useCustomScroll(cbMock)} />);
    let { hook } = wrapper.find("div").props();
    expect(hook.current.scrollIntoView).toBeCalledTimes(1);
    expect(hook.current.scrollIntoView).toHaveBeenNthCalledWith(1, expected);
    expect(cbMock).toBeCalledTimes(1);
  });

  it("should return a null when current is falsy", () => {
    jest.spyOn(React, "useRef").mockImplementation(() => null);
    let wrapper = shallow(<HookWrapper hook={() => useCustomScroll()} />);
    let { hook } = wrapper.find("div").props();
    expect(hook).toBeNull();
  });
});
