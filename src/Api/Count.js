import { BaseServices } from "./BaseService";
import {forEach} from "lodash";
const CountCtrl= new BaseServices();
export class Count{
    Count() {
        const response = CountCtrl.GetCart();
        let count = 0;
      
        forEach(response, (item) =>{
            count += item.quantity;
        });
        return count;
      }
}