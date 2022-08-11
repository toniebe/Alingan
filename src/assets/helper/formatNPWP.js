function formatNPWP(npwp) {
  let format = ''
  for( let i = 0; i < npwp.length; i++ ){
    if(i==1 || i==4 || i==7 || i==11){
      format += npwp[i] + '.'
    } else if(i==9){
      format += '-'+npwp[i]
    } else{
      format += npwp[i]
    }
  }
  return format
}

export default formatNPWP