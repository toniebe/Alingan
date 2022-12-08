// https://run.mocky.io/v3/4748495a-6c2d-4429-8cb4-8a8c31abe5f8
// https://run.mocky.io/v3/ee1f8c1c-8dfe-49b7-9323-b5cf553a1386
// https://run.mocky.io/v3/d0531371-72f3-4751-8ec7-72bfd0b41ffc
import callAPI from "../assets/config/callAPI"

export default async () => {
  return callAPI({
    // url: "/4748495a-6c2d-4429-8cb4-8a8c31abe5f8", //200 2
    // url: "/ee1f8c1c-8dfe-49b7-9323-b5cf553a1386", //200 4
    url: "/d0531371-72f3-4751-8ec7-72bfd0b41ffc", //200 4
    method : "GET",
  })
}