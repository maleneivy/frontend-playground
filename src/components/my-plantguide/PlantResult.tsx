import { generatePlantGuide } from '@/data/my-plantguide/generatePlantGuide';
import { PlantInput } from '@/data/my-plantguide/plantData';

export default function PlantResult({ input }: { input: PlantInput }) {
  const guide = generatePlantGuide(input);

  return (
    <div className="bg-green-50 p-4 rounded shadow whitespace-pre-wrap flex-1">
      <h2 className="text-lg font-semibold mb-2">Din planteguide:</h2>
      <p>{guide}</p>
    </div>
  );
}
