import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ContactInfoComponent } from "./item/contact-info/contact-info.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "itemDetals/:name", component: ItemDetailComponent },
    {path:"contact", component:ContactInfoComponent}
];  

 @NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
