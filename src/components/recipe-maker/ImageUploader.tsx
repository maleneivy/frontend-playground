'use client';

import { useRef, useState } from 'react';

export default function ImageUploader({ setImage }: { setImage: (file: File | null) => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsLoading(true);
      setImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setIsLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setImage(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // nullstill input
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Last opp bilde</h2>

      {/* Skjult input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="hidden"
      />

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Velg bilde
        </button>

        {preview && (
          <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-1 rounded">
            Slett bilde
          </button>
        )}
      </div>

      <div className="mt-2">
        {isLoading && (
          <div className="w-64 h-48 bg-gray-200 animate-pulse flex items-center justify-center text-gray-500">
            Laster bilde…
          </div>
        )}

        {!isLoading && preview && (
          <img src={preview} alt="Forhåndsvisning" className="w-64 h-48 object-contain border" />
        )}
      </div>
    </div>
  );
}
