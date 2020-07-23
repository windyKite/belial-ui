import * as React from 'react'
import '../../icons/wechat.svg'
import '../../icons/qq.svg'
import '../../icons/alipay.svg'

interface IconProps {
  name: string

}

const Icon: React.FC<IconProps> = props => {
  const { name }= props
  return <svg>
    <use xlinkHref={`#${name}`}/>
  </svg>
}

export default Icon