import api from "./api";

export interface CallData {
  [key: string]: unknown;
  id: string;
  created_at: string;
  requester: string;
  department: string;
  area: string;
  responsible: string;
  status: string;
}

const names = ["João", "Maria", "Pedro", "Ana", "Carlos", "Mariana", "José", "Laura", "André", "Luana"];

function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

export const setAuthToken = () => {
  const token = localStorage.getItem('token');

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const getAuthToken = () => {
  return localStorage.getItem('token');
}

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

export const callsHeadCells: CallsHeadCell[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "ID"
  },
  {
    id: "created_at",
    numeric: true,
    disablePadding: false,
    label: "Data de Abertura"
  },
  {
    id: "requester", // Nova coluna para quem solicitou
    numeric: true,
    disablePadding: false,
    label: "Solicitante"
  },
  {
    id: "department", // Nova coluna para o setor
    numeric: true,
    disablePadding: false,
    label: "Setor"
  },
  {
    id: 'area',
    numeric: false,
    disablePadding: false,
    label: 'Área'
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status"
  },
];

export function filterRows<T extends { [key: string]: unknown }>(
  rows: T[],
  searchText: string
): T[] {
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
  filteredData: readonly {
    [x: string]: string | number;
    [x: number]: string | number;
  }[],
  order: Order,
  orderBy: string,
  page: number,
  rowsPerPage: number
): {
  [x: string]: string | number;
  [x: number]: string | number;
}[] {
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

export interface EmployeeData {
  [key: string]: unknown;
  id: number;
  name: string;
  position: string;
  campus: string; // Novo atributo para o campus
  active: boolean; // Novo atributo para indicar se está ativo
}

function createEmployeeData(
  id: number,
  name: string,
  position: string,
  campus: string,
  active: boolean
): EmployeeData {
  return {
    id,
    name,
    position,
    campus,
    active
  };
}

const positions = ["Gerente", "Analista", "Desenvolvedor", "Designer", "Vendedor"];


const campuses = ["Jequié", "Vit. da Conquista", "Itapetinga"];

export const employeesRows: EmployeeData[] = Array.from({ length: 50 }, (_, index) => {
  const id = index + 1;
  const name = getRandomName();
  const position = getRandomPosition();
  const campus = getRandomCampus(); // Novo valor aleatório para o campus
  const active = getRandomBoolean(); // Novo valor aleatório para ativo
  return createEmployeeData(id, name, position, campus, active);
});

function getRandomCampus() {
  return campuses[Math.floor(Math.random() * campuses.length)];
}

function getRandomBoolean() {
  return Math.random() < 0.5; // Retorna aleatoriamente true ou false
}

function getRandomPosition() {
  return positions[Math.floor(Math.random() * positions.length)];
}

export interface EmployeeHeadCell {
  id: keyof EmployeeData;
  disablePadding: boolean;
  label: string;
}

export const employeeHeadCells: EmployeeHeadCell[] = [
  {
    id: "id",
    disablePadding: false,
    label: "ID"
  },
  {
    id: "name",
    disablePadding: false,
    label: "Nome"
  },
  {
    id: "position",
    disablePadding: false,
    label: "Cargo"
  },
  {
    id: "campus",
    disablePadding: false,
    label: "Campus"
  },
  {
    id: "active",
    disablePadding: false,
    label: "Ativo"
  }
];
export interface DepartmentData {
  [key: string]: unknown;
  id: number;
  name: string;
  extension: string;
  active: boolean;
  employeeCount: number;
  callCount: number;
}

const departmentNames = ["RH", "Financeiro", "Tecnologia", "Vendas", "Marketing"];

export const departmentRows: DepartmentData[] = departmentNames.map((name, index) => ({
  id: index + 1,
  name,
  extension: getRandomExtension(),
  active: getRandomBoolean(),
  employeeCount: getRandomCount(),
  callCount: getRandomCount(),
}));

function getRandomExtension() {
  const min = 1000;
  const max = 9999;
  return String(Math.floor(Math.random() * (max - min + 1) + min));
}

function getRandomCount() {
  const min = 0;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export interface DepartmentHeadCell {
  id: keyof DepartmentData;
  disablePadding: boolean;
  label: string;
}

export const departmentHeadCells: DepartmentHeadCell[] = [
  {
    id: "id",
    disablePadding: false,
    label: "ID"
  },
  {
    id: "name",
    disablePadding: false,
    label: "Nome"
  },
  {
    id: "extension",
    disablePadding: false,
    label: "Ramal"
  },
  {
    id: "active",
    disablePadding: false,
    label: "Ativo"
  },
  {
    id: "employeeCount",
    disablePadding: false,
    label: "Qtd. Funcionários"
  },
  {
    id: "callCount",
    disablePadding: false,
    label: "Qtd. Chamados"
  },
];


