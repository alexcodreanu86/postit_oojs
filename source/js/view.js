 zIndex = 2;
var PostItView = function(){
  

  this.selectorMenu = function(){
    return $("#board_selector");
  };

  this.getBoardWindow = function(){
    return $('#main-window');
  };

  this.getBoardTitle = function(){
    return prompt("Please give your board a title:");
  };

  this.updateBoardMenu = function(boards){
    $("#board_list").empty();
    $(boards).each(function(index, board){
      $("#board_list").append("<li><a href='#' class='board_link'>" + board.title + "</a><span> X </span></li>")
    })
  };

  this.loadBoard = function(board){
    $('#main-window').html("<h1 id='title'>"+ board.title + "</h1>")
    $(board.stickies).each(function(index, sticky){
      appendPostIt(index, sticky);
    });
  }

  appendPostIt = function(index, sticky){
    $('#main-window').append( '<div id="'+ index +'" class="post-it">' + 
    '<div class="header"><span class="close">X</span></div>' + 
    '<div class="content" contenteditable="true">' + sticky.content +  '</div></div> ')
    $('#' + index).css({
      'top': sticky.position.top + 'px', 'left': sticky.position.left + 'px', display: 'block', 'z-index': zIndex++
    }).draggable({ handle: ".header" });
  }

  this.displaySticky = function(index, sticky){
    $('#main-window').append( '<div id="'+ index +'" class="post-it">' + 
    '<div class="header"><span class="close">X</span></div>' + 
    '<div class="content" contenteditable="true">' + sticky.content +  '</div></div> ')
    $('#' + index).css({
      'top': sticky.position.top + 'px', 'left': sticky.position.left + 'px', display: 'block', 'z-index': zIndex++
    }).draggable({ handle: ".header" });
  }
}