import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute,Params,Router } from "@angular/router";
import * as utilsModule from 'tns-core-modules/utils/utils'
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { ApiService } from "~/app/services/api-service";
import { HttpClient } from "@angular/common/http";


@Component({
    selector: "ns-details",
    templateUrl: "./contact-info.component.html",
    styleUrls:["./contact-info.component.css"] 
})
export class ContactInfoComponent implements OnInit {
    form:FormGroup;
    namecontrolIsValid = true;
    emailcontrolIsValid = true;
    qualificationcontrolIsValid = true;
    contactcontrolIsValid = true;
    @ViewChild('nameEl',{static:false}) nameEl:ElementRef<TextField>;
    @ViewChild('mailEl',{static:false}) mailEl:ElementRef<TextField>;
    @ViewChild('qualificationEl',{static:false}) qualificationEl:ElementRef<TextField>;
    @ViewChild('contactEl',{static:false}) contactEl:ElementRef<TextField>;

    constructor(
        private route: ActivatedRoute,
        private router:Router,
        private apiservice:ApiService,
        private http:HttpClient
    ) { }

    ngOnInit() {
        this.form= new FormGroup({
            name: new FormControl(null,{
                updateOn:'blur',validators:[
                    Validators.required
                ]
            }),
            email: new FormControl(null,{
                updateOn:'change',validators:[
                    Validators.required,Validators.email
                ]
            }),
            qualification: new FormControl(null,{
                updateOn:'blur',validators:[
                    Validators.required
                ]
            }),
            contactno: new FormControl(null,{
                updateOn:'blur',validators:[
                    Validators.required,Validators.minLength(10)
                ]
            }),

        });

        this.form.get('name').statusChanges.subscribe(status=>{
            this.namecontrolIsValid = status === 'VALID';
        });
        this.form.get('email').statusChanges.subscribe(status=>{
            this.emailcontrolIsValid = status === 'VALID';
        });
        this.form.get('qualification').statusChanges.subscribe(status=>{
            this.qualificationcontrolIsValid = status === 'VALID';
        });
        this.form.get('contactno').statusChanges.subscribe(status=>{
            this.contactcontrolIsValid = status === 'VALID';
        });
        
    }
    onSubmit(){
        this.nameEl.nativeElement.focus();
        this.qualificationEl.nativeElement.focus();
        this.mailEl.nativeElement.focus();
        this.contactEl.nativeElement.focus();
        this.nameEl.nativeElement.dismissSoftInput();
        if(!this.form.valid){
            return;
        }
        
        const name = this.form.get('name').value;
        const email = this.form.get('email').value;
        const qualification = this.form.get('qualification').value;
        const contactno = this.form.get('contactno').value;

        let user = {
            name:name,
            email:email,
            qualification:qualification,
            phone_number:contactno
        }
        this.http.post("https://evening-shore-29688.herokuapp.com/api/contact",user).subscribe(
            data =>{
                let res:any= data;
                console.log(user);
            },
            err=>{
                console.log(err)
            }
        )
        utilsModule.openUrl('http://bonamiestech.com/');  
        this.form.reset();
    }

    onDone(){
        this.nameEl.nativeElement.focus();
        this.qualificationEl.nativeElement.focus();
        this.mailEl.nativeElement.focus();
        this.contactEl.nativeElement.focus();
        this.nameEl.nativeElement.dismissSoftInput();
    }

}
