export class DynamicForm {
  constructor(config, container = document.body) {
    this.config = config;
    this.container = container;
    this.form = document.createElement("form");
    this._buildForm();
  }

  _setFormAttributes() {
    const formConfig = this.config.form || {};
    for (let key in formConfig) {
      this.form.setAttribute(key, formConfig[key]);
    }
  }

  _createField(field) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("form-group");

    // Label (no aplicable para botones)
    if (field.label && field.tag !== "button") {
      const lbl = document.createElement("label");
      lbl.setAttribute("for", field.atributtes.id || field.atributtes.name);
      lbl.textContent = field.label;
      wrapper.appendChild(lbl);
    }

    const element = document.createElement(field.tag);

    // Asignar atributos
    for (let key in field.atributtes) {
      if (key !== "options" && key !== "text") {
        element.setAttribute(key, field.atributtes[key]);
      }
    }

    // Setear texto para botones
    if (field.tag === "button" && field.atributtes.text) {
      element.textContent = field.atributtes.text;
    }

    // Crear opciones si es select
    if (field.tag === "select" && Array.isArray(field.atributtes.options)) {
      field.atributtes.options.forEach((opt) => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.text;
        element.appendChild(option);
      });
    }

    wrapper.appendChild(element);
    this.form.appendChild(wrapper);

    return element;
  }

  _buildForm() {
    this._setFormAttributes();
    const fields = this.config.fields || [];
    this.fieldElements = fields.map((field) => this._createField(field));
    this.container.appendChild(this.form);
  }

  getFormElement() {
    return this.form;
  }

  onFormEvent(eventType, callback) {
    this.form.addEventListener(eventType, callback);
  }

  onFieldEvent(identifier, eventType, callback) {
    const field = this.fieldElements.find(
      (el) => el.name === identifier || el.id === identifier
    );
    if (field) {
      field.addEventListener(eventType, callback);
    }
  }

  onAllFieldsEvent(eventType, callback) {
    this.fieldElements.forEach((el) => el.addEventListener(eventType, callback));
  }
}
