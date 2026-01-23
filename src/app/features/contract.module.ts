import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContractRoutingModule } from './contract-routing.module';
import { ContractCreateComponent } from './contracts/pages/contract-create/contract-create.component';
import { ContractListComponent } from './contracts/pages/contract-list/contract-list.component';
import { ContractsComponent } from './contracts/contracts.component';
@NgModule({
 declarations: [
   ContractCreateComponent,
    ContractListComponent,
    ContractsComponent  
 ],
 imports: [
   CommonModule,
   ReactiveFormsModule,
   ContractRoutingModule
 ],
 exports: [
   ContractCreateComponent,
   ContractListComponent
 ]
})
export class ContractModule { }