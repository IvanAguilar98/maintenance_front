import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient,) { }

  baseURL() {
        return 'https://localhost:7220/api/';
    }

  PostMethod(params: any = {}, actionURL: string) {
    return this.http.post(this.baseURL() + actionURL, params)
        .pipe(map((Response: any) => {
            console.log("🚀 ~ file: api.service.ts ~ line 16 ~ PostMethod ~ " + actionURL + " ~ Response", Response)
            return Response;
        }));
  }
  GetMethod(actionURL: string) {
      return this.http.get(this.baseURL() + actionURL)
          .pipe(map((Response: any) => {
              console.log("🚀 ~ file: api.service.ts ~ line 26 ~ GetMethod ~ " + actionURL + " ~ Response", Response)
              return Response;
          }));
  }
}
