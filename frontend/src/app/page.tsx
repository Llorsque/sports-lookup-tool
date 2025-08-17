import CommandPalette from '@/components/CommandPalette';

export default function Home() {
  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sport Lookup Tool</h1>
      <p className="mb-6 text-gray-700">
        Zoek snel en intuïtief informatie over schaatsers, tijden en uitslagen. Gebruik het command‑palette hieronder om direct te beginnen.
      </p>
      <CommandPalette />
    </main>
  );
}
