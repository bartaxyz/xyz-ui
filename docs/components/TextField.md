# Text Field

<example-preview>
  <xyz-text-field
    label="Full Name"
    helper-text="Normal"
    placeholder="Satoshi Nakamoto"></xyz-text-field>
  <br />
  <xyz-text-field
    label="Full Name error"
    error-text="Error Text"></xyz-text-field>
  <br />
  <xyz-text-field
    label="Full Name"
    value="Something"
    helper-text="Disabled/Read Only"
    disabled></xyz-text-field>
</example-preview>

```html
<xyz-text-field
  label="Full Name"
  error="You cannot do that!"
/>
```

### Attributes

`label` &middot; Text that will appear as a label of the text field.

`value` &middot; Value that is passed down to `<input />`.

`error-text` &middot; Highlighted error message. This value overrides value inside `helperText`.

`helper-text` &middot; Dimmed helper message.

### Methods

`getInput` &middot; Returns reference to enclosed `<input />`.

```javascript
const textField = document.querySelector("xyz-text-field");
const textFieldInput = textField.getInput();
// <input ...
```

`getLabel` &middot; Returns reference to enclosed label DOM.

```javascript
const textField = document.querySelector("xyz-text-field");
const textFieldLabel = textField.getLabel();
// <xyz-typography-caption class="TextField__Label" ...
```
