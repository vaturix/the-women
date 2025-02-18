import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TalentComponent } from './components/talent/talent.component';
import { TALENT_DUMMY_DATA } from './dummy';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, TalentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'the-women';
  sidebarOpen = false;

  onToggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  talentList = TALENT_DUMMY_DATA;

}
