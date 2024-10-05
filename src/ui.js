import { svg, render } from "lit-html";

import "./styles/main.scss";

import { localizationProvider } from "./localization/localizationProvider.js";

const undefinedPhrase = "#UNDEFINED";
const arrowIconRaw = svg`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
>
  <path
    d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"
  />
</svg>`;
const animeOpts = {
  easing: "linear",
  delay: function (el, i) {
    return i * 200;
  },
};

/**
 * Create header element
 *
 * @param {HTMLElement|string} html - header content
 * @param {1|2|3|4|5|6} level - header level
 * @return {HTMLElement} HTML header element
 */
export function createHeader(html, level = 4) {
  const header = document.createElement("vot-block");
  header.classList.add("vot-header", `vot-header-level-${level}`);
  header.append(html);

  return header;
}

/**
 * Create information element
 *
 * @param {HTMLElement|string} labelHtml - label content
 * @param {HTMLElement|string} valueHtml - value content
 * @return {{
 *  container: HTMLElement,
 *  header: HTMLElement,
 *  value: HTMLElement
 * }} information elements
 */
export function createInformation(labelHtml, valueHtml) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-info");

  const header = document.createElement("vot-block");
  render(labelHtml, header);

  const value = document.createElement("vot-block");
  render(valueHtml, value);

  container.append(header, value);

  return {
    container,
    header,
    value,
  };
}

/**
 * Create button
 *
 * @param {HTMLElement|string} html - button content
 * @return {HTMLElement} HTML button element
 */
export function createButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-button");
  button.append(html);

  return button;
}

/**
 * Create text button
 *
 * @param {HTMLElement|string} html - button content
 * @return {HTMLElement} HTML text button element
 */
export function createTextButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-text-button");
  button.append(html);

  return button;
}

/**
 * Create outlined button
 *
 * @param {HTMLElement|string} html - button content
 * @return {HTMLElement} HTML outlined button element
 */
export function createOutlinedButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-outlined-button");
  button.append(html);

  return button;
}

/**
 * Create icon button
 *
 * @param {TemplateResult} templateHtml - icon svg lit template
 * @return {HTMLElement} HTML icon button element
 */
export function createIconButton(templateHtml) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-icon-button");
  render(templateHtml, button);

  return button;
}

/**
 * Create checkbox
 *
 * @param {string|HTMLElement} html - label content
 * @param {boolean} value - checkbox state
 * @return {{
 *  container: HTMLElement,
 *  input: HTMLInputElement,
 *  label: HTMLSpanElement
 * }} checkbox elements
 */
export function createCheckbox(html, value = false) {
  const container = document.createElement("label");
  container.classList.add("vot-checkbox");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = Boolean(value);

  const label = document.createElement("span");
  label.append(html);

  container.append(input, label);

  return { container, input, label };
}

/**
 * Update slider value
 *
 * @param {HTMLInputElement} input - slider input element
 */
export function updateSlider(input) {
  const value = +input.value;
  const min = +input.min;
  const max = +input.max;
  const progress = (value - min) / (max - min);
  input.parentElement.setAttribute("style", `--vot-progress: ${progress}`);
}

/**
 * Create slider
 *
 * @param {string|HTMLElement} html - label content
 * @param {number} value - default value
 * @param {number} min - min value
 * @param {number} max - max value
 * @return {{
 *  container: HTMLElement,
 *  input: HTMLInputElement,
 *  label: HTMLSpanElement
 * }} slider elements
 */
export function createSlider(labelHtml, value = 50, min = 0, max = 100) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-slider");

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;

  const label = document.createElement("span");
  render(labelHtml, label);

  container.append(input, label);

  input.addEventListener("input", (e) => updateSlider(e.target));
  updateSlider(input);

  return {
    container,
    input,
    label,
  };
}

/**
 * Create textfield
 *
 * @param {string|HTMLElement} html - label content
 * @param {string} value - default value
 * @param {string} placeholder - textfield placeholder
 * @param {boolean} multiline - multiline textfield
 * @return {{
 *  container: HTMLElement,
 *  input: HTMLInputElement,
 *  label: HTMLSpanElement
 * }} textfield elements
 */
export function createTextfield(
  html,
  value = "",
  placeholder = " ",
  multiline = false,
) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-textfield");

  const input = document.createElement(multiline ? "textarea" : "input");
  input.placeholder = placeholder;
  input.value = value;
  if (!html) {
    input.classList.add("vot-show-placeholer");
  }

  const label = document.createElement("span");
  label.append(html);

  container.append(input, label);

  return {
    container,
    input,
    label,
  };
}

/**
 * Create dialog
 *
 * @param {string|HTMLElement} html - title content
 * @return {{
 *  container: HTMLElement,
 *  backdrop: HTMLElement,
 *  dialog: HTMLElement,
 *  contentWrapper: HTMLElement,
 *  headerContainer: HTMLElement,
 *  bodyContainer: HTMLElement,
 *  footerContainer: HTMLElement,
 *  titleContainer: HTMLElement,
 *  closeButton: HTMLElement,
 *  title: HTMLElement,
 * }} dialog elements
 */
export function createDialog(html) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-dialog-container");
  container.hidden = true;

  const backdrop = document.createElement("vot-block");
  backdrop.classList.add("vot-dialog-backdrop");

  const dialog = document.createElement("vot-block");
  dialog.classList.add("vot-dialog");

  const contentWrapper = document.createElement("vot-block");
  contentWrapper.classList.add("vot-dialog-content-wrapper");

  const headerContainer = document.createElement("vot-block");
  headerContainer.classList.add("vot-dialog-header-container");

  const bodyContainer = document.createElement("vot-block");
  bodyContainer.classList.add("vot-dialog-body-container");

  const footerContainer = document.createElement("vot-block");
  footerContainer.classList.add("vot-dialog-footer-container");

  const titleContainer = document.createElement("vot-block");
  titleContainer.classList.add("vot-dialog-title-container");

  const closeButton = createIconButton(
    svg`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="100%"
      viewBox="0 -960 960 960"
    >
      <path
        d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"
      />
    </svg>`,
  );
  closeButton.classList.add("vot-dialog-close-button");

  backdrop.onclick = closeButton.onclick = () => {
    container.hidden = true;
  };

  const title = document.createElement("vot-block");
  title.classList.add("vot-dialog-title");
  title.append(html);

  container.append(backdrop, dialog);
  dialog.append(contentWrapper);
  contentWrapper.append(headerContainer, bodyContainer, footerContainer);
  headerContainer.append(titleContainer, closeButton);
  titleContainer.append(title);

  return {
    container,
    backdrop,
    dialog,
    contentWrapper,
    headerContainer,
    bodyContainer,
    footerContainer,
    titleContainer,
    closeButton,
    title,
  };
}

/**
 * Create VOTButton
 *
 * @param {string|HTMLElement} label - label content
 * @return {{
 *  container: HTMLElement,
 *  translateButton: HTMLElement,
 *  separator: HTMLElement,
 *  pipButton: HTMLElement,
 *  separator2: HTMLElement,
 *  menuButton: HTMLElement,
 *  label: HTMLSpanElement,
 * }} VOTButton elements
 */
export function createVOTButton(labelHtml) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-segmented-button");

  const translateButton = document.createElement("vot-block");
  translateButton.classList.add("vot-segment");
  translateButton.classList.add("vot-translate-button");
  render(
    svg`<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="vot-translate-icon"
        fill-rule="evenodd"
        d="M15.778 18.95L14.903 21.375C14.8364 21.5583 14.7197 21.7083 14.553 21.825C14.3864 21.9417 14.203 22 14.003 22C13.6697 22 13.3989 21.8625 13.1905 21.5875C12.9822 21.3125 12.9447 21.0083 13.078 20.675L16.878 10.625C16.9614 10.4417 17.0864 10.2917 17.253 10.175C17.4197 10.0583 17.603 10 17.803 10H18.553C18.753 10 18.9364 10.0583 19.103 10.175C19.2697 10.2917 19.3947 10.4417 19.478 10.625L23.278 20.7C23.4114 21.0167 23.378 21.3125 23.178 21.5875C22.978 21.8625 22.7114 22 22.378 22C22.1614 22 21.9739 21.9375 21.8155 21.8125C21.6572 21.6875 21.5364 21.525 21.453 21.325L20.628 18.95H15.778ZM19.978 17.2H16.378L18.228 12.25L19.978 17.2Z"
      ></path>
      <path
        d="M9 14L4.7 18.3C4.51667 18.4833 4.28333 18.575 4 18.575C3.71667 18.575 3.48333 18.4833 3.3 18.3C3.11667 18.1167 3.025 17.8833 3.025 17.6C3.025 17.3167 3.11667 17.0833 3.3 16.9L7.65 12.55C7.01667 11.85 6.4625 11.125 5.9875 10.375C5.5125 9.625 5.1 8.83333 4.75 8H6.85C7.15 8.6 7.47083 9.14167 7.8125 9.625C8.15417 10.1083 8.56667 10.6167 9.05 11.15C9.78333 10.35 10.3917 9.52917 10.875 8.6875C11.3583 7.84583 11.7667 6.95 12.1 6H2C1.71667 6 1.47917 5.90417 1.2875 5.7125C1.09583 5.52083 1 5.28333 1 5C1 4.71667 1.09583 4.47917 1.2875 4.2875C1.47917 4.09583 1.71667 4 2 4H8V3C8 2.71667 8.09583 2.47917 8.2875 2.2875C8.47917 2.09583 8.71667 2 9 2C9.28333 2 9.52083 2.09583 9.7125 2.2875C9.90417 2.47917 10 2.71667 10 3V4H16C16.2833 4 16.5208 4.09583 16.7125 4.2875C16.9042 4.47917 17 4.71667 17 5C17 5.28333 16.9042 5.52083 16.7125 5.7125C16.5208 5.90417 16.2833 6 16 6H14.1C13.75 7.18333 13.275 8.33333 12.675 9.45C12.075 10.5667 11.3333 11.6167 10.45 12.6L12.85 15.05L12.1 17.1L9 14Z"
      ></path>
      <path
        id="vot-loading-icon"
        style="display:none"
        d="M19.8081 16.3697L18.5842 15.6633V13.0832C18.5842 12.9285 18.5228 12.7801 18.4134 12.6707C18.304 12.5613 18.1556 12.4998 18.0009 12.4998C17.8462 12.4998 17.6978 12.5613 17.5884 12.6707C17.479 12.7801 17.4176 12.9285 17.4176 13.0832V15.9998C17.4176 16.1022 17.4445 16.2028 17.4957 16.2915C17.5469 16.3802 17.6205 16.4538 17.7092 16.505L19.2247 17.38C19.2911 17.4189 19.3645 17.4443 19.4407 17.4547C19.5169 17.4652 19.5945 17.4604 19.6688 17.4407C19.7432 17.4211 19.813 17.3869 19.8741 17.3402C19.9352 17.2934 19.9864 17.2351 20.0249 17.1684C20.0634 17.1018 20.0883 17.0282 20.0982 16.952C20.1081 16.8757 20.1028 16.7982 20.0827 16.7239C20.0625 16.6497 20.0279 16.5802 19.9808 16.5194C19.9336 16.4586 19.8749 16.4077 19.8081 16.3697ZM18.0015 10C16.8478 10 15.6603 10.359 14.7011 11C13.7418 11.641 12.9415 12.4341 12.5 13.5C12.0585 14.5659 11.8852 16.0369 12.1103 17.1684C12.3353 18.3 12.8736 19.4942 13.6894 20.31C14.5053 21.1258 15.8684 21.7749 17 22C18.1316 22.2251 19.4341 21.9415 20.5 21.5C21.5659 21.0585 22.359 20.2573 23 19.298C23.641 18.3387 24.0015 17.1537 24.0015 16C23.9998 14.4534 23.5951 13.0936 22.5015 12C21.4079 10.9064 19.5481 10.0017 18.0015 10ZM18.0009 20.6665C17.0779 20.6665 16.1757 20.3928 15.4082 19.88C14.6408 19.3672 14.0427 18.6384 13.6894 17.7857C13.3362 16.933 13.2438 15.9947 13.4239 15.0894C13.604 14.1842 14.0484 13.3527 14.7011 12.7C15.3537 12.0474 16.1852 11.6029 17.0905 11.4228C17.9957 11.2428 18.934 11.3352 19.7867 11.6884C20.6395 12.0416 21.3683 12.6397 21.8811 13.4072C22.3939 14.1746 22.6676 15.0769 22.6676 15.9998C22.666 17.237 22.1738 18.4231 21.299 19.298C20.4242 20.1728 19.2381 20.665 18.0009 20.6665Z"
      ></path>
    </svg>`,
    translateButton,
  );

  const separator = document.createElement("vot-block");
  separator.classList.add("vot-separator");

  const pipButton = document.createElement("vot-block");
  pipButton.classList.add("vot-segment-only-icon");
  render(
    svg`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M120-520q-17 0-28.5-11.5T80-560q0-17 11.5-28.5T120-600h104L80-743q-12-12-12-28.5T80-800q12-12 28.5-12t28.5 12l143 144v-104q0-17 11.5-28.5T320-800q17 0 28.5 11.5T360-760v200q0 17-11.5 28.5T320-520H120Zm40 360q-33 0-56.5-23.5T80-240v-160q0-17 11.5-28.5T120-440q17 0 28.5 11.5T160-400v160h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H160Zm680-280q-17 0-28.5-11.5T800-480v-240H480q-17 0-28.5-11.5T440-760q0-17 11.5-28.5T480-800h320q33 0 56.5 23.5T880-720v240q0 17-11.5 28.5T840-440ZM600-160q-17 0-28.5-11.5T560-200v-120q0-17 11.5-28.5T600-360h240q17 0 28.5 11.5T880-320v120q0 17-11.5 28.5T840-160H600Z"
      />
    </svg>`,
    pipButton,
  );

  const separator2 = document.createElement("vot-block");
  separator2.classList.add("vot-separator");

  const menuButton = document.createElement("vot-block");
  menuButton.classList.add("vot-segment-only-icon");
  render(
    svg`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"
      />
    </svg>`,
    menuButton,
  );

  const label = document.createElement("span");
  label.classList.add("vot-segment-label");
  label.append(labelHtml);

  container.append(
    translateButton,
    separator,
    pipButton,
    separator2,
    menuButton,
  );
  translateButton.append(label);

  return {
    container,
    translateButton,
    separator,
    pipButton,
    separator2,
    menuButton,
    label,
  };
}

/**
 * Create VOTMenu
 *
 * @param {string|HTMLElement} html - title content
 * @return {{
 *  container: HTMLElement,
 *  contentWrapper: HTMLElement,
 *  headerContainer: HTMLElement,
 *  bodyContainer: HTMLElement,
 *  footerContainer: HTMLElement,
 *  titleContainer: HTMLElement,
 *  title: HTMLSpanElement,
 * }} VOTMenu elements
 */
export function createVOTMenu(html) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-menu");
  container.hidden = true;

  const contentWrapper = document.createElement("vot-block");
  contentWrapper.classList.add("vot-menu-content-wrapper");

  const headerContainer = document.createElement("vot-block");
  headerContainer.classList.add("vot-menu-header-container");

  const bodyContainer = document.createElement("vot-block");
  bodyContainer.classList.add("vot-menu-body-container");

  const footerContainer = document.createElement("vot-block");
  footerContainer.classList.add("vot-menu-footer-container");

  const titleContainer = document.createElement("vot-block");
  titleContainer.classList.add("vot-menu-title-container");

  const title = document.createElement("vot-block");
  title.classList.add("vot-menu-title");
  title.append(html);

  container.append(contentWrapper);
  contentWrapper.append(headerContainer, bodyContainer, footerContainer);
  headerContainer.append(titleContainer);
  titleContainer.append(title);

  return {
    container,
    contentWrapper,
    headerContainer,
    bodyContainer,
    footerContainer,
    titleContainer,
    title,
  };
}

/**
 * Create VOTSelectLabel
 *
 * @param {string} text - label text
 * @return {HTMLSpanElement} VOTSelectLabel element
 */
export function createVOTSelectLabel(text) {
  const label = document.createElement("span");
  label.classList.add("vot-select-label");
  label.textContent = text;
  return label;
}

/**
 * Create VOTSelect
 *
 * @param {string} selectTitle - select title
 * @param {string} dialogTitle - dialog title
 * @param {{label: string, value: string, selected: boolean}[]} items - items to select
 * @param {{onSelectCb: function, labelElement: string}} options - items to select
 * @return {{
 *  container: HTMLElement,
 *  title: HTMLSpanElement,
 *  arrowIcon: HTMLElement,
 *  labelElement: HTMLElement,
 *  setTitle: (newTitle: string) => void,
 *  setSelected: (val: string) => void,
 *  updateItems: (newItems: {label: string, value: string, selected: boolean}[]) => void,
 * }} VOTSelect elements
 */
export function createVOTSelect(selectTitle, dialogTitle, items, options = {}) {
  const { onSelectCb = function () {}, labelElement = "" } = options;
  let selectedItems = [];

  const container = document.createElement("vot-block");
  container.classList.add("vot-select");

  if (labelElement) {
    container.append(labelElement);
  }

  const outer = document.createElement("vot-block");
  outer.classList.add("vot-select-outer");

  const title = document.createElement("span");
  title.classList.add("vot-select-title");
  title.textContent = selectTitle;

  if (selectTitle === undefined) {
    title.textContent = items.find((i) => i.selected === true)?.label;
  }

  const arrowIcon = document.createElement("vot-block");
  arrowIcon.classList.add("vot-select-arrow-icon");
  render(arrowIconRaw, arrowIcon);

  outer.append(title, arrowIcon);
  outer.onclick = () => {
    const votSelectDialog = createDialog(dialogTitle);
    votSelectDialog.container.classList.add("vot-dialog-temp");
    votSelectDialog.container.hidden = false;
    document.documentElement.appendChild(votSelectDialog.container);

    const contentList = document.createElement("vot-block");
    contentList.classList.add("vot-select-content-list");

    for (const item of items) {
      const contentItem = document.createElement("vot-block");
      contentItem.classList.add("vot-select-content-item");
      contentItem.textContent = item.label;
      contentItem.dataset.votSelected = item.selected;
      contentItem.dataset.votValue = item.value;
      if (item.disabled) {
        contentItem.inert = true;
      }

      contentItem.onclick = async (e) => {
        if (e.target.inert) return;

        // removing the selected value for updating
        const contentItems = contentList.childNodes;
        for (let ci of contentItems) {
          ci.dataset.votSelected = false;
        }
        // fixed selection after closing the modal and opening again
        for (let i of items) {
          i.selected = i.value === item.value;
        }

        contentItem.dataset.votSelected = true;
        title.textContent = item.label;

        // !!! use e.target.dataset.votValue instead of e.target.value !!!
        await onSelectCb(e);
      };
      contentList.appendChild(contentItem);
    }

    // search logic
    const votSearchLangTextfield = createTextfield(
      localizationProvider.get("searchField"),
    );

    votSearchLangTextfield.input.oninput = (e) => {
      const searchText = e.target.value.toLowerCase();
      // check if there are lovercase characters in the string. used for smarter search
      for (let i = 0; i < selectedItems.length; i++) {
        const ci = selectedItems[i];
        ci.hidden = !ci.textContent.toLowerCase().includes(searchText);
      }
    };

    votSelectDialog.bodyContainer.append(
      votSearchLangTextfield.container,
      contentList,
    );
    selectedItems = contentList.childNodes;

    // remove the modal so that they do not accumulate
    votSelectDialog.backdrop.onclick = votSelectDialog.closeButton.onclick =
      () => {
        votSelectDialog.container.remove();
        selectedItems = [];
      };
  };

  container.append(outer);

  const setTitle = (newTitle) => {
    title.textContent = newTitle;
  };

  const setSelected = (val) => {
    const selectedItemsArray = Array.from(selectedItems).filter(
      (ci) => !ci.inert,
    );
    for (let i = 0; i < selectedItemsArray.length; i++) {
      const ci = selectedItemsArray[i];
      ci.dataset.votSelected = ci.dataset.votValue === val;
    }

    for (let i = 0; i < items.length; i++) {
      const currentItem = items[i];
      currentItem.selected = String(currentItem.value) === val;
    }
  };

  const updateItems = (newItems) => {
    items = newItems;
  };

  return {
    container,
    title,
    arrowIcon,
    labelElement,
    setTitle,
    setSelected,
    updateItems,
  };
}

export function createVOTLanguageSelect(options) {
  const {
    fromTitle = undefinedPhrase,
    fromDialogTitle = undefinedPhrase,
    fromItems = [],
    fromOnSelectCB = null,
    toTitle = undefinedPhrase,
    toDialogTitle = undefinedPhrase,
    toItems = [],
    toOnSelectCB = null,
  } = options;

  const container = document.createElement("vot-block");
  container.classList.add("vot-lang-select");

  const fromSelect = createVOTSelect(fromTitle, fromDialogTitle, fromItems, {
    onSelectCb: fromOnSelectCB,
  });

  const icon = document.createElement("vot-block");
  icon.classList.add("vot-lang-select-icon");
  render(
    svg`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"
      />
    </svg>`,
    icon,
  );

  const toSelect = createVOTSelect(toTitle, toDialogTitle, toItems, {
    onSelectCb: toOnSelectCB,
  });

  container.append(fromSelect.container, icon, toSelect.container);

  return {
    container,
    fromSelect,
    icon,
    toSelect,
  };
}

export function createDetails(titleHtml) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-details");

  const header = document.createElement("vot-block");
  header.append(titleHtml);

  const arrowIcon = document.createElement("vot-block");
  arrowIcon.classList.add("vot-details-arrow-icon");
  render(arrowIconRaw, arrowIcon);

  container.append(header, arrowIcon);

  return {
    container,
    header,
    arrowIcon,
  };
}

/**
 *
 * @export
 * @param {SVGElement} votLoader
 * @param {string} [primaryColor="139, 180, 245"]
 * @return {Function} Update animation function
 */
function animateLoader(votLoader, primaryColor = "139, 180, 245") {
  const votLoaderHelper = votLoader.querySelector(".vot-loader-helper");
  const votLoaderMain = votLoader.querySelector(".vot-loader-main");
  anime
    .timeline({
      ...animeOpts,
      targets: [votLoaderHelper, votLoaderMain],
      duration: 250,
    })
    .add({
      "fill-opacity": 0,
      "stroke-width": 2,
      d: "M 12 1.5 C 17.799 1.5 22.5 6.201 22.5 12 C 22.5 17.799 17.799 22.5 12 22.5 C 6.201 22.5 1.5 17.799 1.5 12 C 1.5 6.201 6.201 1.5 12 1.5 Z",
      duration: 0,
    })
    .add(
      {
        targets: votLoaderHelper,
        stroke: `rgb(${primaryColor})`,
        // make empty by default
        "stroke-opacity": 0,
        duration: 0,
      },
      0,
    )
    .add(
      {
        targets: votLoaderMain,
        stroke: "#888888",
        "stroke-opacity": 0.25,
      },
      0,
    );
  const animation = anime
    .timeline({
      targets: votLoaderHelper,
      easing: "easeInOutSine",
      duration: 1000,
      autoplay: false,
    })
    .add(
      {
        // prevent full fill on 0%
        strokeOpacity: 1,
        duration: 0,
      },
      0,
    )
    .add(
      {
        strokeDashoffset: [anime.setDashoffset, 0],
      },
      0,
    );

  return (percentage) => {
    animation.seek(animation.duration * (percentage / 100));
  };
}

function afterAnimateLoader(votLoader, primaryColor = "139, 180, 245") {
  const votLoaderHelper = votLoader.querySelector(".vot-loader-helper");
  const votLoaderMain = votLoader.querySelector(".vot-loader-main");
  anime
    .timeline({
      ...animeOpts,
      targets: votLoaderMain,
      duration: 600,
    })
    .add({
      d: "M 9.0596 14.8571 L 9.7667 15.5642 L 10.4738 14.8571 L 17.0071 8.3238 C 17.0457 8.2852 17.0937 8.25 17.2333 8.25 C 17.373 8.25 17.421 8.2852 17.4596 8.3238 C 17.4981 8.3624 17.5333 8.4104 17.5333 8.55 C 17.5333 8.6896 17.4981 8.7376 17.4596 8.7762 L 9.9929 16.2429 C 9.9011 16.3346 9.8397 16.35 9.7667 16.35 C 9.6937 16.35 9.6322 16.3346 9.5404 16.2429 L 6.0738 12.7762 C 6.0352 12.7376 6 12.6897 6 12.55 C 6 12.4103 6.0352 12.3624 6.0738 12.3238 C 6.1124 12.2852 6.1603 12.25 6.3 12.25 C 6.4397 12.25 6.4876 12.2852 6.5262 12.3238 L 9.0596 14.8571 Z",
      duration: 0,
    })
    .add({
      strokeDashoffset: [anime.setDashoffset, 0],
      stroke: `rgb(${primaryColor})`,
      "stroke-opacity": 1,
    });

  setTimeout(() => {
    anime
      .timeline({
        ...animeOpts,
        targets: votLoaderMain,
        duration: 600,
      })
      .add({
        d: "M12 15.575C11.8667 15.575 11.7417 15.5542 11.625 15.5125C11.5083 15.4708 11.4 15.4 11.3 15.3L7.7 11.7C7.5 11.5 7.40417 11.2667 7.4125 11C7.42083 10.7333 7.51667 10.5 7.7 10.3C7.9 10.1 8.1375 9.99583 8.4125 9.9875C8.6875 9.97917 8.925 10.075 9.125 10.275L11 12.15V5C11 4.71667 11.0958 4.47917 11.2875 4.2875C11.4792 4.09583 11.7167 4 12 4C12.2833 4 12.5208 4.09583 12.7125 4.2875C12.9042 4.47917 13 4.71667 13 5V12.15L14.875 10.275C15.075 10.075 15.3125 9.97917 15.5875 9.9875C15.8625 9.99583 16.1 10.1 16.3 10.3C16.4833 10.5 16.5792 10.7333 16.5875 11C16.5958 11.2667 16.5 11.5 16.3 11.7L12.7 15.3C12.6 15.4 12.4917 15.4708 12.375 15.5125C12.2583 15.5542 12.1333 15.575 12 15.575ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V16C4 15.7167 4.09583 15.4792 4.2875 15.2875C4.47917 15.0958 4.71667 15 5 15C5.28333 15 5.52083 15.0958 5.7125 15.2875C5.90417 15.4792 6 15.7167 6 16V18H18V16C18 15.7167 18.0958 15.4792 18.2875 15.2875C18.4792 15.0958 18.7167 15 19 15C19.2833 15 19.5208 15.0958 19.7125 15.2875C19.9042 15.4792 20 15.7167 20 16V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z",
        duration: 100,
      })
      .add(
        {
          targets: votLoaderHelper,
          d: "",
          duration: 200,
        },
        0,
      )
      .add({
        targets: votLoaderMain,
        "stroke-width": "0",
        stroke: `rgba(${primaryColor}), 0)`,
        "fill-opacity": "1",
        "stroke-dasharray": "0",
        "stroke-dashoffset": "0",
        duration: 0,
      });
  }, 2000);
}

export default {
  createHeader,
  createInformation,
  createButton,
  createTextButton,
  createOutlinedButton,
  createIconButton,
  createCheckbox,
  createSlider,
  createTextfield,
  createDialog,
  createVOTButton,
  createVOTMenu,
  createVOTSelectLabel,
  createVOTSelect,
  createVOTLanguageSelect,
  updateSlider,
  animateLoader,
  afterAnimateLoader,
  createDetails,
};
