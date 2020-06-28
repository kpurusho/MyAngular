import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharToSpacePipe } from './CharToSpace.pipe';

@NgModule({
  declarations: [
    CharToSpacePipe,
   ],
  imports: [
    CommonModule
  ],
  exports: [
    CharToSpacePipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
