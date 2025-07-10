'use client';

export type Ingredient = {
  quantity: number;
  unit: string;
  item: string;
};

export default function IngredientsInput({
  ingredients,
  setIngredients,
}: {
  ingredients: Ingredient[];
  setIngredients: (ingredients: Ingredient[]) => void;
}) {
  const handleChange = <K extends keyof Ingredient>(
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

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Ingredienser</h2>
      {ingredients.map((ing, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            type="number"
            value={ing.quantity}
            onChange={(e) => handleChange(index, 'quantity', parseInt(e.target.value))}
            placeholder="Antall"
            className="border px-2 py-1 w-20"
          />
          <input
            type="text"
            value={ing.unit}
            onChange={(e) => handleChange(index, 'unit', e.target.value)}
            placeholder="Enhet"
            className="border px-2 py-1 w-24"
          />
          <input
            type="text"
            value={ing.item}
            onChange={(e) => handleChange(index, 'item', e.target.value)}
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
    </div>
  );
}
