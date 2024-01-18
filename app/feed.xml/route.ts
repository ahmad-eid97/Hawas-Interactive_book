import axios from 'axios';

export async function GET() {
  const res = await axios.get('https://hawas.online/api/v1/feed');

  return new Response(res.data, {
    status: 200,
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    }
  });
}
