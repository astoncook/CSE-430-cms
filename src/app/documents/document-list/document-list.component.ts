import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  documents: Document[] = [];

  constructor(private documentService: DocumentsService) {}

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
    this.subscription = this.documentService.documentListChangedEvent.subscribe((documents: Document[]) => {
        this.documents = documents;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
