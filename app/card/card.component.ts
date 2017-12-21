import { Component, Input } from '@angular/core';

import { Task } from '../model/task';

@Component({
  moduleId: module.id,
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: [ 'card.component.css' ]
})

export class CardComponent {
    @Input() task: Task;

    statusToggle() {
	this.task.completed = !this.task.completed;
    }

    remove() {
	console.log(this.task);
	
	// this.tasks = this.tasks.filter(function(item) {
    	//     return item !== this.task
     	// });
    }
}
