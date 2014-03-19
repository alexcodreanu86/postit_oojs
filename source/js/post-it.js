var boards = []
var currentBoard = 0
var index = 2;

var Board = function(title) {
  this.title = title;
  var stickys = [];
  // Your board related code goes here

  // Use $elem to access the DOM element for this board
  // var $elem = $( selector );
  this.addSticky = function(sticky){
    stickys.push(sticky);
  }
  this.getStickys = function(){
    return stickys
  }

  function initialize() {

  };

  initialize();
};

var PostIt = function(content, position, e) {
   var content = content;
   var $post_it = $("#master").clone();
   var position = position;

   // $('#post' + postIt.id).css({
   //    'top': postIt.position.y + 'px', 'left':postIt.position.x + 'px', display: 'block', 'z-index': ++index
   //  }).draggable({ handle: ".header" });

   //  console.log(postIt.position.y + 'px')
   //  console.log(postIt.position.x + 'px')

    $(function() {
      $post_it.resizable();
    });

    $post_it.css({
      'top': position.top + 'px', 'left': position.left + 'px', display: 'block', 'z-index': ++index
    }).draggable({ handle: ".header" });

    $post_it.on("click", function(e){
      e.stopPropagation();
    });

    $post_it.on("mousedown", function(e){
      $(this).css({'z-index': ++index});
    });

    $("#main-window").append($post_it);

    $post_it.on("click", "span", function(e){
      $(this).parent().parent().remove();
    })
  // Your post-it related code goes here
};

$(function() {
  // This code will run when the DOM has finished loading
  $("#new_board").on("click", function(){
    var title = prompt("Enter a title for your new board: ")
    boards.push(new Board(title))
    refreshBoards();
  });

  var refreshBoards = function(){
    $("#board_list").empty();
    for(i = 0; i < boards.length; i++) {
      $("#board_list").append("<li><a href='#' id='" + i + "'>" + boards[i].title + "</a><span> X </span></li>")
    }
  };

  $("#board_list").on("click", "a", function(e){
    e.preventDefault();
    currentBoard = $(this).attr("id");
    $('#title').html(boards[currentBoard].title);
  });


  $("body").on("click","#main-window",function(e){
    var y = e.pageY
    var x = e.pageX

    postIt = new PostIt("New post it.", {left: x, top: y}, 1);
    boards[currentBoard].addSticky(postIt)
    console.log(boards[currentBoard].getStickys())
  });
});

// $(document).ready(function(){
//   var index = 2;

//   var PostIt = function(e) {
//     var $post_it = $("#master").clone();

//     $(function() {
//       $post_it.resizable();
//     });

//     $post_it.css({
//       'top': e.pageY + 'px', 'left': e.pageX + 'px', display: 'block', 'z-index': ++index
//     }).draggable({ handle: ".header" });

//     $post_it.on("click", function(e){
//       e.stopPropagation();
//     });

//     $post_it.on("mousedown", function(e){
//       $(this).css({'z-index': ++index});
//     });

//     $("#board").append($post_it);

//     $post_it.on("click", "span", function(e){
//       $(this).parent().parent().remove();
//     })
//   };

//   $("#board").on("click", function(e){
//     if (e.target.className != "content" &&
//       e.target.className != "header" &&
//       e.target.className != "post-it"){
//       myPostIt = new PostIt(e)
//     }
//   });
// })
