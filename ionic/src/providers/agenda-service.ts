import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class AgendaService {
  public API = 'http://localhost:8080';
  public AGENDA_API = this.API + '/agendas';

  constructor(public http: Http) {}

  getAgendas(): Observable<any> {
    return this.http.get(this.API + '/minhas-agendas')
      .map((response: Response) => response.json());
  }

  get(id: string) {
    return this.http.get(this.AGENDA_API + '/' + id)
      .map((response: Response) => response.json());
  }
  
  save(agenda: any): Observable<any> {
    let result: Observable<Response>;
    if (agenda['href']) {
      result = this.http.put(agenda.href, agenda);
    } else {
      result = this.http.post(this.AGENDA_API, agenda)
    }
    return result.map((response: Response) => response.json())
      .catch(error => Observable.throw(error));
  }
  remove(id: string) {
    return this.http.delete(this.AGENDA_API + '/' + id)
      .map((response: Response) => response.json());
  }
  
}