import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage.service";
import {switchMap} from "rxjs";
import {IUsers} from "../../settings/iusers";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.scss']
})
export class UpdatePageComponent implements OnInit {
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

  public userId!: any;
  public userData!: IUsers[];
  public form!: FormGroup;
  public docCode!:string;
  public docName!:string;
  public address!:string;
  public docType!:string;
  public account!:string;
  public fio!:string;
  public post!:string;

  constructor(
    private routerActive: ActivatedRoute,
    private router: Router,
    private localSorageServ: LocalStorageService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.routerActive.params.subscribe(res => {
      this.userId = res;
    });
    this.userData = this.localSorageServ.getLs('users');
    this.userData = this.userData.filter(item => item.id == this.userId.id);

    this.userData.forEach(item => {
      this.fio = item.author.fio;
      this.post = item.author.post;
      this.account = item.author.account;
      this.docCode = item.docCode;
      this.docName = item.docName;
      this.address = item.address;
      this.docType = item.docType;
    });

    this.form = this.fb.group({
      author: this.fb.group({
        account: [this.account, Validators.required],
        fio: [this.fio, Validators.required],
        post: [this.post, Validators.required],
      }),
      docCode: [this.docCode, Validators.required],
      docName: [this.docName, Validators.required],
      address: [this.address, Validators.required],
      docType: [this.docType, Validators.required],
    });

  }

  submit() {
    if(this.form.invalid) return;
    const obj: IUsers = {
      id: this.userId.id,
      author: this.form.value.author,
      docCode: this.form.value.docCode,
      docDate: new Date().toLocaleDateString(),
      docName: this.form.value.docName,
      docType: this.form.value.docType,
      address: this.form.value.address,
      isSpecial: false,
    }
    this.localSorageServ.editLS(this.userId.id, obj);
    this.router.navigate(['/']);
  }
}
