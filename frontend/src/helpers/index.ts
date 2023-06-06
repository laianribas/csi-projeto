export interface Data {
  id: number;
  number: string;
  openingDate: string;
  status: string;
  responsible: string;
}

function createData(
  id: number,
  number: string,
  openingDate: string,
  status: string,
  responsible: string
): Data {
  return {
    id,
    number,
    openingDate,
    status,
    responsible
  };
}

const names = ["João", "Maria", "Pedro", "Ana", "Carlos", "Mariana", "José", "Laura", "André", "Luana"];

function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomStatus() {
  const statuses = ["Concluído", "Em Andamento"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

export const callsRows: Data[] = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const number = `CH00${id}`;
  const openingDate = "2023-05-15";
  const status = getRandomStatus();
  const responsible = getRandomName();
  return createData(id, number, openingDate, status, responsible);
});


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export type Order = "asc" | "desc";

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as const);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export interface CallsHeadCell {
  id: keyof Data;
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}
export interface EmployeesHeadCell {
  id: keyof Data;
  name: string;
  disablePadding: boolean;
  label: string;
}

export const callsHeadCells: CallsHeadCell[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "ID"
  },
  {
    id: "number",
    numeric: true,
    disablePadding: false,
    label: "Número"
  },
  {
    id: "openingDate",
    numeric: true,
    disablePadding: false,
    label: "Data de Abertura"
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status"
  },
  {
    id: "responsible",
    numeric: true,
    disablePadding: false,
    label: "Responsável"
  }
];