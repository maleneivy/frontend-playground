'use client';
import PlantForm from '@/components/my-plantguide/PlantForm';
import PlantResult from '@/components/my-plantguide/PlantResult';
import { PlantInput } from '@/data/my-plantguide/plantData';
import { Chango } from 'next/font/google';
import { useState } from 'react';

const chango = Chango({ subsets: ['latin'], weight: ['400'] });

export default function MyPlantGuide() {
  const [plantData, setPlantData] = useState<PlantInput | null>(null);

  const handleFormSubmit = (data: PlantInput) => {
    setPlantData(data);
  };

  return (
    <>
      <h1
        className={`${chango.className} sm:text-4xl text-3xl text-center mt-8 sm:mt-16 text-green-800 px-8`}
      >
        Min plante-guide
      </h1>
      <div className="mx-8">
        <div className="flex flex-wrap mx-auto my-8 gap-2 text-green-900 max-w-296">
          <PlantForm onSubmit={handleFormSubmit} />
          {plantData && <PlantResult input={plantData} />}
        </div>
      </div>
    </>
  );
}
