import { useState, useCallback } from 'react';

import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH, checkCollision } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false
  });

  const rotate = (matrix, dir) => {
    // the rows -> cols (transpose)
    const rotatedTetro = matrix.map((_, idx) => matrix.map(col => col[idx]));
    // reverse each row to get a rotated matrix
    if (dir > 0) return rotatedTetro.map(row => row.reverse()); // clockwise
    return rotatedTetro.reverse(); //counter clockwise
  };

  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (true) {
      if (Math.abs(offset) > clonedPlayer.tetromino[0].length / 2) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
      if (!checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) break;
      clonedPlayer.pos.x = pos + offset;
      if (!checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) break;
      clonedPlayer.pos.x = pos - offset;
      if (!checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) break;
      offset++;
    }
    // while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
    //     // tetromino의 블럭 크기보다 더 많이 움직여야 하면 rotate 하지 않음.
    //     // 코드 나중에 수정해볼 것!
    //   if (Math.abs(offset) > clonedPlayer.tetromino[0].length) {
    //     rotate(clonedPlayer.tetromino, -dir);
    //     clonedPlayer.pos.x = pos;
    //     return;
    //   }
    //   clonedPlayer.pos.x += offset;
    //   offset = -(offset + (offset > 0 ? 1 : -1));
    // }

    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
