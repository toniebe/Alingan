// kata pertama normal yang belakangnya diambil huruf depan ex : Shanti Dyah Pusparani => Shanti D. P.

function FormatName(fullName) {
  let splitName = fullName.trim().split(' ')
  var initialName = splitName[0]
  for( var i = 1 ; i < splitName.length ; i++ ){
    initialName += ` ${splitName[i][0]}.`
  }
  return initialName
}

export default FormatName