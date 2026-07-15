import axios from 'axios';

export async function GET() {
  // const res = await axios.get('https://dash.hawas.site/api/v1/feed');

  return new Response(``, {
    status: 200,
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    }
  });
}
