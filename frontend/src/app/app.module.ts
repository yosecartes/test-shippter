import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ListShipsComponent } from './list-ships/list-ships.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { DialogUpdateComponent } from './dialog-update/dialog-update.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogNewComponent } from './dialog-new/dialog-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ListShipsComponent,
    DialogDeleteComponent,
    DialogUpdateComponent,
    DialogNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
