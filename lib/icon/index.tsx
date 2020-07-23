import * as React from 'react'
import '../../utils/importIcons'

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