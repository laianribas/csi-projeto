export interface CallData {
  [key: string]: unknown;
  id: number;
  number: string;
  openingDate: string;
  status: string;
  responsible: string;
  department: string; // Nova propriedade para o setor
  requester: string; // Nova propriedade para quem solicitou
}


function createData(
  id: number,
  number: string,
  openingDate: string,
  status: string,
  responsible: string,
  department: string,
  requester: string
): CallData {
  return {
    id,
    number,
    openingDate,
    status,
    responsible,
    department: getRandomDepartment(),
    requester: getRandomName()
  };
}



const departments = ["RH", "Financeiro", "Tecnologia", "Vendas", "Marketing"];
const names = ["João", "Maria", "Pedro", "Ana", "Carlos", "Mariana", "José", "Laura", "André", "Luana"];

function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomDepartment() {
  return departments[Math.floor(Math.random() * departments.length)];
}


function getRandomStatus() {
  const statuses = ["Concluído", "Em Andamento", "Em Aberto"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

export const callsRows: CallData[] = Array.from({ length: 50 }, (_, index) => {
  const id = index + 1;
  const number = `CH00${id}`;
  const openingDate = "2023-05-15";
  const status = getRandomStatus();
  const responsible = getRandomName();
  const department = getRandomDepartment(); // Novo valor aleatório para o setor
  const requester = getRandomName(); // Novo valor aleatório para quem solicitou
  return createData(id, number, openingDate, status, responsible, department, requester);
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
  id: keyof CallData;
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}
export interface EmployeesHeadCell {
  id: keyof CallData;
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
  },
  {
    id: "department", // Nova coluna para o setor
    numeric: true,
    disablePadding: false,
    label: "Setor"
  },
  {
    id: "requester", // Nova coluna para quem solicitou
    numeric: true,
    disablePadding: false,
    label: "Solicitante"
  }
];


export function filterRows(rows: { [key: string]: unknown }[], searchText: string): { [key: string]: unknown }[] {
  if (searchText === '') {
    return rows;
  }
  const lowercasedValue = searchText.toLowerCase();
  return rows.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(lowercasedValue)
    );
  });
}

export function getVisibleRows(
  filteredData: readonly { [x: string]: string | number;[x: number]: string | number; }[],
  order: Order,
  orderBy: string,
  page: number,
  rowsPerPage: number
): { [x: string]: string | number;[x: number]: string | number; }[] {
  return stableSort(filteredData, getComparator(order, orderBy)).slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
}

export function calculateEmptyRows(
  page: number,
  rowsPerPage: number,
  filteredData: any[]
): number {
  return page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredData.length) : 0;
}


