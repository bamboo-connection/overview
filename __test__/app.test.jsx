import React from 'react';
import { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Overview from '../client/src/components/Overview';
import { ids } from '../ids';

configure({ adapter: new Adapter() });

describe('A suite', () => {
  const overviewShallow = shallow(<Overview ids={ids} />);
  const overviewMount = mount(<Overview ids={ids} />);
  const overviewRender = render(<Overview ids={ids} />);

  it('should render without throwing an error', () => {
    expect(overviewShallow.contains(<div id="overview-restaurant-title">Title Placeholder</div>))
      .toBe(true);
  });

  it('should be selectable by id "overview-wrapper"', () => {
    expect(overviewShallow.is('#overview-wrapper')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(overviewMount.find('#overview-wrapper').length).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(overviewRender.text()).toEqual('Title PlaceholderTagline Placeholder');
  });

  // it('should have the state matching the rendered innerHTML', () => {

  // });
});


// describe('Overview\'s tests', () => {
//   const wrapper = shallow(<Overview />);


//   it('renders without crashing', () => expect(wrapper.find('#top').length).toBe(1));
// });
