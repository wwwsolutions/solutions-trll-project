import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

// import headingSecondary from '../../components/heading-secondary/heading-secondary.component';
// import headingTertiary from '../../components/heading-tertiary/heading-tertiary.component';
// import paragraph from '../../components/paragraph/paragraph.component';
// import button from '../../components/button/button.component';
// import composition from '../../components/composition/composition.component';


const { main, div } = hh(h);


// PUBLIC
function view(dispatch, model) {

  // const { title, headlines, copies, btn, imageComposition } = model.about;
  // const [ c1, c2 ]  = copies;
  // const [ h1, h2 ] = headlines;


  return main({
    id: 'hotel',
    className: 'section hotel',
  }, [

    'HOTEL'

  ]);
}

export { view as hotelView };
