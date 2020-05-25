const initState = [
  {
    id: "page-about-us",
    title: "About Us",
    body: "",
    elements: []
  },
  {
    id: "page-home",
    title: "Homepage",
    body: "",
    elements: []
  }
]

export default (state=initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
