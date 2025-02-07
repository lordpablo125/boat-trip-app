export type Id = {
  id: number | undefined
}
export type DocumentId = {
  documentId: string
}

export interface Params {
  id: string
}

export interface ParamProp {
  params: Promise<Params>
}

export type Boat = {
  name: string
  brand: string
  model: string
  maximum_capacity: number
  image: string
}

export type BoatCardProps = {
  boats: Boat[]
}

export type Employee = {
  id?: number
  name: string
  role: string
  documentId: string
}

export type EmployeeTableProps = {
  employees: Employee[]
}

export type Passager = {
  id?: number
  name: string
  dni: string
}

export type PassagerTableProps = {
  passagers: Passager[]
}
