
import React from 'react';
import renderer from 'react-test-renderer';
import LikeTrigger from '../../app/components/LikeTrigger';
import { mount } from 'enzyme';
import { likeMoment } from '../../app/actions/MomentActionCreators';
 

describe('LikeTrigger Component', () => {
  it('should match the snapshot for initial state', () => {
    const tree = renderer.create(
      <LikeTrigger/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  }); 

  it('should contain an icon ', () => {
    const tree = renderer.create(
      <LikeTrigger/>
    ).toJSON();

    const icon = tree.children.filter(child => child.type === 'svg')[0];
    expect(icon).toBeDefined();
  });

  describe('When enabled', () => {
    const component = renderer.create(
      <LikeTrigger isEnabled={ true } uiState='default' likeAction={ likeMoment }/>
    ).toJSON();

    it('Should change icon color on hover', () => {
      component.props.onMouseEnter();
      component.props.onMouseLeave();
      expect(component).toMatchSnapshot();
    });

    it('Should change icon color on click', () => {
      component.props.onClick();
      expect(component).toMatchSnapshot();
    });
  });

  describe('When disabled', () => {
    it('Should not have UI interactions', () => {
      const component = renderer.create(
        <LikeTrigger isEnabled={ false } uiState='default'/>
      ).toJSON();

      expect(component.props.onMouseEnter).not.toBeDefined();
      expect(component.props.onMouseLeave).not.toBeDefined();
      expect(component.props.onClick).not.toBeDefined();
      expect(component).toMatchSnapshot();
    });
  });
});