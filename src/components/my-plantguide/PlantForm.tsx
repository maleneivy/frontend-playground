'use client';
import { PlantInput } from '@/data/my-plantguide/plantData';
import { useState } from 'react';

export default function PlantForm({ onSubmit }: { onSubmit: (data: PlantInput) => void }) {
  const [form, setForm] = useState<PlantInput>({
    plant: 'Monstera',
    light: 'delvis',
    water: 'av og til',
    humidity: 'normal',
    forgetFulness: 'litt',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col flex-1 max-w-104 mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(form);
        }}
        className="bg-green-50 p-6 shadow rounded sm:pb-16 pb-8 flex flex-col"
      >
        <div className="flex flex-col gap-6">
          {Object.entries(form).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label className="font-semibold mb-2">{formatLabel(key)}</label>

              {/* PLANT = dropdown */}
              {key === 'plant' ? (
                <select
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="w-full border border-green-200 shadow py-2 px-3 rounded bg-white"
                >
                  {getOptionsFor(key).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                // ✅ Radio buttons med tilgjengelig styling
                <div className="flex gap-2 flex-wrap">
                  {getOptionsFor(key).map((option) => {
                    const id = `${key}-${option}`;
                    const isSelected = form[key as keyof PlantInput] === option;

                    return (
                      <div key={option} className="relative">
                        <input
                          type="radio"
                          id={id}
                          name={key}
                          value={option}
                          checked={isSelected}
                          onChange={handleChange}
                          className="peer hidden"
                        />
                        <label
                          htmlFor={id}
                          className={`cursor-pointer px-4 py-2 rounded border text-sm transition
                            ${
                              isSelected
                                ? 'bg-green-300 border-green-200 shadow'
                                : 'bg-white text-gray-800 border-green-200 shadow hover:bg-green-50'
                            }
                            peer-focus:ring-2 peer-focus:ring-green-400 peer-focus:outline-none
                          `}
                        >
                          {option}
                        </label>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 ml-auto">
          <button
            type="submit"
            className="bg-green-800 hover:bg-green-500 active:bg-green-400 text-white font-semibold px-4 py-2 rounded"
          >
            Lag planteguide
          </button>
        </div>
      </form>
    </div>
  );
}

// Brukervennlige etiketter
function formatLabel(key: string): string {
  const labels: Record<string, string> = {
    plant: 'Hvilken plante har du?',
    light: 'Lysforhold',
    water: 'Hvor ofte vanner du?',
    humidity: 'Hvor fuktig er rommet planten står i?',
    forgetFulness: 'Hvor glemsk er du?',
  };
  return labels[key] || key;
}

// Valgene per felt
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
      return ['husker godt', 'litt', 'veldig'];
    default:
      return [];
  }
}
