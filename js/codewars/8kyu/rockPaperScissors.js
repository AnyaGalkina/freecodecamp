const rps = (p1, p2) => {
    const s = 'scissors';
    const r = 'rock';
    const p = 'paper';
    const draw = 'Draw!';
    const p1Win = 'Player 1 won!';
    const p2Win = 'Player 2 won!';

    let result;

    if ( p1 === p2 ) {
        result = draw
    }else if(p1 === s) {
        p2 === r ? result = p2Win : result = p1Win
    } else if(p1 === r) {
        p2 === p ? result = p2Win : result = p1Win
    } else {
        p2 === s ? result = p2Win : result = p1Win
    }

    return result;  
};

