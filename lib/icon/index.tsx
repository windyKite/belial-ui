import * as React from 'react'
import '../../utils/importIcons'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string
}

const Icon: React.FC<IconProps> = props => {
  const { name, ...rest }= props
  return <svg { ...rest } >
    <use xlinkHref={`#${name}`}/>
  </svg>
}

export default Icon