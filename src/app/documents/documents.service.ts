import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
    providedIn: 'root'
})
export class DocumentsService {
    documentSelectedEvent = new EventEmitter<Document>();
    documents: Document[];

    constructor() {
        this.documents = MOCKDOCUMENTS;
    }

    getDocuments(): Document[] {
        return this.documents.slice();
    }

    getDocument(id: String): Document | null {
        for (const document of this.documents) {
          if (document.id === id) {
            return document;
          }
        }
        return null;
      }
}