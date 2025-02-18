import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
export interface Talent {
  name: string;
  imageUrl: string;
}
@Component({
  selector: 'app-talent',
  imports: [CommonModule],
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.scss']
})
export class TalentComponent {
  @Input() talents: Talent[] = [];

}
