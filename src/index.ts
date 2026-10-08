export default {
  async fetch(request: Request, env: { ASSETS: { fetch: typeof fetch } }): Promise<Response> {
    const url = new URL(request.url)

    if (url.hostname === 'www.antonioandreozzidigital.com') {
      url.hostname = 'antonioandreozzidigital.com'
      return new Response(null, {
        status: 301,
        headers: {
          Location: url.toString(),
          'Cache-Control': 'no-store',
        },
      })
    }

    return env.ASSETS.fetch(request)
  },
}
