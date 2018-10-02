/*! Built with http://stenciljs.com */
const{h:e}=window.xyz;class t{getInput(){return this.inputElement}getLabel(){return this.labelElement}render(){return e("label",{class:{TextField:!0,"TextField--disabled":this.disabled}},e("xyz-typography-caption",{class:"TextField__Label",ref:e=>this.labelElement=e},this.label,this.errorText?e("span",{class:"TextField__Label__ErrorMessage"}," · ",this.errorText):null,this.helperText&&!this.errorText?e("span",{class:"TextField__Label__HelperMessage"}," · ",this.helperText):null),e("input",{class:"TextField__Input",disabled:this.disabled,value:this.value,placeholder:this.placeholder,ref:e=>this.inputElement=e}))}static get is(){return"xyz-text-field"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{type:Boolean,attr:"disabled"},errorText:{type:String,attr:"error-text"},getInput:{method:!0},getLabel:{method:!0},helperText:{type:String,attr:"helper-text"},label:{type:String,attr:"label"},placeholder:{type:String,attr:"placeholder"},required:{type:Boolean,attr:"required"},value:{type:String,attr:"value"}}}static get style(){return":host{display:block}.TextField{display:block;background:rgba(0,0,0,.025);padding:6px 8px 8px;border-radius:6px;-webkit-box-shadow:inset 0 0 0 0 currentColor;box-shadow:inset 0 0 0 0 currentColor;cursor:text;-webkit-transition:.1s;transition:.1s}.TextField:focus-within{-webkit-box-shadow:inset 0 0 0 2px currentColor;box-shadow:inset 0 0 0 2px currentColor}.TextField--disabled{background:0 0;-webkit-box-shadow:inset 0 0 0 1px rgba(0,0,0,.025);box-shadow:inset 0 0 0 1px rgba(0,0,0,.025)}.TextField__Label{display:block}.TextField__Label__ErrorMessage{color:red}.TextField__Label__HelperMessage{color:var(--xyz-text-field-helper-message);opacity:.5}.TextField__Input{display:block;border:none;background:0 0;margin:0;padding:0;width:100%;font-size:.875rem}.TextField__Input:focus{outline:0}.TextField__Input::-webkit-input-placeholder{color:currentColor;opacity:.2}.TextField__Input::-moz-placeholder{color:currentColor;opacity:.2}.TextField__Input:-ms-input-placeholder{color:currentColor;opacity:.2}.TextField__Input:-moz-placeholder{color:currentColor;opacity:.2}slot{text-decoration:inherit}"}}class r{render(){return e("slot",null)}static get is(){return"xyz-typography-caption"}static get encapsulation(){return"shadow"}static get style(){return":host{font-family:\"Source Sans Pro\",Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;display:inline;font-size:.75rem;text-decoration:inherit;line-height:1rem}:host slot{text-decoration:inherit}"}}export{t as XyzTextField,r as XyzTypographyCaption};