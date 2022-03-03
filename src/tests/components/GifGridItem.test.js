import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
import { shallowToJson } from "enzyme-to-json";

describe("Pruebas en <GifGridItem/>", () => {
  const title = "Un titulo";
  const url = "https://";

  test("Debe de mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
