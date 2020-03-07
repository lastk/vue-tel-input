import axios from 'axios';
import allCountries from "./assets/all-countries";

export async function getCountry() {
  const response = await axios({
    url: "https://ipinfo.io/json?token=263f1230eff65b"
  });
  return response.data.country;
}

// Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
export function setCaretPosition(ctrl, pos) {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);

    // IE8 and below
  } else if (ctrl.createTextRange) {
    const range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}

export const defaultOptions = {
  placeholder: "Enter a phone number",
  disabledFetchingCountry: false,
  disabled: false,
  mode: "",
  invalidMsg: "",
  required: false,
  allCountries,
  defaultCountry: "",
  enabledCountryCode: false,
  enabledFlags: true,
  preferredCountries: [],
  onlyCountries: [],
  ignoredCountries: [],
  autofocus: false,
  autocomplete: "on",
  name: "telephone",
  wrapperClasses: "",
  inputClasses: "",
  inputId: "",
  dropdownOptions: {},
  inputOptions: {},
  maxLen: 25,
  validCharactersOnly: false,
  customValidate: false,
  dynamicPlaceholder: false,
  fetchCountry: getCountry
};

export default {
  options: { ...defaultOptions }
};
