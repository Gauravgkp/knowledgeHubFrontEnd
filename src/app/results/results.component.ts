import { Component, OnInit } from '@angular/core';
import { DataService } from '../domain/data-service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  searchTerm: string;

  constructor(    private dataService: DataService,
    ) { }

  ngOnInit() {
    this.searchTerm = this.dataService.dataService

  }

}
