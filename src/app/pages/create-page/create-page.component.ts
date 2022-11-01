import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {LocalStorageService} from "../../services/local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  public quillConfigImg = {
    toolbar: [
      // ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      // ['blockquote', 'code-block'],
      //
      // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      // [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      // [{ 'direction': 'rtl' }],                         // text direction
      //
      // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      //
      // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      // [{ 'font': [] }],
      // [{ 'align': [] }],

      // ['clean'],                                         // remove formatting button

      ['image']                         // link and image, video
    ]
  };

  public form!: FormGroup;

  constructor(
    private fb:FormBuilder,
    private localStorageService:LocalStorageService,
    private rout: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      author: this.fb.group({
        account: ['', Validators.required],
        fio: ['', Validators.required],
        post:['', Validators.required],
      }),
      docCode:['', Validators.required],
      docName:['', Validators.required],
      address:['', Validators.required],
      docType:['', Validators.required],

    })
  }

  submit():void{
    console.log(this.form.value);
    if(this.form.invalid) return;
    this.localStorageService.addLs(this.form.value);
    this.form.reset();
    this.rout.navigate(['/']);
  }

}
