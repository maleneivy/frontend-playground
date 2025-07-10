'use client';

import { Ingredient } from './IngredientsInput';

export default function RecipePreview({
  ingredients,
  instructions,
  image,
}: {
  ingredients: Ingredient[];
  instructions: string;
  image: File | null;
}) {
  return (
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
  );
}
