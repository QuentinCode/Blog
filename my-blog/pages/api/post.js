export default async function handler(request, response) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const data = await res.json();
  response.status(200).json(data);
}
