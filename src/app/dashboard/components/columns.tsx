import { ScoreGroupAType } from '@/models/report.model';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

export const ScoreGroupAColumns: ColumnDef<ScoreGroupAType>[] = [
  {
    accessorKey: 'id',
    header: 'Reg Number',
  },
  {
    accessorKey: 'math',
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='flex gap-2 items-center hover:cursor-pointer'
        >
          Math
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      )
    },
  },
  {
    accessorKey: 'physics',
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='flex gap-2 items-center hover:cursor-pointer'
        >
          Physics
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      )
    },
  },
  {
    accessorKey: 'chemistry',
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='flex gap-2 items-center hover:cursor-pointer'
        >
          Chemistry
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      )
    },
  },
  {
    accessorKey: 'total',
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='flex gap-2 items-center hover:cursor-pointer'
        >
          Total
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      )
    },
  },
];
