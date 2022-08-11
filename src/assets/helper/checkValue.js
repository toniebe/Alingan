import { upperFirst } from "lodash"

export default ({value, type}) => {
  if(type === 'number'){
    value = value.replace(/\D/g,"")
  } else if(type === 'string'){
    value = value.replace(/[\"\'~`!@#$%^&()_={}[\]:;,.<>+\/?-]+|\d+|^\s+$/g, '')
  } else{
    value = value
  }
  return value
}