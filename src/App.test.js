import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ 
  adapter: new EnzymeAdaptor() 
});

test('renders without error', () => {
  const wrapper = shallow(<App/>);
  const appComponent = wrapper.find(`[data-test="component-app"]`);

  expect(appComponent.length).toBe(1);
});

test('renders increment btn', () => {
  
});

test('renders counter display', () => {
  
});

test('counter display starts at 0', () => {
  
});

test('clicking btn increments counter display', () => {
  
});