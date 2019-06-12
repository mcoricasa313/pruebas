import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Route, Router } from '@angular/router';
import { Plato } from 'src/app/_model/plato';
import { PlatoService } from 'src/app/_service/plato.service';

@Component({
  selector: 'app-plato-detalle',
  templateUrl: './plato-detalle.component.html',
  styleUrls: ['./plato-detalle.component.css']
})
export class PlatoDetalleComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private platoservice:PlatoService,
    private router:Router) { }
  id:number;
  plato:Plato;
  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id= params['id'];
      console.log(this.id);

      this.plato = this.platoservice.getPlatos()[this.id];
      console.log(this.plato);

    });
     
  }
  editarPlato()
  {
    this.router.navigate(['editar'],{relativeTo:this.route})
  }
 

}
