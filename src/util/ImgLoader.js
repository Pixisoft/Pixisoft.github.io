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
import unity from '../images/services/unity.png';

export var GetServiceIcon = function(key) {
  if (key === 'GameDev') return unity;
  if (key === 'WebDev') return unity;
  if (key === 'ToolDev') return unity;
  if (key === 'QATest') return unity;
  return null;
};
