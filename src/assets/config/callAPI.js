import {BASE_URL, BASE_URL_MOCK,API_KEY} from 'dotenv';

export default async function callAPI({
  url,
  method,
  data,
  useCredential,
  navigation,
  customErrorHandler,
  file,
  newHeaders,
  accessToken,
  contentType,
  statusCustom,
  locationHeader,
}) {
  console.log({url: BASE_URL, path: url});
  let result = {};
  if (useCredential && !accessToken) {
    if (navigation) {
      navigation.navigate('SplashScreen');
    }
  } else {
    let headerUseCredential = {
      'Content-Type': contentType || 'application/json',
      Authorization: API_KEY,
      'Accept-Language': 'id',
      ...newHeaders,
      // 'Access-Control-Expose-Headers': 'Location'
    };
    let headerUnuseCredential = {
      'Content-Type': contentType || 'application/json',
      'Accept-Language': 'id',
      Authorization: API_KEY,
      ...newHeaders,
    };
    let headers = useCredential ? headerUseCredential : headerUnuseCredential;
    try {
      let res = await fetch(`${BASE_URL}${url}`, {
        method,
        headers,
        body: data && JSON.stringify(data),
      });
      let hasil = await res.text();
      let status = res.status;
    //   console.log({hasil})
      if (hasil) {
          hasil = JSON.parse(hasil);
        }else{
        console.log('masuk sini');
      }
      if (status < 300) {
        result.data = hasil;
        result.error = false;
      } else {
      }
      return result;
    } catch (err) {
      result.data = null;
      result.message = null;
      result.error = true;
      return result;
    }
  }
}
