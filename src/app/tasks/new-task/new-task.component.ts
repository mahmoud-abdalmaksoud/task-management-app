import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter();
  @Output() add = new EventEmitter<{
    title: string;
    summary: string;
    date: string;
  }>();
  enteredTitle = '';
  enteredSummary = '';
  EnteredDate = '';
  onCancelClick() {
    this.cancel.emit();
  }
  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.EnteredDate,
    });
  }
}
