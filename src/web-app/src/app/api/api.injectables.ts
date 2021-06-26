import { environment } from "../../environments/environment";
import { ApiService } from "./api.service";

export let KONDOR_API_URL: string

export const ApiInjectables: Array<any> = [
  {provide: KONDOR_API_URL, useValue: environment.apiUrl}
]
