import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-citysearch',
  templateUrl: './citysearch.component.html',
  styleUrls: ['./citysearch.component.css'],
})
export class CitysearchComponent {
  search = new FormControl('', [Validators.minLength(3)])

  constructor() {
    this.search.valueChanges.subscribe((searchValue) => {
      if (!this.search.invalid) console.log(searchValue)
    })
  }
}
