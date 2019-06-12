import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { PlatoComponent } from './plato/plato.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatCheckboxModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConsultaComponent } from './consulta/consulta.component';
import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';
import { PlatoListaComponent } from './plato/plato-lista/plato-lista.component';
import { PlatoService } from './_service/plato.service';
import { DatatablePlatoComponent } from './datatable-plato/datatable-plato.component';
import { PlatofilterPipe } from './_pipe/plato-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConsumoComponent,
    PlatoComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ConsultaComponent,
    PlatoDetalleComponent,
    PlatoEdicionComponent,
    PlatoInicioComponent,
    PlatoListaComponent,
    DatatablePlatoComponent,
    PlatofilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [PlatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
