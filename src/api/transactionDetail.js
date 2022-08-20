// https://run.mocky.io/v3/18e19417-a35d-4e81-bb69-e00dbf1be2af
import callAPI from "../assets/config/callAPI"

export default async () => {
  return callAPI({
    url: "/18e19417-a35d-4e81-bb69-e00dbf1be2af", //200
    method : "GET",
  })
}