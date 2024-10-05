import { svg } from "lit-html";
import ui from "../src/ui.js";

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

    // IconButton
    this.iconButton = ui.createIconButton(
      svg`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="100%"
        viewBox="0 -960 960 960"
      >
        <path
          d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z"
        />
      </svg>`,
    );
    this.iconButtonDisabled = ui.createIconButton(
      svg`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="100%"
        viewBox="0 -960 960 960"
      >
        <path
          d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z"
        />
      </svg>`,
    );
    this.iconButtonDisabled.setAttribute("disabled", "true");
    this.testDialog.bodyContainer.append(
      this.iconButton,
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
  }
}

new TestUI().initUI();
