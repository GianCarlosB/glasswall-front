import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';
import parliamentarians from '../../resources/data.json';

@Component({
  selector: 'app-parliamentarians-listing',
  templateUrl: './parliamentarians-listing.component.html',
  styleUrls: ['./parliamentarians-listing.component.scss']
})
export class ParliamentariansListingComponent implements OnInit {

  parliamentarians = parliamentarians;
  parliamentariansAllItens = [];

  politicalParties = new Set();

  parliamentaryNameSearch = '';
  politicalPartySearch = '';

  constructor(private router: Router, private storage: StorageMap) { 
  }

  ngOnInit(): void {
    this.initiateItens();
  }

  initiateItens() {
    var politicalPartiesList = [];
    this.parliamentarians.forEach(function(parliamentary, index) {
      politicalPartiesList.push(parliamentary.partido);
      parliamentary['posicao'] = (index + 1);
    });
    this.politicalParties = new Set(politicalPartiesList);
    this.parliamentariansAllItens = Object.assign([], this.parliamentarians);
  }

  filterParliamentarians() {
    this.parliamentarians = Object.assign([], this.parliamentariansAllItens);
    var parliamentaryNameFilter = this.parliamentaryNameSearch;
    var politicalPartyFilter = this.politicalPartySearch;
    if (parliamentaryNameFilter) {
      this.parliamentarians = this.parliamentarians.filter(function(p) {
        return p.nome.toLowerCase().includes(parliamentaryNameFilter.toLowerCase());
      });
    }
    if (politicalPartyFilter) {
      this.parliamentarians = this.parliamentarians.filter(function(p) {
        return p.partido.toLowerCase() === politicalPartyFilter.toLowerCase();
      });
    }
  }

  getBackgroundColorByPositionRanking(position) {
    let result  = Math.ceil(this.parliamentariansAllItens.length / 3);
    if (position <= result) {
      return "success";
    } else if (position <= (result + result)) {
      return "warning";
    } else {
      return "danger";
    }
  }

  getTextColorByPositionRanking(position) {
    let result  = Math.ceil(this.parliamentariansAllItens.length / 3);
    if (position <= result) {
      return "white";
    } else if (position <= (result + result)) {
      return "black";
    } else {
      return "white";
    }
  }

}