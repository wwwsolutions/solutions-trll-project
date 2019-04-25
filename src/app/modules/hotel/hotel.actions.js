/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import MSGS from './hotel.messages.model';

// ACTIONS
export function hotelMsg(value){
  return {
    type: MSGS.HOTEL_MESSAGE,
    value
  };
}
