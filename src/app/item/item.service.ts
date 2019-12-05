import { Injectable } from "@angular/core";
import { Item } from "./item";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";
import { Itemsdata } from "../data/items-data";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private _url = "/app/data/courses.json";
    constructor(private http:HttpClient){

    }
    private items = Itemsdata;

    getItems() {
        return this.items;
    }

    getItem(name: string): Item {
        return this.items.filter((item) => item.name === name)[0];
    }
}
 