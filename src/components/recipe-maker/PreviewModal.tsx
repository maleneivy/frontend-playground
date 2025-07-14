'use client';

import { useRef } from 'react';
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

  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (printRef.current) {
      const printContents = printRef.current.innerHTML;
      const printWindow = window.open('', '', 'width=800,height=600');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Oppskrift</title>
              <style>
                body {
                  font-family: sans-serif;
                  padding: 20px;
                }
                img {
                  max-width: 100%;
                  height: 300px;
                  object-fit: contain;
                  display: block;
                  margin-top: 1rem;
                }
                h2 {
                  margin-top: 0;
                }
                ul {
                  margin: 0;
                  padding-left: 1.2rem;
                }
                li {
                  margin-bottom: 0.2rem;
                }
              </style>
            </head>
            <body>
              ${printContents}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg max-h-screen overflow-y-auto p-6 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4">Forhåndsvisning</h2>

        <div className="flex flex-col">
          {/* Dette er innholdet som vises OG som printes */}
          <div ref={printRef}>
            <h2 className="text-2xl font-bold mb-4">{recipeTitle || 'Uten navn'}</h2>

            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Bilde"
                className="max-w-full h-100 object-contain mt-2"
              />
            )}

            <h3 className="text-lg font-semibold">Ingredienser</h3>
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

            <h3 className="text-lg font-semibold mt-4">Slik gjør du</h3>
            <p className="mb-4">{instructions}</p>
          </div>

          <button
            onClick={handlePrint}
            className="mt-4 bg-green-200 px-4 py-2 rounded max-w-fit self-end"
          >
            Skriv ut
          </button>
        </div>
      </div>
    </div>
  );
}
