import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model'

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document('1', 'CIT 260 - Object Oriented Programing', 'Object Oriented Programing', 'https://byui.instructure.com/', null!),
    new Document('2', 'CIT 366 - Web Stack Development', 'Web Stack Development', 'https://byui.instructure.com/', null!),
    new Document('3', 'CIT 425 - Warehousing', 'Warehousing', 'https://byui.instructure.com/', null!),
    new Document('4', 'CIT 460 - Enterprise Development', 'Enterprise Development', 'https://byui.instructure.com/', null!),
    new Document('5', 'CIT 495 - Senior Project', 'Senior Project', 'https://byui.instructure.com/', null!)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

}
