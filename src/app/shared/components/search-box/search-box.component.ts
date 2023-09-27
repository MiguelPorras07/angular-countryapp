import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input ()
  public placeholder: string = '';

  @Input ()
  public initialValue: string = '';

  /* primer paso: Creacion de event emitter: colocando output, public onValue, despues el EventEmitter, y yo sé que ese emitter va a emitir
  strings */
  @Output ()
  public onValue = new EventEmitter<string>();

  @Output ()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe( value => {
      this.onDebounce.emit( value );
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  /* paso numero tres: emitValue va a recibir un "value" de tipo string, no va a regresar nada (:void), luego, dentro de las llaves, irá
  ESTE. onValue . Y LUEGO emit ( value ), para que emita lo que le estamos pidiendo */
  emitValue( value: string ):void {
    this.onValue.emit( value );
  }

  onKeyPress( searchTerm: string) {
    this.debouncer.next( searchTerm );
  }


}
