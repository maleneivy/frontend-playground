'use client';

import { useState } from 'react';
import IngredientsInput, { Ingredient } from '@/components/recipe-maker/IngredientsInput';
import InstructionsInput from '@/components/recipe-maker/InstructionsInput';
import ImageUploader from '@/components/recipe-maker/ImageUploader';
import RecipePreview from '@/components/recipe-maker/RecipePreview';
import PreviewModal from '@/components/recipe-maker/PreviewModal';

export default function RecipeMaker() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { quantity: 0, unit: '', item: '' },
  ]);
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🥗 Recipe Maker</h1>

      <IngredientsInput ingredients={ingredients} setIngredients={setIngredients} />
      <InstructionsInput instructions={instructions} setInstructions={setInstructions} />
      <ImageUploader setImage={setImage} />

      <button onClick={() => setShowPreview(true)} className="mt-4 bg-green-200 px-4 py-2 rounded">
        Forhåndsvisning
      </button>

      <PreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        ingredients={ingredients}
        instructions={instructions}
        image={image}
      />
    </div>
  );
}
