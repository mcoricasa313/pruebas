import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { DatatablePlatoDataSource, DatatablePlatoItem } from './datatable-plato-datasource';
import { PlatoService } from '../_service/plato.service';
import { Plato } from '../_model/plato';
import { ContentObserver } from '@angular/cdk/observers';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-datatable-plato',
  templateUrl: './datatable-plato.component.html',
  styleUrls: ['./datatable-plato.component.css']
})
export class DatatablePlatoComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator,null) paginator: MatPaginator;
  @ViewChild(MatSort,null) sort: MatSort;
  @ViewChild(MatTable,null) table: MatTable<Plato>;
  dataSource: DatatablePlatoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id', 'nombre'];
  filter: string;
  objeto:DatatablePlatoDataSource;

  constructor(private listaPlatos:PlatoService){};

  ngOnInit() {
    this.dataSource = new DatatablePlatoDataSource(this.listaPlatos.getPlatos());
    console.log("entro a ngOnInit");

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    console.log("ngAfterViewInit");
  }

  applyFilter(filterValue: string) {
    console.log("filtros "+filterValue);
    this.dataSource.pipe.transform(this.listaPlatos.getPlatos(),filterValue);
    
    //this.objeto.getFilter(this.listaPlatos.getPlatos(),filterValue);
    //this.dataSource.filter = new DatatablePlatoDataSource(this.listaPlatos.getPlatos()).filter;
    //this.data.filter = filterValue.trim().toLowerCase();


  }
  
  

}
