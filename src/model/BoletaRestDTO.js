import {DocumentoRespaldo} from "./DocumentoRespaldo";
import {ItemBoleta} from "./ItemBoleta";

export class BoletaRestDTO {
    Items:ItemBoleta[]
    IdEmpresa:number
    IdEmpresaPadre:number
    IdUsuario:number
    UserName:String
    RutEmpresa:String
    Token:String
    GuardaRespaldo:boolean
    FechaInicio:String
    FechaTermino:String
    BoletasRcof:String
    PathRcof:String
    IdRcof:number
    IdDocRespaldo:number
    DocumentoRespaldo:DocumentoRespaldo
    FolioDocumento:number
    PathBoletaPdf:String
    FoliosRestantes:number
    Mensajes:Mensaje
    CodTributario:number
    Archivo_xml:String
}