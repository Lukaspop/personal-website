export default function Homepage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary p-8">
      <h1 className="text-4xl text-detail-primary">Tailwind jede</h1>
      {Array.from({ length: 25 }).map((_, index) => (
        <p key={index} className="text-text-secondary">
          {index === 0 ? 'Secondary' : `${index + 1}${getSuffix(index + 1)} text`}
        </p>
      ))}
    </main>
  );
}

function getSuffix(n: number): string {
  const suffixes = ['st', 'nd', 'rd'];
  return suffixes[n % 10 - 1] || 'th';
}
