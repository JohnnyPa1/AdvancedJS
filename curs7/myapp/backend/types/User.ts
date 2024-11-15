export interface BasicUser {
    id: number,
  }
  export interface User extends BasicUser {
    nume: string,
    prenume: string,
    datanastere:Date, //string
    email:string,
    telefon: string,
    dataadaugare?:Date,
    inaltime?:number,
    actiune?:string,
    poza?:string

  }
  export interface UserWithDetails extends BasicUser, User{
    userId: number,
    user: User,
    
  }