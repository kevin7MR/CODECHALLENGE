import {ENV} from "../utils/constants";
import {BaseServices} from "./BaseService";



export class Login extends BaseServices{
    constructor(){
        const basePath=ENV.API_URL;
        const endPoint=ENV.ENDPOINTS.AUTH.LOGIN;
        super(basePath,endPoint)
    }

}

export class User extends BaseServices{
    constructor(){
        const basePath=ENV.API_URL;
        const endPoint=ENV.ENDPOINTS.USERS_ME;
        super(basePath,endPoint)
    }

}

export class Products extends BaseServices{
    constructor(){
        const basePath=ENV.API_URL;
        const endPoint=ENV.ENDPOINTS.PRODUCT;
        super(basePath,endPoint)
    }

}

export class addCart extends BaseServices{
    constructor(){
        const basePath=ENV.API_URL;
        const endPoint=ENV.CART;
        super(basePath,endPoint)
    }

}


