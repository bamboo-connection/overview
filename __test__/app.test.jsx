import React from 'react';
import { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import Overview from '../client/src/components/Overview';
import { ids } from '../ids';
import db from '../db/db';
import data from '../data.test.json';

const testInsertion = (testData) => {
  const processedData = testData.map(({ result }) => (
    {
      id: result.place_id,
      name: result.name,
      tagline: result.tagline,
      type: 'Restaurant',
      vicinity: result.vicinity,
      priceLevel: result.price_level,
      zagatFood: Number(result.zagat_food),
      zagatDecor: Number(result.zagat_decor),
      zagatService: Number(result.zagat_service),
      longDescription: result.long_description,
    }));
  db.insertMany(processedData, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};
testInsertion(data);

configure({ adapter: new Adapter() });

describe('A suite for testing all components', () => {
  const mockAxios = new MockAdapter(axios);
  const testData = data;
  const overviewShallow = shallow(<Overview ids={ids} />);
  const overviewMount = mount(<Overview ids={ids} />);
  const overviewRender = render(<Overview ids={ids} />);

  it('should wait for this function to finish first', async () => {
    await expect(mockAxios.onGet('/restaurants/id').reply(200, testData)).toMatchSnapshot();
  });

  it('should send out GET request and get data back', () => {
    expect(overviewMount).toMatchSnapshot();
  });

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
    expect(overviewRender.text()).toEqual('Title PlaceholderTagline PlaceholderRestaurant·Vicinity '
    + 'Placeholder·Price Level PlaceholderTHE WEGOT REVIEWFood Rating PlaceholderFOODDecor '
    + 'Rating PlaceholderDECORService Rating PlaceholderSERVICEDescription Placeholder');
  });
});
