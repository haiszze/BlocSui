import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StatsCardComponent } from "../../shared/stats/stats-card";
import { componentTitles } from '../../utils/props.util';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, StatsCardComponent],
  templateUrl: './home.html',
})
export class Home {
  visible = signal(false);

  componentTitles = componentTitles;
}