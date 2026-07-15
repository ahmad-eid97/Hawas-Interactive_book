import axios from 'axios';

export async function GET() {
  // const res = await axios.get('https://dash.hawas.site/api/v1/sitemap.xml');

  return new Response(``, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
