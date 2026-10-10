import "./FloatingCharacter.css";

interface FloatingCharacterProps {
    name: string;
    level: number;
    xp: number;
    maxXp: number;
    //adding the ? makes it so it reverts to the wizard if nothing is provided
    icon?: string;
}

export function FloatingCharacter({ name,
    level, 
    xp, 
    maxXp, 
    icon = "🧙" 
}: FloatingCharacterProps) {
    const xpPercentage = Math.min((xp/maxXp) * 100, 100);
    
    return (
        <div className="character-card">
            <span className="character-emoji">{icon}</span>
            <span className="character-name">{name}</span>
            <span className="character-level">Level: {level}</span>

            
            {/* XP Container */}
            <div className="xp-container">
                <p className ="xp-label">XP: {xp}/{maxXp}</p>

                {/* Outer element */}
                <div className="xp-track">
                    {/* Inner fill element */}
                    <div className="xp-fill"
                    style={{width: `${xpPercentage}%` }}>
                    </div>
                </div>
            </div>
        </div>
    );
}