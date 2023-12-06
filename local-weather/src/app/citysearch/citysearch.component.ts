import { Component, Output, EventEmitter } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-citysearch',
  templateUrl: './citysearch.component.html',
  styleUrls: ['./citysearch.component.css'],
})
export class CitysearchComponent {
  @Output() searchEvent = new EventEmitter<string>() //defined type of data**
  search = new FormControl('', [Validators.minLength(3)])

  constructor() {
    this.search.valueChanges.pipe(debounceTime(2000)).subscribe((searchValue) => {
      if (!this.search.invalid) this.searchEvent.emit(searchValue ?? undefined)
    })
  }
}

//create output event and publish daata
