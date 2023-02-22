import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListShipsService } from '../list-ships.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { DialogUpdateComponent } from '../dialog-update/dialog-update.component';
import { DialogNewComponent } from '../dialog-new/dialog-new.component';

@Component({
  selector: 'app-list-ships',
  templateUrl: './list-ships.component.html',
  styleUrls: ['./list-ships.component.css'],
  providers: [ListShipsService]
})

export class ListShipsComponent implements AfterViewInit, OnInit {

  ships: any = [];
  dataSource = new MatTableDataSource(this.ships);
  displayedColumns: string[] = ['name', 'position', 'destination', 'direction', 'delete', 'update'];

  constructor(
    private listShipService: ListShipsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listShipService.getShips().subscribe((res) => {
      this.ships = res
      this.dataSource = new MatTableDataSource(this.ships);
    });
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, ship: any): void {
    this.dialog.open(DialogDeleteComponent, {
      width: '200px',
      height: '100px',
      disableClose: true,
      enterAnimationDuration,
      exitAnimationDuration,
      data: ship,
      panelClass: 'custom-modalbox'
    });
  }

  openDialogUpdate(enterAnimationDuration: string, exitAnimationDuration: string, ship: any): void {
    this.dialog.open(DialogUpdateComponent, {
      width: '700px',
      height:'500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: ship,
      panelClass: 'custom-modalbox'
    });
  }

  openDialogNew(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogNewComponent, {
      width: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
      panelClass: 'custom-modalbox'
    });
  }

}
