import Calendar from './Calendar';
import EventWrapper from './EventWrapper';
import BackgroundWrapper from './BackgroundWrapper';
import { set as setLocalizer } from './localizer';
import momentLocalizer from './localizers/moment';
import globalizeLocalizer from './localizers/globalize';
import viewLabel from './utils/viewLabel';
import move from './utils/move';
import { views, navigate } from './utils/constants';

// added for IE 11 which does not have Object.assign
if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) { // .length of function is 2
            'use strict';
            if (target == null) { // TypeError if undefined or null
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var to = Object(target);

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource != null) { // Skip over if undefined or null
                for (var nextKey in nextSource) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                    }
                }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
}
Object.assign(Calendar, {
  setLocalizer,
  globalizeLocalizer,
  momentLocalizer,
  label: viewLabel,
  views,
  Views: views,
  Navigate: navigate,
  move,
  components: {
    eventWrapper: EventWrapper,
    dayWrapper: BackgroundWrapper,
    dateCellWrapper: BackgroundWrapper
  }
})

export default Calendar
