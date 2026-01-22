import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
 {
   path: 'contracts',
   loadChildren: () =>
     import('./features/contract.module')
       .then(m => m.ContractModule)
 },
 { path: '', redirectTo: 'contracts', pathMatch: 'full' }
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule {}