
export async function POST(req: Request) {
  const body = await req.json()

  if(!body.url){
    return Response.json({code: 400, msg: "url参数未传递"})
  }
  const res = await fetch(body.url, {
    method: 'POST',
    headers: req.headers,
    body: JSON.stringify(body),
  })

  const data = await res.json()

  return Response.json(data)
}


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const url = searchParams.get("url")
  console.log()
  if(!url){
    return Response.json({code: 400, msg: "url参数未传递"})
  }

  const res = await fetch(url, {
    method: 'GET',
    headers: req.headers,
  })

  const data = await res.json()

  return Response.json(data)
}