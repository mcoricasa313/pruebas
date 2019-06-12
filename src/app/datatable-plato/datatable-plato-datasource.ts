import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource, transformPanel } from '@angular/material';
import { map, filter } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { PlatoService} from '../_service/plato.service';
import { Plato } from '../_model/plato';
import { DatatablePlatoComponent } from './datatable-plato.component';
import { PlatofilterPipe } from '../_pipe/plato-filter.pipe';

// TODO: Replace this with your own data model type
export interface DatatablePlatoItem {
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DatatablePlatoItem[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Lithium'},
  {id: 4, name: 'Beryllium'},
  {id: 5, name: 'Boron'},
  {id: 6, name: 'Carbon'},
  {id: 7, name: 'Nitrogen'},
  {id: 8, name: 'Oxygen'},
  {id: 9, name: 'Fluorine'},
  {id: 10, name: 'Neon'},
  {id: 11, name: 'Sodium'},
  {id: 12, name: 'Magnesium'},
  {id: 13, name: 'Aluminum'},
  {id: 14, name: 'Silicon'},
  {id: 15, name: 'Phosphorus'},
  {id: 16, name: 'Sulfur'},
  {id: 17, name: 'Chlorine'},
  {id: 18, name: 'Argon'},
  {id: 19, name: 'Potassium'},
  {id: 20, name: 'Calcium'},
];

/**
 * Data source for the DatatablePlato view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DatatablePlatoDataSource extends DataSource<Plato> {

  data: Plato[] = this.listaPlatos;
  paginator: MatPaginator;
  sort: MatSort;
  filter: Plato;
  pipe : PlatofilterPipe;
  constructor(private listaPlatos:Plato[]) {

    super();
  }


  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Plato[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
      ];
      console.log("pasar por observable");

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));

    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Plato[]) {
    console.log("pasar por getPagedData");

    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }
  

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Plato[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }
    console.log("pasar por getSortedData");

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case '_id': return compare(a._id, b._id, isAsc);
        case 'nombre': return compare(+a.nombre, +b.nombre, isAsc);
        case 'precio': return compare(+a.precio, +b.precio, isAsc);
        case 'urlImagen': return compare(+a.urlImagen, +b.urlImagen, isAsc);

        default: return 0;
      }
    });
  }

  private getFilter(data: Plato[],filterValue:string)
  {
    //data.filter. = filterValue.trim().toLowerCase();
    
    console.log("data que esta filtrando x"+data);
    //transform(array: any[],)
    console.log("query");

    return this.pipe.transform(data,filterValue);

  }

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
