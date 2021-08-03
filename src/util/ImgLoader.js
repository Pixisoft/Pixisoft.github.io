/**
 * $File: ImgLoader.js $
 * $Date: 2021-08-03 22:33:30 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */

/*------------------------------------------------------------------------------
 * Dear Facebook and React Developers,
 *
 *
 *
 * Best,
 * Jen-Chieh Shen
 * Last Edit: 2021-08-03
 ------------------------------------------------------------------------------*/
import gamedev from '../images/services/gamedev.png';
import webdev from '../images/services/webdev.png';
import tooldev from '../images/services/tooldev.png';
import qatest from '../images/services/qatest.png';

export var GetServiceIcon = function(key) {
  if (key === 'GameDev') return gamedev;
  if (key === 'WebDev') return webdev;
  if (key === 'ToolDev') return tooldev;
  if (key === 'QATest') return qatest;
  return null;
};
