
import * as React from 'react'
import classnames from 'classnames'
import '../../utils/importIcons'
import './style'

const componentName = 'belial-icon'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string
}

const Icon: React.FC<IconProps> = props => {
  const { name, className, ...rest }= props

  return <svg className={classnames(componentName, className)} { ...rest } >
    <use xlinkHref={`#${name}`}/>
  </svg>
}

export default Icon