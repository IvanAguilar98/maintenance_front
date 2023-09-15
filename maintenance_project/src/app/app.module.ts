import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { CardsMenuComponent } from './components/cards-menu/cards-menu.component';
import { FormDateMemberComponent } from './components/form-date-member/form-date-member.component';
import { FormNewMemberComponent } from './components/form-new-member/form-new-member.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CardsMenuComponent,
    FormDateMemberComponent,
    FormNewMemberComponent,
    FormDataComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
     CarouselModule,
     TagModule,
     ButtonModule,
     TableModule,
     InputTextareaModule,
     InputTextModule,
     FormsModule,
     ReactiveFormsModule,
     TooltipModule,
     BrowserAnimationsModule,
     DropdownModule,
     TabViewModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
