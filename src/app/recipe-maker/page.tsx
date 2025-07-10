'use client';

import { useState } from 'react';
import IngredientsInput, { IngredientGroup } from '@/components/recipe-maker/IngredientsInput';
import InstructionsInput from '@/components/recipe-maker/InstructionsInput';
import ImageUploader from '@/components/recipe-maker/ImageUploader';
import PreviewModal from '@/components/recipe-maker/PreviewModal';
import RecipeTitleInput from '@/components/recipe-maker/RecipeTitleInput';

export default function RecipeMaker() {
  const [ingredientGroups, setIngredientGroups] = useState<IngredientGroup[]>([
    { title: '', ingredients: [{ quantity: 0, unit: '', item: '' }] },
  ]);
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [recipeTitle, setRecipeTitle] = useState('');

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lag din egen oppskrift</h1>

      <RecipeTitleInput recipeTitle={recipeTitle} setRecipeTitle={setRecipeTitle} />

      <IngredientsInput
        ingredientGroups={ingredientGroups}
        setIngredientGroups={setIngredientGroups}
      />

      <InstructionsInput instructions={instructions} setInstructions={setInstructions} />

      <ImageUploader setImage={setImage} />

      <button onClick={() => setShowPreview(true)} className="mt-4 bg-green-200 px-4 py-2 rounded">
        Forhåndsvisning
      </button>

      <PreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        ingredientGroups={ingredientGroups}
        instructions={instructions}
        image={image}
        recipeTitle={recipeTitle}
      />
    </div>
  );
}
