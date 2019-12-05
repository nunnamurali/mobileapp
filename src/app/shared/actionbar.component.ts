import { Component, OnInit } from "@angular/core";
import { Page} from "tns-core-modules/ui/page/page";
import { isAndroid } from 'tns-core-modules/platform';
import { RouterExtensions } from "nativescript-angular/router";

declare var android:any;
@Component({
    selector: "ns-actionbar",
    templateUrl: "./actionbar.component.html",
    styleUrls:["./actionbar.component.css"] 
})
export class ActionbarComponent implements OnInit {

    constructor(private page:Page,private router:RouterExtensions) { }
   

    ngOnInit(): void {}

    get canGoBack(){
        return this.router.canGoBack();
    }

    onGoBack(){
        this.router.backToPreviousPage();
    }

    onLoadedActionBar(){
        if(isAndroid){
            const androidToolbar = this.page.actionBar.nativeView;
            const backButton = androidToolbar.getNavigationIcon();
            if(backButton){
                backButton.setColorFilter(
                    android.graphics.Color.parseColor('#171717'),
                    (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
                )
            }

        }
    }
    
  
}
