/**
 * mask: (String | required | default '')
 * the mask pattern
 * 9 - accept digit.
 * A - accept alpha.
 * S - accept alphanumeric.
 * * - accept all, EXCEPT white space.
*/
export default ( formatText, inputText ) => {
  let a = ""
  let indexText = 0
  for(let i = 0; i < formatText.length; i++){
    for(let j = indexText; j < inputText.length; j++){
      let formatPerI = formatText[i]
      let textPerJ = inputText[j]
      if(textPerJ){
        if(formatPerI === "9"){
          let number = Number(textPerJ)
          let num = isNaN(number)
          if( !num ){
            a += textPerJ
            indexText = j+1
            break;
          }
        } else if( formatPerI === "A" || formatPerI === "a" ){
          let number = Number(textPerJ)
          let num = isNaN(number)
          if( num ){
            a += textPerJ
            indexText = j+1
            break;
          }
        } else if( formatPerI === "S" || formatPerI === "s" ){
          let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/
          let string = format.test(textPerJ)
          if( !string ){
            a += textPerJ
            indexText = j+1
            break;
          }
        } else if( formatPerI == "*" ){
          a += textPerJ
          indexText = j+1
          break;
        } else{
          a += formatPerI
          break;
        }
      } 
    }
  }
  return a
}


