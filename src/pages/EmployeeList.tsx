import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  FilterFn,
  getFilteredRowModel,
} from "@tanstack/react-table";
import React, { useState } from "react";
import DebouncedInput from "../components/DebouncedInput";
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";

// import { useAppSelector } from "../app/hooks";
import { newEmployeeInt } from "../types/models";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

const EmployeeList = () => {
  // const dataUsers = useAppSelector((state) => state.users.users);

  const dataMocked = [
    {
      firstName: "Lola",
      lastName: "Dupont",
      birthday: "10/02/2000",
      startDay: "11/08/2020",
      departement: "Marketing",
      street: "3 rue des cigognes",
      city: "New York City",
      state: "New York",
      zipCode: "20200",
    },
    {
      firstName: "Eric",
      lastName: "Jourdin",
      birthday: "03/07/1989",
      startDay: "05/03/2022",
      departement: "Sales",
      street: "5 allée des cigognes",
      city: "Los Angeles",
      state: "California",
      zipCode: "30400",
    },
  ];

  const columnHelper = createColumnHelper<newEmployeeInt>();

  const columns = [
    columnHelper.accessor((row) => row.firstName, {
      id: "firstName",
      cell: (info) => info.getValue(),
      header: () => <span>First Name</span>,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => info.getValue(),
      header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor((row) => row.startDay, {
      id: "startDay",
      cell: (info) => info.getValue(),
      header: () => <span>Start Day</span>,
    }),
    columnHelper.accessor((row) => row.departement, {
      id: "department",
      cell: (info) => info.getValue(),
      header: () => <span>Departement</span>,
    }),
    columnHelper.accessor((row) => row.birthday, {
      id: "birthday",
      cell: (info) => info.getValue(),
      header: () => <span>Birthday</span>,
    }),
    columnHelper.accessor((row) => row.street, {
      id: "street",
      cell: (info) => info.getValue(),
      header: () => <span>Street</span>,
    }),
    columnHelper.accessor((row) => row.city, {
      id: "city",
      cell: (info) => info.getValue(),
      header: () => <span>City</span>,
    }),
    columnHelper.accessor((row) => row.state, {
      id: "state",
      cell: (info) => info.getValue(),
      header: () => <span>State</span>,
    }),
    columnHelper.accessor((row) => row.zipCode, {
      id: "zipCode",
      cell: (info) => info.getValue(),
      header: () => <span>Zip Code</span>,
    }),
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(() => [...dataMocked]);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      sorting,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,
  });

  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <main className="main">
      <h1>List employees</h1>
      <div className="searchBar__content">
        <DebouncedInput
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
          className="p-2 font-lg shadow border border-block searchBar"
          placeholder="Search"
        />
        <i className=" fa-solid fa-magnifying-glass searchBar__icon"></i>
      </div>
      <div ref={tableContainerRef} className="employees">
        <table className="employees__table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <i className="fa-solid fa-chevron-down"></i>,
                          desc: <i className="fa-solid fa-chevron-up"></i>,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        <div className="h-4" />
      </div>
    </main>
  );
};

export default EmployeeList;
