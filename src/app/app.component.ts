import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { BehaviorSubject } from 'rxjs';
import { GetUnitsService } from './services/get-units.service';
import { Location } from './types/location.interface';
import { LegendComponent } from './components/legend/legend.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FormsComponent, CardsListComponent, LegendComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'desafio-smartfit';
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService: GetUnitsService) { }

  onSubmit() {
    this.showList.next(true);
    this.unitsList = this.unitService.getFilteredUnits();
  }
}
