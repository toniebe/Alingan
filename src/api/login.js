import callAPI from "../assets/config/callAPI"

export default async (data) => {
  return callAPI({
    url: "/7ad077cc-2d6b-4962-83e1-67064eb4dfaa", //200
    method : "POST",
    data,
  })
}