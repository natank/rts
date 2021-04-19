import React from 'react'
interface ChildProps {
  color: string;
  onClick: ()=>void;
}

export function Child({color, onClick}: ChildProps) {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) =>{return (
<div>
  {color}
  <button onClick={onClick}>Click me</button>
</div>)
}

