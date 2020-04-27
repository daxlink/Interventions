import { Component, OnInit } from '@angular/core';

import { faSave } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {

  faSave = faSave;

  constructor() { }

  ngOnInit(): void {
  }

}
