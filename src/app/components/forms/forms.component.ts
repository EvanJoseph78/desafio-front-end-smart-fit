import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent implements OnInit {
  resuts: Location[] = [];
  filteredResuts: Location[] = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });
    this.unitService.getAllUnits().subscribe(data => {
      this.resuts = data.locations;
      this.filteredResuts = data.locations;
    });
  }

  onSubmit() {
    if (!this.formGroup.value.showClosed) {
      this.filteredResuts = this.resuts.filter(location => location.opened === true);
    } else {

      this.filteredResuts = this.resuts;
    }
    console.log(this.filteredResuts.length)
  }

  onClean() {
    console.log('clean');
    this.formGroup.reset();
  }
}
