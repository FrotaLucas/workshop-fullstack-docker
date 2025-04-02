import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { DemoDialogComponent } from './demo-dialog/demo-dialog.component';
import { DemoDTO, DemoService } from './demo.service';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatTableModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'value', 'actions'];
  data: DemoDTO[] = [];

  constructor(private service: DemoService, private dialog: MatDialog) {
    service.loadAll().subscribe((values) => (this.data = values));
  }

  openDialog(input?: DemoDTO): Observable<DemoDTO> {
    const ref = this.dialog.open(DemoDialogComponent, { data: input });
    return ref.afterClosed().pipe(filter((x) => !!x));
  }

  createElementDialog() {
    this.openDialog().subscribe((newDto) => {
      // TODO implement
      this.service.create(newDto).subscribe({
        next: (createdDto) => {
          this.data = [...this.data, createdDto];
        },
        error: (error) => {
          console.error('error while adding new element', error);
        },
      });
    });
  }

  updateElementDialog(dto: DemoDTO) {
    if (dto.id === undefined) {
      console.error('Error: Cannot update an element without an ID');
      return;
    }

    this.openDialog(dto).subscribe((updatedDto) => {
      // TODO implement
      this.openDialog(dto).subscribe((updatedDto) => {
        this.service.update(dto.id!, updatedDto).subscribe({
          next: (updatedResponse) => {
            this.data = this.data.map((item) =>
              item.id === updatedResponse.id ? updatedResponse : item
            );
          },
          error: (error) => {
            console.error('error while updating element', error);
          },
        });
      });
    });
  }

  deleteElement(dto: DemoDTO) {
    // TODO implement
  }
}
