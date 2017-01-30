import React from 'react';
import renderer from 'react-test-renderer';
import MomentCard from '../../app/components/MomentCard';
import { shallow } from 'enzyme';


describe('MomentCard Component', () => {
  const momentId = '10';
  const actionProps = { like: () => ({"test": "test"}) };
  const momentProps = { id: '10', user: { avatarUrl: null } }

  const momentCardTree = shallow(
    <MomentCard id={ momentId } actions={actionProps} {...momentProps}/>
  );
  console.log('momentCardTree: ', momentCardTree);
  // let momentCardTree = component.toJSON();

  // it('should matched expected initial state', () => {
  //   expect(momentCardTree).toMatchSnapshot();
  // });

  it('should open the moment detail view when clicked', () => {
    const linkURL = momentCardTree.find('a')
                      .props.href;
    const card = momentCardTree.find('.moment__wrap')
    console.log('card: ', card);
    
    card.props.onClick();
    expect(window.location.pathname).toBe.equalTo(linkURL);
  });
});