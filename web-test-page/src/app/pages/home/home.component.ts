import { Component } from '@angular/core';

interface CalendarEvent {
  isExpanded: boolean;
  dateInit: Date;
  dateEnd: Date;
  location: string;
  title: string;
  paragraph: Paragraph[];
  tags: string[];
}

interface Paragraph {
  paragraphText: string;
  paragraphType: 'BOLD' | undefined;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public showEditorDetails: boolean;
  public buttonText: string;
  public activeExpanded = true;
  public calendarEvents: CalendarEvent[] = [
    {
      isExpanded: false,
      dateInit: new Date('2023-10-20T09:00:00Z'),
      dateEnd: new Date('2023-10-20T12:00:00Z'),
      location: 'Sala de conferencias',
      title: 'Reunión de equipo',
      paragraph: [
        {
          paragraphText: 'Presentación del nuevo proyecto',
          paragraphType: 'BOLD',
        },
        {
          paragraphText: 'Discusión sobre los hitos y tareas pendientes',
          paragraphType: undefined,
        },
      ],
      tags: ['reunión', 'equipo', 'proyecto'],
    },
    {
      isExpanded: false,
      dateInit: new Date('2023-10-20T09:00:00Z'),
      dateEnd: new Date('2023-10-20T12:00:00Z'),
      location: 'Sala de conferencias',
      title: 'Reunión de equipo',
      paragraph: [
        {
          paragraphText: 'Presentación del nuevo proyecto',
          paragraphType: 'BOLD',
        },
        {
          paragraphText: 'Discusión sobre los hitos y tareas pendientes',
          paragraphType: undefined,
        },
      ],
      tags: ['reunión', 'equipo', 'proyecto'],
    },
  ];

  constructor() {
    this.buttonText = 'Editor details';
    this.showEditorDetails = false;
  }

  public toggleButton(): void {
    this.showEditorDetails = !this.showEditorDetails;
    this.buttonText = this.showEditorDetails ? 'Last edited by: Lindsey Mancini, Edit access: Everybody' : 'Editor details';
  }

  public activeExpandedToggle(): void {
    this.activeExpanded = !this.activeExpanded;
  }
}
