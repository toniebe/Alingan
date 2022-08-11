function viewEmail(email) {

  let length = 20
  let maxDomainLength = 12
  let maxFirstNameLength = 5
  let nama = email
  let fullName = ''

  if( nama.length <= length ){
    fullName = nama
  } else{
    let at = nama.indexOf('@')
    let domainLength = nama.length - at
    let firstNameLength = nama.length - domainLength

    if( firstNameLength > maxFirstNameLength ){
      if( domainLength > maxDomainLength ){
        fullName += nama.substring(0, maxFirstNameLength)
        fullName += "..."
        fullName += nama.substring(nama.length-maxDomainLength, nama.length)      
      } else{
        let addCharFullName = maxDomainLength - domainLength
        fullName += nama.substring(0, maxFirstNameLength + addCharFullName)
        fullName += "..."
        fullName += nama.substring(at, nama.length)
      }
    } else{
      if(domainLength > maxDomainLength){
        let addCharDomain = maxFirstNameLength - firstNameLength
        fullName += nama.substring(0, firstNameLength)
        fullName += "..."
        fullName += nama.substring( nama.length - ( maxDomainLength - addCharDomain ), nama.length)
      }
    }
  }
  return fullName
}

export default viewEmail