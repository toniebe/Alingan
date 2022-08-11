import bugsnag from "../config/bugsnag";
import { ENV } from 'dotenv'

class SendToBugsnag {
  serverError ({ url, methods, status, errorCode, message, file }){
    bugsnag.notify(new Error(`(${ENV} ${file}- [${methods}]${url}) ${status} - ${errorCode} ==>  ${message}`), (event) => {
      event.severity = 'error'
      // event.context = `${ENV} ${url}`
    })
  }
  clientError ({ url, file, message }){
    bugsnag.notify(new Error(`(${ENV} ${url}) ${file} CATCH ==> ${message}`), (event) => {
      event.severity = 'error'
      // event.context = `${ENV} ${url}`
    })
  }
  other ({ url, file, message }){
    bugsnag.notify(new Error(`(${ENV} ${url}) ${file} OTHER ==> ${message}`), (event) =>{
      event.severity = 'error'
      // event.context = `${ENV} ${file}`
    })
  }
}

let SendError = new SendToBugsnag()

export default SendError