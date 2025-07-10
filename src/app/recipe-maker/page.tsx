'use client';

import { useState } from 'react';

type Ingredient = {
  quantity: number;
  unit: string;
  item: string;
};

export default function RecipeMaker() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { quantity: 0, unit: '', item: '' },
  ]);
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleIngredientChange = <K extends keyof Ingredient>(
    index: number,
    field: K,
    value: Ingredient[K],
  ) => {
    const updated = [...ingredients];
    updated[index][field] = value;
    setIngredients(updated);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { quantity: 0, unit: '', item: '' }]);
  };

  const removeIngredient = (index: number) => {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(updated);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🥗 Recipe Maker</h1>

      <h2 className="text-lg font-semibold mb-2">Ingredienser</h2>
      {ingredients.map((ing, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            type="number"
            value={ing.quantity}
            onChange={(e) => handleIngredientChange(index, 'quantity', parseInt(e.target.value))}
            placeholder="Antall"
            className="border px-2 py-1 w-20"
          />
          <input
            type="text"
            value={ing.unit}
            onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
            placeholder="Enhet"
            className="border px-2 py-1 w-24"
          />
          <input
            type="text"
            value={ing.item}
            onChange={(e) => handleIngredientChange(index, 'item', e.target.value)}
            placeholder="Råvare"
            className="border px-2 py-1 flex-1"
          />
          <button onClick={() => removeIngredient(index)} className="text-red-500">
            ✖
          </button>
        </div>
      ))}
      <button onClick={addIngredient} className="bg-blue-500 text-white px-3 py-1 rounded mb-4">
        + Legg til ingrediens
      </button>

      <h2 className="text-lg font-semibold mb-2">Slik gjør du</h2>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Beskriv fremgangsmåten her..."
        className="border w-full p-2 mb-4"
      />

      <h2 className="text-lg font-semibold mb-2">Last opp bilde</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />

      <div className="border-t pt-4 mt-4">
        <h2 className="text-lg font-semibold mb-2">Forhåndsvisning</h2>
        <div>
          <h3 className="text-xl font-bold mb-2">Ingredienser</h3>
          <ul className="list-disc pl-5">
            {ingredients.map((ing, index) => (
              <li key={index}>
                {ing.quantity} {ing.unit} {ing.item}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold mt-4 mb-2">Slik gjør du</h3>
          <p>{instructions}</p>
          {image && (
            <div className="mt-4">
              <img src={URL.createObjectURL(image)} alt="Recipe" className="max-w-sm" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
