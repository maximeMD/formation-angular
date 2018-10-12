import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IndividualService } from '../individual.service';


@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {

  @Input() individual: any;

  @Output() individualRemoveEvent = new EventEmitter();
  @Output() individualEditEvent = new EventEmitter();

  constructor(
    private individualService: IndividualService
  ) { }

  ngOnInit() {
  }

  delete(){
    let individualQuery = this.individualService.deleteIndividual(this.individual.id).subscribe( res => {
      this.individualRemoveEvent.emit();
    });
  }

  edit(){
    this.individualEditEvent.emit(this.individual);
  }  

}
