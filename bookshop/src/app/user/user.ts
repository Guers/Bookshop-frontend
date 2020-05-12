
export interface User{

    name:string,
    surname:string,
    email:string,
    password:string,
    address?: string,
    address2?:string,
    city?:string,
    state?:string[],
    zip?:number
}
