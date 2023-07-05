import { gql } from 'apollo-server';

const typeDefs = gql`
  type Company {
    id: Int
    nombre: String
    direccion: String
    telefono: Int
    createdAt: String
    users: [User]
  }

  type Area {
    id: Int
    nombre: String
    telefono: Int
    createdAt: String
    users: [User]
  }

  type User {
    id: Int
    nombres: String
    apellidos: String
    ciudad: String
    company: Company
    area: Area
  }

  type Hora {
    pais: String
    hora_actual: String
  }

  input CompanyInput {
    nombre: String
    direccion: String
    telefono: Int
  }

  input UserInput {
    nombres: String
    apellidos: String
    ciudad: String
    companyId: Int
    areaId: Int
  }

  input AreaInput {
    nombre: String
    telefono: Int
  }

  type Query {
    companies: [Company]
    companyById(id: Int!): Company
    users: [User]
    areas: [Area]
    areaById(id: Int!): Area
    obtenerHora: [Hora]   
    generarDatosAleatorios: [Int!]!
    generarTokensAleatorios: [String!]!
  }

  type Mutation {
    createCompany(data: CompanyInput): Company
    createUser(data: UserInput): User
    createArea(data: AreaInput): Area
    updateCompany(id: Int, data: CompanyInput): Company
    updateUser(id: Int, data: UserInput): User
    deleteCompany(id: Int): Company
  }
`;

export default typeDefs;