export interface Chess {
    chess_blitz:  ChessBlitzClass;
    chess_bullet: ChessBullet;
    chess_daily:  ChessDaily;
    chess_rapid:  ChessBlitzClass;
    lessons:      Lessons;
    puzzle_rush:  PuzzleRush;
    tactics:      Tactics;
}

export interface ChessBlitzClass {
    best:   ChessBlitzBest;
    last:   Last;
    record: ChessBlitzRecord;
}

export interface ChessBlitzBest {
    date:   number;
    game:   string;
    rating: number;
}

export interface Last {
    date:   number;
    rating: number;
    rd:     number;
}

export interface ChessBlitzRecord {
    draw: number;
    loss: number;
    win:  number;
}

export interface ChessBullet {
    last:   Last;
    record: ChessBlitzRecord;
}

export interface ChessDaily {
    best:   ChessBlitzBest;
    last:   Last;
    record: ChessDailyRecord;
}

export interface ChessDailyRecord {
    draw:            number;
    loss:            number;
    time_per_move:   number;
    timeout_percent: number;
    win:             number;
}

export interface Lessons {
}

export interface PuzzleRush {
    best: PuzzleRushBest;
}

export interface PuzzleRushBest {
    score:          number;
    total_attempts: number;
}

export interface Tactics {
    highest: Est;
    lowest:  Est;
}

export interface Est {
    date:   number;
    rating: number;
}
