
export async function POST(req: Request) {
  const body = await req.json()

  if(!body.url){
    return Response.json({code: 500, msg: "url参数未传递"})
  }
  const res = await fetch(body.url, {
    method: 'POST',
    headers: req.headers,
    body: JSON.stringify(body),
  })

  const data = await res.json()

  return Response.json(data)
}