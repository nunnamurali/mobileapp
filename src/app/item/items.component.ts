import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { RouterExtensions } from "nativescript-angular/router";
import { ItemService } from "./item.service";
import { Page } from "tns-core-modules/ui/page";
import { coursesData, itCourseData,trendyCourseData } from "../data/courses-data";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls:["./items.component.css"] 
})
export class ItemsComponent implements OnInit {

    constructor(private router:RouterExtensions, private itemservice:ItemService, private page:Page) { }
    public education: Array<string> = coursesData;
    public itcourse: Array<string>;
    public trendycourse: Array<string>;

    ngOnInit(): void {

    }
    
    public onSelectedIndexChanged(args: EventData) {
        const picker = <ListPicker>args.object;
        if(picker.selectedIndex === 0){
            this.itcourse = itCourseData["0"].course;
            this.trendycourse = trendyCourseData["0"].course;
        }else if(picker.selectedIndex === 1){
            this.itcourse = itCourseData["1"].course; 
            this.trendycourse = trendyCourseData["1"].course;
        }else if(picker.selectedIndex === 2){
            this.itcourse = itCourseData["2"].course;
            this.trendycourse = trendyCourseData["2"].course;
        }else{
            this.itcourse = itCourseData["3"].course;
            this.trendycourse = trendyCourseData["3"].course;
        }
        console.log(`index: ${picker.selectedIndex}; item" ${this.education[picker.selectedIndex]}`);
    }

    public onNext(){
        let picker = this.page.getViewById<ListPicker>('itcourse');  
        let selectedCourse = `${this.itcourse[picker.selectedIndex]}`.toLowerCase();
        console.log(selectedCourse);
        this.router.navigate(["/itemDetals",selectedCourse]);    
    } 
}
