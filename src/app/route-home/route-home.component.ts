import { Component, OnInit, Input } from '@angular/core';
import { Individual } from '../individual';
import { IndividualService } from '../individual.service';

@Component({
  selector: 'app-route-home',
  templateUrl: './route-home.component.html',
  styleUrls: ['./route-home.component.css']
})
export class RouteHomeComponent implements OnInit {

  @Input() individuals: Individual[];
  @Input() editIndividual: Individual;

  public editState: string;

  constructor(
    private individualService: IndividualService
  ) { }

  ngOnInit(){
    this.getAllIndividuals();
    this.editIndividual = new Individual();
    this.editState = "";
  }

  getAllIndividuals(){
    let individualsQuery = this.individualService.getAllIndividuals().subscribe( res => {
      this.individuals = res;
    });
  }

  individualRemoveEvent(){
    this.getAllIndividuals();
  }

  individualEditEvent(event){
    this.editIndividual = event;
  }

  onSubmitEdit(){
    let individualEditQuery = this.individualService.updateIndividual(this.editIndividual).subscribe( res => {
      this.getAllIndividuals();
      this.editState = "Saved !"
    });
  }

}
