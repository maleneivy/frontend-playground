'use client';
import PlantForm from '@/components/my-plantguide/PlantForm';
import PlantResult from '@/components/my-plantguide/PlantResult';
import { PlantInput } from '@/data/my-plantguide/plantData';
import { useState } from 'react';

export default function MyPlantGuide() {
  const [input, setInput] = useState<PlantInput | null>(null);

  return (
    <>
      <h1>Min plante-guide</h1>
      <PlantForm onSubmit={setInput} />
      {input && <PlantResult input={input} />}
    </>
  );
}
