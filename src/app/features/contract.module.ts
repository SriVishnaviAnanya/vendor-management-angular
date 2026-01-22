import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContractRoutingModule } from './contract-routing.module';
import { ContractCreateComponent } from './contracts/pages/contract-create/contract-create.component';
import { ContractListComponent } from './contracts/pages/contract-list/contract-list.component';
@NgModule({
 declarations: [
   ContractCreateComponent
   
 ],
 imports: [
   CommonModule,
   ReactiveFormsModule,
   ContractRoutingModule
 ]
})
export class ContractModule { }