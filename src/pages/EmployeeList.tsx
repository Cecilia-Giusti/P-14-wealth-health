import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  FilterFn,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import DebouncedInput from "../components/DebouncedInput";
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import { handleOpenNav } from "../utils/handleOpenNav";
import { newEmployeeInt } from "../types/models";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import formDate from "../utils/formDate";

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
  const data = useAppSelector((state) => state.users.users);

  const columns = useMemo<ColumnDef<newEmployeeInt>[]>(
    () => [
      {
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
        header: () => <span>First Name</span>,
      },
      {
        accessorKey: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
      },
      {
        accessorKey: "startDay",
        header: () => <span>Start Day</span>,
      },
      {
        accessorKey: "department",
        cell: (info) => info.getValue(),
        header: () => <span>Department</span>,
      },
      {
        accessorKey: "birthday",
        header: () => <span>Birthday</span>,
      },
      {
        accessorKey: "street",
        cell: (info) => info.getValue(),
        header: () => <span>Street</span>,
      },
      {
        accessorKey: "city",
        cell: (info) => info.getValue(),
        header: () => <span>City</span>,
      },
      {
        accessorKey: "state",
        cell: (info) => info.getValue(),
        header: () => <span>State</span>,
      },
      {
        accessorKey: "zipCode",
        cell: (info) => info.getValue(),
        header: () => <span>Zip Code</span>,
      },
    ],
    []
  );

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const dispatch = useAppDispatch();
  const openHeader = useAppSelector((state) => state.reponsive.openHeader);

  const regExpBirthday = new RegExp(/[0-9]{0,}_birthday/);
  const regExpStartDay = new RegExp(/[0-9]{0,}_startDay/);

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
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const [scrollBar, setScrollBar] = useState(false);

  const errorServer = useAppSelector((state) => state.users.errorGetUser);

  if (errorServer) {
    return (
      <main
        className={openHeader ? "main employeeList" : "main employeeList close"}
        onClick={() => {
          handleOpenNav(dispatch, true);
        }}
      >
        <div className="errorServer">
          <h1>Error</h1>
          <p>Sorry, an error occurred</p>
          <p>Please try again later</p>
        </div>
      </main>
    );
  } else {
    return (
      <main
        className={openHeader ? "main employeeList" : "main employeeList close"}
        onClick={() => {
          handleOpenNav(dispatch, true);
        }}
      >
        <h1>List employees</h1>
        <div className="employeeList__header">
          <div className="filter">
            <div className="filter__show">
              <label htmlFor="number_show">Show</label>
              <select
                data-testid="number-show"
                className="number_show"
                name="number_show"
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                  Number(e.target.value) > 10
                    ? setScrollBar(true)
                    : setScrollBar(false);
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              className="p-2 font-lg shadow border border-block searchBar"
              data-testid="searchBar"
              placeholder="Search"
            />
            <i className="fab fa-sistrix searchBar__icon"></i>
          </div>
        </div>
        <div
          ref={tableContainerRef}
          className={scrollBar ? "employees scrollBar" : "employees"}
        >
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
                            asc: <i className="fas fa-chevron-down"></i>,
                            desc: <i className="fas fa-chevron-up"></i>,
                          }[header.column.getIsSorted() as string] ?? (
                            <i className="fas fa-arrows-alt-v"></i>
                          )}
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
                      {regExpBirthday.test(cell.id) ||
                      regExpStartDay.test(cell.id)
                        ? regExpBirthday.test(cell.id)
                          ? formDate(cell.row.original.birthday)
                          : formDate(cell.row.original.startDay)
                        : flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
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
        </div>
        <div className="pagination">
          <div
            className="pagination__buttons"
            data-testid="pagination__buttons"
          >
            <button
              className="pagination__button"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="pagination__button"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button
              data-testid="next"
              className="pagination__button"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            <button
              className="pagination__button"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
          </div>
          <span className="flex items-center gap-1 pagination__pageNumber">
            <p>Page : </p>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
        </div>
      </main>
    );
  }
};

export default EmployeeList;
