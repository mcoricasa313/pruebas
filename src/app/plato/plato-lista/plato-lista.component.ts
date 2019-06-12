import { Component, OnInit } from '@angular/core';
import {Plato} from '../../_model/plato';
import { PlatoService } from 'src/app/_service/plato.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-plato-lista',
  templateUrl: './plato-lista.component.html',
  styleUrls: ['./plato-lista.component.css']
})
export class PlatoListaComponent implements OnInit {
  // creamos arreglo de platos
  platos: Plato[];

  constructor(private platoService: PlatoService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.platos = this.platoService.getPlatos();
  }

  crearNuevoPlato(){
    this.router.navigate(['nuevo'],{relativeTo:this.route})
    
  }
  
}
