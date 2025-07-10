export default function RecipeTitleInput({
  recipeTitle,
  setRecipeTitle,
}: {
  recipeTitle: string;
  setRecipeTitle: (title: string) => void;
}) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Oppskriftens navn</h2>
      <input
        type="text"
        value={recipeTitle}
        onChange={(e) => setRecipeTitle(e.target.value)}
        placeholder="f.eks. Bestemors kjøttkakemiddag"
        className="border px-2 py-1 w-full"
      />
    </div>
  );
}
