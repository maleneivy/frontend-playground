'use client';

import { useState } from 'react';
import {
  monsterParts,
  MonsterConfig,
  MonsterColors,
  MonsterPartKey,
} from '@/data/monster-builder/monsterParts';
import MonsterPreview from './MonsterPreview';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { useDroppable, useDraggable } from '@dnd-kit/core';

const defaultConfig: MonsterConfig = {
  body: 'round',
  eyes: 'double',
  arms: 'claw',
  mouth: 'smile',
  legs: 'short',
  hair: 'tuft',
};

const defaultColors: MonsterColors = {
  body: '#6EE7B7',
  eyes: '#000000',
  arms: '#888888',
  mouth: '#FF6B6B',
  legs: '#A78BFA',
  hair: '#FACC15',
};

function DraggablePart({ id, label }: { id: string; label: string }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-2 border rounded bg-white shadow cursor-move"
    >
      {label}
    </div>
  );
}

function DropZone({ children }: { children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id: 'monster-zone' });
  return (
    <div ref={setNodeRef} className="border-dashed border-2 p-4 bg-gray-50 rounded">
      {children}
    </div>
  );
}

export default function MonsterBuilder() {
  const [config, setConfig] = useState<MonsterConfig>(defaultConfig);
  const [colors, setColors] = useState<MonsterColors>(defaultColors);

  const handleChange = (part: MonsterPartKey, value: string) => {
    setConfig((prev) => ({ ...prev, [part]: value }));
  };

  const handleColorChange = (part: MonsterPartKey, color: string) => {
    setColors((prev) => ({ ...prev, [part]: color }));
  };

  const handleDragEnd = (event: any) => {
    const { over, active } = event;
    if (over?.id === 'monster-zone') {
      const [partKey, value] = active.id.split(':');
      if (partKey && value) {
        setConfig((prev) => ({ ...prev, [partKey as MonsterPartKey]: value }));
      }
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold">Bygg ditt monster</h2>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 p-4 sm:p-6">
          {Object.entries(monsterParts).map(([part, options]) => (
            <div key={part}>
              <h3 className="font-bold capitalize">{part}</h3>
              {options.map((option) => (
                <DraggablePart key={`${part}:${option}`} id={`${part}:${option}`} label={option} />
              ))}
              <input
                type="color"
                value={colors[part as MonsterPartKey]}
                onChange={(e) => handleColorChange(part as MonsterPartKey, e.target.value)}
                className="mt-2"
              />
            </div>
          ))}
        </div>

        <DropZone>
          <MonsterPreview config={config} colors={colors} />
        </DropZone>
      </DndContext>

      <pre className="bg-gray-100 p-4 rounded text-sm">{JSON.stringify(config, null, 2)}</pre>
    </div>
  );
}
