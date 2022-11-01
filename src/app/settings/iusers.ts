import {IAuthor} from "./IAuthor";

export interface IUsers {
  id?: string;
  author: IAuthor;
  docCode: string;
  docDate: string;
  docName: string;
  docType: string;
  address: string;
  isSpecial: boolean;
}
