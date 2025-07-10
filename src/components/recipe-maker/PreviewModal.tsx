import { IngredientGroup } from './IngredientsInput';

export default function PreviewModal({
  isOpen,
  onClose,
  ingredientGroups,
  instructions,
  image,
  recipeTitle,
}: {
  isOpen: boolean;
  onClose: () => void;
  ingredientGroups: IngredientGroup[];
  instructions: string;
  image: File | null;
  recipeTitle: string;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4">Forhåndsvisning</h2>

        <div>
          <h2 className="text-2xl font-bold mb-4">{recipeTitle || 'Uten navn'}</h2>
          <h3 className="text-lg font-semibold">Ingredienser</h3>
          <ul className="list-disc pl-5 mb-4">
            {ingredientGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-4">
                {group.title && <h4 className="text-md font-semibold mb-1">{group.title}</h4>}
                <ul className="list-disc pl-5">
                  {group.ingredients.map((ing, ingIndex) => (
                    <li key={ingIndex}>
                      {ing.quantity} {ing.unit} {ing.item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>

          <h3 className="text-lg font-semibold">Slik gjør du</h3>
          <p className="mb-4">{instructions}</p>

          {image && (
            <img src={URL.createObjectURL(image)} alt="Bilde" className="max-w-full border" />
          )}
        </div>
      </div>
    </div>
  );
}
