import React  from 'react'
import Square from './Square'

class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }
    
    renderSquare(i) {
      return (
        <Square 
          value={this.props.squares[i]} 
          onClick={() => this.props.onClick(i)}
        />
        );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            <span className="num-row">1</span>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
          <span className="num-row">2</span>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
          <span className="num-row">3</span>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
          <span className="num-col">A</span>
          <span className="num-col">B</span>
          <span className="num-col">C</span>
          </div>
        </div>
      );
    }
  }
    
  export default Board