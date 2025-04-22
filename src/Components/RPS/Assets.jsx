import icon_img from './Assets/Icons/ico.png';
import scissor_img from './Assets/scissors.png';
import rock_img from './Assets/stone.png';
import paper_img from './Assets/paper.png';
import win from './Assets/Trophies/Winner.png';
import draw from './Assets/Trophies/Draw.png';
import loose from './Assets/Trophies/Loose.png';

export const assets = {  
  scissor_img: {
    asset_name: "scissors",
    asset: scissor_img,
  },
  rock_img: {
    asset_name: "rock",
    asset: rock_img,
  },
  paper_img: {
    asset_name: "paper",
    asset: paper_img,
  }
};

export const raw_assets = {
  rock:rock_img,
  paper:paper_img,
  scissor:scissor_img
}

export const icons = {
  icon_img
}

export const over = {  
  win, draw, loose
};

