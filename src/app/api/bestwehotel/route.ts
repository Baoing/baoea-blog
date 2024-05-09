import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
    return new Response(JSON.stringify({
        data: [],
        error: ""
    }), { status: 200 })
}

export { handler as GET, handler as POST };


// export default async function GET(req: Request) {
//     const { searchParams } = new URL(req.url);
//     // const { data, error } = await fetch(process.env.BASE_URL + '/route1' + searchParams)
//     return new Response(JSON.stringify({
//         data: [],
//         error: ""
//     }), { status: 200 })
// }