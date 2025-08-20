import { MonsterColors, MonsterConfig } from '@/data/monster-builder/monsterParts';

export default function MonsterPreview({
  config,
  colors,
}: {
  config: MonsterConfig;
  colors: MonsterColors;
}) {
  return (
    <div className="mt-6 border p-4 rounded bg-white shadow w-fit">
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Body */}
        {config.body === 'round' && <circle cx="100" cy="100" r="50" fill={colors.body} />}
        {config.body === 'square' && (
          <rect x="60" y="60" width="80" height="80" fill={colors.body} />
        )}
        {config.body === 'spiky' && (
          <polygon
            points="100,50 120,80 150,100 120,120 100,150 80,120 50,100 80,80"
            fill={colors.body}
          />
        )}

        {/* Eyes */}
        {config.eyes === 'single' && (
          <>
            <circle cx="100" cy="90" r="15" fill="white" />
            <circle cx="100" cy="90" r="10" fill={colors.eyes} />
          </>
        )}
        {config.eyes === 'double' && (
          <>
            <circle cx="85" cy="90" r="15" fill="white" />
            <circle cx="115" cy="90" r="15" fill="white" />
            <circle cx="85" cy="90" r="8" fill={colors.eyes} />
            <circle cx="115" cy="90" r="8" fill={colors.eyes} />
          </>
        )}
        {config.eyes === 'googly' && (
          <>
            <circle cx="85" cy="90" r="10" fill="white" />
            <circle cx="115" cy="90" r="10" fill="white" />
            <circle cx="87" cy="92" r="4" fill={colors.eyes} />
            <circle cx="117" cy="92" r="4" fill={colors.eyes} />
          </>
        )}

        {/* Arms */}
        {config.arms === 'claw' && (
          <>
            <line x1="50" y1="100" x2="30" y2="80" stroke={colors.arms} strokeWidth={4} />
            <line x1="150" y1="100" x2="170" y2="80" stroke={colors.arms} strokeWidth={4} />
          </>
        )}
        {config.arms === 'tentacle' && (
          <>
            <path d="M50 100 Q30 130 40 150" stroke={colors.arms} strokeWidth={4} fill="none" />
            <path d="M150 100 Q170 130 160 150" stroke={colors.arms} strokeWidth={4} fill="none" />
          </>
        )}

        {/* Mouth */}
        {config.mouth === 'smile' && (
          <path d="M85 115 Q100 130 115 115" stroke={colors.mouth} strokeWidth={3} fill="none" />
        )}
        {config.mouth === 'frown' && (
          <path d="M85 125 Q100 110 115 125" stroke={colors.mouth} strokeWidth={3} fill="none" />
        )}
        {config.mouth === 'open' && (
          <ellipse cx="100" cy="120" rx="10" ry="6" fill={colors.mouth} />
        )}

        {/* Legs */}
        {config.legs === 'short' && (
          <>
            <line x1="80" y1="150" x2="80" y2="170" stroke={colors.legs} strokeWidth={4} />
            <line x1="120" y1="150" x2="120" y2="170" stroke={colors.legs} strokeWidth={4} />
          </>
        )}
        {config.legs === 'long' && (
          <>
            <line x1="80" y1="150" x2="80" y2="190" stroke={colors.legs} strokeWidth={4} />
            <line x1="120" y1="150" x2="120" y2="190" stroke={colors.legs} strokeWidth={4} />
          </>
        )}
        {config.legs === 'wheels' && (
          <>
            <circle cx="80" cy="175" r="7" fill={colors.legs} />
            <circle cx="120" cy="175" r="7" fill={colors.legs} />
          </>
        )}

        {/* Hair */}
        {config.hair === 'mohawk' && (
          <path
            d="
            M80 60 L85 20 L90 60
            L95 20 L100 60
            L105 20 L110 60
            L115 20 L120 60
            "
            fill={colors.hair}
          />
        )}
        {config.hair === 'tuft' && (
          <path d="M90 50 L95 35 L100 50 L105 35 L110 50" fill={colors.hair} />
        )}
        {/* 'bald' = ingenting */}
      </svg>
    </div>
  );
}
