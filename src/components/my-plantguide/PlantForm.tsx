'use client';
import { PlantInput } from '@/data/my-plantguide/plantData';
import { useState } from 'react';

export default function PlantForm({ onSubmit }: { onSubmit: (data: PlantInput) => void }) {
  const [form, setForm] = useState<PlantInput>({
    plant: 'Monstera',
    light: 'delvis',
    water: 'av og til',
    humidity: 'normal',
    forgetFulness: 'noen ganger',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-4 bg-green-50 p-4"
    >
      {Object.entries(form).map(([key, value]) => (
        <div key={key} className="flex flex-wrap">
          <div>
            <label className="block font-medium capitalize">{key}</label>
            <select
              name={key}
              value={value}
              onChange={handleChange}
              className="w-36 lg:w-96 border border-gray-300 py-2 px-3 rounded bg-white"
            >
              {getOptionsFor(key).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Lag planteguide
      </button>
    </form>
  );
}

function getOptionsFor(key: string): string[] {
  switch (key) {
    case 'plant':
      return ['Monstera', 'Sukkulent', 'Orkidé'];
    case 'light':
      return ['sol', 'delvis', 'skygge'];
    case 'water':
      return ['ofte', 'av og til', 'sjelden'];
    case 'humidity':
      return ['høy', 'normal', 'lav'];
    case 'forgetFulness':
      return ['aldri', 'noen ganger', 'ofte'];
    default:
      return [];
  }
}
