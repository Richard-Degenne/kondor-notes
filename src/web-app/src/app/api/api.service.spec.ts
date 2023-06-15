import { inject, fakeAsync, TestBed, tick } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ApiService } from "./api.service";
import { Workbook } from "./workbook.model";
import { ApiInjectables } from "./api.injectables";
import { HttpClient } from "@angular/common/http";

describe("ApiService", () => {
  let httpClient: HttpClient
  let httpTestingController: HttpTestingController
  let apiService: ApiService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService, ApiInjectables]
    })

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    apiService = TestBed.inject(ApiService)
  })

  it('should create', () => {
    expect(apiService).toBeTruthy()
  })

  describe('#getWorkbooks', () => {
    it('should retrieve workbooks', () => {
      const responseBody = '[{"id": 42, "name": "Name", "description": "Description"}]'
      apiService.getWorkbooks().subscribe(workbooks =>
        expect(workbooks.length).toBe(1)
      )

      const httpStub = httpTestingController.expectOne("http://localhost:3000/workbooks")
      expect(httpStub.request.method).toEqual('GET')
      httpStub.flush(responseBody)

      httpTestingController.verify()
    })
  })

  describe('#getWorkbook', () => {
    it('should retrieve a workbook', () => {
      const responseBody = '{"id": 42, "name": "Name", "description": "Description"}'
      apiService.getWorkbook('42').subscribe({next: workbook => {
        expect(workbook.id).toBe(42);
        expect(workbook.name).toBe("Name")
        expect(workbook.description).toBe("Description")
      }
    })

      const httpStub = httpTestingController.expectOne("http://localhost:3000/workbooks/42")
      expect(httpStub.request.method).toEqual('GET')
      httpStub.flush(responseBody)

      httpTestingController.verify()
    })
  })
})
