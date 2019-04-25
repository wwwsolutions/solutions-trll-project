import MSGS from './sidebar.messages.model';

// ACTIONS
export function sidebarMsg(value){
  return {
    type: MSGS.SIDEBAR_MESSAGE,
    value
  };
}
