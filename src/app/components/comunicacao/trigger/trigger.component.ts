import { ComunicacaoService } from './../comunicacao.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.scss']
})
export class TriggerComponent implements OnInit {

  constructor(
    private comunicacaoService: ComunicacaoService,
  ) { }

  ngOnInit(): void {
    this.ouvindoInput();
  }

  ouvindoInput(): any {
    const inputElement = document.querySelector('#input') as HTMLInputElement;

    fromEvent(inputElement, 'input')
    .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        map((event: Event) => {
            const inputValue = (event.target as HTMLInputElement).value;
            return inputValue.toUpperCase();
          })
    )
    .subscribe((inputValue: string) => {
        this.comunicacaoService.comunicadorSubject.next(inputValue);
    })
  }
}
