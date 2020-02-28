import React from 'react'
import AltIconAvatar from '../AltIconAvatar'

const Avatar = ({ label, input, meta: { touched, invalid, error }, ...custom }) => {
  return <AltIconAvatar src={input ? input.value : undefined} {...input} {...custom} />
}

export default Avatar
