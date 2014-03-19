var Board = function(title){
  this.title = title;
  this.stickies = [];

  this.addSticky = function(sticky){
    this.stickies.push(sticky);
  }
}

var Sticky = function(position,content){
  this.position = position;
  this.content = content;

}