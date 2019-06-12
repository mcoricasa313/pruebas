import { Pipe,PipeTransform, Query } from "@angular/core";
import * as _ from "lodash";


@Pipe({

    name:'platofilter'

})

export class PlatofilterPipe implements PipeTransform{

    transform(array: any, query:string): any{
        if (query)
        {
            return _.filter(array,row => (row.nombre).toLowerCase().indexOf(query.toLowerCase())>-1);
        }
        return array;
        //throw new Error("Method not implemented.");
    }


    
}