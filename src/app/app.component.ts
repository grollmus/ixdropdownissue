import { Component } from '@angular/core';
import { TreeModel } from '@siemens/ix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ix-dropdown issue';
  model: TreeModel<{
    id: string;
    name: string;
  }> = {
    root: {
      id: 'root',
      data: {
        id: 'root',
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        id: 'sample',
        name: 'Sample',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        id: 'sample-child-1',
        name: 'Sample Child 1',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        id: 'sample-child-2',
        name: 'Sample Child 2',
      },
      hasChildren: false,
      children: [],
    },
  };
}
