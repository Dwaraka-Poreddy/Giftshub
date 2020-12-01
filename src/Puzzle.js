import React, { useState } from "react";
import "./Puzzle.css";

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
const NUM_ROWS = 4;
const NUM_COLS = 4;
const NUM_TILES = NUM_ROWS * NUM_COLS;
const EMPTY_INDEX = NUM_TILES - 1;
const SHUFFLE_MOVES_RANGE = [60, 80];
const MOVE_DIRECTIONS = ["up", "down", "left", "right"];

function rand(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

class GameState {
  static getNewBoard() {
    return Array(NUM_TILES)
      .fill(0)
      .map((x, index) => [Math.floor(index / NUM_ROWS), index % NUM_COLS]);
  }

  static getInstance() {
    if (!GameState.instance) GameState.instance = new GameState();
    return GameState.instance;
  }

  constructor() {
    this.startNewGame();
  }

  isSolved() {
    for (let i = 0; i < NUM_TILES; i++) {
      if (window.CP.shouldStopExecution(0)) break;
      if (
        this.board[i][0] !== GameState.solvedBoard[i][0] ||
        this.board[i][1] !== GameState.solvedBoard[i][1]
      )
        return false;
    }
    window.CP.exitedLoop(0);
    return true;
  }

  startNewGame() {
    this.moves = 0;
    this.board = GameState.getNewBoard();
    this.stack = [];
    this.shuffle();
  }

  shuffle() {
    this.shuffling = true;
    let shuffleMoves = rand(...SHUFFLE_MOVES_RANGE);
    while (shuffleMoves-- > 0) {
      if (window.CP.shouldStopExecution(1)) break;
      this.moveInDirection(MOVE_DIRECTIONS[rand(0, 3)]);
    }
    window.CP.exitedLoop(1);
    this.shuffling = false;
  }

  canMoveTile(index) {
    if (index < 0 || index >= NUM_TILES) return false;

    const tilePos = this.board[index];
    const emptyPos = this.board[EMPTY_INDEX];
    if (tilePos[0] === emptyPos[0])
      return Math.abs(tilePos[1] - emptyPos[1]) === 1;
    else if (tilePos[1] === emptyPos[1])
      return Math.abs(tilePos[0] - emptyPos[0]) === 1;
    else return false;
  }

  moveTile(index) {
    if (!this.shuffling && this.isSolved()) return false;
    if (!this.canMoveTile(index)) return false;

    const emptyPosition = [...this.board[EMPTY_INDEX]];
    const tilePosition = [...this.board[index]];

    let boardAfterMove = [...this.board];
    boardAfterMove[EMPTY_INDEX] = tilePosition;
    boardAfterMove[index] = emptyPosition;

    if (!this.shuffling) this.stack.push(this.board);
    this.board = boardAfterMove;
    if (!this.shuffling) this.moves += 1;

    return true;
  }

  undo() {
    if (this.stack.length === 0) return false;
    this.board = this.stack.pop();
    this.moves -= 1;
  }

  moveInDirection(dir) {
    const epos = this.board[EMPTY_INDEX];
    const posToMove =
      dir === "up"
        ? [epos[0] + 1, epos[1]]
        : dir === "down"
        ? [epos[0] - 1, epos[1]]
        : dir === "left"
        ? [epos[0], epos[1] + 1]
        : dir === "right"
        ? [epos[0], epos[1] - 1]
        : epos;
    let tileToMove = EMPTY_INDEX;
    for (let i = 0; i < NUM_TILES; i++) {
      if (window.CP.shouldStopExecution(2)) break;
      if (
        this.board[i][0] === posToMove[0] &&
        this.board[i][1] === posToMove[1]
      ) {
        tileToMove = i;
        break;
      }
    }
    window.CP.exitedLoop(2);
    this.moveTile(tileToMove);
  }

  getState() {
    const self = this;
    return {
      board: self.board,
      moves: self.moves,
      solved: self.isSolved(),
    };
  }
}
_defineProperty(GameState, "solvedBoard", GameState.getNewBoard());
_defineProperty(GameState, "instance", null);

function useGameState() {
  const gameState = GameState.getInstance();
  const [state, setState] = React.useState(gameState.getState());

  function newGame() {
    gameState.startNewGame();
    setState(gameState.getState());
  }

  function undo() {
    gameState.undo();
    setState(gameState.getState());
  }

  function move(index) {
    return function () {
      gameState.moveTile(index);
      setState(gameState.getState());
    };
  }

  React.useEffect(() => {
    document.addEventListener("keyup", function listeners(event) {
      if (event.keyCode === 37) gameState.moveInDirection("left");
      else if (event.keyCode === 38) gameState.moveInDirection("up");
      else if (event.keyCode === 39) gameState.moveInDirection("right");
      else if (event.keyCode === 40) gameState.moveInDirection("down");

      setState(gameState.getState());
    });

    return () => console.log("srinivas error");
  }, [gameState]);

  return [state.board, state.moves, state.solved, newGame, undo, move];
}

function Tile({ index, pos, onClick, bgimg }) {
  const top = pos[0] * 100 + 5;
  const left = pos[1] * 100 + 5;
  const bgLeft = (index % 4) * 100 + 5;
  const bgTop = Math.floor(index / 4) * 100 + 5;

  return React.createElement("div", {
    className: "tile",
    onClick: onClick,
    style: {
      backgroundImage: "url(" + bgimg + ")",
      top,
      left,
      backgroundPosition: `-${bgLeft}px -${bgTop}px`,
    },
  });
}

function Puzzle({ bgimg }) {
  const [board, moves, solved, newGame, undo, move] = useGameState();

  return React.createElement(
    "div",
    { className: "game-container" },
    React.createElement(
      "div",
      { className: "game-header" },
      React.createElement("div", { className: "moves" }, moves),

      React.createElement(
        "button",
        { className: "big-button", onClick: undo },
        " UNDO "
      )
    ),

    React.createElement(
      "div",
      { className: "board" },

      board.slice(0, -1).map((pos, index) =>
        React.createElement(Tile, {
          index: index,
          pos: pos,
          bgimg: bgimg,
          onClick: move(index),
        })
      ),

      solved &&
        React.createElement(
          "div",
          { className: "overlay" },
          React.createElement(
            "button",
            { className: "big-button", onClick: newGame },
            "PLAY AGAIN"
          )
        )
    )
  );
}

export default Puzzle;
