'use client';
import PlantForm from '@/components/my-plantguide/PlantForm';
import PlantResult from '@/components/my-plantguide/PlantResult';
import { PlantInput } from '@/data/my-plantguide/plantData';
import { useState } from 'react';

export default function MyPlantGuide() {
  const [plantData, setPlantData] = useState<PlantInput | null>(null);

  const handleFormSubmit = (data: PlantInput) => {
    setPlantData(data);
  };

  return (
    <>
      <h1>Min plante-guide</h1>
      <PlantForm onSubmit={handleFormSubmit} />
      {plantData && <PlantResult input={plantData} />}
    </>
  );
}
