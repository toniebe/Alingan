import callAPI from "../assets/config/callAPI"

export default async () => {
    // https://run.mocky.io/v3/17410c84-c280-4c03-be68-5bbc41d8cc65
  return callAPI({
    url: "/17410c84-c280-4c03-be68-5bbc41d8cc65", //200
    method : "GET",
  })
}