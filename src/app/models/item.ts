export class Item {
  $key: string;
  name:string;
  url:string;
  progress:number;
  createdAt: Date = new Date();
  constructor(public title: string, public file: any, public price: number, public description: string, public userName: string, public userId: string){}
}
