import { ComunicacaoService } from './../comunicacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-listener',
    templateUrl: './listener.component.html',
    styleUrls: ['./listener.component.scss'],
})
export class ListenerComponent implements OnInit {
    valor!: string;
    constructor(
        private comunicacaoService: ComunicacaoService,
    ) {}

    ngOnInit(): void {
        this.comunicacaoService.comunicador$.subscribe((data) => {
            this.valor = data;
        })
    }
}
