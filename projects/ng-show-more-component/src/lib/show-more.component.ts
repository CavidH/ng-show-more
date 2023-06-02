import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {

  @Input() text: string="Please provide text"
  @Input() textLength!: number;
  @Input() linkColor!:string;
  @Input() more:string=" ...more";
  @Input() less:string=" ...less";
  @Input() textClass:string="txtContent";
  public showMoreText:string="";
  public hide:boolean = true;
  public showOnlyText:boolean = false;
  constructor() { }

  ngOnInit() {
    if(this.text && typeof this.text === 'string') {
      this.showMoreText = this.text;
      this.linkColor = this.linkColor || "#0000ff";
      this.textLength = this.getLength();
      (this.text.length <= 20 || this.text.length <= this.textLength) ? this.showOnlyText = true : this.toggleLength();
    } else {
      this.showOnlyText = true;
    }
  }
  toggleLength() {
    if(this.text.length > this.textLength && this.hide){
      this.hide=false;
      this.text =this.text.substring(0, this.textLength);
    } else {
      this.hide=true;
      this.text=this.showMoreText;
    }
  }
  getLength() {
    if(this.textLength > 0) return this.textLength;
    return 20;
  }
}
