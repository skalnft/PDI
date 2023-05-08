import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ComunicacaoService {
    public comunicadorSubject = new Subject<string>();
    comunicador$ = this.comunicadorSubject.asObservable();

    constructor() {}
}
