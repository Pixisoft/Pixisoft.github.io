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
 * Thanks for this fascinating library, React.js. With this such a famous tool,
 * it's a shame to see that you cannot load image dynamically through path as
 * a string.
 *
 * Hence I have created this file to help us load all images at a place, so it
 * can be used in other React components. With that being said, this class is
 * totally unnecessary if React.js has already correctly implemented the dynamic
 * loading for media files.
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
