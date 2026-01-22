import { Component, OnInit } from '@angular/core';

import { ContractService } from '../../../../core/services/contract.services';

@Component({

  selector: 'app-contract-list',

  standalone: false,

  templateUrl: './contract-list.component.html'

})

export class ContractListComponent implements OnInit {

  contracts: any[] = [];

  loading = true;

  constructor(private contractService: ContractService) {}

  ngOnInit() {

    this.loadContracts();

  }

  loadContracts() {

    this.contractService.getAllContracts().subscribe({

      next: (res: any) => {

        // VERY IMPORTANT (backend-safe)

        this.contracts = res.data ?? res;

        this.loading = false;

      },

      error: err => {

        console.error(err);

        this.loading = false;

      }

    });

  }

}
 