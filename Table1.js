import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.Name_}</td>
            <td>{item.City_}</td>
            <td>{item.State_}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
