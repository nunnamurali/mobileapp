import { Component, OnInit } from "@angular/core";
import { ActivatedRoute,Params,Router } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html",
    styleUrls:["./item-detail.component.css"] 
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    name:string;
    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private router:Router
    ) { }

    ngOnInit() {
        this.route.params
        .subscribe(
            (params:Params)=>{
            this.name = params['name'];
        });
        this.item = this.itemService.getItem(this.name);
    }
    onTap(){
        this.router.navigate(["/contact"]);
    }
}
