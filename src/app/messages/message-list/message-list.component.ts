import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('1', 'Grades', 'The grades for this assignment have been posted', 'Bro. Jackson'),
    new Message('2', 'Due', 'When is the assignment due?', 'Steve Johnson'),
    new Message('3', 'Congratulations', 'Click this link to win a free car!!', 'John Doe')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}