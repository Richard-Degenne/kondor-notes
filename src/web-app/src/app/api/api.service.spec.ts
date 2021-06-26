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
  // describe("getWorkbooks", () => {
  //   it("retrieves the workbooks", inject(
  //     [ApiService, HttpTestingController],
  //     fakeAsync((apiService, mockBackend) => {
  //       var response;
  //       mockBackend.connections.subscribe(c => {
  //         expect(c.request.url).toBe(
  //           "http://localhost:3000/workbooks"
  //         )
  //         c.mockRespond(new Response('[]'))
  //       })

  //       apiService.getWorkbooks().subscribe((r: Workbook[]) => response = r)
  //       tick()

  //       expect(response.toBe([]))
  //     })
  //   ))
  // })
})
