import React from 'react'
import {ChildAsFC} from './Child'

export default function Parent() {
  return <ChildAsFC color={'blue'} onClick={()=>console.log("clicked")}>
    alskfdk
  </ChildAsFC>;
}
