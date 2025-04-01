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
  styleUrl: './app.component.scss'
})
export class AppComponent {

  displayedColumns: string[] = ['id', 'value', 'actions'];
  data: DemoDTO[] = [];

  constructor(
    private service: DemoService,
    private dialog: MatDialog
  ) {
    service.loadAll().subscribe(values => this.data = values);
  }

  openDialog(input?: DemoDTO): Observable<DemoDTO> {
    const ref = this.dialog.open(DemoDialogComponent, { data: input });
    return ref.afterClosed().pipe(
      filter(x => !!x)
    );
  }

  createElementDialog() {
    this.openDialog().subscribe(newDto => {
      // TODO implement
    });
  }

  updateElementDialog(dto: DemoDTO) {
    this.openDialog(dto).subscribe(updatedDto => {
      // TODO implement
    });
  }

  deleteElement(dto: DemoDTO) {
    // TODO implement
  }
}
