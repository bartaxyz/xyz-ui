/*! Built with http://stenciljs.com */
const{h:l}=window.xyz;class e{render(){if(1===this.level)return l("h1",null,l("slot",null));if(2===this.level)return l("h2",null,l("slot",null));if(3===this.level)return l("h3",null,l("slot",null));if(4===this.level)return l("h4",null,l("slot",null));if(5===this.level)return l("h5",null,l("slot",null));if(6===this.level)return l("h6",null,l("slot",null));throw new Error('Attribute "level" needs to be a number from 1 to 6')}static get is(){return"xyz-typography-headline"}static get encapsulation(){return"shadow"}static get properties(){return{level:{type:Number,attr:"level"}}}static get style(){return":host{font-family:\"Source Sans Pro\",Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;display:block}h1,h2,h3,h4,h5,h6{line-height:1em;margin-top:.5em;margin-bottom:.5em}h1,h2{font-weight:400}h3,h4,h5,h6{font-weight:500}h1{font-size:6rem}h2{font-size:3.75rem}h3{font-size:3rem}h4{font-size:2.125rem}h5{font-size:1.5rem}h6{font-size:1.25rem}"}}export{e as XyzTypographyHeadline};