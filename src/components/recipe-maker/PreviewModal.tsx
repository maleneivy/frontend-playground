import { Ingredient } from './IngredientsInput';

export default function PreviewModal({
  isOpen,
  onClose,
  ingredients,
  instructions,
  image,
}: {
  isOpen: boolean;
  onClose: () => void;
  ingredients: Ingredient[];
  instructions: string;
  image: File | null;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4">📄 Forhåndsvisning</h2>

        <div>
          <h3 className="text-lg font-semibold">Ingredienser</h3>
          <ul className="list-disc pl-5 mb-4">
            {ingredients.map((ing, index) => (
              <li key={index}>
                {ing.quantity} {ing.unit} {ing.item}
              </li>
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
