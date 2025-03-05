import { svg } from "lit-html";
import ui from "../src/ui.js";
import Tooltip from "../src/ui/tooltip.ts";

class TestUI {
  initUI() {
    this.testDialog = ui.createDialog("Test");
    // Header
    this.h1 = ui.createHeader("H1 Lorem ipsum dolor", 1);
    this.h2 = ui.createHeader("H2 Lorem ipsum dolor", 2);
    this.h3 = ui.createHeader("H3 Lorem ipsum dolor", 3);
    this.h4 = ui.createHeader("H4 Lorem ipsum dolor", 4);
    this.h5 = ui.createHeader("H5 Lorem ipsum dolor", 5);
    this.h6 = ui.createHeader("H6 Lorem ipsum dolor", 6);
    this.testHTML = document.createElement("vot-block");
    this.testHTML.style = "padding: 4px; color: skyblue;";
    this.testHTML.textContent = "Lorem ipsum dolor";
    this.h3WithHTML = ui.createHeader(this.testHTML.cloneNode(true), 3);
    console.log(this.h3WithHTML.outerHTML);
    this.testDialog.bodyContainer.append(
      this.h1,
      this.h2,
      this.h3,
      this.h4,
      this.h5,
      this.h6,
      this.h3WithHTML,
    );

    // Information
    this.info = ui.createInformation(
      "Information Lorem ipsum dolor:",
      "Neque porro quisquam est qui",
    );
    this.infoWithHTML = ui.createInformation(
      this.testHTML.cloneNode(true),
      this.testHTML.cloneNode(true),
    );

    this.testDialog.bodyContainer.append(
      this.info.container,
      this.infoWithHTML.container,
    );

    // Button
    this.button = ui.createButton("Button Lorem ipsum dolor");
    this.buttonDisabled = ui.createButton("Button Disabled Lorem ipsum dolor");
    this.buttonDisabled.setAttribute("disabled", "true");
    this.buttonWithHTML = ui.createButton(this.testHTML.cloneNode(true));
    this.testDialog.bodyContainer.append(
      this.button,
      this.buttonDisabled,
      this.buttonWithHTML,
    );

    // TextButton
    this.textButton = ui.createTextButton("TextButton Lorem ipsum dolor");
    this.textButtonDisabled = ui.createTextButton(
      "TextButton Disabled Lorem ipsum dolor",
    );
    this.textButtonDisabled.setAttribute("disabled", "true");
    this.textButtonWithHTML = ui.createTextButton(
      this.testHTML.cloneNode(true),
    );
    this.testDialog.bodyContainer.append(
      this.textButton,
      this.textButtonDisabled,
      this.textButtonWithHTML,
    );

    // OutlinedButton
    this.outlinedButton = ui.createOutlinedButton(
      "OutlinedButton Lorem ipsum dolor",
    );
    this.outlinedButtonDisabled = ui.createOutlinedButton(
      "OutlinedButton Disabled Lorem ipsum dolor",
    );
    this.outlinedButtonDisabled.setAttribute("disabled", "true");
    this.outlinedButtonWithHTML = ui.createOutlinedButton(
      this.testHTML.cloneNode(true),
    );
    this.testDialog.bodyContainer.append(
      this.outlinedButton,
      this.outlinedButtonDisabled,
      this.outlinedButtonWithHTML,
    );

    const downloadIcon = svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 0 24 24" class="vot-loader" id="vot-loader-download">
            <path class="vot-loader-main" d="M12 15.575C11.8667 15.575 11.7417 15.5542 11.625 15.5125C11.5083 15.4708 11.4 15.4 11.3 15.3L7.7 11.7C7.5 11.5 7.40417 11.2667 7.4125 11C7.42083 10.7333 7.51667 10.5 7.7 10.3C7.9 10.1 8.1375 9.99583 8.4125 9.9875C8.6875 9.97917 8.925 10.075 9.125 10.275L11 12.15V5C11 4.71667 11.0958 4.47917 11.2875 4.2875C11.4792 4.09583 11.7167 4 12 4C12.2833 4 12.5208 4.09583 12.7125 4.2875C12.9042 4.47917 13 4.71667 13 5V12.15L14.875 10.275C15.075 10.075 15.3125 9.97917 15.5875 9.9875C15.8625 9.99583 16.1 10.1 16.3 10.3C16.4833 10.5 16.5792 10.7333 16.5875 11C16.5958 11.2667 16.5 11.5 16.3 11.7L12.7 15.3C12.6 15.4 12.4917 15.4708 12.375 15.5125C12.2583 15.5542 12.1333 15.575 12 15.575ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V16C4 15.7167 4.09583 15.4792 4.2875 15.2875C4.47917 15.0958 4.71667 15 5 15C5.28333 15 5.52083 15.0958 5.7125 15.2875C5.90417 15.4792 6 15.7167 6 16V18H18V16C18 15.7167 18.0958 15.4792 18.2875 15.2875C18.4792 15.0958 18.7167 15 19 15C19.2833 15 19.5208 15.0958 19.7125 15.2875C19.9042 15.4792 20 15.7167 20 16V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z"/>
            <path class="vot-loader-helper" d=""/>
         </svg>`;

    // IconButton
    this.iconButton = ui.createIconButton(downloadIcon);
    this.iconButtonWithProgress = ui.createIconButton(downloadIcon);
    this.iconButtonDisabled = ui.createIconButton(downloadIcon);
    this.iconButtonDisabled.setAttribute("disabled", "true");
    this.testDialog.bodyContainer.append(
      this.iconButton,
      this.iconButtonWithProgress,
      this.iconButtonDisabled,
    );

    // Checkbox
    this.checkbox = ui.createCheckbox("Checkbox Lorem ipsum dolor", true);
    this.checkboxDisabled = ui.createCheckbox(
      "Checkbox Disabled Lorem ipsum dolor",
      true,
    );
    this.checkboxDisabled.input.disabled = true;
    this.checkboxWithHTML = ui.createCheckbox(
      this.testHTML.cloneNode(true),
      false,
    );

    this.testDialog.bodyContainer.append(
      this.checkbox.container,
      this.checkboxDisabled.container,
      this.checkboxWithHTML.container,
    );

    // Slider
    this.slider = ui.createSlider("Slider Lorem ipsum dolor");
    this.sliderDisabled = ui.createSlider("Slider Disabled Lorem ipsum dolor");
    this.sliderDisabled.input.disabled = true;
    this.sliderWithHTML = ui.createSlider(
      this.testHTML.cloneNode(true),
      2,
      0,
      300,
    );

    this.testDialog.bodyContainer.append(
      this.slider.container,
      this.sliderDisabled.container,
      this.sliderWithHTML.container,
    );

    // Textfield
    this.textfield = ui.createTextfield(
      "Textfield Lorem ipsum dolor",
      "",
      "test",
    );
    this.textfieldWithoutLabel = ui.createTextfield("", "", "test");
    this.textfieldWithoutValue = ui.createTextfield(
      "Textfield Without Value",
      "",
      "",
    );
    this.textfieldDisabled = ui.createTextfield(
      "Textfield Disabled Lorem ipsum dolor",
      "",
      "",
    );
    this.textfieldDisabled.input.disabled = true;
    this.textfieldWithHTML = ui.createTextfield(
      this.testHTML.cloneNode(true),
      "lorem ipsum dolor",
      "lorem ipsum 1231",
      true,
    );

    this.testDialog.bodyContainer.append(
      this.textfield.container,
      this.textfieldWithoutLabel.container,
      this.textfieldWithoutValue.container,
      this.textfieldDisabled.container,
      this.textfieldWithHTML.container,
    );

    // VOTButton
    this.votButton = ui.createVOTButton("Translate");
    this.votButton.container.style.left = "20%";
    this.votButtonWithHTML = ui.createVOTButton(this.testHTML.cloneNode(true));
    this.votButtonWithHTML.container.style.marginTop = "100px";
    this.votButtonWithHTML.container.style.left = "20%";

    // tooltip
    // ! Now vot code doesn't have portal
    this.votPortal = ui.createPortal();
    document.documentElement.appendChild(this.votPortal);

    this.testTooltipContent = ui.createEl("p", [], "Use logical sides too 👍🏻");
    this.testTooltipBContent = this.testTooltipContent.cloneNode(true);
    this.testTooltipLContent = this.testTooltipContent.cloneNode(true);
    // TODO: max width
    this.testTooltipRContent = ui.createEl(
      "p",
      [],
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
    );
    this.tooltipEl = new Tooltip({
      target: this.votButton.menuButton,
      content: this.testTooltipContent,
      position: "top",
      parentElement: this.votPortal,
    });
    this.tooltipBEl = new Tooltip({
      target: this.votButton.menuButton,
      content: this.testTooltipBContent,
      position: "bottom",
      parentElement: this.votPortal,
    });
    this.tooltipREl = new Tooltip({
      target: this.votButton.menuButton,
      content: this.testTooltipRContent,
      position: "right",
      parentElement: this.votPortal,
    });
    this.tooltipLEl = new Tooltip({
      target: this.votButton.container,
      content: this.testTooltipLContent,
      position: "left",
      trigger: "click",
      parentElement: this.votPortal,
    });

    // VOTMenu
    this.votMenu = ui.createVOTMenu("VOTMenu Lorem ipsum dolor");
    this.votMenu.container.hidden = false;
    this.votMenu.container.style.marginTop = "100px";
    this.votMenu.container.style.left = "20%";
    this.votMenuWithHTML = ui.createVOTMenu(this.testHTML.cloneNode(true));
    this.votMenuWithHTML.container.hidden = false;
    this.votMenuWithHTML.container.style.marginTop = "250px";
    this.votMenuWithHTML.container.style.left = "20%";

    // VOTSelectLabel
    this.votSelectLabel = ui.createVOTSelectLabel(
      "VOTSelectLabel Lorem ipsum dolor",
    );
    this.testDialog.bodyContainer.append(this.votSelectLabel);

    // VOTSelect
    this.votSelect = ui.createVOTSelect(
      "VOTSelect Lorem ipsum dolor",
      "VOTSelect Dialog Lorem ipsum dolor",
      [
        {
          label: "label Lorem ipsum dolor",
          value: "value Lorem ipsum dolor",
          selected: false,
        },
      ],
    );
    this.testDialog.bodyContainer.append(this.votSelect.container);

    this.testDialog.container.hidden = false;

    document.documentElement.append(
      this.testDialog.container,
      this.votButton.container,
      this.votButtonWithHTML.container,
      this.votMenu.container,
      this.votMenuWithHTML.container,
    );

    // test animation
    const primaryColor = getComputedStyle(
      this.iconButtonWithProgress,
    ).getPropertyValue("--vot-primary-rgb");
    const updateAnimation = ui.animateLoader(
      this.iconButtonWithProgress,
      primaryColor,
    );

    let percentage = 0;
    let timer = setInterval(() => {
      updateAnimation(Math.round(percentage));
      percentage++;
      if (percentage === 100) {
        clearInterval(timer);
        ui.afterAnimateLoader(this.iconButtonWithProgress, primaryColor);
      }
    }, 100);
  }
}

new TestUI().initUI();
