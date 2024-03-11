// api functions here
export async function testApiCall(i: number) {
  const res = await fetch(`https://dummyjson.com/products/${i}`)
  const json = await res.json()
  console.log(json)
  return json
}
