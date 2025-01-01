export default function LineBar() {
    const lines = Array.from({ length: 50 }); // Adjust the number of lines for full coverage
    return (
        <div className="linebar">
            {lines.map((_, index) => (
                <div
                    className="line"
                    key={index}
                    style={{
                        left: `${index * 9}px`, // 2px line width + 4px gap = 6px spacing
                    }}
                ></div>
            ))}
        </div>
    );
}
