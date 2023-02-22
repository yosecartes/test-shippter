import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListShipsService } from '../list-ships.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-new',
  templateUrl: './dialog-new.component.html',
  styleUrls: ['./dialog-new.component.css']
})
export class DialogNewComponent {
  
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogNewComponent>,
    private listShipService: ListShipsService,
    ) { }

  ship: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.ship = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      position: new FormControl(''),
      destination: new FormControl(''),
      direction: new FormControl(''),
    });
  }

  onSubmit(){
    this.listShipService.newShip(this.ship.value).subscribe( res => {
      this.dialog.closeAll()
      location.reload();
    })
    
  }
}
