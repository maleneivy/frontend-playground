'use client';

export default function InstructionsInput({
  instructions,
  setInstructions,
}: {
  instructions: string;
  setInstructions: (text: string) => void;
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Slik gjør du</h2>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Beskriv fremgangsmåten her..."
        className="border w-full p-2 mb-4"
      />
    </div>
  );
}
