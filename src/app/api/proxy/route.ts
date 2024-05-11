
export async function POST(req: Request) {
  const { mobile, validateCode, url } = await req.json()

  if(!url){
    return Response.json({code: 500, msg: "url参数未传递"})
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mobile, validateCode }),
  })

  const data = await res.json()

  return Response.json(data)
}