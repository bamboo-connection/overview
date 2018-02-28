import React from 'react';
import { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Overview from '../client/src/components/Overview';

configure({ adapter: new Adapter() });

describe('A suite', function () {
  it('should render without throwing an error', function () {
    expect(shallow(<Overview />).contains(<div id="top">Hello World</div>)).toBe(true);
  });

  it('should be selectable by id "top"', function () {
    expect(shallow(<Overview />).is('#top')).toBe(true);
  });

  it('should mount in a full DOM', function () {
    expect(mount(<Overview />).find('#top').length).toBe(1);
  });

  it('should render to static HTML', function () {
    expect(render(<Overview />).text()).toEqual('Hello World');
  });
});


// describe('Overview\'s tests', () => {
//   const wrapper = shallow(<Overview />);


//   it('renders without crashing', () => expect(wrapper.find('#top').length).toBe(1));
// });
