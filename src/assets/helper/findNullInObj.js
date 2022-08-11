export default (obj) => {
  return (
    
    Object.keys(obj).find( key => obj[key] === null || obj[key] === undefined || obj[key] === 0 || obj[key] === '' )
  )
}