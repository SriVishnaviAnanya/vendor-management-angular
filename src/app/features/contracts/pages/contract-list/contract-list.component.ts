import { Component, OnInit, OnDestroy } from '@angular/core';

import { ContractService } from '../../../../core/services/contract.services';

import { Contract } from '../../../../core/models/contract.model';

@Component({

  selector: 'app-contract-list',

  standalone: false,

  templateUrl: './contract-list.component.html'

})

export class ContractListComponent implements OnInit {

  contracts: Contract[] = [];

  loading =true;

  error = '';

  constructor(private contractService: ContractService) {}

  ngOnInit(): void {

    this.loadContracts();

  }

  ngOnDestroy(): void {

    // Reset state when leaving page

    this.loading = false;

    this.contracts = [];

    this.error = '';

  }

  loadContracts(): void {

    // ✅ RESET STATE EVERY TIME

    this.loading = false;

    this.error = '';

    this.contracts = [];

    this.contractService.getAllContracts().subscribe({

      next: (data) => {

        this.contracts = data;

        this.loading = false;

      },

      error: (err) => {

        console.error(err);

        this.error = 'Failed to load contracts';

        this.loading = false;

      }

    });

  }

}
 