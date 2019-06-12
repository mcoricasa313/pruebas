import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatoComponent} from 'src/app/plato/plato.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';

const routes: Routes = [
  {path:'plato',component:PlatoComponent,children:[
    {path:'',component:PlatoInicioComponent},
    {path:'nuevo',component:PlatoEdicionComponent},
    {path:':id',component:PlatoDetalleComponent},
    {path:':id/editar',component:PlatoEdicionComponent}
  ]},
  {path:'consulta',component:ConsultaComponent},
  {path:'consumo',component:ConsumoComponent},
  {path:'',redirectTo:'plato',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
