import type React from "react";
import "./Table.css";

interface TableProps {
  headings: string[];
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ headings, children }) => {
  return (
    <table className="common_table">
      <thead>
        {headings.map((item: any, index: number) => (
          <th key={index}>{item}</th>
        ))}
      </thead>
      {children}
    </table>
  );
};

export default Table;
