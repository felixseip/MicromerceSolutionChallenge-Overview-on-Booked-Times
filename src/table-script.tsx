import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo } from "react";
import sourceData from "./source-data.json";
import type { SourceDataType, TableDataType } from "./types";

/**
 * Example of how a TableDataType object should be structured.
 *
 * Each `TableDataType` object has the following properties:
 * @prop {string} ticketId - The unique identifier for the ticket.
 * @prop {string} userId - The unique identifier for the user associated with the booking.
 * @prop {string} timeBooked - The time duration booked by the user, typically in hours or minutes.
 * @prop {string} bookingDate - The date when the booking was made, formatted as a string.
 */

const tableData: TableDataType[] = (
  sourceData as unknown as SourceDataType[]
).map((dataRow, index) => {
  const userId = `${dataRow?.employees?.firstname} - ...`;

  const row: TableDataType = {
    ticketId: "ticketId placeholder",
    userId,
    bookingDate: "bookingDate placeholder",
    timeBooked: "timeBooked placeholder",
  };

  return row;
});

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<TableDataType>[]>(
    () => [
      {
        accessorKey: "ticketId",
        header: "Ticket Id",
      },
      {
        accessorKey: "userId",
        header: "User Id",
      },
      {
        accessorKey: "bookingDate",
        header: "Booking Date",
      },
      {
        accessorKey: "timeBooked",
        header: "Time Booked",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: tableData,
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
