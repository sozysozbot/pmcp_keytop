const fs = require('fs');
for (let c of "sgh") { let u = c;
//for (let c of "0123456789") { let u = c;
// for (let c of "pbmcxztdnlkaeiuojw") { let u = c;
/*for (let [c, u] of [
    ['(', "left_paren"],
    ['.', "period"],
    [',', "comma"],
    ['?', "question"],
    ['!', "exclamation"],
    ['-', "hyphen"],
    ['"', "double_quote"],
    [')', "right_paren"],
]) {*/
    fs.writeFileSync(`key_${u}.svg`, `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="144"
   height="144"
   viewBox="0 0 38.099999 38.1"
   version="1.1"
   id="svg1"
   inkscape:version="1.3 (0e150ed6c4, 2023-07-21)"
   sodipodi:docname="key_${u}.svg"
   inkscape:export-filename="key_${u}.png"
   inkscape:export-xdpi="96"
   inkscape:export-ydpi="96"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     inkscape:zoom="1.42875"
     inkscape:cx="103.93701"
     inkscape:cy="55.643045"
     inkscape:window-width="1280"
     inkscape:window-height="729"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs1" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <rect
       style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:6.00001"
       id="rect1"
       width="38.099998"
       height="38.099998"
       x="0"
       y="0"
       ry="2.937465e-16" />
    <text
       xml:space="preserve"
       style="font-size:25.4px;font-family:Cica;-inkscape-font-specification:Cica;fill:#000000;fill-opacity:1;stroke:none;stroke-width:6.00001"
       x="14.122399"
       y="26.771599"
       id="text1"><tspan
         sodipodi:role="line"
         id="tspan1"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:cutapijot;-inkscape-font-specification:cutapijot;fill:#ffffff;stroke-width:6"
         x="14.122399"
         y="26.771599">${c}</tspan></text>
  </g>
</svg>
`)
}