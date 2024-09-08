'use client';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import PrimaryButton from '../components/PrimaryButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import FormField from '../components/FormField';

export function DataTable({ columns, data }) {
  const [sorting, setSorting] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize } },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: 'includesString',
    state: {
      sorting,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  const currentPageEntries = table.getRowModel().rows.length;
  const totalEntries = data.length;

  return (
    <div>
      <div className="my-6">
        <FormField
          placeholder="Search..."
          value={globalFilter ?? ''}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-xl"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col items-center justify-between px-4 py-8 sm:flex-row">
        <div className="flex items-center justify-between space-x-2 ">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-indigo-900 font-medium">
              Items per page:
            </span>
            <select
              aria-label="Items per page"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                table.setPageSize(Number(e.target.value));
              }}
              className="border rounded p-1"
            >
              {[1, 5, 10, 20, 30, 40, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-end py-4">
          <PrimaryButton
            icon={<ArrowLeft />}
            variant={'text'}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            aria="Previous page"
          />
          <span className="text-sm text-indigo-900 font-medium ml-0 ">
            Page {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </span>
          <PrimaryButton
            icon={<ArrowRight />}
            variant={'text'}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            aria="Next page"
          />
        </div>
        <span className="text-sm text-indigo-900 font-medium">
          Showing {currentPageEntries} of {totalEntries} entries
        </span>
      </div>
    </div>
  );
}
