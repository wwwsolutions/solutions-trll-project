import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

// import menu from '../../components/menu/menu.component';

const { nav, div, input, label, span } = hh(h);


// PUBLIC
function view(dispatch, model) {

  const { list } = model.sidebar;

  return nav({
    id: 'sidebar',
    className: 'section sidebar',
  }, [
    'NAVIGATION'
  ]);
}

export { view as sidebarView };
