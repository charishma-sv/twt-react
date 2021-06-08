import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Signup from '.';

describe(' Signup component', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });
  it('should match snapshot of Signup Component', () => {
    const component = renderer.create(<Signup />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
