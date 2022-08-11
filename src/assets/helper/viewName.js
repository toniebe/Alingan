// nama sepanjang length, selebihnya diilangin diganti '..' ex : Shanti Dyah Pusparani length : 10 => Shanti Dya..

function initialName(fullName, length) {
  let trim = fullName.trim()
  var initialName = trim
  if( fullName.length > length ){
    initialName = trim.slice( 0, length ) + ".."
  }
  return initialName
}

export default initialName