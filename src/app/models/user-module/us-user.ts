import { UsGender } from "./us-gender";
import { UsMatrialstatus } from "./us-matrialstatus";

export class UsUser {
    idUsuario?:number;
    apellido?:string;
    cedula?:string;
    direccion?:string;
    email?:string;
    estado?:string;
    fechanacimiento?:string;
    nombre?:string;
    password?:string;
    telefono?:string;
    rol?:number;
    estadocivil?: UsMatrialstatus;
    genero?:UsGender;
    resetPassword?:Boolean;
}
