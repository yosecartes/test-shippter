import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListShipsService } from '../list-ships/list-ships.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent implements OnInit {
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogUpdateComponent>,
    private listShipService: ListShipsService,
    @Inject(MAT_DIALOG_DATA)
    private data: any
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

    this.setData()
  }

  setData(){
    this.ship.setValue(this.data)
  }

  
  onSubmit(){
    this.listShipService.updateShip(this.ship.value).subscribe( res => {
      this.dialog.closeAll()
    })
    
  }
}
