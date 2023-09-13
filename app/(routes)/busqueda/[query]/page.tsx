interface SearhParams {
  SearhParams: {
    q: string;
  }
}

export default function SearchPage({
  params,
}: {
  params: { query: string },
}) {
  const query = params.query;

  return (
    <div>Search page {query}</div>
  );
}
