interface FloatingCharacterProps {
    name: string;
    level: number;
}

export function FloatingCharacter({ name, level }: FloatingCharacterProps) {

    return (
        <div className="character-card">
            <h3> 🧙 {name}</h3>
            <p>Level: {level}</p>
        </div>
    );
}