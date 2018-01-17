export class UseValueService {
  constructor(private _id: number, private _name: string) { }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
}
export const useValueService = new UseValueService(50, 'useValue');
