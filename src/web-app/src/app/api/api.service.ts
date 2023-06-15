import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Workbook } from "./workbook.model";
import { KONDOR_API_URL } from './api.injectables'
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static readonly headers: HttpHeaders = new HttpHeaders({
    'Accept': 'application/json'
  })

  constructor(
    private http: HttpClient,
    @Inject(KONDOR_API_URL) private apiUrl: string
  ) { }

  getWorkbooks(): Observable<Workbook[]> {
    return this.get('/workbooks').pipe(
      map(json =>  JSON.parse(json)),
      map(data =>
        data.map((i: Workbook) => new Workbook(i.id, i.name, i.description))
      )
    )
  }

  getWorkbook(id: string): Observable<Workbook> {
    return this.get('/workbooks/' + id).pipe(
      map(json => JSON.parse(json)),
      map(data => new Workbook(data.id, data.name, data.description))
    )
  }


  private get(path: string) {
    return this.http.get(
      this.buildUrl(path), { headers: ApiService.headers, responseType: 'text' }
    )
  }

  private buildUrl(path: string): string {
    return `${this.apiUrl}${path}`
  }
}
