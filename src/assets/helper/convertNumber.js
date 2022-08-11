function convertNumber(number){
 
  number = Number(number)
  number = number.toString()
  let a = number.split('.')
  let b = ''
  let c = 0
  for(var i = a[0].length-1 ; i >= 0; i--) {
    if(c%3==0 && c>0){
      b = a[0][i] + "." + b
    } else{
      b = a[0][i] + b
    }
    c++
  }
  return b
}

export default convertNumber