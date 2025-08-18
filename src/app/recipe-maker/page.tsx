'use client';

import { Shadows_Into_Light } from 'next/font/google';
import { useState } from 'react';
import IngredientsInput, { IngredientGroup } from '@/components/recipe-maker/IngredientsInput';
import InstructionsInput from '@/components/recipe-maker/InstructionsInput';
import ImageUploader from '@/components/recipe-maker/ImageUploader';
import PreviewModal from '@/components/recipe-maker/PreviewModal';
import RecipeTitleInput from '@/components/recipe-maker/RecipeTitleInput';

const shadows = Shadows_Into_Light({ subsets: ['latin'], weight: ['400'] });

export default function RecipeMaker() {
  const [ingredientGroups, setIngredientGroups] = useState<IngredientGroup[]>([
    { title: '', ingredients: [{ quantity: 0, unit: '', item: '' }] },
  ]);
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [recipeTitle, setRecipeTitle] = useState('');

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/recipe-maker/bg-recipe.jpg')" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto p-8 border-2 rounded border-gray-100 flex flex-col bg-white">
        <h1 className={`${shadows.className} text-4xl font-bold mb-8 text-center`}>
          Lag din egen oppskrift
        </h1>

        <RecipeTitleInput recipeTitle={recipeTitle} setRecipeTitle={setRecipeTitle} />

        <IngredientsInput
          ingredientGroups={ingredientGroups}
          setIngredientGroups={setIngredientGroups}
        />

        <InstructionsInput instructions={instructions} setInstructions={setInstructions} />

        <ImageUploader setImage={setImage} />

        <button
          onClick={() => setShowPreview(true)}
          className="mt-4 bg-green-200 px-4 py-2 rounded max-w-fit self-end"
        >
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
    </div>
  );
}
