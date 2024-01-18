import axios from 'axios';

export async function GET() {
  const res = await axios.get('https://hawas.online/api/v1/sitemap.xml');

  return new Response(res.data, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
