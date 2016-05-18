import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'voting',
  template: `<div class="voteDiv">
  <i class="glyphicon glyphicon-menu-up"
    [class.voted]="myVote == 1"
    (click)="voteUp()">
  </i>
  <span>{{ voteCount + myVote }}</span>
  <i class="glyphicon glyphicon-menu-down"
    [class.voted]="myVote == -1"
    (click)="voteDown()">
  </i></div>
  `,
  styles: [`
  .voteDiv { width: 20px; margin-left: 30px;, text-align: center; }
  .glyphicon { cursor: pointer; }
  i.voted { color: orange; }
  `]
})

export class VoteComponent {
  @Input() voteCount: number = 0;
  @Input() myVote: number = 0;
  
  @Output() vote = new EventEmitter;
  
  voteUp() {
    if (this.myVote == 1) {
      return;
    }
    this.myVote++;
    this.vote.emit({ myVote: this.myVote });   
  }
  
  voteDown() {
    if (this.myVote == -1) {
      return;
    }
    this.myVote--;
    this.vote.emit({ myVote: this.myVote });
  }
}