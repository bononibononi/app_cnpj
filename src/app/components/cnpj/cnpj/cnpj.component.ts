import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CnpjService } from './cnpj.service';

@Component({
  selector: 'app-cnpj',
  templateUrl: './cnpj.component.html',
  styleUrls: ['./cnpj.component.css']
})
export class CnpjComponent implements OnInit {

   buscacnpj: string = '';
   buscar: boolean = false;

  constructor(
    private cnpjService: CnpjService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

}
