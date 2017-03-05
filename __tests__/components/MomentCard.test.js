import React from 'react';
import renderer from 'react-test-renderer';
import EventCard from '../../app/components/EventCard';
import { shallow } from 'enzyme';


describe('EventCard Component', () => {
  const eventId = '10';
  const actionProps = { like: () => ({"test": "test"}) };
  const eventProps = { id: '10', user: { avatarUrl: null } }

  const eventCardTree = shallow(
    <EventCard id={ eventId } actions={actionProps} {...eventProps}/>
  );
  console.log('eventCardTree: ', eventCardTree);
  // let eventCardTree = component.toJSON();

  // it('should matched expected initial state', () => {
  //   expect(eventCardTree).toMatchSnapshot();
  // });

  it('should open the event detail view when clicked', () => {
    const linkURL = eventCardTree.find('a')
                      .props.href;
    const card = eventCardTree.find('.event__wrap')
    console.log('card: ', card);
    
    card.props.onClick();
    expect(window.location.pathname).toBe.equalTo(linkURL);
  });
});