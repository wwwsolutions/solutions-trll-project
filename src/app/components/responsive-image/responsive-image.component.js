import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import { map, partial } from 'ramda';

const { div, img, picture, source } = hh(h);

// PRIVATE
function hasProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// PRIVATE
function generatePictureTagMarkup(className, attrs) {

  const { lodpi, hidpi, media, alt, title } = {...attrs};
  const [ low, lowWidth ] = lodpi;
  const [ high, highWidth ] = hidpi;

  // OBJECT MUST HAVE ALT & TITLE FIELDS SET
  const hasPictureAttrs = hasProp(attrs, 'alt') && hasProp(attrs, 'title');

  // GENERATE PICTURE MARKUP
  const pictureMarkup = !hasPictureAttrs
    ? source({ srcset:`${high} ${highWidth}, ${low} ${lowWidth}`, media })
    : img({ className, alt, title, srcset:`${high} ${highWidth}, ${low} ${lowWidth}`, src:`${low}` });

  return pictureMarkup;
}

function generateImageTagMarkup(className, attrs) {

  const { alt, src } = {...attrs};

  // OBJECT MUST HAVE SRCSET & SIZES FIELDS SET
  const hasImageAttrs = hasProp(attrs, 'srcsets') && hasProp(attrs, 'sizes');

  if (!hasImageAttrs) {
    return div({ className: 'code bg-dark-red white pv2 ph4'}, '[RESPONSIVE IMAGE ERROR] {imageTag} fields [SRCSET] and [SIZES] are mandatory!');
  }

  // ATTRIBUTES FROM ARRAYS TO STRINGS
  const srcset = attrs.srcsets.join(', ');
  const sizes = attrs.sizes.join(', ');

  return img({ className, alt, srcset, sizes, src });
}

// PUBLIC
function responsiveImage(className, attrs) {

  if (!attrs) {
    return div({ className: 'code bg-dark-red white pv2 ph4'}, '[RESPONSIVE IMAGE ERROR] ATTRIBUTES OBJECT with {pictureTag} or {imageTag} field required!');
  }

  // GENERATE PICTURE TAG MARKUP OR IMG TAG MARKUP
  const markup = attrs.pictureTag
    ? picture( map(partial(generatePictureTagMarkup, [className]), attrs.pictureTag) )
    : generateImageTagMarkup(className, attrs.imageTag);
  return markup;

}


export default responsiveImage;
