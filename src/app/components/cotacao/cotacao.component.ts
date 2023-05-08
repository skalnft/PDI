import { Component, OnInit } from '@angular/core';
import { Cotacao } from 'src/app/models/cotacao';
import { CotacaoService } from 'src/app/services/cotacao.service';

@Component({
    selector: 'app-cotacao',
    templateUrl: './cotacao.component.html',
    styleUrls: ['./cotacao.component.scss'],
})
export class CotacaoComponent implements OnInit {
    cotacao!: Cotacao;

    constructor(
        private cotacaoService: CotacaoService
    ) {}

    ngOnInit(): void {
        this.buscaCotacao();
    }

    buscaCotacao(): void {
        this.cotacaoService.buscarCotacao().subscribe({
            next: (data) => {
                this.cotacao = data;
            },
            error: err => err
        })
    }
}

