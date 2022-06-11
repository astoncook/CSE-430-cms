import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DocumentsService } from '../documents.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {

  orignalDocument: Document;
  document: Document;
  editMode: boolean = false;

  constructor(
    private documentsService: DocumentsService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.params.subscribe (
      (params: Params) => {
        let id = +params['id'];
        if (id == undefined || id == null) {              
          this.editMode = false
          return
        }
        this.orignalDocument = this.documentsService.getDocument(id.toString())

        if (this.orignalDocument == undefined || this.orignalDocument == null) {              
          return
        }
        this.editMode = true
        this.document = JSON.parse(JSON.stringify(this.orignalDocument))
    });
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onSubmit(form: NgForm) {
    let value = form.value
    let newDocument = new Document(value['id'], value['name'], value['description'], value['url'], value['children'])
    if (this.editMode == true) {
      this.documentsService.updateDocument(this.orignalDocument, newDocument)
    }

    else {
      console.log(newDocument)
      this.documentsService.addDocument(newDocument)
    }
    this.onCancel();
  }
}