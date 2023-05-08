import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
    valor1$!: Observable<number>;
    valor2$!: Observable<number>;
    intervalo = interval(1000);

    constructor() {}

    ngOnInit(): void {
        this.valor1$ = this.intervalo;
        this.valor2$ = this.intervalo.pipe(
            map(valor => valor * 2)
        )
    }
}
