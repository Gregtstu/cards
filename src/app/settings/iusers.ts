import {IAuthor} from "./IAuthor";

export interface IUsers {
  id: string;
  author: IAuthor;
  docCode?: string;
  docImg?: string;
  docDate: string;
  docName: string;
  docType: string;
  address: string;
  status: string;
  isSpecial: boolean;
}
