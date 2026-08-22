
import * as dotenv from "dotenv" ;

export interface EnvironmentConfig {
  baseURL : string;
  retries : number;
}

export const config : EnvironmentConfig ={   //here config is the constant object that holds your application’s environment configuration values.
  baseURL :'https://www.camposcoffee.com/',
  retries : Number(process.env.retries ??0)
  }