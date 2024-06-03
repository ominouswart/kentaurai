export default function Zuikis({ number }) {
    return (
        <div>
            {number === 1 
                ? 
                <h1 style={{ color: 'blue' }}>Zebrai ir Bebrai</h1> 
                : 
                <h1 style={{ color: 'crimson' }}>Zebrai ir Bebrai</h1>
            }
        </div>
    );
}