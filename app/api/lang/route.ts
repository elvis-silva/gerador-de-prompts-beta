import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { lang } = await req.json();

  const res = NextResponse.json({ ok: true });
  res.cookies.set('lang', lang, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365
  });

  return res;
}


// import { NextResponse } from 'next/server'

// export async function POST(req: Request) {
//   const { lang } = await req.json()

//   if (!lang) {
//     return NextResponse.json({ ok: false }, { status: 400 })
//   }

//   const res = NextResponse.json({ ok: true })

//   res.cookies.set('lang', lang, {
//     path: '/',
//     maxAge: 60 * 60 * 24 * 365
//   })

//   return res
// }
