import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractListComponent } from './contracts/pages/contract-list/contract-list.component';
import { ContractCreateComponent } from './contracts/pages/contract-create/contract-create.component';
const routes: Routes = [
 { path: '', component: ContractListComponent },
 { path: 'create', component: ContractCreateComponent }
];
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class ContractRoutingModule {}