import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parliamentary-details',
  templateUrl: './parliamentary-details.component.html',
  styleUrls: ['./parliamentary-details.component.scss']
})
export class ParliamentaryDetailsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}