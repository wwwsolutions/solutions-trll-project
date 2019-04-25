import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
// import { s } from 'virtual-hyperscript-svg';


const { form, input, button, svg } = hh(h);

function searchField(dispatch, className, model) {
  // const { href, title  } = model;

  // return svg({ className: 'form-search__icon' }, [
  //   h('use', {
  //     // namespace: 'http://www.w3.org/2000/svg',
  //     attributes: {
  //       href: 'assets/images/sprite.svg#icon-chat',
  //     }
  //   })
  // ]);


  // return form({
  //   className: 'form-search',
  //   attributes: {
  //     action: '#'
  //   }
  // }, [
  //   input({
  //     className: 'form-search__input',
  //     id: 'name',
  //     type: 'text',
  //     placeholder: 'Search hotels',
  //     attributes: {
  //       required: '',
  //     }
  //   }),

  //   // SUBMIT BUTTON
  //   button({
  //     className: 'form-search__button',
  //   }, [
  //     // svg({ className: 'form-search__icon' }, [
  //     //   h('use', {
  //     //     namespace: 'http://www.w3.org/2000/svg',
  //     //     attributes: {
  //     //       'xlink:href': 'assets/images/sprite.svg#icon-bookmark'
  //     //     }
  //     //   })
  //     // ])
  //   ]),

  // ]);

}

export default searchField;
