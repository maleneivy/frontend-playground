'use client';

export type Ingredient = {
  quantity: number;
  unit: string;
  item: string;
};

export type IngredientGroup = {
  title: string;
  ingredients: Ingredient[];
};

export default function IngredientsInput({
  ingredientGroups,
  setIngredientGroups,
}: {
  ingredientGroups: IngredientGroup[];
  setIngredientGroups: (groups: IngredientGroup[]) => void;
}) {
  const handleGroupTitleChange = (index: number, value: string) => {
    const updated = [...ingredientGroups];
    updated[index].title = value;
    setIngredientGroups(updated);
  };

  const handleIngredientChange = <K extends keyof Ingredient>(
    groupIndex: number,
    ingredientIndex: number,
    field: K,
    value: Ingredient[K],
  ) => {
    const updated = [...ingredientGroups];
    updated[groupIndex].ingredients[ingredientIndex][field] = value;
    setIngredientGroups(updated);
  };

  const addIngredient = (groupIndex: number) => {
    const updated = [...ingredientGroups];
    updated[groupIndex].ingredients.push({ quantity: 0, unit: '', item: '' });
    setIngredientGroups(updated);
  };

  const removeIngredient = (groupIndex: number, ingredientIndex: number) => {
    const updated = [...ingredientGroups];
    updated[groupIndex].ingredients.splice(ingredientIndex, 1);

    if (updated[groupIndex].ingredients.length === 0) {
      if (ingredientGroups.length > 1) {
        updated.splice(groupIndex, 1);
      } else {
        updated[groupIndex] = {
          title: '',
          ingredients: [{ quantity: 0, unit: '', item: '' }],
        };
      }
    }

    setIngredientGroups(updated);
  };

  const addGroup = () => {
    setIngredientGroups([
      ...ingredientGroups,
      { title: '', ingredients: [{ quantity: 0, unit: '', item: '' }] },
    ]);
  };

  const removeGroup = (groupIndex: number) => {
    if (ingredientGroups.length > 1) {
      const updated = ingredientGroups.filter((_, i) => i !== groupIndex);
      setIngredientGroups(updated);
    } else {
      if (!isGroupEmpty(groupIndex)) {
        resetGroup(groupIndex);
      }
    }
  };

  const resetGroup = (groupIndex: number) => {
    const updated = [...ingredientGroups];
    updated[groupIndex] = {
      title: '',
      ingredients: [{ quantity: 0, unit: '', item: '' }],
    };
    setIngredientGroups(updated);
  };

  const lastGroupIncomplete = () => {
    if (ingredientGroups.length === 0) return true;

    const last = ingredientGroups[ingredientGroups.length - 1];
    if (!last.title.trim()) return true;

    return last.ingredients.some(
      (ing) => ing.quantity === 0 || ing.unit.trim() === '' || ing.item.trim() === '',
    );
  };

  const lastIngredientIncomplete = (groupIndex: number) => {
    const ingredients = ingredientGroups[groupIndex].ingredients;
    if (ingredients.length === 0) {
      return false;
    }
    const last = ingredients[ingredients.length - 1];
    return last.quantity === 0 || last.unit.trim() === '' || last.item.trim() === '';
  };

  const isGroupEmpty = (groupIndex: number) => {
    const group = ingredientGroups[groupIndex];
    if (group.title.trim() !== '') return false;

    const hasNonEmptyIngredient = group.ingredients.some(
      (ing) => ing.quantity > 0 || ing.unit.trim() !== '' || ing.item.trim() !== '',
    );

    return !hasNonEmptyIngredient;
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold mb-2">Ingredienser</h2>

      {ingredientGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-6 relative">
          {ingredientGroups.length > 1 || !isGroupEmpty(groupIndex) ? (
            <button
              onClick={() => removeGroup(groupIndex)}
              className={`absolute top-2 right-2 text-sm hover:underline ${
                ingredientGroups.length > 1 ? 'text-red-500' : 'text-yellow-600'
              }`}
            >
              {ingredientGroups.length > 1 ? '✖ Slett gruppe' : '↺ Nullstill gruppe'}
            </button>
          ) : null}

          <input
            type="text"
            value={group.title}
            onChange={(e) => handleGroupTitleChange(groupIndex, e.target.value)}
            placeholder="Overskrift (f.eks. Kjøttkaker)"
            className="border border-gray-300 rounded p-2 mb-2 w-full"
          />

          {group.ingredients.map((ing, ingredientIndex) => (
            <div key={ingredientIndex} className="flex gap-2 mb-2">
              <input
                type="number"
                value={ing.quantity || ''}
                onChange={(e) =>
                  handleIngredientChange(
                    groupIndex,
                    ingredientIndex,
                    'quantity',
                    parseInt(e.target.value),
                  )
                }
                placeholder="Antall"
                className="border border-gray-300 rounded p-2 w-20"
              />
              <input
                type="text"
                value={ing.unit}
                onChange={(e) =>
                  handleIngredientChange(groupIndex, ingredientIndex, 'unit', e.target.value)
                }
                placeholder="Enhet"
                className="border border-gray-300 rounded p-2 w-24"
              />
              <input
                type="text"
                value={ing.item}
                onChange={(e) =>
                  handleIngredientChange(groupIndex, ingredientIndex, 'item', e.target.value)
                }
                placeholder="Råvare"
                className="border border-gray-300 rounded p-2 flex-1"
              />
              <button
                onClick={() => removeIngredient(groupIndex, ingredientIndex)}
                className="text-red-500"
              >
                ✖
              </button>
            </div>
          ))}

          <button
            onClick={() => addIngredient(groupIndex)}
            disabled={lastIngredientIncomplete(groupIndex)}
            className={`px-3 py-1 rounded mt-2 ${
              lastIngredientIncomplete(groupIndex)
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-blue-500 text-white'
            }`}
          >
            + Legg til ingrediens
          </button>
        </div>
      ))}

      <button
        onClick={addGroup}
        disabled={lastGroupIncomplete()}
        className={`px-3 py-1 rounded ${
          lastGroupIncomplete()
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-green-600 text-white'
        }`}
      >
        + Legg til ny gruppe
      </button>
    </div>
  );
}
