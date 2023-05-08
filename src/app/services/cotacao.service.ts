import { Injectable } from '@angular/core';
import { Observable, of, map, from, catchError, throwError } from 'rxjs';
import { Cotacao } from 'src/app/models/cotacao';

@Injectable({
    providedIn: 'root',
})
export class CotacaoService {
    urlCotacao = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';

    buscarCotacao(): Observable<Cotacao> {
        return new Observable((observer) => {
            fetch(this.urlCotacao)
                .then((response) => {
                    if (response.ok) {
                        const resp = response.json();
                        return resp
                    } else {
                        throw new Error(
                            `Erro na requisição: ${response.status}`
                        );
                    }
                })
                .then((data) => {
                    observer.next(data);
                    observer.complete();
                })
                .catch((error) => {
                    observer.error(error);
                });
        });
    }
}
