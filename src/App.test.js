/* eslint-disable testing-library/await-async-query */
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ 
  adapter: new EnzymeAdaptor() 
});

/** 
 * Factory fuction to create a ShallowWrapper for the component that we pass
 * @function getShallowWrapper
 * @param {React.ReactElement} Component component to create shallow wrapper e.g "App"
 * @returns the ShallowWrapper
*/
const getShallowWrapper = (Component) => shallow(<Component/>);

/** 
 * Factory fuction to get all nodes founds
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper a shallow wrapper e.g "shallow(<App)" or use our "getShallowWrapper" 
 * @param {String} testId string for the element you want to target 
 * @returns all nodes founds
*/
const findByTestAttr = (wrapper, testId) => {
  return wrapper.find(`[data-test='${testId}']`);
}

test('renders without error', () => {
  const wrapper = getShallowWrapper(App);
  const appComponent = findByTestAttr(wrapper, "component-app");

  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = getShallowWrapper(App);
  const button = findByTestAttr(wrapper, "increment-button");

  expect(button.length).toBe(1);
});

test('renders decrement button', () => {
  const wrapper = getShallowWrapper(App);

  const button = findByTestAttr(wrapper, "decrement-button");

  expect(button.length).toBe(1)
});

test('renders counter display', () => {
  const wrapper = getShallowWrapper(App);
  const counaterDisplay = findByTestAttr(wrapper, "counter-display");

  expect(counaterDisplay.length).toBe(1);
});

test('counter display starts at 0', () => {
  const wrapper = getShallowWrapper(App);
  const count = Number(findByTestAttr(wrapper, "count").text());

  expect(count).toBe(0);
});

test('clicking btn increments counter display', () => {
  const wrapper = getShallowWrapper(App);

  /* find the button */
  const button = findByTestAttr(wrapper, "increment-button");

  /* simulate click LINK https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/simulate.html */
  button.simulate('click');

  /* get display count */
  const count = Number(findByTestAttr(wrapper, "count").text());

  expect(count).toBe(1);
});


test('clicking btn decrement counter', () => {
  const wrapper = getShallowWrapper(App);

  const incrementBtn = findByTestAttr(wrapper, "increment-button");

  incrementBtn.simulate('click')

  const decrementBtn = findByTestAttr(wrapper, "decrement-button");

  decrementBtn.simulate('click')

  const count = Number(findByTestAttr(wrapper, "count").text());

  expect(count).toBe(0);
});

test('counter does not go below 0', () => {
  const wrapper = getShallowWrapper(App);

  const decrementBtn = findByTestAttr(wrapper, "decrement-button");

  decrementBtn.simulate('click')

  const count = Number(findByTestAttr(wrapper, "count").text());

  expect(count >= 0).toBeTruthy();
});

test('renders counter error msg', () => {
  const wrapper = getShallowWrapper(App);

  const decrementBtn = findByTestAttr(wrapper, "decrement-button");
  decrementBtn.simulate('click')

  const errorMsg = findByTestAttr(wrapper, "counter-error-message");
  expect(errorMsg.length).toBe(1);
});

test('remove counter error msg', () => {
  const wrapper = getShallowWrapper(App);

  const decrementBtn = findByTestAttr(wrapper, "decrement-button");
  decrementBtn.simulate('click')

  const incrementBtn = findByTestAttr(wrapper, "increment-button");
  incrementBtn.simulate('click')

  const errorMsg = findByTestAttr(wrapper, "counter-error-message");
  expect(errorMsg.length).toBe(0);
});
