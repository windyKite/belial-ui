import Button from '../../../lib/components/button/index';
import React from 'react'

console.log('Button')
console.log(Button)

export default function () {
  return (
    <div>
      <Button type='danger' onClick={()=>{console.log('萧泳森是个傻逼')}}>萧泳森</Button>
      <Button type='dashed' onClick={()=>{console.log('萧泳森是个傻逼')}}>萧泳森</Button>
      <Button type='default' onClick={()=>{console.log('萧泳森是个傻逼')}}>萧泳森</Button>
      <Button type='link' onClick={()=>{console.log('萧泳森是个傻逼')}}>萧泳森</Button>
      <Button type='primary' onClick={()=>{console.log('萧泳森是个傻逼')}}>萧泳森</Button>
      <Button size='small' onClick={()=>{console.log('萧泳森是个傻逼')}}>萧泳森</Button>
      <Button size='middle' onClick={()=>{console.log('萧泳森是个傻逼')}}>萧泳森</Button>
      <Button size='large' onClick={()=>{console.log('萧泳森是个傻逼')}}>萧泳森</Button>
      <Button disabled={true} onClick={()=>{console.log('萧泳森是个傻逼')}}>萧泳森</Button>
      <Button icon='wechat' onClick={()=>{console.log('萧泳森是个傻逼')}}>萧泳森</Button>
      <Button loading={true} onClick={()=>{console.log('萧泳森是个傻逼')}}>萧泳森</Button>
      <Button shape='circle' onClick={()=>{console.log('萧泳森是个傻逼')}}>萧泳森</Button>
      <Button shape='circle' onClick={()=>{console.log('萧泳森是个傻逼')}} icon='alipay'></Button>
      <Button shape='circle' onClick={()=>{console.log('萧泳森是个傻逼')}} icon='alipay'>萧泳森</Button>
    </div>
  )
}
