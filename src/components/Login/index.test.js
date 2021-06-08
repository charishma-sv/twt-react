import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Login from '.';

describe(' Login component', () => {
  it('should match snapshot of Login Component', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
