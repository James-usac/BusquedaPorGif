import { shallow } from "enzyme";
import { GifGrid } from "../../Components/GifGrid";

describe('Pruebas en <GifGrid>', () => {
  
  test('debe de mostrar el componente correctamente', () => {
    const wrapper = shallow(<GifGrid/>);
    expect(wrapper).toMatchSnapshot();
  });
});