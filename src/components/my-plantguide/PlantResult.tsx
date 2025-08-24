import { PlantInput } from '@/data/my-plantguide/plantData';

export default function PlantResult({ input }: { input: PlantInput }) {
  return (
    <div className="mt-8 bg-green-50 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Stell av {input.plant}</h2>
      <p>
        Du har valgt en {input.plant} som står i {input.light} og vannes {input.water}.
        Luftfuktighet er {input.humidity} og du glemme å vanne {input.forgetFulness}.
      </p>
      <p className="mt-2">
        Det anbefales å følge med på planten og justere vanningen etter behov. Husk at{' '}
        {input.plant.toLowerCase()} trives best i disse forholdene.
      </p>
    </div>
  );
}
