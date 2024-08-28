export default function Reusable_Table({ headers, data, renderCell }) {
    return (
        <>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} style={{ borderBottom: '1px solid #E8E8E8', padding: '8px', textAlign: 'left' }}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {/* Custom rendering for each cell if renderCell is provided */}
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} style={{ borderBottom: '1px solid #E8E8E8', padding: '8px' }}>
                                    {renderCell ? renderCell(cell, rowIndex, cellIndex) : cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
