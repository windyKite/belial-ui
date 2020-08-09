import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Icon } from '../index'

test('这是 Icon 的 dom 测试', () =>{
  const icon = shallow(<Icon name="wechat"/>)
  console.dir(icon)

  const component = renderer.create(<Icon name="wechat"/>)
  let tree = component.toJSON()
  console.log(tree)
  expect(tree).toMatchSnapshot()

})