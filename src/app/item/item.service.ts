import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Itemsdata } from "../data/items-data";
import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
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
 