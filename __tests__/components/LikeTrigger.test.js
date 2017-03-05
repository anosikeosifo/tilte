
import React from 'react';
import renderer from 'react-test-renderer';
import LikeTrigger from '../../app/components/LikeTrigger';
import { mount } from 'enzyme';
import { likeEvent } from '../../app/actions/EventActionCreators';
 

describe('LikeTrigger Component', () => {
  it('should match the snapshot for initial state', () => {
    const tree = renderer.create(
      <LikeTrigger isEnabled={ false } uiState='default'/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  }); 

  it('should contain an icon ', () => {
    const tree = renderer.create(
      <LikeTrigger uiState='default'/>
    ).toJSON();

    const icon = tree.children.filter(child => child.type === 'svg')[0];
    expect(icon).toBeDefined();
  });

  describe('When enabled', () => {
    const component = renderer.create(
      <LikeTrigger isEnabled={ true } uiState='default' likeAction={ likeEvent }/>
    );

    let tree = component.toJSON();

    it('Should change icon color on hover active', () => {
      tree.props.onMouseEnter();
      const treeDuringHover = component.toJSON();
      expect(treeDuringHover).toMatchSnapshot();
    });

     it('Should undo icon color change after hover', () => {
      tree.props.onMouseEnter();
      tree.props.onMouseLeave();
      const treeAfterHover = component.toJSON();
      expect(treeAfterHover).toMatchSnapshot();
    });

    it('Should change icon color on click', () => {
      tree.props.onClick();
      const treeAfterClick = component.toJSON();
      expect(treeAfterClick).toMatchSnapshot();
    });
  });

  describe('When disabled', () => {
    it('Should not have UI interactions', () => {
      const component = renderer.create(
        <LikeTrigger isEnabled={ false } uiState='active'/>
      ).toJSON();

      expect(component.props.onMouseEnter).not.toBeDefined();
      expect(component.props.onMouseLeave).not.toBeDefined();
      expect(component.props.onClick).not.toBeDefined();
      expect(component).toMatchSnapshot();
    });
  });
});
