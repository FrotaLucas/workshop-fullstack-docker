import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DemoDTO } from '../demo.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-demo-dialog',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatButtonModule],
  templateUrl: './demo-dialog.component.html',
  styleUrl: './demo-dialog.component.scss'
})
export class DemoDialogComponent {

  demoForm;

  constructor(
    fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: DemoDTO
  ) {
    this.demoForm = fb.nonNullable.group({
      id: fb.nonNullable.control<number | undefined>({ value: data?.id, disabled: true }),
      value: fb.nonNullable.control<string>(data?.value ?? "", Validators.required)
    });
  }
}
