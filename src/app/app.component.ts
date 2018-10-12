import { Component } from '@angular/core';
import { IndividualService } from './individual.service';
import { Individual } from './individual';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';

  public individuals: Individual[];
  public editIndividual: Individual;

  public editState: string;

  constructor(
    private individualService: IndividualService
  ){}

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
