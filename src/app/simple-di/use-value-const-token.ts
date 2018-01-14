import { InjectionToken } from "@angular/core";
import { UseValueConst } from "./use-value-const-type";

export const USE_VALUE_CONST: UseValueConst = {
  id: 100,
  name: 'Angular'
}
export const UseValueConstToken = new InjectionToken<UseValueConst>('./use-value-const');
