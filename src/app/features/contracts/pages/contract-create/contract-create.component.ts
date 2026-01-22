import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContractService } from '../../../../core/services/contract.services';

import { Router } from '@angular/router';

@Component({

  selector: 'app-contract-create',

  standalone: false,

  templateUrl: './contract-create.component.html'

})

export class ContractCreateComponent {

  contractForm: FormGroup;

  constructor(

    private fb: FormBuilder,

    private contractService: ContractService,

    private router: Router

  ) {

    this.contractForm = this.fb.group({

      contractNumber: ['', Validators.required],

      title: ['', Validators.required],

      description: [''],

      startDate: ['', Validators.required],

      endDate: ['', Validators.required]

    });

  }

  submit() {

    if (this.contractForm.invalid) return;

    this.contractService.createContract(this.contractForm.value)

      .subscribe({

        next: () => {

          alert('Contract created');

          this.router.navigate(['/contracts']);

        },

        error: err => console.error(err)

      });

  }

}
 