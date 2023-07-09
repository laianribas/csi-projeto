export interface Department {
  id: number;
  name: string;
  extension: string;
  description: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Status {
  id: number;
  description: string;
}

export interface Position {
  id: number;
  name: string;
}

export interface Employee {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  position_id: number;
  campus_id: number;
  position: Position;
}

export interface CallInterface {
  [key: string]: unknown;
  id: string;
  responsible: Employee
  area: string;
  description: string;
  asset_tag: string;
  evaluation: string;
  department_id: number;
  active: boolean;
  created_at: string;
  updated_at: string;
  employee_id: string;
  campus_id: number;
  department: Department;
  status: Status[];
  employee: Employee;
}