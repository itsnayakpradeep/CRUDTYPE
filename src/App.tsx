import { useState } from 'react';
import './App.css';

interface Row {
  id: number;
  value: string;
}
const App: React.FC = () => {
  const [rows, setRow] = useState<Row[]>([{ id: 1, value: '' }]);

  const addRow = () => {
    const newRow: Row = {
      id: rows.length + 1,
      value: '',
    };
    setRow([...rows, newRow]);
  };

  const deleteRow = (id: number) => {
    const updateRows = rows.filter((row) => row.id !== id);
    setRow(updateRows);
  };
  const handleInputChange = (id: number, value: string) => {
    const updateRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, value };
      }
      return row;
    });
    setRow(updateRows);
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Text</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="text"
                    value={row.value}
                    onChange={(e) => handleInputChange(row.id, e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={addRow}>Add</button>
                </td>
                <td>
                  <button onClick={() => deleteRow(row.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
