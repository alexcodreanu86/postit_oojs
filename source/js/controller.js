var PostIt = function(){
  
  var view = new PostItView();
  var boards = []

  this.initialize = function(){
    var selMel = view.selectorMenu()
    this.checkNewBoard(selMel);
    this.checkLoadSamples(selMel); 
    this.checkLoadBoard(selMel);
  };

  this.checkLoadBoard = function(selMenu){
    selMenu.on('click', '.board_link', function(e){
      e.preventDefault();
      var boardName = $(this).text()
      var clickedBoard = boards.filter(function(board){ return boardName === board.title })[0]
      view.loadBoard(clickedBoard);
    })
  }

  this.checkNewBoard = function(selMenu){
    selMenu.on('click', "#new_board", function(e){
      e.preventDefault();
      createBoard();
      view.updateBoardMenu(boards)
    }); 
  }

  this.checkLoadSamples = function(selMenu){
    selMenu.on('click', "#load_samples", function(e){
      addSampleBoards();
      view.updateBoardMenu(boards)
    })
  }

  var createBoard = function(){
    title = view.getBoardTitle();
    board = new Board(title);
    boards.push(board);
  };

  var populateSampleBoards = function(){
    var sampBrds = boards.filter(function(board){ return(board.title ===  'good_ideas' || board.title === 'bad_ideas')})
    $(sampBrds).each(function(index, board){  
      $(SampleBoards[board.title]).each(function(ind, sticky){
        sampBrds[index].addSticky(new Sticky(sticky.position, sticky.content));
      });
    });
  };

  var addSampleBoards = function(){
    var board1 = new Board('good_ideas');
    var board2 = new Board('bad_ideas');
    boards.push(board1, board2);
    populateSampleBoards();
  };


}