# DynamicFormsJS

DynamicFormsJS is a lightweight and flexible JavaScript library to create **dynamic and fully customizable HTML forms** from a simple configuration object. It supports all input types, textareas, selects, checkboxes, radios, file uploads, buttons, and more. It also allows handling events like `submit`, `change`, and `input` easily.

---

## Features

- Create forms dynamically using a **single configuration object**
- Support for **all HTML input types**:
  - `text`, `email`, `password`, `url`, `tel`, `search`, `number`, `range`
  - `date`, `time`, `month`, `week`, `color`
  - `textarea`, `select`, `checkbox`, `radio`, `file`
- Add buttons (`submit`, `reset`, `button`) directly in the configuration
- Set attributes like `min`, `max`, `step`, `placeholder`, `checked`, `id`, `class`, etc.
- Automatically generate **labels linked to inputs**
- Register events on:
  - The form (`submit`, `reset`)
  - Specific fields (`change`, `input`)
  - All fields simultaneously
- Fully modular and reusable

---

## Installation

Simply include the module in your project:

```html
<script type="module" src="path/to/dynamic-form.js"></script>
````

Or use ES6 import:

```js
import { DynamicForm } from './dynamic-form.js';
```

---

## Usage

### 1. Create a form configuration

```js
const FORM_CONFIG = {
  form: {
    method: "POST",
    action: "/register",
    class: "my-form",
    id: "exampleForm",
  },
  fields: [
    {
      tag: "input",
      label: "Full Name",
      atributtes: {
        type: "text",
        name: "full_name",
        class: "",
        placeholder: "Enter your full name",
        id: "full_name",
      },
    },
    {
      tag: "input",
      label: "Email Address",
      atributtes: {
        type: "email",
        name: "email",
        class: "",
        placeholder: "Enter your email",
        id: "email",
      },
    },
    {
      tag: "textarea",
      label: "Biography",
      atributtes: {
        name: "biography",
        class: "",
        placeholder: "Write something about yourself",
        rows: 4,
        id: "biography",
      },
    },
    {
      tag: "select",
      label: "Country",
      atributtes: {
        name: "country",
        class: "",
        id: "country",
        options: [
          { value: "us", text: "United States" },
          { value: "uk", text: "United Kingdom" },
          { value: "ca", text: "Canada" },
        ],
      },
    },
    {
      tag: "input",
      label: "Subscribe to Newsletter",
      atributtes: {
        type: "checkbox",
        name: "subscribe",
        class: "",
        id: "subscribe",
        checked: true,
      },
    },
    {
      tag: "button",
      label: "",
      atributtes: {
        type: "submit",
        class: "btn btn-primary",
        text: "Submit",
      },
    },
  ],
};
```

---

### 2. Instantiate the form

```js
const myForm = new DynamicForm(FORM_CONFIG, document.body);
```

This will automatically render the form inside the specified container (defaults to `document.body`).

---

### 3. Register events

#### Form submit

```js
myForm.onFormEvent("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted!");
});
```

#### Field-specific events

```js
myForm.onFieldEvent("email", "change", (e) => {
  console.log("Email changed:", e.target.value);
});
```

#### All fields events

```js
myForm.onAllFieldsEvent("input", (e) => {
  console.log(`${e.target.name} changed to ${e.target.value}`);
});
```

---

### 4. Access the form element

```js
const formElement = myForm.getFormElement();
```

You can now manipulate it like a normal DOM element.

---

## Supported Field Types

| Field Type | Description                          |
| ---------- | ------------------------------------ |
| `text`     | Single line text input               |
| `email`    | Email input                          |
| `password` | Password input                       |
| `url`      | URL input                            |
| `tel`      | Telephone input                      |
| `search`   | Search input                         |
| `number`   | Number input (with min, max, step)   |
| `range`    | Range slider (with min, max, step)   |
| `date`     | Date input                           |
| `time`     | Time input                           |
| `month`    | Month picker                         |
| `week`     | Week picker                          |
| `color`    | Color picker                         |
| `textarea` | Multi-line text input                |
| `select`   | Dropdown select (with options array) |
| `checkbox` | Single checkbox                      |
| `radio`    | Radio button (group by `name`)       |
| `file`     | File upload                          |
| `button`   | Generic button                       |
| `submit`   | Submit button                        |
| `reset`    | Reset button                         |

---

## Advantages

* Fully dynamic: add, remove, or modify fields by updating the configuration object
* Handles all types of inputs including complex ones like `range`, `file`, and `color`
* Provides **clean API** for attaching event listeners
* Easy to extend with **custom CSS classes** for styling
* Perfect for dynamic forms, admin dashboards, or configuration-driven applications

---

## Example: Full Feature Form

```js
// Import DynamicForm
import { DynamicForm } from './dynamic-form.js';

const myForm = new DynamicForm(FULL_FEATURE_FORM_CONFIG, document.body);
myForm.onFormEvent("submit", (e) => e.preventDefault());
```

You can check `FULL_FEATURE_FORM_CONFIG` for a complete example with all types of fields, ranges, min/max/step, checkboxes, radios, selects, file upload, and buttons.

---

## License

MIT License. Free to use in personal and commercial projects.
