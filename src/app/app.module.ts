import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CotacaoComponent } from './components/cotacao/cotacao.component';
import { TimerComponent } from './components/timer/timer.component';
import { ComunicacaoComponent } from './components/comunicacao/comunicacao.component';
import { TriggerComponent } from './components/comunicacao/trigger/trigger.component';
import { ListenerComponent } from './components/comunicacao/listener/listener.component';

registerLocaleData(ptBr);

@NgModule({
    declarations: [
        AppComponent,
        CotacaoComponent,
        TimerComponent,
        ComunicacaoComponent,
        TriggerComponent,
        ListenerComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
