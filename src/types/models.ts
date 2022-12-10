export interface newEmployeeInt {
  firstName?: string;
  lastName?: string;
  birthday?: Date | string;
  startDay?: Date | string;
  departement?: string | null;
  street?: string;
  city?: string;
  state?: string | null;
  zipCode?: string;
  id?: number;
}

export interface dataErrorInt {
  firstName?: boolean;
  lastName?: boolean;
  birthday?: boolean;
  startDay?: boolean;
  departement?: boolean;
  street?: boolean;
  city?: boolean;
  state?: boolean;
  zipCode?: boolean;
}

export interface userDataInt {
  firstName: string;
  lastName: string;
  birthday: string;
  startDay: string;
  departement: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  id: number;
}
