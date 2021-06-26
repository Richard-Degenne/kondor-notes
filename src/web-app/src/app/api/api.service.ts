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

  constructor(
    private http: HttpClient,
    @Inject(KONDOR_API_URL) private apiUrl: string
  ) { }

  getWorkbooks(): Observable<Workbook[]> {
    const headers: HttpHeaders = new HttpHeaders({
      'Accept': 'application/json'
    })
    let observable = this.http.get(
      this.buildUrl('/workbooks'), { headers: headers, responseType: 'text' }
    )
    let workbooks = observable.pipe(
      map(json =>  JSON.parse(json)),
      map(data =>
        data.map((i: Workbook) => new Workbook(i.id, i.name, i.description))
      )
    )

    return workbooks
  }

  private buildUrl(path: string): string {
    return `${this.apiUrl}${path}`
  }
}
