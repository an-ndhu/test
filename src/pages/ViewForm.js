import React from "react";

function ViewForm(values) {
  console.log("viewForm", values);
  return (
    <table>
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {[values].map((values, index) => (
          <tr key={index}>
            <td>{values[0]}</td>
            <td>{values[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ViewForm;
