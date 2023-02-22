import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListShipsService } from '../list-ships.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent {
  constructor(
    public dialog: MatDialog,
    private listShipService: ListShipsService,
    @Inject(MAT_DIALOG_DATA)
    private data: any,
    public dialogRef: MatDialogRef<DialogDeleteComponent>
    ) { }

    deleteShip(){
      console.log(this.data)
      this.listShipService.deleteShip(this.data.id).subscribe(res=>{
        console.log(res)
        this.dialog.closeAll()
      })
    }
    
    closeDialog(){
      this.dialog.closeAll();
      location.reload();
    }
}


