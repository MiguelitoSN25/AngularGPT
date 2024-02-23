import { CommonModule } from '@angular/common';
import { Component,ChangeDetectionStrategy } from '@angular/core';
import { RouterModule} from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-dashboar-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './dashboar-layout.component.html',
  styleUrl: './dashboar-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboarLayoutComponent {
  public routes = routes[0].children?.filter( (route) => route.data );

}
