/* *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/// <reference no-default-lib="true"/>

/// <reference path="lib.es-api.d.ts" />

/// <reference path="lib.es-api-ext.d.ts" />

/////////////////////////////
/// IE9 DOM APIs 
/////////////////////////////

interface PositionOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
}

interface NavigatorID {
    appVersion: string;
    appName: string;
    userAgent: string;
    platform: string;
}

interface HTMLTableElement extends HTMLElement, MSDataBindingTableExtensions, MSDataBindingExtensions, DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {
    width: string;
    borderColorLight: any;
    cellSpacing: string;
    tFoot: HTMLTableSectionElement;
    frame: string;
    borderColor: any;
    rows: HTMLCollection;
    rules: string;
    cols: number;
    summary: string;
    caption: HTMLTableCaptionElement;
    tBodies: HTMLCollection;
    tHead: HTMLTableSectionElement;
    align: string;
    cells: HTMLCollection;
    height: any;
    cellPadding: string;
    border: string;
    borderColorDark: any;
    deleteRow( index?: number ): void;
    createTBody(): HTMLElement;
    deleteCaption(): void;
    insertRow( index?: number ): HTMLElement;
    deleteTFoot(): void;
    createTHead(): HTMLElement;
    deleteTHead(): void;
    createCaption(): HTMLElement;
    moveRow( indexFrom?: number, indexTo?: number ): Object;
    createTFoot(): HTMLElement;
}
declare var HTMLTableElement: {
    prototype: HTMLTableElement;
    new (): HTMLTableElement;
}

interface TreeWalker {
    whatToShow: number;
    filter: NodeFilter;
    root: Node;
    currentNode: Node;
    expandEntityReferences: boolean;
    previousSibling(): Node;
    lastChild(): Node;
    nextSibling(): Node;
    nextNode(): Node;
    parentNode(): Node;
    firstChild(): Node;
    previousNode(): Node;
}
declare var TreeWalker: {
    prototype: TreeWalker;
    new (): TreeWalker;
}

interface GetSVGDocument {
    getSVGDocument(): Document;
}

interface SVGPathSegCurvetoQuadraticRel extends SVGPathSeg {
    y: number;
    y1: number;
    x: number;
    x1: number;
}
declare var SVGPathSegCurvetoQuadraticRel: {
    prototype: SVGPathSegCurvetoQuadraticRel;
    new (): SVGPathSegCurvetoQuadraticRel;
}

interface Performance {
    navigation: PerformanceNavigation;
    timing: PerformanceTiming;
    getEntriesByType( entryType: string ): any;
    toJSON(): any;
    getMeasures( measureName?: string ): any;
    clearMarks( markName?: string ): void;
    getMarks( markName?: string ): any;
    clearResourceTimings(): void;
    mark( markName: string ): void;
    measure( measureName: string, startMarkName?: string, endMarkName?: string ): void;
    getEntriesByName( name: string, entryType?: string ): any;
    getEntries(): any;
    clearMeasures( measureName?: string ): void;
    setResourceTimingBufferSize( maxSize: number ): void;
}
declare var Performance: {
    prototype: Performance;
    new (): Performance;
}

interface MSDataBindingTableExtensions {
    dataPageSize: number;
    nextPage(): void;
    firstPage(): void;
    refresh(): void;
    previousPage(): void;
    lastPage(): void;
}

interface CompositionEvent extends UIEvent {
    data: string;
    locale: string;
    initCompositionEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, locale: string ): void;
}
declare var CompositionEvent: {
    prototype: CompositionEvent;
    new (): CompositionEvent;
}

interface WindowTimers {
    clearTimeout( handle: number ): void;
    setTimeout( handler: any, timeout?: any, ...args: any[] ): number;
    clearInterval( handle: number ): void;
    setInterval( handler: any, timeout?: any, ...args: any[] ): number;
}

interface SVGMarkerElement extends SVGElement, SVGStylable, SVGLangSpace, SVGFitToViewBox, SVGExternalResourcesRequired {
    orientType: SVGAnimatedEnumeration;
    markerUnits: SVGAnimatedEnumeration;
    markerWidth: SVGAnimatedLength;
    markerHeight: SVGAnimatedLength;
    orientAngle: SVGAnimatedAngle;
    refY: SVGAnimatedLength;
    refX: SVGAnimatedLength;
    setOrientToAngle( angle: SVGAngle ): void;
    setOrientToAuto(): void;
    SVG_MARKER_ORIENT_UNKNOWN: number;
    SVG_MARKER_ORIENT_ANGLE: number;
    SVG_MARKERUNITS_UNKNOWN: number;
    SVG_MARKERUNITS_STROKEWIDTH: number;
    SVG_MARKER_ORIENT_AUTO: number;
    SVG_MARKERUNITS_USERSPACEONUSE: number;
}
declare var SVGMarkerElement: {
    prototype: SVGMarkerElement;
    new (): SVGMarkerElement;
    SVG_MARKER_ORIENT_UNKNOWN: number;
    SVG_MARKER_ORIENT_ANGLE: number;
    SVG_MARKERUNITS_UNKNOWN: number;
    SVG_MARKERUNITS_STROKEWIDTH: number;
    SVG_MARKER_ORIENT_AUTO: number;
    SVG_MARKERUNITS_USERSPACEONUSE: number;
}

interface CSSStyleDeclaration {
    backgroundAttachment: string;
    visibility: string;
    textAlignLast: string;
    borderRightStyle: string;
    counterIncrement: string;
    orphans: string;
    cssText: string;
    borderStyle: string;
    pointerEvents: string;
    borderTopColor: string;
    markerEnd: string;
    textIndent: string;
    listStyleImage: string;
    cursor: string;
    listStylePosition: string;
    wordWrap: string;
    borderTopStyle: string;
    alignmentBaseline: string;
    opacity: string;
    direction: string;
    strokeMiterlimit: string;
    maxWidth: string;
    color: string;
    clip: string;
    borderRightWidth: string;
    verticalAlign: string;
    overflow: string;
    mask: string;
    borderLeftStyle: string;
    emptyCells: string;
    stopOpacity: string;
    paddingRight: string;
    parentRule: CSSRule;
    background: string;
    boxSizing: string;
    textJustify: string;
    height: string;
    paddingTop: string;
    length: number;
    right: string;
    baselineShift: string;
    borderLeft: string;
    widows: string;
    lineHeight: string;
    left: string;
    textUnderlinePosition: string;
    glyphOrientationHorizontal: string;
    display: string;
    textAnchor: string;
    cssFloat: string;
    strokeDasharray: string;
    rubyAlign: string;
    fontSizeAdjust: string;
    borderLeftColor: string;
    backgroundImage: string;
    listStyleType: string;
    strokeWidth: string;
    textOverflow: string;
    fillRule: string;
    borderBottomColor: string;
    zIndex: string;
    position: string;
    listStyle: string;
    msTransformOrigin: string;
    dominantBaseline: string;
    overflowY: string;
    fill: string;
    captionSide: string;
    borderCollapse: string;
    boxShadow: string;
    quotes: string;
    tableLayout: string;
    unicodeBidi: string;
    borderBottomWidth: string;
    backgroundSize: string;
    textDecoration: string;
    strokeDashoffset: string;
    fontSize: string;
    border: string;
    pageBreakBefore: string;
    borderTopRightRadius: string;
    msTransform: string;
    borderBottomLeftRadius: string;
    textTransform: string;
    rubyPosition: string;
    strokeLinejoin: string;
    clipPath: string;
    borderRightColor: string;
    fontFamily: string;
    clear: string;
    content: string;
    backgroundClip: string;
    marginBottom: string;
    counterReset: string;
    outlineWidth: string;
    marginRight: string;
    paddingLeft: string;
    borderBottom: string;
    wordBreak: string;
    marginTop: string;
    top: string;
    fontWeight: string;
    borderRight: string;
    width: string;
    kerning: string;
    pageBreakAfter: string;
    borderBottomStyle: string;
    fontStretch: string;
    padding: string;
    strokeOpacity: string;
    markerStart: string;
    bottom: string;
    borderLeftWidth: string;
    clipRule: string;
    backgroundPosition: string;
    backgroundColor: string;
    pageBreakInside: string;
    backgroundOrigin: string;
    strokeLinecap: string;
    borderTopWidth: string;
    outlineStyle: string;
    borderTop: string;
    outlineColor: string;
    paddingBottom: string;
    marginLeft: string;
    font: string;
    outline: string;
    wordSpacing: string;
    maxHeight: string;
    fillOpacity: string;
    letterSpacing: string;
    borderSpacing: string;
    backgroundRepeat: string;
    borderRadius: string;
    borderWidth: string;
    borderBottomRightRadius: string;
    whiteSpace: string;
    fontStyle: string;
    minWidth: string;
    stopColor: string;
    borderTopLeftRadius: string;
    borderColor: string;
    marker: string;
    glyphOrientationVertical: string;
    markerMid: string;
    fontVariant: string;
    minHeight: string;
    stroke: string;
    rubyOverhang: string;
    overflowX: string;
    textAlign: string;
    margin: string;
    getPropertyPriority( propertyName: string ): string;
    getPropertyValue( propertyName: string ): string;
    removeProperty( propertyName: string ): string;
    item( index: number ): string;
    [index: number]: string;
    setProperty( propertyName: string, value: string, priority?: string ): void;
}
declare var CSSStyleDeclaration: {
    prototype: CSSStyleDeclaration;
    new (): CSSStyleDeclaration;
}

interface SVGGElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
}
declare var SVGGElement: {
    prototype: SVGGElement;
    new (): SVGGElement;
}

interface MSStyleCSSProperties extends MSCSSProperties {
    pixelWidth: number;
    posHeight: number;
    posLeft: number;
    pixelTop: number;
    pixelBottom: number;
    textDecorationNone: boolean;
    pixelLeft: number;
    posTop: number;
    posBottom: number;
    textDecorationOverline: boolean;
    posWidth: number;
    textDecorationLineThrough: boolean;
    pixelHeight: number;
    textDecorationBlink: boolean;
    posRight: number;
    pixelRight: number;
    textDecorationUnderline: boolean;
}
declare var MSStyleCSSProperties: {
    prototype: MSStyleCSSProperties;
    new (): MSStyleCSSProperties;
}

interface Navigator extends NavigatorID, NavigatorOnLine, NavigatorContentUtils, MSNavigatorExtensions, NavigatorGeolocation, MSNavigatorDoNotTrack, NavigatorStorageUtils {
}
declare var Navigator: {
    prototype: Navigator;
    new (): Navigator;
}

interface SVGPathSegCurvetoCubicSmoothAbs extends SVGPathSeg {
    y: number;
    x2: number;
    x: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicSmoothAbs: {
    prototype: SVGPathSegCurvetoCubicSmoothAbs;
    new (): SVGPathSegCurvetoCubicSmoothAbs;
}

interface SVGZoomEvent extends UIEvent {
    zoomRectScreen: SVGRect;
    previousScale: number;
    newScale: number;
    previousTranslate: SVGPoint;
    newTranslate: SVGPoint;
}
declare var SVGZoomEvent: {
    prototype: SVGZoomEvent;
    new (): SVGZoomEvent;
}

interface NodeSelector {
    querySelectorAll( selectors: string ): NodeList;
    querySelector( selectors: string ): Element;
}

interface HTMLTableDataCellElement extends HTMLTableCellElement {
}
declare var HTMLTableDataCellElement: {
    prototype: HTMLTableDataCellElement;
    new (): HTMLTableDataCellElement;
}

interface HTMLBaseElement extends HTMLElement {
    target: string;
    href: string;
}
declare var HTMLBaseElement: {
    prototype: HTMLBaseElement;
    new (): HTMLBaseElement;
}

interface ClientRect {
    left: number;
    width: number;
    right: number;
    top: number;
    bottom: number;
    height: number;
}
declare var ClientRect: {
    prototype: ClientRect;
    new (): ClientRect;
}

interface PositionErrorCallback {
    ( error: PositionError ): void;
}

interface DOMImplementation {
    createDocumentType( qualifiedName: string, publicId: string, systemId: string ): DocumentType;
    createDocument( namespaceURI: string, qualifiedName: string, doctype: DocumentType ): Document;
    hasFeature( feature: string, version?: string ): boolean;
    createHTMLDocument( title: string ): Document;
}
declare var DOMImplementation: {
    prototype: DOMImplementation;
    new (): DOMImplementation;
}

interface SVGUnitTypes {
    SVG_UNIT_TYPE_UNKNOWN: number;
    SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    SVG_UNIT_TYPE_USERSPACEONUSE: number;
}
declare var SVGUnitTypes: {
    prototype: SVGUnitTypes;
    new (): SVGUnitTypes;
    SVG_UNIT_TYPE_UNKNOWN: number;
    SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    SVG_UNIT_TYPE_USERSPACEONUSE: number;
}

interface Element extends Node, NodeSelector, ElementTraversal {
    scrollTop: number;
    clientLeft: number;
    scrollLeft: number;
    tagName: string;
    clientWidth: number;
    scrollWidth: number;
    clientHeight: number;
    clientTop: number;
    scrollHeight: number;
    getAttribute( name?: string ): string;
    getElementsByTagNameNS( namespaceURI: string, localName: string ): NodeList;
    hasAttributeNS( namespaceURI: string, localName: string ): boolean;
    getBoundingClientRect(): ClientRect;
    getAttributeNS( namespaceURI: string, localName: string ): string;
    getAttributeNodeNS( namespaceURI: string, localName: string ): Attr;
    setAttributeNodeNS( newAttr: Attr ): Attr;
    msMatchesSelector( selectors: string ): boolean;
    hasAttribute( name: string ): boolean;
    removeAttribute( name?: string ): void;
    setAttributeNS( namespaceURI: string, qualifiedName: string, value: string ): void;
    getAttributeNode( name: string ): Attr;
    fireEvent( eventName: string, eventObj?: any ): boolean;
    getElementsByTagName( name: string ): NodeList;
    getElementsByTagName( name: "a" ): NodeListOf<HTMLAnchorElement>;
    getElementsByTagName( name: "abbr" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "address" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "area" ): NodeListOf<HTMLAreaElement>;
    getElementsByTagName( name: "article" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "aside" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "audio" ): NodeListOf<HTMLAudioElement>;
    getElementsByTagName( name: "b" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "base" ): NodeListOf<HTMLBaseElement>;
    getElementsByTagName( name: "bdi" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "bdo" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "blockquote" ): NodeListOf<HTMLQuoteElement>;
    getElementsByTagName( name: "body" ): NodeListOf<HTMLBodyElement>;
    getElementsByTagName( name: "br" ): NodeListOf<HTMLBRElement>;
    getElementsByTagName( name: "button" ): NodeListOf<HTMLButtonElement>;
    getElementsByTagName( name: "canvas" ): NodeListOf<HTMLCanvasElement>;
    getElementsByTagName( name: "caption" ): NodeListOf<HTMLTableCaptionElement>;
    getElementsByTagName( name: "cite" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "code" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "col" ): NodeListOf<HTMLTableColElement>;
    getElementsByTagName( name: "colgroup" ): NodeListOf<HTMLTableColElement>;
    getElementsByTagName( name: "datalist" ): NodeListOf<HTMLDataListElement>;
    getElementsByTagName( name: "dd" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "del" ): NodeListOf<HTMLModElement>;
    getElementsByTagName( name: "dfn" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "div" ): NodeListOf<HTMLDivElement>;
    getElementsByTagName( name: "dl" ): NodeListOf<HTMLDListElement>;
    getElementsByTagName( name: "dt" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "em" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "embed" ): NodeListOf<HTMLEmbedElement>;
    getElementsByTagName( name: "fieldset" ): NodeListOf<HTMLFieldSetElement>;
    getElementsByTagName( name: "figcaption" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "figure" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "footer" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "form" ): NodeListOf<HTMLFormElement>;
    getElementsByTagName( name: "h1" ): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName( name: "h2" ): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName( name: "h3" ): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName( name: "h4" ): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName( name: "h5" ): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName( name: "h6" ): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName( name: "head" ): NodeListOf<HTMLHeadElement>;
    getElementsByTagName( name: "header" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "hgroup" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "hr" ): NodeListOf<HTMLHRElement>;
    getElementsByTagName( name: "html" ): NodeListOf<HTMLHtmlElement>;
    getElementsByTagName( name: "i" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "iframe" ): NodeListOf<HTMLIFrameElement>;
    getElementsByTagName( name: "img" ): NodeListOf<HTMLImageElement>;
    getElementsByTagName( name: "input" ): NodeListOf<HTMLInputElement>;
    getElementsByTagName( name: "ins" ): NodeListOf<HTMLModElement>;
    getElementsByTagName( name: "kbd" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "label" ): NodeListOf<HTMLLabelElement>;
    getElementsByTagName( name: "legend" ): NodeListOf<HTMLLegendElement>;
    getElementsByTagName( name: "li" ): NodeListOf<HTMLLIElement>;
    getElementsByTagName( name: "link" ): NodeListOf<HTMLLinkElement>;
    getElementsByTagName( name: "main" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "map" ): NodeListOf<HTMLMapElement>;
    getElementsByTagName( name: "mark" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "menu" ): NodeListOf<HTMLMenuElement>;
    getElementsByTagName( name: "meta" ): NodeListOf<HTMLMetaElement>;
    getElementsByTagName( name: "nav" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "noscript" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "object" ): NodeListOf<HTMLObjectElement>;
    getElementsByTagName( name: "ol" ): NodeListOf<HTMLOListElement>;
    getElementsByTagName( name: "optgroup" ): NodeListOf<HTMLOptGroupElement>;
    getElementsByTagName( name: "option" ): NodeListOf<HTMLOptionElement>;
    getElementsByTagName( name: "p" ): NodeListOf<HTMLParagraphElement>;
    getElementsByTagName( name: "param" ): NodeListOf<HTMLParamElement>;
    getElementsByTagName( name: "pre" ): NodeListOf<HTMLPreElement>;
    getElementsByTagName( name: "progress" ): NodeListOf<HTMLProgressElement>;
    getElementsByTagName( name: "q" ): NodeListOf<HTMLQuoteElement>;
    getElementsByTagName( name: "rp" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "rt" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "ruby" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "s" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "samp" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "script" ): NodeListOf<HTMLScriptElement>;
    getElementsByTagName( name: "section" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "select" ): NodeListOf<HTMLSelectElement>;
    getElementsByTagName( name: "small" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "source" ): NodeListOf<HTMLSourceElement>;
    getElementsByTagName( name: "span" ): NodeListOf<HTMLSpanElement>;
    getElementsByTagName( name: "strong" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "style" ): NodeListOf<HTMLStyleElement>;
    getElementsByTagName( name: "sub" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "summary" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "sup" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "table" ): NodeListOf<HTMLTableElement>;
    getElementsByTagName( name: "tbody" ): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName( name: "td" ): NodeListOf<HTMLTableDataCellElement>;
    getElementsByTagName( name: "textarea" ): NodeListOf<HTMLTextAreaElement>;
    getElementsByTagName( name: "tfoot" ): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName( name: "th" ): NodeListOf<HTMLTableHeaderCellElement>;
    getElementsByTagName( name: "thead" ): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName( name: "title" ): NodeListOf<HTMLTitleElement>;
    getElementsByTagName( name: "tr" ): NodeListOf<HTMLTableRowElement>;
    getElementsByTagName( name: "track" ): NodeListOf<HTMLTrackElement>;
    getElementsByTagName( name: "u" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "ul" ): NodeListOf<HTMLUListElement>;
    getElementsByTagName( name: "var" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "video" ): NodeListOf<HTMLVideoElement>;
    getElementsByTagName( name: "wbr" ): NodeListOf<HTMLElement>;
    getClientRects(): ClientRectList;
    setAttributeNode( newAttr: Attr ): Attr;
    removeAttributeNode( oldAttr: Attr ): Attr;
    setAttribute( name?: string, value?: string ): void;
    removeAttributeNS( namespaceURI: string, localName: string ): void;
}
declare var Element: {
    prototype: Element;
    new (): Element;
}

interface HTMLNextIdElement extends HTMLElement {
    n: string;
}
declare var HTMLNextIdElement: {
    prototype: HTMLNextIdElement;
    new (): HTMLNextIdElement;
}

interface SVGPathSegMovetoRel extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegMovetoRel: {
    prototype: SVGPathSegMovetoRel;
    new (): SVGPathSegMovetoRel;
}

interface SVGLineElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    y1: SVGAnimatedLength;
    x2: SVGAnimatedLength;
    x1: SVGAnimatedLength;
    y2: SVGAnimatedLength;
}
declare var SVGLineElement: {
    prototype: SVGLineElement;
    new (): SVGLineElement;
}

interface HTMLParagraphElement extends HTMLElement, DOML2DeprecatedTextFlowControl {
    align: string;
}
declare var HTMLParagraphElement: {
    prototype: HTMLParagraphElement;
    new (): HTMLParagraphElement;
}

interface HTMLAreasCollection extends HTMLCollection {
    remove( index?: number ): void;
    add( element: HTMLElement, before?: any ): void;
}
declare var HTMLAreasCollection: {
    prototype: HTMLAreasCollection;
    new (): HTMLAreasCollection;
}

interface SVGDescElement extends SVGElement, SVGStylable, SVGLangSpace {
}
declare var SVGDescElement: {
    prototype: SVGDescElement;
    new (): SVGDescElement;
}

interface Node extends EventTarget {
    nodeType: number;
    previousSibling: Node;
    localName: string;
    namespaceURI: string;
    textContent: string;
    parentNode: Node;
    nextSibling: Node;
    nodeValue: string;
    lastChild: Node;
    childNodes: NodeList;
    nodeName: string;
    ownerDocument: Document;
    attributes: NamedNodeMap;
    firstChild: Node;
    prefix: string;
    removeChild( oldChild: Node ): Node;
    appendChild( newChild: Node ): Node;
    isSupported( feature: string, version: string ): boolean;
    isEqualNode( arg: Node ): boolean;
    lookupPrefix( namespaceURI: string ): string;
    isDefaultNamespace( namespaceURI: string ): boolean;
    compareDocumentPosition( other: Node ): number;
    normalize(): void;
    isSameNode( other: Node ): boolean;
    hasAttributes(): boolean;
    lookupNamespaceURI( prefix: string ): string;
    cloneNode( deep?: boolean ): Node;
    hasChildNodes(): boolean;
    replaceChild( newChild: Node, oldChild: Node ): Node;
    insertBefore( newChild: Node, refChild?: Node ): Node;
    ENTITY_REFERENCE_NODE: number;
    ATTRIBUTE_NODE: number;
    DOCUMENT_FRAGMENT_NODE: number;
    TEXT_NODE: number;
    ELEMENT_NODE: number;
    COMMENT_NODE: number;
    DOCUMENT_POSITION_DISCONNECTED: number;
    DOCUMENT_POSITION_CONTAINED_BY: number;
    DOCUMENT_POSITION_CONTAINS: number;
    DOCUMENT_TYPE_NODE: number;
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    DOCUMENT_NODE: number;
    ENTITY_NODE: number;
    PROCESSING_INSTRUCTION_NODE: number;
    CDATA_SECTION_NODE: number;
    NOTATION_NODE: number;
    DOCUMENT_POSITION_FOLLOWING: number;
    DOCUMENT_POSITION_PRECEDING: number;
}
declare var Node: {
    prototype: Node;
    new (): Node;
    ENTITY_REFERENCE_NODE: number;
    ATTRIBUTE_NODE: number;
    DOCUMENT_FRAGMENT_NODE: number;
    TEXT_NODE: number;
    ELEMENT_NODE: number;
    COMMENT_NODE: number;
    DOCUMENT_POSITION_DISCONNECTED: number;
    DOCUMENT_POSITION_CONTAINED_BY: number;
    DOCUMENT_POSITION_CONTAINS: number;
    DOCUMENT_TYPE_NODE: number;
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    DOCUMENT_NODE: number;
    ENTITY_NODE: number;
    PROCESSING_INSTRUCTION_NODE: number;
    CDATA_SECTION_NODE: number;
    NOTATION_NODE: number;
    DOCUMENT_POSITION_FOLLOWING: number;
    DOCUMENT_POSITION_PRECEDING: number;
}

interface SVGPathSegCurvetoQuadraticSmoothRel extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegCurvetoQuadraticSmoothRel: {
    prototype: SVGPathSegCurvetoQuadraticSmoothRel;
    new (): SVGPathSegCurvetoQuadraticSmoothRel;
}

interface DOML2DeprecatedListSpaceReduction {
    compact: boolean;
}

interface MSScriptHost {
}
declare var MSScriptHost: {
    prototype: MSScriptHost;
    new (): MSScriptHost;
}

interface SVGClipPathElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    clipPathUnits: SVGAnimatedEnumeration;
}
declare var SVGClipPathElement: {
    prototype: SVGClipPathElement;
    new (): SVGClipPathElement;
}

interface MouseEvent extends UIEvent {
    toElement: Element;
    layerY: number;
    fromElement: Element;
    which: number;
    pageX: number;
    offsetY: number;
    x: number;
    y: number;
    metaKey: boolean;
    altKey: boolean;
    ctrlKey: boolean;
    offsetX: number;
    screenX: number;
    clientY: number;
    shiftKey: boolean;
    layerX: number;
    screenY: number;
    relatedTarget: EventTarget;
    button: number;
    pageY: number;
    buttons: number;
    clientX: number;
    initMouseEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget ): void;
    getModifierState( keyArg: string ): boolean;
}
declare var MouseEvent: {
    prototype: MouseEvent;
    new (): MouseEvent;
}

interface RangeException {
    code: number;
    message: string;
    toString(): string;
    INVALID_NODE_TYPE_ERR: number;
    BAD_BOUNDARYPOINTS_ERR: number;
}
declare var RangeException: {
    prototype: RangeException;
    new (): RangeException;
    INVALID_NODE_TYPE_ERR: number;
    BAD_BOUNDARYPOINTS_ERR: number;
}

interface SVGTextPositioningElement extends SVGTextContentElement {
    y: SVGAnimatedLengthList;
    rotate: SVGAnimatedNumberList;
    dy: SVGAnimatedLengthList;
    x: SVGAnimatedLengthList;
    dx: SVGAnimatedLengthList;
}
declare var SVGTextPositioningElement: {
    prototype: SVGTextPositioningElement;
    new (): SVGTextPositioningElement;
}

interface HTMLAppletElement extends HTMLElement, DOML2DeprecatedMarginStyle, DOML2DeprecatedBorderStyle, DOML2DeprecatedAlignmentStyle, MSDataBindingExtensions, MSDataBindingRecordSetExtensions {
    width: number;
    codeType: string;
    object: string;
    form: HTMLFormElement;
    code: string;
    archive: string;
    alt: string;
    standby: string;
    classid: string;
    name: string;
    useMap: string;
    data: string;
    height: string;
    altHtml: string;
    contentDocument: Document;
    codeBase: string;
    declare: boolean;
    type: string;
    BaseHref: string;
}
declare var HTMLAppletElement: {
    prototype: HTMLAppletElement;
    new (): HTMLAppletElement;
}

interface TextMetrics {
    width: number;
}
declare var TextMetrics: {
    prototype: TextMetrics;
    new (): TextMetrics;
}

interface DocumentEvent {
    createEvent( eventInterface: string ): Event;
}

interface HTMLOListElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {
    start: number;
}
declare var HTMLOListElement: {
    prototype: HTMLOListElement;
    new (): HTMLOListElement;
}

interface SVGPathSegLinetoVerticalRel extends SVGPathSeg {
    y: number;
}
declare var SVGPathSegLinetoVerticalRel: {
    prototype: SVGPathSegLinetoVerticalRel;
    new (): SVGPathSegLinetoVerticalRel;
}

interface SVGAnimatedString {
    animVal: string;
    baseVal: string;
}
declare var SVGAnimatedString: {
    prototype: SVGAnimatedString;
    new (): SVGAnimatedString;
}

interface CDATASection extends Text {
}
declare var CDATASection: {
    prototype: CDATASection;
    new (): CDATASection;
}

interface StyleMedia {
    type: string;
    matchMedium( mediaquery: string ): boolean;
}
declare var StyleMedia: {
    prototype: StyleMedia;
    new (): StyleMedia;
}

interface HTMLSelectElement extends HTMLElement, MSHTMLCollectionExtensions, MSDataBindingExtensions {
    options: HTMLSelectElement;
    value: string;
    form: HTMLFormElement;
    name: string;
    size: number;
    length: number;
    selectedIndex: number;
    multiple: boolean;
    type: string;
    remove( index?: number ): void;
    add( element: HTMLElement, before?: any ): void;
    item( name?: any, index?: any ): any;
    namedItem( name: string ): any;
    [name: string]: any;
}
declare var HTMLSelectElement: {
    prototype: HTMLSelectElement;
    new (): HTMLSelectElement;
}

interface TextRange {
    boundingLeft: number;
    htmlText: string;
    offsetLeft: number;
    boundingWidth: number;
    boundingHeight: number;
    boundingTop: number;
    text: string;
    offsetTop: number;
    moveToPoint( x: number, y: number ): void;
    queryCommandValue( cmdID: string ): any;
    getBookmark(): string;
    move( unit: string, count?: number ): number;
    queryCommandIndeterm( cmdID: string ): boolean;
    scrollIntoView( fStart?: boolean ): void;
    findText( string: string, count?: number, flags?: number ): boolean;
    execCommand( cmdID: string, showUI?: boolean, value?: any ): boolean;
    getBoundingClientRect(): ClientRect;
    moveToBookmark( bookmark: string ): boolean;
    isEqual( range: TextRange ): boolean;
    duplicate(): TextRange;
    collapse( start?: boolean ): void;
    queryCommandText( cmdID: string ): string;
    select(): void;
    pasteHTML( html: string ): void;
    inRange( range: TextRange ): boolean;
    moveEnd( unit: string, count?: number ): number;
    getClientRects(): ClientRectList;
    moveStart( unit: string, count?: number ): number;
    parentElement(): Element;
    queryCommandState( cmdID: string ): boolean;
    compareEndPoints( how: string, sourceRange: TextRange ): number;
    execCommandShowHelp( cmdID: string ): boolean;
    moveToElementText( element: Element ): void;
    expand( Unit: string ): boolean;
    queryCommandSupported( cmdID: string ): boolean;
    setEndPoint( how: string, SourceRange: TextRange ): void;
    queryCommandEnabled( cmdID: string ): boolean;
}
declare var TextRange: {
    prototype: TextRange;
    new (): TextRange;
}

interface SVGTests {
    requiredFeatures: SVGStringList;
    requiredExtensions: SVGStringList;
    systemLanguage: SVGStringList;
    hasExtension( extension: string ): boolean;
}

interface HTMLBlockElement extends HTMLElement, DOML2DeprecatedTextFlowControl {
    width: number;
    cite: string;
}
declare var HTMLBlockElement: {
    prototype: HTMLBlockElement;
    new (): HTMLBlockElement;
}

interface CSSStyleSheet extends StyleSheet {
    owningElement: Element;
    imports: StyleSheetList;
    isAlternate: boolean;
    rules: MSCSSRuleList;
    isPrefAlternate: boolean;
    readOnly: boolean;
    cssText: string;
    ownerRule: CSSRule;
    href: string;
    cssRules: CSSRuleList;
    id: string;
    pages: StyleSheetPageList;
    addImport( bstrURL: string, lIndex?: number ): number;
    addPageRule( bstrSelector: string, bstrStyle: string, lIndex?: number ): number;
    insertRule( rule: string, index?: number ): number;
    removeRule( lIndex: number ): void;
    deleteRule( index?: number ): void;
    addRule( bstrSelector: string, bstrStyle?: string, lIndex?: number ): number;
    removeImport( lIndex: number ): void;
}
declare var CSSStyleSheet: {
    prototype: CSSStyleSheet;
    new (): CSSStyleSheet;
}

interface MSSelection {
    type: string;
    typeDetail: string;
    createRange(): TextRange;
    clear(): void;
    createRangeCollection(): TextRangeCollection;
    empty(): void;
}
declare var MSSelection: {
    prototype: MSSelection;
    new (): MSSelection;
}

interface HTMLMetaElement extends HTMLElement {
    httpEquiv: string;
    name: string;
    content: string;
    url: string;
    scheme: string;
    charset: string;
}
declare var HTMLMetaElement: {
    prototype: HTMLMetaElement;
    new (): HTMLMetaElement;
}

interface SVGPatternElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGTests, SVGFitToViewBox, SVGExternalResourcesRequired, SVGURIReference {
    patternUnits: SVGAnimatedEnumeration;
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    patternContentUnits: SVGAnimatedEnumeration;
    patternTransform: SVGAnimatedTransformList;
    height: SVGAnimatedLength;
}
declare var SVGPatternElement: {
    prototype: SVGPatternElement;
    new (): SVGPatternElement;
}

interface SVGAnimatedAngle {
    animVal: SVGAngle;
    baseVal: SVGAngle;
}
declare var SVGAnimatedAngle: {
    prototype: SVGAnimatedAngle;
    new (): SVGAnimatedAngle;
}

interface Selection {
    isCollapsed: boolean;
    anchorNode: Node;
    focusNode: Node;
    anchorOffset: number;
    focusOffset: number;
    rangeCount: number;
    addRange( range: Range ): void;
    collapseToEnd(): void;
    toString(): string;
    selectAllChildren( parentNode: Node ): void;
    getRangeAt( index: number ): Range;
    collapse( parentNode: Node, offset: number ): void;
    removeAllRanges(): void;
    collapseToStart(): void;
    deleteFromDocument(): void;
    removeRange( range: Range ): void;
}
declare var Selection: {
    prototype: Selection;
    new (): Selection;
}

interface SVGScriptElement extends SVGElement, SVGExternalResourcesRequired, SVGURIReference {
    type: string;
}
declare var SVGScriptElement: {
    prototype: SVGScriptElement;
    new (): SVGScriptElement;
}

interface HTMLDDElement extends HTMLElement {
    noWrap: boolean;
}
declare var HTMLDDElement: {
    prototype: HTMLDDElement;
    new (): HTMLDDElement;
}

interface MSDataBindingRecordSetReadonlyExtensions {
    recordset: Object;
    namedRecordset( dataMember: string, hierarchy?: any ): Object;
}

interface CSSStyleRule extends CSSRule {
    selectorText: string;
    style: MSStyleCSSProperties;
    readOnly: boolean;
}
declare var CSSStyleRule: {
    prototype: CSSStyleRule;
    new (): CSSStyleRule;
}

interface NodeIterator {
    whatToShow: number;
    filter: NodeFilter;
    root: Node;
    expandEntityReferences: boolean;
    nextNode(): Node;
    detach(): void;
    previousNode(): Node;
}
declare var NodeIterator: {
    prototype: NodeIterator;
    new (): NodeIterator;
}

interface SVGViewElement extends SVGElement, SVGZoomAndPan, SVGFitToViewBox, SVGExternalResourcesRequired {
    viewTarget: SVGStringList;
}
declare var SVGViewElement: {
    prototype: SVGViewElement;
    new (): SVGViewElement;
}

interface HTMLLinkElement extends HTMLElement, LinkStyle {
    rel: string;
    target: string;
    href: string;
    media: string;
    rev: string;
    type: string;
    charset: string;
    hreflang: string;
}
declare var HTMLLinkElement: {
    prototype: HTMLLinkElement;
    new (): HTMLLinkElement;
}

interface SVGLocatable {
    farthestViewportElement: SVGElement;
    nearestViewportElement: SVGElement;
    getBBox(): SVGRect;
    getTransformToElement( element: SVGElement ): SVGMatrix;
    getCTM(): SVGMatrix;
    getScreenCTM(): SVGMatrix;
}

interface HTMLFontElement extends HTMLElement, DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {
    face: string;
}
declare var HTMLFontElement: {
    prototype: HTMLFontElement;
    new (): HTMLFontElement;
}

interface SVGTitleElement extends SVGElement, SVGStylable, SVGLangSpace {
}
declare var SVGTitleElement: {
    prototype: SVGTitleElement;
    new (): SVGTitleElement;
}

interface ControlRangeCollection {
    length: number;
    queryCommandValue( cmdID: string ): any;
    remove( index: number ): void;
    add( item: Element ): void;
    queryCommandIndeterm( cmdID: string ): boolean;
    scrollIntoView( varargStart?: any ): void;
    item( index: number ): Element;
    [index: number]: Element;
    execCommand( cmdID: string, showUI?: boolean, value?: any ): boolean;
    addElement( item: Element ): void;
    queryCommandState( cmdID: string ): boolean;
    queryCommandSupported( cmdID: string ): boolean;
    queryCommandEnabled( cmdID: string ): boolean;
    queryCommandText( cmdID: string ): string;
    select(): void;
}
declare var ControlRangeCollection: {
    prototype: ControlRangeCollection;
    new (): ControlRangeCollection;
}

interface MSNamespaceInfo extends MSEventAttachmentTarget {
    urn: string;
    onreadystatechange: ( ev: Event ) => any;
    addEventListener( type: "readystatechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    name: string;
    readyState: string;
    doImport( implementationUrl: string ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var MSNamespaceInfo: {
    prototype: MSNamespaceInfo;
    new (): MSNamespaceInfo;
}

interface WindowSessionStorage {
    sessionStorage: Storage;
}

interface SVGAnimatedTransformList {
    animVal: SVGTransformList;
    baseVal: SVGTransformList;
}
declare var SVGAnimatedTransformList: {
    prototype: SVGAnimatedTransformList;
    new (): SVGAnimatedTransformList;
}

interface HTMLTableCaptionElement extends HTMLElement {
    align: string;
    vAlign: string;
}
declare var HTMLTableCaptionElement: {
    prototype: HTMLTableCaptionElement;
    new (): HTMLTableCaptionElement;
}

interface HTMLOptionElement extends HTMLElement, MSDataBindingExtensions {
    index: number;
    defaultSelected: boolean;
    value: string;
    text: string;
    form: HTMLFormElement;
    label: string;
    selected: boolean;
    create(): HTMLOptionElement;
}
declare var HTMLOptionElement: {
    prototype: HTMLOptionElement;
    new (): HTMLOptionElement;
}

interface HTMLMapElement extends HTMLElement {
    name: string;
    areas: HTMLAreasCollection;
}
declare var HTMLMapElement: {
    prototype: HTMLMapElement;
    new (): HTMLMapElement;
}

interface HTMLMenuElement extends HTMLElement, DOML2DeprecatedListSpaceReduction {
    type: string;
}
declare var HTMLMenuElement: {
    prototype: HTMLMenuElement;
    new (): HTMLMenuElement;
}

interface MouseWheelEvent extends MouseEvent {
    wheelDelta: number;
    initMouseWheelEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, wheelDeltaArg: number ): void;
}
declare var MouseWheelEvent: {
    prototype: MouseWheelEvent;
    new (): MouseWheelEvent;
}

interface SVGFitToViewBox {
    viewBox: SVGAnimatedRect;
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
}

interface SVGPointList {
    numberOfItems: number;
    replaceItem( newItem: SVGPoint, index: number ): SVGPoint;
    getItem( index: number ): SVGPoint;
    clear(): void;
    appendItem( newItem: SVGPoint ): SVGPoint;
    initialize( newItem: SVGPoint ): SVGPoint;
    removeItem( index: number ): SVGPoint;
    insertItemBefore( newItem: SVGPoint, index: number ): SVGPoint;
}
declare var SVGPointList: {
    prototype: SVGPointList;
    new (): SVGPointList;
}

interface SVGAnimatedLengthList {
    animVal: SVGLengthList;
    baseVal: SVGLengthList;
}
declare var SVGAnimatedLengthList: {
    prototype: SVGAnimatedLengthList;
    new (): SVGAnimatedLengthList;
}

interface Window extends EventTarget, MSEventAttachmentTarget, WindowLocalStorage, MSWindowExtensions, WindowSessionStorage, WindowTimers {
    ondragend: ( ev: DragEvent ) => any;
    addEventListener( type: "dragend", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    onkeydown: ( ev: KeyboardEvent ) => any;
    addEventListener( type: "keydown", listener: ( ev: KeyboardEvent ) => any, useCapture?: boolean ): void;
    ondragover: ( ev: DragEvent ) => any;
    addEventListener( type: "dragover", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    onkeyup: ( ev: KeyboardEvent ) => any;
    addEventListener( type: "keyup", listener: ( ev: KeyboardEvent ) => any, useCapture?: boolean ): void;
    onreset: ( ev: Event ) => any;
    addEventListener( type: "reset", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onmouseup: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseup", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    ondragstart: ( ev: DragEvent ) => any;
    addEventListener( type: "dragstart", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    ondrag: ( ev: DragEvent ) => any;
    addEventListener( type: "drag", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    screenX: number;
    onmouseover: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseover", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    ondragleave: ( ev: DragEvent ) => any;
    addEventListener( type: "dragleave", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    history: History;
    pageXOffset: number;
    name: string;
    onafterprint: ( ev: Event ) => any;
    addEventListener( type: "afterprint", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onpause: ( ev: Event ) => any;
    addEventListener( type: "pause", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onbeforeprint: ( ev: Event ) => any;
    addEventListener( type: "beforeprint", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    top: Window;
    onmousedown: ( ev: MouseEvent ) => any;
    addEventListener( type: "mousedown", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onseeked: ( ev: Event ) => any;
    addEventListener( type: "seeked", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    opener: Window;
    onclick: ( ev: MouseEvent ) => any;
    addEventListener( type: "click", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    innerHeight: number;
    onwaiting: ( ev: Event ) => any;
    addEventListener( type: "waiting", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    ononline: ( ev: Event ) => any;
    addEventListener( type: "online", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    ondurationchange: ( ev: Event ) => any;
    addEventListener( type: "durationchange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    frames: Window;
    onblur: ( ev: FocusEvent ) => any;
    addEventListener( type: "blur", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    onemptied: ( ev: Event ) => any;
    addEventListener( type: "emptied", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onseeking: ( ev: Event ) => any;
    addEventListener( type: "seeking", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    oncanplay: ( ev: Event ) => any;
    addEventListener( type: "canplay", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    outerWidth: number;
    onstalled: ( ev: Event ) => any;
    addEventListener( type: "stalled", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onmousemove: ( ev: MouseEvent ) => any;
    addEventListener( type: "mousemove", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    innerWidth: number;
    onoffline: ( ev: Event ) => any;
    addEventListener( type: "offline", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    length: number;
    screen: Screen;
    onbeforeunload: ( ev: BeforeUnloadEvent ) => any;
    addEventListener( type: "beforeunload", listener: ( ev: BeforeUnloadEvent ) => any, useCapture?: boolean ): void;
    onratechange: ( ev: Event ) => any;
    addEventListener( type: "ratechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onstorage: ( ev: StorageEvent ) => any;
    addEventListener( type: "storage", listener: ( ev: StorageEvent ) => any, useCapture?: boolean ): void;
    onloadstart: ( ev: Event ) => any;
    addEventListener( type: "loadstart", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    ondragenter: ( ev: DragEvent ) => any;
    addEventListener( type: "dragenter", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    onsubmit: ( ev: Event ) => any;
    addEventListener( type: "submit", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    self: Window;
    document: Document;
    onprogress: ( ev: any ) => any;
    addEventListener( type: "progress", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    ondblclick: ( ev: MouseEvent ) => any;
    addEventListener( type: "dblclick", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    pageYOffset: number;
    oncontextmenu: ( ev: MouseEvent ) => any;
    addEventListener( type: "contextmenu", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onchange: ( ev: Event ) => any;
    addEventListener( type: "change", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onloadedmetadata: ( ev: Event ) => any;
    addEventListener( type: "loadedmetadata", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onplay: ( ev: Event ) => any;
    addEventListener( type: "play", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onerror: ErrorEventHandler;
    onplaying: ( ev: Event ) => any;
    addEventListener( type: "playing", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    parent: Window;
    location: Location;
    oncanplaythrough: ( ev: Event ) => any;
    addEventListener( type: "canplaythrough", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onabort: ( ev: UIEvent ) => any;
    addEventListener( type: "abort", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    onreadystatechange: ( ev: Event ) => any;
    addEventListener( type: "readystatechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    outerHeight: number;
    onkeypress: ( ev: KeyboardEvent ) => any;
    addEventListener( type: "keypress", listener: ( ev: KeyboardEvent ) => any, useCapture?: boolean ): void;
    frameElement: Element;
    onloadeddata: ( ev: Event ) => any;
    addEventListener( type: "loadeddata", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onsuspend: ( ev: Event ) => any;
    addEventListener( type: "suspend", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    window: Window;
    onfocus: ( ev: FocusEvent ) => any;
    addEventListener( type: "focus", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    onmessage: ( ev: MessageEvent ) => any;
    addEventListener( type: "message", listener: ( ev: MessageEvent ) => any, useCapture?: boolean ): void;
    ontimeupdate: ( ev: Event ) => any;
    addEventListener( type: "timeupdate", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onresize: ( ev: UIEvent ) => any;
    addEventListener( type: "resize", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    onselect: ( ev: UIEvent ) => any;
    addEventListener( type: "select", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    navigator: Navigator;
    styleMedia: StyleMedia;
    ondrop: ( ev: DragEvent ) => any;
    addEventListener( type: "drop", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    onmouseout: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseout", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onended: ( ev: Event ) => any;
    addEventListener( type: "ended", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onhashchange: ( ev: Event ) => any;
    addEventListener( type: "hashchange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onunload: ( ev: Event ) => any;
    addEventListener( type: "unload", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onscroll: ( ev: UIEvent ) => any;
    addEventListener( type: "scroll", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    screenY: number;
    onmousewheel: ( ev: MouseWheelEvent ) => any;
    addEventListener( type: "mousewheel", listener: ( ev: MouseWheelEvent ) => any, useCapture?: boolean ): void;
    onload: ( ev: Event ) => any;
    addEventListener( type: "load", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onvolumechange: ( ev: Event ) => any;
    addEventListener( type: "volumechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    oninput: ( ev: Event ) => any;
    addEventListener( type: "input", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    performance: Performance;
    alert( message?: string ): void;
    scroll( x?: number, y?: number ): void;
    focus(): void;
    scrollTo( x?: number, y?: number ): void;
    print(): void;
    prompt( message?: string, defaul?: string ): string;
    toString(): string;
    open( url?: string, target?: string, features?: string, replace?: boolean ): Window;
    scrollBy( x?: number, y?: number ): void;
    confirm( message?: string ): boolean;
    close(): void;
    postMessage( message: any, targetOrigin: string, ports?: any ): void;
    showModalDialog( url?: string, argument?: any, options?: any ): any;
    blur(): void;
    getSelection(): Selection;
    getComputedStyle( elt: Element, pseudoElt?: string ): CSSStyleDeclaration;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var Window: {
    prototype: Window;
    new (): Window;
}

interface SVGAnimatedPreserveAspectRatio {
    animVal: SVGPreserveAspectRatio;
    baseVal: SVGPreserveAspectRatio;
}
declare var SVGAnimatedPreserveAspectRatio: {
    prototype: SVGAnimatedPreserveAspectRatio;
    new (): SVGAnimatedPreserveAspectRatio;
}

interface MSSiteModeEvent extends Event {
    buttonID: number;
    actionURL: string;
}
declare var MSSiteModeEvent: {
    prototype: MSSiteModeEvent;
    new (): MSSiteModeEvent;
}

interface DOML2DeprecatedTextFlowControl {
    clear: string;
}

interface StyleSheetPageList {
    length: number;
    item( index: number ): CSSPageRule;
    [index: number]: CSSPageRule;
}
declare var StyleSheetPageList: {
    prototype: StyleSheetPageList;
    new (): StyleSheetPageList;
}

interface MSCSSProperties extends CSSStyleDeclaration {
    scrollbarShadowColor: string;
    scrollbarHighlightColor: string;
    layoutGridChar: string;
    layoutGridType: string;
    textAutospace: string;
    textKashidaSpace: string;
    writingMode: string;
    scrollbarFaceColor: string;
    backgroundPositionY: string;
    lineBreak: string;
    imeMode: string;
    msBlockProgression: string;
    layoutGridLine: string;
    scrollbarBaseColor: string;
    layoutGrid: string;
    layoutFlow: string;
    textKashida: string;
    filter: string;
    zoom: string;
    scrollbarArrowColor: string;
    behavior: string;
    backgroundPositionX: string;
    accelerator: string;
    layoutGridMode: string;
    textJustifyTrim: string;
    scrollbar3dLightColor: string;
    msInterpolationMode: string;
    scrollbarTrackColor: string;
    scrollbarDarkShadowColor: string;
    styleFloat: string;
    getAttribute( attributeName: string, flags?: number ): any;
    setAttribute( attributeName: string, AttributeValue: any, flags?: number ): void;
    removeAttribute( attributeName: string, flags?: number ): boolean;
}
declare var MSCSSProperties: {
    prototype: MSCSSProperties;
    new (): MSCSSProperties;
}

interface HTMLCollection extends MSHTMLCollectionExtensions {
    length: number;
    item( nameOrIndex?: any, optionalIndex?: any ): Element;
    namedItem( name: string ): Element;
    [name: number]: Element;
}
declare var HTMLCollection: {
    prototype: HTMLCollection;
    new (): HTMLCollection;
}

interface SVGExternalResourcesRequired {
    externalResourcesRequired: SVGAnimatedBoolean;
}

interface HTMLImageElement extends HTMLElement, MSImageResourceExtensions, MSDataBindingExtensions, MSResourceMetadata {
    width: number;
    vspace: number;
    naturalHeight: number;
    alt: string;
    align: string;
    src: string;
    useMap: string;
    naturalWidth: number;
    name: string;
    height: number;
    border: string;
    hspace: number;
    longDesc: string;
    href: string;
    isMap: boolean;
    complete: boolean;
    create(): HTMLImageElement;
}
declare var HTMLImageElement: {
    prototype: HTMLImageElement;
    new (): HTMLImageElement;
}

interface HTMLAreaElement extends HTMLElement {
    protocol: string;
    search: string;
    alt: string;
    coords: string;
    hostname: string;
    port: string;
    pathname: string;
    host: string;
    hash: string;
    target: string;
    href: string;
    noHref: boolean;
    shape: string;
    toString(): string;
}
declare var HTMLAreaElement: {
    prototype: HTMLAreaElement;
    new (): HTMLAreaElement;
}

interface EventTarget {
    removeEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
    dispatchEvent( evt: Event ): boolean;
}

interface SVGAngle {
    valueAsString: string;
    valueInSpecifiedUnits: number;
    value: number;
    unitType: number;
    newValueSpecifiedUnits( unitType: number, valueInSpecifiedUnits: number ): void;
    convertToSpecifiedUnits( unitType: number ): void;
    SVG_ANGLETYPE_RAD: number;
    SVG_ANGLETYPE_UNKNOWN: number;
    SVG_ANGLETYPE_UNSPECIFIED: number;
    SVG_ANGLETYPE_DEG: number;
    SVG_ANGLETYPE_GRAD: number;
}
declare var SVGAngle: {
    prototype: SVGAngle;
    new (): SVGAngle;
    SVG_ANGLETYPE_RAD: number;
    SVG_ANGLETYPE_UNKNOWN: number;
    SVG_ANGLETYPE_UNSPECIFIED: number;
    SVG_ANGLETYPE_DEG: number;
    SVG_ANGLETYPE_GRAD: number;
}

interface HTMLButtonElement extends HTMLElement, MSDataBindingExtensions {
    value: string;
    status: any;
    form: HTMLFormElement;
    name: string;
    type: string;
    createTextRange(): TextRange;
}
declare var HTMLButtonElement: {
    prototype: HTMLButtonElement;
    new (): HTMLButtonElement;
}

interface HTMLSourceElement extends HTMLElement {
    src: string;
    media: string;
    type: string;
}
declare var HTMLSourceElement: {
    prototype: HTMLSourceElement;
    new (): HTMLSourceElement;
}

interface CanvasGradient {
    addColorStop( offset: number, color: string ): void;
}
declare var CanvasGradient: {
    prototype: CanvasGradient;
    new (): CanvasGradient;
}

interface KeyboardEvent extends UIEvent {
    location: number;
    keyCode: number;
    shiftKey: boolean;
    which: number;
    locale: string;
    key: string;
    altKey: boolean;
    metaKey: boolean;
    char: string;
    ctrlKey: boolean;
    repeat: boolean;
    charCode: number;
    getModifierState( keyArg: string ): boolean;
    initKeyboardEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, keyArg: string, locationArg: number, modifiersListArg: string, repeat: boolean, locale: string ): void;
    DOM_KEY_LOCATION_RIGHT: number;
    DOM_KEY_LOCATION_STANDARD: number;
    DOM_KEY_LOCATION_LEFT: number;
    DOM_KEY_LOCATION_NUMPAD: number;
    DOM_KEY_LOCATION_JOYSTICK: number;
    DOM_KEY_LOCATION_MOBILE: number;
}
declare var KeyboardEvent: {
    prototype: KeyboardEvent;
    new (): KeyboardEvent;
    DOM_KEY_LOCATION_RIGHT: number;
    DOM_KEY_LOCATION_STANDARD: number;
    DOM_KEY_LOCATION_LEFT: number;
    DOM_KEY_LOCATION_NUMPAD: number;
    DOM_KEY_LOCATION_JOYSTICK: number;
    DOM_KEY_LOCATION_MOBILE: number;
}

interface Document extends Node, NodeSelector, MSEventAttachmentTarget, DocumentEvent, MSResourceMetadata, MSNodeExtensions {
    compatible: MSCompatibleInfoCollection;
    onkeydown: ( ev: KeyboardEvent ) => any;
    addEventListener( type: "keydown", listener: ( ev: KeyboardEvent ) => any, useCapture?: boolean ): void;
    onkeyup: ( ev: KeyboardEvent ) => any;
    addEventListener( type: "keyup", listener: ( ev: KeyboardEvent ) => any, useCapture?: boolean ): void;
    implementation: DOMImplementation;
    onreset: ( ev: Event ) => any;
    addEventListener( type: "reset", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    scripts: HTMLCollection;
    onhelp: ( ev: Event ) => any;
    addEventListener( type: "help", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    ondragleave: ( ev: DragEvent ) => any;
    addEventListener( type: "dragleave", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    charset: string;
    onfocusin: ( ev: FocusEvent ) => any;
    addEventListener( type: "focusin", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    vlinkColor: string;
    onseeked: ( ev: Event ) => any;
    addEventListener( type: "seeked", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    security: string;
    title: string;
    namespaces: MSNamespaceInfoCollection;
    defaultCharset: string;
    embeds: HTMLCollection;
    styleSheets: StyleSheetList;
    frames: Window;
    ondurationchange: ( ev: Event ) => any;
    addEventListener( type: "durationchange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    all: HTMLCollection;
    forms: HTMLCollection;
    onblur: ( ev: FocusEvent ) => any;
    addEventListener( type: "blur", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    dir: string;
    onemptied: ( ev: Event ) => any;
    addEventListener( type: "emptied", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    designMode: string;
    onseeking: ( ev: Event ) => any;
    addEventListener( type: "seeking", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    ondeactivate: ( ev: UIEvent ) => any;
    addEventListener( type: "deactivate", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    oncanplay: ( ev: Event ) => any;
    addEventListener( type: "canplay", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    ondatasetchanged: ( ev: MSEventObj ) => any;
    addEventListener( type: "datasetchanged", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onrowsdelete: ( ev: MSEventObj ) => any;
    addEventListener( type: "rowsdelete", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    Script: MSScriptHost;
    onloadstart: ( ev: Event ) => any;
    addEventListener( type: "loadstart", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    URLUnencoded: string;
    defaultView: Window;
    oncontrolselect: ( ev: MSEventObj ) => any;
    addEventListener( type: "controlselect", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    ondragenter: ( ev: DragEvent ) => any;
    addEventListener( type: "dragenter", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    onsubmit: ( ev: Event ) => any;
    addEventListener( type: "submit", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    inputEncoding: string;
    activeElement: Element;
    onchange: ( ev: Event ) => any;
    addEventListener( type: "change", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    links: HTMLCollection;
    uniqueID: string;
    URL: string;
    onbeforeactivate: ( ev: UIEvent ) => any;
    addEventListener( type: "beforeactivate", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    head: HTMLHeadElement;
    cookie: string;
    xmlEncoding: string;
    oncanplaythrough: ( ev: Event ) => any;
    addEventListener( type: "canplaythrough", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    documentMode: number;
    characterSet: string;
    anchors: HTMLCollection;
    onbeforeupdate: ( ev: MSEventObj ) => any;
    addEventListener( type: "beforeupdate", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    ondatasetcomplete: ( ev: MSEventObj ) => any;
    addEventListener( type: "datasetcomplete", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    plugins: HTMLCollection;
    onsuspend: ( ev: Event ) => any;
    addEventListener( type: "suspend", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    rootElement: SVGSVGElement;
    readyState: string;
    referrer: string;
    alinkColor: string;
    onerrorupdate: ( ev: MSEventObj ) => any;
    addEventListener( type: "errorupdate", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    parentWindow: Window;
    onmouseout: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseout", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onmsthumbnailclick: ( ev: MSSiteModeEvent ) => any;
    addEventListener( type: "msthumbnailclick", listener: ( ev: MSSiteModeEvent ) => any, useCapture?: boolean ): void;
    onmousewheel: ( ev: MouseWheelEvent ) => any;
    addEventListener( type: "mousewheel", listener: ( ev: MouseWheelEvent ) => any, useCapture?: boolean ): void;
    onvolumechange: ( ev: Event ) => any;
    addEventListener( type: "volumechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    oncellchange: ( ev: MSEventObj ) => any;
    addEventListener( type: "cellchange", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onrowexit: ( ev: MSEventObj ) => any;
    addEventListener( type: "rowexit", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onrowsinserted: ( ev: MSEventObj ) => any;
    addEventListener( type: "rowsinserted", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    xmlVersion: string;
    msCapsLockWarningOff: boolean;
    onpropertychange: ( ev: MSEventObj ) => any;
    addEventListener( type: "propertychange", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    ondragend: ( ev: DragEvent ) => any;
    addEventListener( type: "dragend", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    doctype: DocumentType;
    ondragover: ( ev: DragEvent ) => any;
    addEventListener( type: "dragover", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    bgColor: string;
    ondragstart: ( ev: DragEvent ) => any;
    addEventListener( type: "dragstart", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    onmouseup: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseup", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    ondrag: ( ev: DragEvent ) => any;
    addEventListener( type: "drag", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    onmouseover: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseover", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    linkColor: string;
    onpause: ( ev: Event ) => any;
    addEventListener( type: "pause", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onmousedown: ( ev: MouseEvent ) => any;
    addEventListener( type: "mousedown", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onclick: ( ev: MouseEvent ) => any;
    addEventListener( type: "click", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onwaiting: ( ev: Event ) => any;
    addEventListener( type: "waiting", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onstop: ( ev: Event ) => any;
    addEventListener( type: "stop", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onmssitemodejumplistitemremoved: ( ev: MSSiteModeEvent ) => any;
    addEventListener( type: "mssitemodejumplistitemremoved", listener: ( ev: MSSiteModeEvent ) => any, useCapture?: boolean ): void;
    applets: HTMLCollection;
    body: HTMLElement;
    domain: string;
    xmlStandalone: boolean;
    selection: MSSelection;
    onstalled: ( ev: Event ) => any;
    addEventListener( type: "stalled", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onmousemove: ( ev: MouseEvent ) => any;
    addEventListener( type: "mousemove", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    documentElement: Element;
    onbeforeeditfocus: ( ev: MSEventObj ) => any;
    addEventListener( type: "beforeeditfocus", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onratechange: ( ev: Event ) => any;
    addEventListener( type: "ratechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onprogress: ( ev: any ) => any;
    addEventListener( type: "progress", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    ondblclick: ( ev: MouseEvent ) => any;
    addEventListener( type: "dblclick", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    oncontextmenu: ( ev: MouseEvent ) => any;
    addEventListener( type: "contextmenu", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onloadedmetadata: ( ev: Event ) => any;
    addEventListener( type: "loadedmetadata", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    media: string;
    onerror: ( ev: Event ) => any;
    addEventListener( type: "error", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onplay: ( ev: Event ) => any;
    addEventListener( type: "play", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onafterupdate: ( ev: MSEventObj ) => any;
    addEventListener( type: "afterupdate", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onplaying: ( ev: Event ) => any;
    addEventListener( type: "playing", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    images: HTMLCollection;
    location: Location;
    onabort: ( ev: UIEvent ) => any;
    addEventListener( type: "abort", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    onfocusout: ( ev: FocusEvent ) => any;
    addEventListener( type: "focusout", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    onselectionchange: ( ev: Event ) => any;
    addEventListener( type: "selectionchange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onstoragecommit: ( ev: StorageEvent ) => any;
    addEventListener( type: "storagecommit", listener: ( ev: StorageEvent ) => any, useCapture?: boolean ): void;
    ondataavailable: ( ev: MSEventObj ) => any;
    addEventListener( type: "dataavailable", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onreadystatechange: ( ev: Event ) => any;
    addEventListener( type: "readystatechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    lastModified: string;
    onkeypress: ( ev: KeyboardEvent ) => any;
    addEventListener( type: "keypress", listener: ( ev: KeyboardEvent ) => any, useCapture?: boolean ): void;
    onloadeddata: ( ev: Event ) => any;
    addEventListener( type: "loadeddata", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onbeforedeactivate: ( ev: UIEvent ) => any;
    addEventListener( type: "beforedeactivate", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    onactivate: ( ev: UIEvent ) => any;
    addEventListener( type: "activate", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    onselectstart: ( ev: Event ) => any;
    addEventListener( type: "selectstart", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onfocus: ( ev: FocusEvent ) => any;
    addEventListener( type: "focus", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    fgColor: string;
    ontimeupdate: ( ev: Event ) => any;
    addEventListener( type: "timeupdate", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onselect: ( ev: UIEvent ) => any;
    addEventListener( type: "select", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    ondrop: ( ev: DragEvent ) => any;
    addEventListener( type: "drop", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    onended: ( ev: Event ) => any;
    addEventListener( type: "ended", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    compatMode: string;
    onscroll: ( ev: UIEvent ) => any;
    addEventListener( type: "scroll", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    onrowenter: ( ev: MSEventObj ) => any;
    addEventListener( type: "rowenter", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onload: ( ev: Event ) => any;
    addEventListener( type: "load", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    oninput: ( ev: Event ) => any;
    addEventListener( type: "input", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    queryCommandValue( commandId: string ): string;
    adoptNode( source: Node ): Node;
    queryCommandIndeterm( commandId: string ): boolean;
    getElementsByTagNameNS( namespaceURI: string, localName: string ): NodeList;
    createProcessingInstruction( target: string, data: string ): ProcessingInstruction;
    execCommand( commandId: string, showUI?: boolean, value?: any ): boolean;
    elementFromPoint( x: number, y: number ): Element;
    createCDATASection( data: string ): CDATASection;
    queryCommandText( commandId: string ): string;
    write( ...content: string[] ): void;
    updateSettings(): void;
    createElement( tagName: string ): HTMLElement;
    createElement( tagName: "a" ): HTMLAnchorElement;
    createElement( tagName: "abbr" ): HTMLElement;
    createElement( tagName: "address" ): HTMLElement;
    createElement( tagName: "area" ): HTMLAreaElement;
    createElement( tagName: "article" ): HTMLElement;
    createElement( tagName: "aside" ): HTMLElement;
    createElement( tagName: "audio" ): HTMLAudioElement;
    createElement( tagName: "b" ): HTMLElement;
    createElement( tagName: "base" ): HTMLBaseElement;
    createElement( tagName: "bdi" ): HTMLElement;
    createElement( tagName: "bdo" ): HTMLElement;
    createElement( tagName: "blockquote" ): HTMLQuoteElement;
    createElement( tagName: "body" ): HTMLBodyElement;
    createElement( tagName: "br" ): HTMLBRElement;
    createElement( tagName: "button" ): HTMLButtonElement;
    createElement( tagName: "canvas" ): HTMLCanvasElement;
    createElement( tagName: "caption" ): HTMLTableCaptionElement;
    createElement( tagName: "cite" ): HTMLElement;
    createElement( tagName: "code" ): HTMLElement;
    createElement( tagName: "col" ): HTMLTableColElement;
    createElement( tagName: "colgroup" ): HTMLTableColElement;
    createElement( tagName: "datalist" ): HTMLDataListElement;
    createElement( tagName: "dd" ): HTMLElement;
    createElement( tagName: "del" ): HTMLModElement;
    createElement( tagName: "dfn" ): HTMLElement;
    createElement( tagName: "div" ): HTMLDivElement;
    createElement( tagName: "dl" ): HTMLDListElement;
    createElement( tagName: "dt" ): HTMLElement;
    createElement( tagName: "em" ): HTMLElement;
    createElement( tagName: "embed" ): HTMLEmbedElement;
    createElement( tagName: "fieldset" ): HTMLFieldSetElement;
    createElement( tagName: "figcaption" ): HTMLElement;
    createElement( tagName: "figure" ): HTMLElement;
    createElement( tagName: "footer" ): HTMLElement;
    createElement( tagName: "form" ): HTMLFormElement;
    createElement( tagName: "h1" ): HTMLHeadingElement;
    createElement( tagName: "h2" ): HTMLHeadingElement;
    createElement( tagName: "h3" ): HTMLHeadingElement;
    createElement( tagName: "h4" ): HTMLHeadingElement;
    createElement( tagName: "h5" ): HTMLHeadingElement;
    createElement( tagName: "h6" ): HTMLHeadingElement;
    createElement( tagName: "head" ): HTMLHeadElement;
    createElement( tagName: "header" ): HTMLElement;
    createElement( tagName: "hgroup" ): HTMLElement;
    createElement( tagName: "hr" ): HTMLHRElement;
    createElement( tagName: "html" ): HTMLHtmlElement;
    createElement( tagName: "i" ): HTMLElement;
    createElement( tagName: "iframe" ): HTMLIFrameElement;
    createElement( tagName: "img" ): HTMLImageElement;
    createElement( tagName: "input" ): HTMLInputElement;
    createElement( tagName: "ins" ): HTMLModElement;
    createElement( tagName: "kbd" ): HTMLElement;
    createElement( tagName: "label" ): HTMLLabelElement;
    createElement( tagName: "legend" ): HTMLLegendElement;
    createElement( tagName: "li" ): HTMLLIElement;
    createElement( tagName: "link" ): HTMLLinkElement;
    createElement( tagName: "main" ): HTMLElement;
    createElement( tagName: "map" ): HTMLMapElement;
    createElement( tagName: "mark" ): HTMLElement;
    createElement( tagName: "menu" ): HTMLMenuElement;
    createElement( tagName: "meta" ): HTMLMetaElement;
    createElement( tagName: "nav" ): HTMLElement;
    createElement( tagName: "noscript" ): HTMLElement;
    createElement( tagName: "object" ): HTMLObjectElement;
    createElement( tagName: "ol" ): HTMLOListElement;
    createElement( tagName: "optgroup" ): HTMLOptGroupElement;
    createElement( tagName: "option" ): HTMLOptionElement;
    createElement( tagName: "p" ): HTMLParagraphElement;
    createElement( tagName: "param" ): HTMLParamElement;
    createElement( tagName: "pre" ): HTMLPreElement;
    createElement( tagName: "progress" ): HTMLProgressElement;
    createElement( tagName: "q" ): HTMLQuoteElement;
    createElement( tagName: "rp" ): HTMLElement;
    createElement( tagName: "rt" ): HTMLElement;
    createElement( tagName: "ruby" ): HTMLElement;
    createElement( tagName: "s" ): HTMLElement;
    createElement( tagName: "samp" ): HTMLElement;
    createElement( tagName: "script" ): HTMLScriptElement;
    createElement( tagName: "section" ): HTMLElement;
    createElement( tagName: "select" ): HTMLSelectElement;
    createElement( tagName: "small" ): HTMLElement;
    createElement( tagName: "source" ): HTMLSourceElement;
    createElement( tagName: "span" ): HTMLSpanElement;
    createElement( tagName: "strong" ): HTMLElement;
    createElement( tagName: "style" ): HTMLStyleElement;
    createElement( tagName: "sub" ): HTMLElement;
    createElement( tagName: "summary" ): HTMLElement;
    createElement( tagName: "sup" ): HTMLElement;
    createElement( tagName: "table" ): HTMLTableElement;
    createElement( tagName: "tbody" ): HTMLTableSectionElement;
    createElement( tagName: "td" ): HTMLTableDataCellElement;
    createElement( tagName: "textarea" ): HTMLTextAreaElement;
    createElement( tagName: "tfoot" ): HTMLTableSectionElement;
    createElement( tagName: "th" ): HTMLTableHeaderCellElement;
    createElement( tagName: "thead" ): HTMLTableSectionElement;
    createElement( tagName: "title" ): HTMLTitleElement;
    createElement( tagName: "tr" ): HTMLTableRowElement;
    createElement( tagName: "track" ): HTMLTrackElement;
    createElement( tagName: "u" ): HTMLElement;
    createElement( tagName: "ul" ): HTMLUListElement;
    createElement( tagName: "var" ): HTMLElement;
    createElement( tagName: "video" ): HTMLVideoElement;
    createElement( tagName: "wbr" ): HTMLElement;
    releaseCapture(): void;
    writeln( ...content: string[] ): void;
    createElementNS( namespaceURI: string, qualifiedName: string ): Element;
    open( url?: string, name?: string, features?: string, replace?: boolean ): any;
    queryCommandSupported( commandId: string ): boolean;
    createTreeWalker( root: Node, whatToShow: number, filter: NodeFilter, entityReferenceExpansion: boolean ): TreeWalker;
    createAttributeNS( namespaceURI: string, qualifiedName: string ): Attr;
    queryCommandEnabled( commandId: string ): boolean;
    focus(): void;
    close(): void;
    getElementsByClassName( classNames: string ): NodeList;
    importNode( importedNode: Node, deep: boolean ): Node;
    createRange(): Range;
    fireEvent( eventName: string, eventObj?: any ): boolean;
    createComment( data: string ): Comment;
    getElementsByTagName( tagname: string ): NodeList;
    getElementsByTagName( name: "a" ): NodeListOf<HTMLAnchorElement>;
    getElementsByTagName( name: "abbr" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "address" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "area" ): NodeListOf<HTMLAreaElement>;
    getElementsByTagName( name: "article" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "aside" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "audio" ): NodeListOf<HTMLAudioElement>;
    getElementsByTagName( name: "b" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "base" ): NodeListOf<HTMLBaseElement>;
    getElementsByTagName( name: "bdi" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "bdo" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "blockquote" ): NodeListOf<HTMLQuoteElement>;
    getElementsByTagName( name: "body" ): NodeListOf<HTMLBodyElement>;
    getElementsByTagName( name: "br" ): NodeListOf<HTMLBRElement>;
    getElementsByTagName( name: "button" ): NodeListOf<HTMLButtonElement>;
    getElementsByTagName( name: "canvas" ): NodeListOf<HTMLCanvasElement>;
    getElementsByTagName( name: "caption" ): NodeListOf<HTMLTableCaptionElement>;
    getElementsByTagName( name: "cite" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "code" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "col" ): NodeListOf<HTMLTableColElement>;
    getElementsByTagName( name: "colgroup" ): NodeListOf<HTMLTableColElement>;
    getElementsByTagName( name: "datalist" ): NodeListOf<HTMLDataListElement>;
    getElementsByTagName( name: "dd" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "del" ): NodeListOf<HTMLModElement>;
    getElementsByTagName( name: "dfn" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "div" ): NodeListOf<HTMLDivElement>;
    getElementsByTagName( name: "dl" ): NodeListOf<HTMLDListElement>;
    getElementsByTagName( name: "dt" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "em" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "embed" ): NodeListOf<HTMLEmbedElement>;
    getElementsByTagName( name: "fieldset" ): NodeListOf<HTMLFieldSetElement>;
    getElementsByTagName( name: "figcaption" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "figure" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "footer" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "form" ): NodeListOf<HTMLFormElement>;
    getElementsByTagName( name: "h1" ): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName( name: "h2" ): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName( name: "h3" ): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName( name: "h4" ): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName( name: "h5" ): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName( name: "h6" ): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName( name: "head" ): NodeListOf<HTMLHeadElement>;
    getElementsByTagName( name: "header" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "hgroup" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "hr" ): NodeListOf<HTMLHRElement>;
    getElementsByTagName( name: "html" ): NodeListOf<HTMLHtmlElement>;
    getElementsByTagName( name: "i" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "iframe" ): NodeListOf<HTMLIFrameElement>;
    getElementsByTagName( name: "img" ): NodeListOf<HTMLImageElement>;
    getElementsByTagName( name: "input" ): NodeListOf<HTMLInputElement>;
    getElementsByTagName( name: "ins" ): NodeListOf<HTMLModElement>;
    getElementsByTagName( name: "kbd" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "label" ): NodeListOf<HTMLLabelElement>;
    getElementsByTagName( name: "legend" ): NodeListOf<HTMLLegendElement>;
    getElementsByTagName( name: "li" ): NodeListOf<HTMLLIElement>;
    getElementsByTagName( name: "link" ): NodeListOf<HTMLLinkElement>;
    getElementsByTagName( name: "main" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "map" ): NodeListOf<HTMLMapElement>;
    getElementsByTagName( name: "mark" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "menu" ): NodeListOf<HTMLMenuElement>;
    getElementsByTagName( name: "meta" ): NodeListOf<HTMLMetaElement>;
    getElementsByTagName( name: "nav" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "noscript" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "object" ): NodeListOf<HTMLObjectElement>;
    getElementsByTagName( name: "ol" ): NodeListOf<HTMLOListElement>;
    getElementsByTagName( name: "optgroup" ): NodeListOf<HTMLOptGroupElement>;
    getElementsByTagName( name: "option" ): NodeListOf<HTMLOptionElement>;
    getElementsByTagName( name: "p" ): NodeListOf<HTMLParagraphElement>;
    getElementsByTagName( name: "param" ): NodeListOf<HTMLParamElement>;
    getElementsByTagName( name: "pre" ): NodeListOf<HTMLPreElement>;
    getElementsByTagName( name: "progress" ): NodeListOf<HTMLProgressElement>;
    getElementsByTagName( name: "q" ): NodeListOf<HTMLQuoteElement>;
    getElementsByTagName( name: "rp" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "rt" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "ruby" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "s" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "samp" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "script" ): NodeListOf<HTMLScriptElement>;
    getElementsByTagName( name: "section" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "select" ): NodeListOf<HTMLSelectElement>;
    getElementsByTagName( name: "small" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "source" ): NodeListOf<HTMLSourceElement>;
    getElementsByTagName( name: "span" ): NodeListOf<HTMLSpanElement>;
    getElementsByTagName( name: "strong" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "style" ): NodeListOf<HTMLStyleElement>;
    getElementsByTagName( name: "sub" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "summary" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "sup" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "table" ): NodeListOf<HTMLTableElement>;
    getElementsByTagName( name: "tbody" ): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName( name: "td" ): NodeListOf<HTMLTableDataCellElement>;
    getElementsByTagName( name: "textarea" ): NodeListOf<HTMLTextAreaElement>;
    getElementsByTagName( name: "tfoot" ): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName( name: "th" ): NodeListOf<HTMLTableHeaderCellElement>;
    getElementsByTagName( name: "thead" ): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName( name: "title" ): NodeListOf<HTMLTitleElement>;
    getElementsByTagName( name: "tr" ): NodeListOf<HTMLTableRowElement>;
    getElementsByTagName( name: "track" ): NodeListOf<HTMLTrackElement>;
    getElementsByTagName( name: "u" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "ul" ): NodeListOf<HTMLUListElement>;
    getElementsByTagName( name: "var" ): NodeListOf<HTMLElement>;
    getElementsByTagName( name: "video" ): NodeListOf<HTMLVideoElement>;
    getElementsByTagName( name: "wbr" ): NodeListOf<HTMLElement>;
    createDocumentFragment(): DocumentFragment;
    createStyleSheet( href?: string, index?: number ): CSSStyleSheet;
    getElementsByName( elementName: string ): NodeList;
    queryCommandState( commandId: string ): boolean;
    hasFocus(): boolean;
    execCommandShowHelp( commandId: string ): boolean;
    createAttribute( name: string ): Attr;
    createTextNode( data: string ): Text;
    createNodeIterator( root: Node, whatToShow: number, filter: NodeFilter, entityReferenceExpansion: boolean ): NodeIterator;
    createEventObject( eventObj?: any ): MSEventObj;
    getSelection(): Selection;
    getElementById( elementId: string ): HTMLElement;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
    addEventListener( type: "DOMContentLoaded", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
}
declare var Document: {
    prototype: Document;
    new (): Document;
}

interface MessageEvent extends Event {
    source: Window;
    origin: string;
    data: any;
    initMessageEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, dataArg: any, originArg: string, lastEventIdArg: string, sourceArg: Window ): void;
}
declare var MessageEvent: {
    prototype: MessageEvent;
    new (): MessageEvent;
}

interface SVGElement extends Element {
    onmouseover: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseover", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    viewportElement: SVGElement;
    onmousemove: ( ev: MouseEvent ) => any;
    addEventListener( type: "mousemove", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onmouseout: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseout", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    ondblclick: ( ev: MouseEvent ) => any;
    addEventListener( type: "dblclick", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onfocusout: ( ev: FocusEvent ) => any;
    addEventListener( type: "focusout", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    onfocusin: ( ev: FocusEvent ) => any;
    addEventListener( type: "focusin", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    xmlbase: string;
    onmousedown: ( ev: MouseEvent ) => any;
    addEventListener( type: "mousedown", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onload: ( ev: Event ) => any;
    addEventListener( type: "load", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onmouseup: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseup", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onclick: ( ev: MouseEvent ) => any;
    addEventListener( type: "click", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    ownerSVGElement: SVGSVGElement;
    id: string;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var SVGElement: {
    prototype: SVGElement;
    new (): SVGElement;
}

interface HTMLScriptElement extends HTMLElement {
    defer: boolean;
    text: string;
    src: string;
    htmlFor: string;
    charset: string;
    type: string;
    event: string;
}
declare var HTMLScriptElement: {
    prototype: HTMLScriptElement;
    new (): HTMLScriptElement;
}

interface HTMLTableRowElement extends HTMLElement, HTMLTableAlignment, DOML2DeprecatedBackgroundColorStyle {
    rowIndex: number;
    cells: HTMLCollection;
    align: string;
    borderColorLight: any;
    sectionRowIndex: number;
    borderColor: any;
    height: any;
    borderColorDark: any;
    deleteCell( index?: number ): void;
    insertCell( index?: number ): HTMLElement;
}
declare var HTMLTableRowElement: {
    prototype: HTMLTableRowElement;
    new (): HTMLTableRowElement;
}

interface CanvasRenderingContext2D {
    miterLimit: number;
    font: string;
    globalCompositeOperation: string;
    msFillRule: string;
    lineCap: string;
    msImageSmoothingEnabled: boolean;
    lineDashOffset: number;
    shadowColor: string;
    lineJoin: string;
    shadowOffsetX: number;
    lineWidth: number;
    canvas: HTMLCanvasElement;
    strokeStyle: any;
    globalAlpha: number;
    shadowOffsetY: number;
    fillStyle: any;
    shadowBlur: number;
    textAlign: string;
    textBaseline: string;
    restore(): void;
    setTransform( m11: number, m12: number, m21: number, m22: number, dx: number, dy: number ): void;
    save(): void;
    arc( x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean ): void;
    measureText( text: string ): TextMetrics;
    isPointInPath( x: number, y: number, fillRule?: string ): boolean;
    quadraticCurveTo( cpx: number, cpy: number, x: number, y: number ): void;
    putImageData( imagedata: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number ): void;
    rotate( angle: number ): void;
    fillText( text: string, x: number, y: number, maxWidth?: number ): void;
    translate( x: number, y: number ): void;
    scale( x: number, y: number ): void;
    createRadialGradient( x0: number, y0: number, r0: number, x1: number, y1: number, r1: number ): CanvasGradient;
    lineTo( x: number, y: number ): void;
    getLineDash(): Array<number>;
    fill( fillRule?: string ): void;
    createImageData( imageDataOrSw: any, sh?: number ): ImageData;
    createPattern( image: HTMLElement, repetition: string ): CanvasPattern;
    closePath(): void;
    rect( x: number, y: number, w: number, h: number ): void;
    clip( fillRule?: string ): void;
    clearRect( x: number, y: number, w: number, h: number ): void;
    moveTo( x: number, y: number ): void;
    getImageData( sx: number, sy: number, sw: number, sh: number ): ImageData;
    fillRect( x: number, y: number, w: number, h: number ): void;
    bezierCurveTo( cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number ): void;
    drawImage( image: HTMLElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number ): void;
    transform( m11: number, m12: number, m21: number, m22: number, dx: number, dy: number ): void;
    stroke(): void;
    strokeRect( x: number, y: number, w: number, h: number ): void;
    setLineDash( segments: Array<number> ): void;
    strokeText( text: string, x: number, y: number, maxWidth?: number ): void;
    beginPath(): void;
    arcTo( x1: number, y1: number, x2: number, y2: number, radius: number ): void;
    createLinearGradient( x0: number, y0: number, x1: number, y1: number ): CanvasGradient;
}
declare var CanvasRenderingContext2D: {
    prototype: CanvasRenderingContext2D;
    new (): CanvasRenderingContext2D;
}

interface MSCSSRuleList {
    length: number;
    item( index?: number ): CSSStyleRule;
    [index: number]: CSSStyleRule;
}
declare var MSCSSRuleList: {
    prototype: MSCSSRuleList;
    new (): MSCSSRuleList;
}

interface SVGPathSegLinetoHorizontalAbs extends SVGPathSeg {
    x: number;
}
declare var SVGPathSegLinetoHorizontalAbs: {
    prototype: SVGPathSegLinetoHorizontalAbs;
    new (): SVGPathSegLinetoHorizontalAbs;
}

interface SVGPathSegArcAbs extends SVGPathSeg {
    y: number;
    sweepFlag: boolean;
    r2: number;
    x: number;
    angle: number;
    r1: number;
    largeArcFlag: boolean;
}
declare var SVGPathSegArcAbs: {
    prototype: SVGPathSegArcAbs;
    new (): SVGPathSegArcAbs;
}

interface SVGTransformList {
    numberOfItems: number;
    getItem( index: number ): SVGTransform;
    consolidate(): SVGTransform;
    clear(): void;
    appendItem( newItem: SVGTransform ): SVGTransform;
    initialize( newItem: SVGTransform ): SVGTransform;
    removeItem( index: number ): SVGTransform;
    insertItemBefore( newItem: SVGTransform, index: number ): SVGTransform;
    replaceItem( newItem: SVGTransform, index: number ): SVGTransform;
    createSVGTransformFromMatrix( matrix: SVGMatrix ): SVGTransform;
}
declare var SVGTransformList: {
    prototype: SVGTransformList;
    new (): SVGTransformList;
}

interface HTMLHtmlElement extends HTMLElement {
    version: string;
}
declare var HTMLHtmlElement: {
    prototype: HTMLHtmlElement;
    new (): HTMLHtmlElement;
}

interface SVGPathSegClosePath extends SVGPathSeg {
}
declare var SVGPathSegClosePath: {
    prototype: SVGPathSegClosePath;
    new (): SVGPathSegClosePath;
}

interface HTMLFrameElement extends HTMLElement, GetSVGDocument, MSDataBindingExtensions {
    width: any;
    scrolling: string;
    marginHeight: string;
    marginWidth: string;
    borderColor: any;
    frameSpacing: any;
    frameBorder: string;
    noResize: boolean;
    contentWindow: Window;
    src: string;
    name: string;
    height: any;
    contentDocument: Document;
    border: string;
    longDesc: string;
    onload: ( ev: Event ) => any;
    addEventListener( type: "load", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    security: any;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var HTMLFrameElement: {
    prototype: HTMLFrameElement;
    new (): HTMLFrameElement;
}

interface SVGAnimatedLength {
    animVal: SVGLength;
    baseVal: SVGLength;
}
declare var SVGAnimatedLength: {
    prototype: SVGAnimatedLength;
    new (): SVGAnimatedLength;
}

interface SVGAnimatedPoints {
    points: SVGPointList;
    animatedPoints: SVGPointList;
}

interface SVGDefsElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
}
declare var SVGDefsElement: {
    prototype: SVGDefsElement;
    new (): SVGDefsElement;
}

interface HTMLQuoteElement extends HTMLElement {
    dateTime: string;
    cite: string;
}
declare var HTMLQuoteElement: {
    prototype: HTMLQuoteElement;
    new (): HTMLQuoteElement;
}

interface CSSMediaRule extends CSSRule {
    media: MediaList;
    cssRules: CSSRuleList;
    insertRule( rule: string, index?: number ): number;
    deleteRule( index?: number ): void;
}
declare var CSSMediaRule: {
    prototype: CSSMediaRule;
    new (): CSSMediaRule;
}

interface WindowModal {
    dialogArguments: any;
    returnValue: any;
}

interface XMLHttpRequest extends EventTarget {
    responseBody: any;
    status: number;
    readyState: number;
    responseText: string;
    responseXML: Document;
    ontimeout: ( ev: Event ) => any;
    addEventListener( type: "timeout", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    statusText: string;
    onreadystatechange: ( ev: Event ) => any;
    addEventListener( type: "readystatechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    timeout: number;
    onload: ( ev: Event ) => any;
    addEventListener( type: "load", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    open( method: string, url: string, async?: boolean, user?: string, password?: string ): void;
    create(): XMLHttpRequest;
    send( data?: any ): void;
    abort(): void;
    getAllResponseHeaders(): string;
    setRequestHeader( header: string, value: string ): void;
    getResponseHeader( header: string ): string;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
    LOADING: number;
    DONE: number;
    UNSENT: number;
    OPENED: number;
    HEADERS_RECEIVED: number;
}
declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new (): XMLHttpRequest;
    LOADING: number;
    DONE: number;
    UNSENT: number;
    OPENED: number;
    HEADERS_RECEIVED: number;
}

interface HTMLTableHeaderCellElement extends HTMLTableCellElement {
    scope: string;
}
declare var HTMLTableHeaderCellElement: {
    prototype: HTMLTableHeaderCellElement;
    new (): HTMLTableHeaderCellElement;
}

interface HTMLDListElement extends HTMLElement, DOML2DeprecatedListSpaceReduction {
}
declare var HTMLDListElement: {
    prototype: HTMLDListElement;
    new (): HTMLDListElement;
}

interface MSDataBindingExtensions {
    dataSrc: string;
    dataFormatAs: string;
    dataFld: string;
}

interface SVGPathSegLinetoHorizontalRel extends SVGPathSeg {
    x: number;
}
declare var SVGPathSegLinetoHorizontalRel: {
    prototype: SVGPathSegLinetoHorizontalRel;
    new (): SVGPathSegLinetoHorizontalRel;
}

interface SVGEllipseElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    ry: SVGAnimatedLength;
    cx: SVGAnimatedLength;
    rx: SVGAnimatedLength;
    cy: SVGAnimatedLength;
}
declare var SVGEllipseElement: {
    prototype: SVGEllipseElement;
    new (): SVGEllipseElement;
}

interface SVGAElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {
    target: SVGAnimatedString;
}
declare var SVGAElement: {
    prototype: SVGAElement;
    new (): SVGAElement;
}

interface SVGStylable {
    className: SVGAnimatedString;
    style: CSSStyleDeclaration;
}

interface SVGTransformable extends SVGLocatable {
    transform: SVGAnimatedTransformList;
}

interface HTMLFrameSetElement extends HTMLElement {
    ononline: ( ev: Event ) => any;
    addEventListener( type: "online", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    borderColor: any;
    rows: string;
    cols: string;
    onblur: ( ev: FocusEvent ) => any;
    addEventListener( type: "blur", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    frameSpacing: any;
    onfocus: ( ev: FocusEvent ) => any;
    addEventListener( type: "focus", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    onmessage: ( ev: MessageEvent ) => any;
    addEventListener( type: "message", listener: ( ev: MessageEvent ) => any, useCapture?: boolean ): void;
    onerror: ( ev: Event ) => any;
    addEventListener( type: "error", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    frameBorder: string;
    onresize: ( ev: UIEvent ) => any;
    addEventListener( type: "resize", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    name: string;
    onafterprint: ( ev: Event ) => any;
    addEventListener( type: "afterprint", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onbeforeprint: ( ev: Event ) => any;
    addEventListener( type: "beforeprint", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onoffline: ( ev: Event ) => any;
    addEventListener( type: "offline", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    border: string;
    onunload: ( ev: Event ) => any;
    addEventListener( type: "unload", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onhashchange: ( ev: Event ) => any;
    addEventListener( type: "hashchange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onload: ( ev: Event ) => any;
    addEventListener( type: "load", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onbeforeunload: ( ev: BeforeUnloadEvent ) => any;
    addEventListener( type: "beforeunload", listener: ( ev: BeforeUnloadEvent ) => any, useCapture?: boolean ): void;
    onstorage: ( ev: StorageEvent ) => any;
    addEventListener( type: "storage", listener: ( ev: StorageEvent ) => any, useCapture?: boolean ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var HTMLFrameSetElement: {
    prototype: HTMLFrameSetElement;
    new (): HTMLFrameSetElement;
}

interface Screen {
    width: number;
    deviceXDPI: number;
    fontSmoothingEnabled: boolean;
    bufferDepth: number;
    logicalXDPI: number;
    systemXDPI: number;
    availHeight: number;
    height: number;
    logicalYDPI: number;
    systemYDPI: number;
    updateInterval: number;
    colorDepth: number;
    availWidth: number;
    deviceYDPI: number;
    pixelDepth: number;
}
declare var Screen: {
    prototype: Screen;
    new (): Screen;
}

interface Coordinates {
    altitudeAccuracy: number;
    longitude: number;
    latitude: number;
    speed: number;
    heading: number;
    altitude: number;
    accuracy: number;
}
declare var Coordinates: {
    prototype: Coordinates;
    new (): Coordinates;
}

interface NavigatorGeolocation {
    geolocation: Geolocation;
}

interface NavigatorContentUtils {
}

interface EventListener {
    ( evt: Event ): void;
}

interface SVGLangSpace {
    xmllang: string;
    xmlspace: string;
}

interface DataTransfer {
    effectAllowed: string;
    dropEffect: string;
    clearData( format?: string ): boolean;
    setData( format: string, data: string ): boolean;
    getData( format: string ): string;
}
declare var DataTransfer: {
    prototype: DataTransfer;
    new (): DataTransfer;
}

interface FocusEvent extends UIEvent {
    relatedTarget: EventTarget;
    initFocusEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, relatedTargetArg: EventTarget ): void;
}
declare var FocusEvent: {
    prototype: FocusEvent;
    new (): FocusEvent;
}

interface Range {
    startOffset: number;
    collapsed: boolean;
    endOffset: number;
    startContainer: Node;
    endContainer: Node;
    commonAncestorContainer: Node;
    setStart( refNode: Node, offset: number ): void;
    setEndBefore( refNode: Node ): void;
    setStartBefore( refNode: Node ): void;
    selectNode( refNode: Node ): void;
    detach(): void;
    getBoundingClientRect(): ClientRect;
    toString(): string;
    compareBoundaryPoints( how: number, sourceRange: Range ): number;
    insertNode( newNode: Node ): void;
    collapse( toStart: boolean ): void;
    selectNodeContents( refNode: Node ): void;
    cloneContents(): DocumentFragment;
    setEnd( refNode: Node, offset: number ): void;
    cloneRange(): Range;
    getClientRects(): ClientRectList;
    surroundContents( newParent: Node ): void;
    deleteContents(): void;
    setStartAfter( refNode: Node ): void;
    extractContents(): DocumentFragment;
    setEndAfter( refNode: Node ): void;
    END_TO_END: number;
    START_TO_START: number;
    START_TO_END: number;
    END_TO_START: number;
}
declare var Range: {
    prototype: Range;
    new (): Range;
    END_TO_END: number;
    START_TO_START: number;
    START_TO_END: number;
    END_TO_START: number;
}

interface SVGPoint {
    y: number;
    x: number;
    matrixTransform( matrix: SVGMatrix ): SVGPoint;
}
declare var SVGPoint: {
    prototype: SVGPoint;
    new (): SVGPoint;
}

interface MSPluginsCollection {
    length: number;
    refresh( reload?: boolean ): void;
}
declare var MSPluginsCollection: {
    prototype: MSPluginsCollection;
    new (): MSPluginsCollection;
}

interface SVGAnimatedNumberList {
    animVal: SVGNumberList;
    baseVal: SVGNumberList;
}
declare var SVGAnimatedNumberList: {
    prototype: SVGAnimatedNumberList;
    new (): SVGAnimatedNumberList;
}

interface SVGSVGElement extends SVGElement, SVGStylable, SVGZoomAndPan, DocumentEvent, SVGLangSpace, SVGLocatable, SVGTests, SVGFitToViewBox, SVGExternalResourcesRequired {
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    contentStyleType: string;
    onzoom: ( ev: any ) => any;
    addEventListener( type: "zoom", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    y: SVGAnimatedLength;
    viewport: SVGRect;
    onerror: ( ev: Event ) => any;
    addEventListener( type: "error", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    pixelUnitToMillimeterY: number;
    onresize: ( ev: UIEvent ) => any;
    addEventListener( type: "resize", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    screenPixelToMillimeterY: number;
    height: SVGAnimatedLength;
    onabort: ( ev: UIEvent ) => any;
    addEventListener( type: "abort", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    contentScriptType: string;
    pixelUnitToMillimeterX: number;
    currentTranslate: SVGPoint;
    onunload: ( ev: Event ) => any;
    addEventListener( type: "unload", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    currentScale: number;
    onscroll: ( ev: UIEvent ) => any;
    addEventListener( type: "scroll", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    screenPixelToMillimeterX: number;
    setCurrentTime( seconds: number ): void;
    createSVGLength(): SVGLength;
    getIntersectionList( rect: SVGRect, referenceElement: SVGElement ): NodeList;
    unpauseAnimations(): void;
    createSVGRect(): SVGRect;
    checkIntersection( element: SVGElement, rect: SVGRect ): boolean;
    unsuspendRedrawAll(): void;
    pauseAnimations(): void;
    suspendRedraw( maxWaitMilliseconds: number ): number;
    deselectAll(): void;
    createSVGAngle(): SVGAngle;
    getEnclosureList( rect: SVGRect, referenceElement: SVGElement ): NodeList;
    createSVGTransform(): SVGTransform;
    unsuspendRedraw( suspendHandleID: number ): void;
    forceRedraw(): void;
    getCurrentTime(): number;
    checkEnclosure( element: SVGElement, rect: SVGRect ): boolean;
    createSVGMatrix(): SVGMatrix;
    createSVGPoint(): SVGPoint;
    createSVGNumber(): SVGNumber;
    createSVGTransformFromMatrix( matrix: SVGMatrix ): SVGTransform;
    getComputedStyle( elt: Element, pseudoElt?: string ): CSSStyleDeclaration;
    getElementById( elementId: string ): Element;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var SVGSVGElement: {
    prototype: SVGSVGElement;
    new (): SVGSVGElement;
}

interface HTMLLabelElement extends HTMLElement, MSDataBindingExtensions {
    htmlFor: string;
    form: HTMLFormElement;
}
declare var HTMLLabelElement: {
    prototype: HTMLLabelElement;
    new (): HTMLLabelElement;
}

interface MSResourceMetadata {
    protocol: string;
    fileSize: string;
    fileUpdatedDate: string;
    nameProp: string;
    fileCreatedDate: string;
    fileModifiedDate: string;
    mimeType: string;
}

interface HTMLLegendElement extends HTMLElement, MSDataBindingExtensions {
    align: string;
    form: HTMLFormElement;
}
declare var HTMLLegendElement: {
    prototype: HTMLLegendElement;
    new (): HTMLLegendElement;
}

interface HTMLDirectoryElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {
}
declare var HTMLDirectoryElement: {
    prototype: HTMLDirectoryElement;
    new (): HTMLDirectoryElement;
}

interface SVGAnimatedInteger {
    animVal: number;
    baseVal: number;
}
declare var SVGAnimatedInteger: {
    prototype: SVGAnimatedInteger;
    new (): SVGAnimatedInteger;
}

interface SVGTextElement extends SVGTextPositioningElement, SVGTransformable {
}
declare var SVGTextElement: {
    prototype: SVGTextElement;
    new (): SVGTextElement;
}

interface SVGTSpanElement extends SVGTextPositioningElement {
}
declare var SVGTSpanElement: {
    prototype: SVGTSpanElement;
    new (): SVGTSpanElement;
}

interface HTMLLIElement extends HTMLElement, DOML2DeprecatedListNumberingAndBulletStyle {
    value: number;
}
declare var HTMLLIElement: {
    prototype: HTMLLIElement;
    new (): HTMLLIElement;
}

interface SVGPathSegLinetoVerticalAbs extends SVGPathSeg {
    y: number;
}
declare var SVGPathSegLinetoVerticalAbs: {
    prototype: SVGPathSegLinetoVerticalAbs;
    new (): SVGPathSegLinetoVerticalAbs;
}

interface MSStorageExtensions {
    remainingSpace: number;
}

interface SVGStyleElement extends SVGElement, SVGLangSpace {
    media: string;
    type: string;
    title: string;
}
declare var SVGStyleElement: {
    prototype: SVGStyleElement;
    new (): SVGStyleElement;
}

interface MSCurrentStyleCSSProperties extends MSCSSProperties {
    blockDirection: string;
    clipBottom: string;
    clipLeft: string;
    clipRight: string;
    clipTop: string;
    hasLayout: string;
}
declare var MSCurrentStyleCSSProperties: {
    prototype: MSCurrentStyleCSSProperties;
    new (): MSCurrentStyleCSSProperties;
}

interface MSHTMLCollectionExtensions {
    urns( urn: any ): Object;
    tags( tagName: any ): Object;
}

interface Storage extends MSStorageExtensions {
    length: number;
    getItem( key: string ): any;
    [key: string]: any;
    setItem( key: string, data: string ): void;
    clear(): void;
    removeItem( key: string ): void;
    key( index: number ): string;
    [index: number]: any;
}
declare var Storage: {
    prototype: Storage;
    new (): Storage;
}

interface HTMLIFrameElement extends HTMLElement, GetSVGDocument, MSDataBindingExtensions {
    width: string;
    scrolling: string;
    marginHeight: string;
    marginWidth: string;
    frameSpacing: any;
    frameBorder: string;
    noResize: boolean;
    vspace: number;
    contentWindow: Window;
    align: string;
    src: string;
    name: string;
    height: string;
    border: string;
    contentDocument: Document;
    hspace: number;
    longDesc: string;
    security: any;
    onload: ( ev: Event ) => any;
    addEventListener( type: "load", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var HTMLIFrameElement: {
    prototype: HTMLIFrameElement;
    new (): HTMLIFrameElement;
}

interface TextRangeCollection {
    length: number;
    item( index: number ): TextRange;
    [index: number]: TextRange;
}
declare var TextRangeCollection: {
    prototype: TextRangeCollection;
    new (): TextRangeCollection;
}

interface HTMLBodyElement extends HTMLElement, DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {
    scroll: string;
    ononline: ( ev: Event ) => any;
    addEventListener( type: "online", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onblur: ( ev: FocusEvent ) => any;
    addEventListener( type: "blur", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    noWrap: boolean;
    onfocus: ( ev: FocusEvent ) => any;
    addEventListener( type: "focus", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    onmessage: ( ev: MessageEvent ) => any;
    addEventListener( type: "message", listener: ( ev: MessageEvent ) => any, useCapture?: boolean ): void;
    text: any;
    onerror: ( ev: Event ) => any;
    addEventListener( type: "error", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    bgProperties: string;
    onresize: ( ev: UIEvent ) => any;
    addEventListener( type: "resize", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    link: any;
    aLink: any;
    bottomMargin: any;
    topMargin: any;
    onafterprint: ( ev: Event ) => any;
    addEventListener( type: "afterprint", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    vLink: any;
    onbeforeprint: ( ev: Event ) => any;
    addEventListener( type: "beforeprint", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onoffline: ( ev: Event ) => any;
    addEventListener( type: "offline", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onunload: ( ev: Event ) => any;
    addEventListener( type: "unload", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onhashchange: ( ev: Event ) => any;
    addEventListener( type: "hashchange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onload: ( ev: Event ) => any;
    addEventListener( type: "load", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    rightMargin: any;
    onbeforeunload: ( ev: BeforeUnloadEvent ) => any;
    addEventListener( type: "beforeunload", listener: ( ev: BeforeUnloadEvent ) => any, useCapture?: boolean ): void;
    leftMargin: any;
    onstorage: ( ev: StorageEvent ) => any;
    addEventListener( type: "storage", listener: ( ev: StorageEvent ) => any, useCapture?: boolean ): void;
    createTextRange(): TextRange;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var HTMLBodyElement: {
    prototype: HTMLBodyElement;
    new (): HTMLBodyElement;
}

interface DocumentType extends Node {
    name: string;
    notations: NamedNodeMap;
    systemId: string;
    internalSubset: string;
    entities: NamedNodeMap;
    publicId: string;
}
declare var DocumentType: {
    prototype: DocumentType;
    new (): DocumentType;
}

interface SVGRadialGradientElement extends SVGGradientElement {
    cx: SVGAnimatedLength;
    r: SVGAnimatedLength;
    cy: SVGAnimatedLength;
    fx: SVGAnimatedLength;
    fy: SVGAnimatedLength;
}
declare var SVGRadialGradientElement: {
    prototype: SVGRadialGradientElement;
    new (): SVGRadialGradientElement;
}

interface MutationEvent extends Event {
    newValue: string;
    attrChange: number;
    attrName: string;
    prevValue: string;
    relatedNode: Node;
    initMutationEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, relatedNodeArg: Node, prevValueArg: string, newValueArg: string, attrNameArg: string, attrChangeArg: number ): void;
    MODIFICATION: number;
    REMOVAL: number;
    ADDITION: number;
}
declare var MutationEvent: {
    prototype: MutationEvent;
    new (): MutationEvent;
    MODIFICATION: number;
    REMOVAL: number;
    ADDITION: number;
}

interface DragEvent extends MouseEvent {
    dataTransfer: DataTransfer;
    initDragEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, dataTransferArg: DataTransfer ): void;
}
declare var DragEvent: {
    prototype: DragEvent;
    new (): DragEvent;
}

interface HTMLTableSectionElement extends HTMLElement, HTMLTableAlignment, DOML2DeprecatedBackgroundColorStyle {
    align: string;
    rows: HTMLCollection;
    deleteRow( index?: number ): void;
    moveRow( indexFrom?: number, indexTo?: number ): Object;
    insertRow( index?: number ): HTMLElement;
}
declare var HTMLTableSectionElement: {
    prototype: HTMLTableSectionElement;
    new (): HTMLTableSectionElement;
}

interface DOML2DeprecatedListNumberingAndBulletStyle {
    type: string;
}

interface HTMLInputElement extends HTMLElement, MSDataBindingExtensions {
    width: string;
    status: boolean;
    form: HTMLFormElement;
    selectionStart: number;
    indeterminate: boolean;
    readOnly: boolean;
    size: number;
    loop: number;
    selectionEnd: number;
    vrml: string;
    lowsrc: string;
    vspace: number;
    accept: string;
    alt: string;
    defaultChecked: boolean;
    align: string;
    value: string;
    src: string;
    name: string;
    useMap: string;
    height: string;
    border: string;
    dynsrc: string;
    checked: boolean;
    hspace: number;
    maxLength: number;
    type: string;
    defaultValue: string;
    complete: boolean;
    start: string;
    createTextRange(): TextRange;
    setSelectionRange( start: number, end: number ): void;
    select(): void;
}
declare var HTMLInputElement: {
    prototype: HTMLInputElement;
    new (): HTMLInputElement;
}

interface HTMLAnchorElement extends HTMLElement, MSDataBindingExtensions {
    rel: string;
    protocol: string;
    search: string;
    coords: string;
    hostname: string;
    pathname: string;
    Methods: string;
    target: string;
    protocolLong: string;
    href: string;
    name: string;
    charset: string;
    hreflang: string;
    port: string;
    host: string;
    hash: string;
    nameProp: string;
    urn: string;
    rev: string;
    shape: string;
    type: string;
    mimeType: string;
    toString(): string;
}
declare var HTMLAnchorElement: {
    prototype: HTMLAnchorElement;
    new (): HTMLAnchorElement;
}

interface HTMLParamElement extends HTMLElement {
    value: string;
    name: string;
    type: string;
    valueType: string;
}
declare var HTMLParamElement: {
    prototype: HTMLParamElement;
    new (): HTMLParamElement;
}

interface SVGImageElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
}
declare var SVGImageElement: {
    prototype: SVGImageElement;
    new (): SVGImageElement;
}

interface SVGAnimatedNumber {
    animVal: number;
    baseVal: number;
}
declare var SVGAnimatedNumber: {
    prototype: SVGAnimatedNumber;
    new (): SVGAnimatedNumber;
}

interface PerformanceTiming {
    redirectStart: number;
    domainLookupEnd: number;
    responseStart: number;
    domComplete: number;
    domainLookupStart: number;
    loadEventStart: number;
    msFirstPaint: number;
    unloadEventEnd: number;
    fetchStart: number;
    requestStart: number;
    domInteractive: number;
    navigationStart: number;
    connectEnd: number;
    loadEventEnd: number;
    connectStart: number;
    responseEnd: number;
    domLoading: number;
    redirectEnd: number;
    unloadEventStart: number;
    domContentLoadedEventStart: number;
    domContentLoadedEventEnd: number;
    toJSON(): any;
}
declare var PerformanceTiming: {
    prototype: PerformanceTiming;
    new (): PerformanceTiming;
}

interface HTMLPreElement extends HTMLElement, DOML2DeprecatedTextFlowControl {
    width: number;
    cite: string;
}
declare var HTMLPreElement: {
    prototype: HTMLPreElement;
    new (): HTMLPreElement;
}

interface EventException {
    code: number;
    message: string;
    toString(): string;
    DISPATCH_REQUEST_ERR: number;
    UNSPECIFIED_EVENT_TYPE_ERR: number;
}
declare var EventException: {
    prototype: EventException;
    new (): EventException;
    DISPATCH_REQUEST_ERR: number;
    UNSPECIFIED_EVENT_TYPE_ERR: number;
}

interface MSNavigatorDoNotTrack {
    msDoNotTrack: string;
}

interface NavigatorOnLine {
    onLine: boolean;
}

interface WindowLocalStorage {
    localStorage: Storage;
}

interface SVGMetadataElement extends SVGElement {
}
declare var SVGMetadataElement: {
    prototype: SVGMetadataElement;
    new (): SVGMetadataElement;
}

interface SVGPathSegArcRel extends SVGPathSeg {
    y: number;
    sweepFlag: boolean;
    r2: number;
    x: number;
    angle: number;
    r1: number;
    largeArcFlag: boolean;
}
declare var SVGPathSegArcRel: {
    prototype: SVGPathSegArcRel;
    new (): SVGPathSegArcRel;
}

interface SVGPathSegMovetoAbs extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegMovetoAbs: {
    prototype: SVGPathSegMovetoAbs;
    new (): SVGPathSegMovetoAbs;
}

interface SVGStringList {
    numberOfItems: number;
    replaceItem( newItem: string, index: number ): string;
    getItem( index: number ): string;
    clear(): void;
    appendItem( newItem: string ): string;
    initialize( newItem: string ): string;
    removeItem( index: number ): string;
    insertItemBefore( newItem: string, index: number ): string;
}
declare var SVGStringList: {
    prototype: SVGStringList;
    new (): SVGStringList;
}

interface XDomainRequest {
    timeout: number;
    onerror: ( ev: Event ) => any;
    addEventListener( type: "error", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onload: ( ev: Event ) => any;
    addEventListener( type: "load", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onprogress: ( ev: any ) => any;
    addEventListener( type: "progress", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    ontimeout: ( ev: Event ) => any;
    addEventListener( type: "timeout", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    responseText: string;
    contentType: string;
    open( method: string, url: string ): void;
    create(): XDomainRequest;
    abort(): void;
    send( data?: any ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var XDomainRequest: {
    prototype: XDomainRequest;
    new (): XDomainRequest;
}

interface DOML2DeprecatedBackgroundColorStyle {
    bgColor: any;
}

interface ElementTraversal {
    childElementCount: number;
    previousElementSibling: Element;
    lastElementChild: Element;
    nextElementSibling: Element;
    firstElementChild: Element;
}

interface SVGLength {
    valueAsString: string;
    valueInSpecifiedUnits: number;
    value: number;
    unitType: number;
    newValueSpecifiedUnits( unitType: number, valueInSpecifiedUnits: number ): void;
    convertToSpecifiedUnits( unitType: number ): void;
    SVG_LENGTHTYPE_NUMBER: number;
    SVG_LENGTHTYPE_CM: number;
    SVG_LENGTHTYPE_PC: number;
    SVG_LENGTHTYPE_PERCENTAGE: number;
    SVG_LENGTHTYPE_MM: number;
    SVG_LENGTHTYPE_PT: number;
    SVG_LENGTHTYPE_IN: number;
    SVG_LENGTHTYPE_EMS: number;
    SVG_LENGTHTYPE_PX: number;
    SVG_LENGTHTYPE_UNKNOWN: number;
    SVG_LENGTHTYPE_EXS: number;
}
declare var SVGLength: {
    prototype: SVGLength;
    new (): SVGLength;
    SVG_LENGTHTYPE_NUMBER: number;
    SVG_LENGTHTYPE_CM: number;
    SVG_LENGTHTYPE_PC: number;
    SVG_LENGTHTYPE_PERCENTAGE: number;
    SVG_LENGTHTYPE_MM: number;
    SVG_LENGTHTYPE_PT: number;
    SVG_LENGTHTYPE_IN: number;
    SVG_LENGTHTYPE_EMS: number;
    SVG_LENGTHTYPE_PX: number;
    SVG_LENGTHTYPE_UNKNOWN: number;
    SVG_LENGTHTYPE_EXS: number;
}

interface SVGPolygonElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGAnimatedPoints, SVGTests, SVGExternalResourcesRequired {
}
declare var SVGPolygonElement: {
    prototype: SVGPolygonElement;
    new (): SVGPolygonElement;
}

interface HTMLPhraseElement extends HTMLElement {
    dateTime: string;
    cite: string;
}
declare var HTMLPhraseElement: {
    prototype: HTMLPhraseElement;
    new (): HTMLPhraseElement;
}

interface NavigatorStorageUtils {
}

interface SVGPathSegCurvetoCubicRel extends SVGPathSeg {
    y: number;
    y1: number;
    x2: number;
    x: number;
    x1: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicRel: {
    prototype: SVGPathSegCurvetoCubicRel;
    new (): SVGPathSegCurvetoCubicRel;
}

interface MSEventObj extends Event {
    nextPage: string;
    keyCode: number;
    toElement: Element;
    returnValue: any;
    dataFld: string;
    y: number;
    dataTransfer: DataTransfer;
    propertyName: string;
    url: string;
    offsetX: number;
    recordset: Object;
    screenX: number;
    buttonID: number;
    wheelDelta: number;
    reason: number;
    origin: string;
    data: string;
    srcFilter: Object;
    boundElements: HTMLCollection;
    cancelBubble: boolean;
    altLeft: boolean;
    behaviorCookie: number;
    bookmarks: BookmarkCollection;
    type: string;
    repeat: boolean;
    srcElement: Element;
    source: Window;
    fromElement: Element;
    offsetY: number;
    x: number;
    behaviorPart: number;
    qualifier: string;
    altKey: boolean;
    ctrlKey: boolean;
    clientY: number;
    shiftKey: boolean;
    shiftLeft: boolean;
    contentOverflow: boolean;
    screenY: number;
    ctrlLeft: boolean;
    button: number;
    srcUrn: string;
    clientX: number;
    actionURL: string;
    getAttribute( strAttributeName: string, lFlags?: number ): any;
    setAttribute( strAttributeName: string, AttributeValue: any, lFlags?: number ): void;
    removeAttribute( strAttributeName: string, lFlags?: number ): boolean;
}
declare var MSEventObj: {
    prototype: MSEventObj;
    new (): MSEventObj;
}

interface SVGTextContentElement extends SVGElement, SVGStylable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    textLength: SVGAnimatedLength;
    lengthAdjust: SVGAnimatedEnumeration;
    getCharNumAtPosition( point: SVGPoint ): number;
    getStartPositionOfChar( charnum: number ): SVGPoint;
    getExtentOfChar( charnum: number ): SVGRect;
    getComputedTextLength(): number;
    getSubStringLength( charnum: number, nchars: number ): number;
    selectSubString( charnum: number, nchars: number ): void;
    getNumberOfChars(): number;
    getRotationOfChar( charnum: number ): number;
    getEndPositionOfChar( charnum: number ): SVGPoint;
    LENGTHADJUST_SPACING: number;
    LENGTHADJUST_SPACINGANDGLYPHS: number;
    LENGTHADJUST_UNKNOWN: number;
}
declare var SVGTextContentElement: {
    prototype: SVGTextContentElement;
    new (): SVGTextContentElement;
    LENGTHADJUST_SPACING: number;
    LENGTHADJUST_SPACINGANDGLYPHS: number;
    LENGTHADJUST_UNKNOWN: number;
}

interface DOML2DeprecatedColorProperty {
    color: string;
}

interface HTMLCanvasElement extends HTMLElement {
    width: number;
    height: number;
    toDataURL( type?: string, ...args: any[] ): string;
    getContext( contextId: string, ...args: any[] ): any;
    getContext( contextId: "2d" ): CanvasRenderingContext2D;
}
declare var HTMLCanvasElement: {
    prototype: HTMLCanvasElement;
    new (): HTMLCanvasElement;
}

interface Location {
    hash: string;
    protocol: string;
    search: string;
    href: string;
    hostname: string;
    port: string;
    pathname: string;
    host: string;
    reload( flag?: boolean ): void;
    replace( url: string ): void;
    assign( url: string ): void;
    toString(): string;
}
declare var Location: {
    prototype: Location;
    new (): Location;
}

interface HTMLTitleElement extends HTMLElement {
    text: string;
}
declare var HTMLTitleElement: {
    prototype: HTMLTitleElement;
    new (): HTMLTitleElement;
}

interface HTMLStyleElement extends HTMLElement, LinkStyle {
    media: string;
    type: string;
}
declare var HTMLStyleElement: {
    prototype: HTMLStyleElement;
    new (): HTMLStyleElement;
}

interface PerformanceEntry {
    name: string;
    startTime: number;
    duration: number;
    entryType: string;
}
declare var PerformanceEntry: {
    prototype: PerformanceEntry;
    new (): PerformanceEntry;
}

interface SVGTransform {
    type: number;
    angle: number;
    matrix: SVGMatrix;
    setTranslate( tx: number, ty: number ): void;
    setScale( sx: number, sy: number ): void;
    setMatrix( matrix: SVGMatrix ): void;
    setSkewY( angle: number ): void;
    setRotate( angle: number, cx: number, cy: number ): void;
    setSkewX( angle: number ): void;
    SVG_TRANSFORM_SKEWX: number;
    SVG_TRANSFORM_UNKNOWN: number;
    SVG_TRANSFORM_SCALE: number;
    SVG_TRANSFORM_TRANSLATE: number;
    SVG_TRANSFORM_MATRIX: number;
    SVG_TRANSFORM_ROTATE: number;
    SVG_TRANSFORM_SKEWY: number;
}
declare var SVGTransform: {
    prototype: SVGTransform;
    new (): SVGTransform;
    SVG_TRANSFORM_SKEWX: number;
    SVG_TRANSFORM_UNKNOWN: number;
    SVG_TRANSFORM_SCALE: number;
    SVG_TRANSFORM_TRANSLATE: number;
    SVG_TRANSFORM_MATRIX: number;
    SVG_TRANSFORM_ROTATE: number;
    SVG_TRANSFORM_SKEWY: number;
}

interface UIEvent extends Event {
    detail: number;
    view: Window;
    initUIEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number ): void;
}
declare var UIEvent: {
    prototype: UIEvent;
    new (): UIEvent;
}

interface SVGURIReference {
    href: SVGAnimatedString;
}

interface SVGPathSeg {
    pathSegType: number;
    pathSegTypeAsLetter: string;
    PATHSEG_MOVETO_REL: number;
    PATHSEG_LINETO_VERTICAL_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_REL: number;
    PATHSEG_CURVETO_CUBIC_ABS: number;
    PATHSEG_LINETO_HORIZONTAL_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_ABS: number;
    PATHSEG_LINETO_ABS: number;
    PATHSEG_CLOSEPATH: number;
    PATHSEG_LINETO_HORIZONTAL_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
    PATHSEG_LINETO_REL: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
    PATHSEG_ARC_REL: number;
    PATHSEG_CURVETO_CUBIC_REL: number;
    PATHSEG_UNKNOWN: number;
    PATHSEG_LINETO_VERTICAL_ABS: number;
    PATHSEG_ARC_ABS: number;
    PATHSEG_MOVETO_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
}
declare var SVGPathSeg: {
    prototype: SVGPathSeg;
    new (): SVGPathSeg;
    PATHSEG_MOVETO_REL: number;
    PATHSEG_LINETO_VERTICAL_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_REL: number;
    PATHSEG_CURVETO_CUBIC_ABS: number;
    PATHSEG_LINETO_HORIZONTAL_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_ABS: number;
    PATHSEG_LINETO_ABS: number;
    PATHSEG_CLOSEPATH: number;
    PATHSEG_LINETO_HORIZONTAL_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
    PATHSEG_LINETO_REL: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
    PATHSEG_ARC_REL: number;
    PATHSEG_CURVETO_CUBIC_REL: number;
    PATHSEG_UNKNOWN: number;
    PATHSEG_LINETO_VERTICAL_ABS: number;
    PATHSEG_ARC_ABS: number;
    PATHSEG_MOVETO_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
}

interface WheelEvent extends MouseEvent {
    deltaZ: number;
    deltaX: number;
    deltaMode: number;
    deltaY: number;
    initWheelEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, deltaXArg: number, deltaYArg: number, deltaZArg: number, deltaMode: number ): void;
    DOM_DELTA_PIXEL: number;
    DOM_DELTA_LINE: number;
    DOM_DELTA_PAGE: number;
}
declare var WheelEvent: {
    prototype: WheelEvent;
    new (): WheelEvent;
    DOM_DELTA_PIXEL: number;
    DOM_DELTA_LINE: number;
    DOM_DELTA_PAGE: number;
}

interface MSEventAttachmentTarget {
    attachEvent( event: string, listener: EventListener ): boolean;
    detachEvent( event: string, listener: EventListener ): void;
}

interface SVGNumber {
    value: number;
}
declare var SVGNumber: {
    prototype: SVGNumber;
    new (): SVGNumber;
}

interface SVGPathElement extends SVGElement, SVGStylable, SVGAnimatedPathData, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    getPathSegAtLength( distance: number ): number;
    getPointAtLength( distance: number ): SVGPoint;
    createSVGPathSegCurvetoQuadraticAbs( x: number, y: number, x1: number, y1: number ): SVGPathSegCurvetoQuadraticAbs;
    createSVGPathSegLinetoRel( x: number, y: number ): SVGPathSegLinetoRel;
    createSVGPathSegCurvetoQuadraticRel( x: number, y: number, x1: number, y1: number ): SVGPathSegCurvetoQuadraticRel;
    createSVGPathSegCurvetoCubicAbs( x: number, y: number, x1: number, y1: number, x2: number, y2: number ): SVGPathSegCurvetoCubicAbs;
    createSVGPathSegLinetoAbs( x: number, y: number ): SVGPathSegLinetoAbs;
    createSVGPathSegClosePath(): SVGPathSegClosePath;
    createSVGPathSegCurvetoCubicRel( x: number, y: number, x1: number, y1: number, x2: number, y2: number ): SVGPathSegCurvetoCubicRel;
    createSVGPathSegCurvetoQuadraticSmoothRel( x: number, y: number ): SVGPathSegCurvetoQuadraticSmoothRel;
    createSVGPathSegMovetoRel( x: number, y: number ): SVGPathSegMovetoRel;
    createSVGPathSegCurvetoCubicSmoothAbs( x: number, y: number, x2: number, y2: number ): SVGPathSegCurvetoCubicSmoothAbs;
    createSVGPathSegMovetoAbs( x: number, y: number ): SVGPathSegMovetoAbs;
    createSVGPathSegLinetoVerticalRel( y: number ): SVGPathSegLinetoVerticalRel;
    createSVGPathSegArcRel( x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean ): SVGPathSegArcRel;
    createSVGPathSegCurvetoQuadraticSmoothAbs( x: number, y: number ): SVGPathSegCurvetoQuadraticSmoothAbs;
    createSVGPathSegLinetoHorizontalRel( x: number ): SVGPathSegLinetoHorizontalRel;
    getTotalLength(): number;
    createSVGPathSegCurvetoCubicSmoothRel( x: number, y: number, x2: number, y2: number ): SVGPathSegCurvetoCubicSmoothRel;
    createSVGPathSegLinetoHorizontalAbs( x: number ): SVGPathSegLinetoHorizontalAbs;
    createSVGPathSegLinetoVerticalAbs( y: number ): SVGPathSegLinetoVerticalAbs;
    createSVGPathSegArcAbs( x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean ): SVGPathSegArcAbs;
}
declare var SVGPathElement: {
    prototype: SVGPathElement;
    new (): SVGPathElement;
}

interface MSCompatibleInfo {
    version: string;
    userAgent: string;
}
declare var MSCompatibleInfo: {
    prototype: MSCompatibleInfo;
    new (): MSCompatibleInfo;
}

interface Text extends CharacterData, MSNodeExtensions {
    wholeText: string;
    splitText( offset: number ): Text;
    replaceWholeText( content: string ): Text;
}
declare var Text: {
    prototype: Text;
    new (): Text;
}

interface SVGAnimatedRect {
    animVal: SVGRect;
    baseVal: SVGRect;
}
declare var SVGAnimatedRect: {
    prototype: SVGAnimatedRect;
    new (): SVGAnimatedRect;
}

interface CSSNamespaceRule extends CSSRule {
    namespaceURI: string;
    prefix: string;
}
declare var CSSNamespaceRule: {
    prototype: CSSNamespaceRule;
    new (): CSSNamespaceRule;
}

interface SVGPathSegList {
    numberOfItems: number;
    replaceItem( newItem: SVGPathSeg, index: number ): SVGPathSeg;
    getItem( index: number ): SVGPathSeg;
    clear(): void;
    appendItem( newItem: SVGPathSeg ): SVGPathSeg;
    initialize( newItem: SVGPathSeg ): SVGPathSeg;
    removeItem( index: number ): SVGPathSeg;
    insertItemBefore( newItem: SVGPathSeg, index: number ): SVGPathSeg;
}
declare var SVGPathSegList: {
    prototype: SVGPathSegList;
    new (): SVGPathSegList;
}

interface HTMLUnknownElement extends HTMLElement, MSDataBindingRecordSetReadonlyExtensions {
}
declare var HTMLUnknownElement: {
    prototype: HTMLUnknownElement;
    new (): HTMLUnknownElement;
}

interface HTMLAudioElement extends HTMLMediaElement {
}
declare var HTMLAudioElement: {
    prototype: HTMLAudioElement;
    new (): HTMLAudioElement;
}

interface MSImageResourceExtensions {
    dynsrc: string;
    vrml: string;
    lowsrc: string;
    start: string;
    loop: number;
}

interface PositionError {
    code: number;
    message: string;
    toString(): string;
    POSITION_UNAVAILABLE: number;
    PERMISSION_DENIED: number;
    TIMEOUT: number;
}
declare var PositionError: {
    prototype: PositionError;
    new (): PositionError;
    POSITION_UNAVAILABLE: number;
    PERMISSION_DENIED: number;
    TIMEOUT: number;
}

interface HTMLTableCellElement extends HTMLElement, HTMLTableAlignment, DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {
    width: number;
    headers: string;
    cellIndex: number;
    align: string;
    borderColorLight: any;
    colSpan: number;
    borderColor: any;
    axis: string;
    height: any;
    noWrap: boolean;
    abbr: string;
    rowSpan: number;
    scope: string;
    borderColorDark: any;
}
declare var HTMLTableCellElement: {
    prototype: HTMLTableCellElement;
    new (): HTMLTableCellElement;
}

interface SVGElementInstance extends EventTarget {
    previousSibling: SVGElementInstance;
    parentNode: SVGElementInstance;
    lastChild: SVGElementInstance;
    nextSibling: SVGElementInstance;
    childNodes: SVGElementInstanceList;
    correspondingUseElement: SVGUseElement;
    correspondingElement: SVGElement;
    firstChild: SVGElementInstance;
}
declare var SVGElementInstance: {
    prototype: SVGElementInstance;
    new (): SVGElementInstance;
}

interface MSNamespaceInfoCollection {
    length: number;
    add( namespace?: string, urn?: string, implementationUrl?: any ): Object;
    item( index: any ): Object;
    [index: string]: Object;
}
declare var MSNamespaceInfoCollection: {
    prototype: MSNamespaceInfoCollection;
    new (): MSNamespaceInfoCollection;
}

interface SVGCircleElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    cx: SVGAnimatedLength;
    r: SVGAnimatedLength;
    cy: SVGAnimatedLength;
}
declare var SVGCircleElement: {
    prototype: SVGCircleElement;
    new (): SVGCircleElement;
}

interface StyleSheetList {
    length: number;
    item( index?: number ): StyleSheet;
    [index: number]: StyleSheet;
}
declare var StyleSheetList: {
    prototype: StyleSheetList;
    new (): StyleSheetList;
}

interface CSSImportRule extends CSSRule {
    styleSheet: CSSStyleSheet;
    href: string;
    media: MediaList;
}
declare var CSSImportRule: {
    prototype: CSSImportRule;
    new (): CSSImportRule;
}

interface CustomEvent extends Event {
    detail: Object;
    initCustomEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, detailArg: Object ): void;
}
declare var CustomEvent: {
    prototype: CustomEvent;
    new (): CustomEvent;
}

interface HTMLBaseFontElement extends HTMLElement, DOML2DeprecatedColorProperty {
    face: string;
    size: number;
}
declare var HTMLBaseFontElement: {
    prototype: HTMLBaseFontElement;
    new (): HTMLBaseFontElement;
}

interface HTMLTextAreaElement extends HTMLElement, MSDataBindingExtensions {
    value: string;
    status: any;
    form: HTMLFormElement;
    name: string;
    selectionStart: number;
    rows: number;
    cols: number;
    readOnly: boolean;
    wrap: string;
    selectionEnd: number;
    type: string;
    defaultValue: string;
    createTextRange(): TextRange;
    setSelectionRange( start: number, end: number ): void;
    select(): void;
}
declare var HTMLTextAreaElement: {
    prototype: HTMLTextAreaElement;
    new (): HTMLTextAreaElement;
}

interface Geolocation {
    clearWatch( watchId: number ): void;
    getCurrentPosition( successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions ): void;
    watchPosition( successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions ): number;
}
declare var Geolocation: {
    prototype: Geolocation;
    new (): Geolocation;
}

interface DOML2DeprecatedMarginStyle {
    vspace: number;
    hspace: number;
}

interface MSWindowModeless {
    dialogTop: any;
    dialogLeft: any;
    dialogWidth: any;
    dialogHeight: any;
    menuArguments: any;
}

interface DOML2DeprecatedAlignmentStyle {
    align: string;
}

interface HTMLMarqueeElement extends HTMLElement, MSDataBindingExtensions, DOML2DeprecatedBackgroundColorStyle {
    width: string;
    onbounce: ( ev: Event ) => any;
    addEventListener( type: "bounce", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    vspace: number;
    trueSpeed: boolean;
    scrollAmount: number;
    scrollDelay: number;
    behavior: string;
    height: string;
    loop: number;
    direction: string;
    hspace: number;
    onstart: ( ev: Event ) => any;
    addEventListener( type: "start", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onfinish: ( ev: Event ) => any;
    addEventListener( type: "finish", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    stop(): void;
    start(): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var HTMLMarqueeElement: {
    prototype: HTMLMarqueeElement;
    new (): HTMLMarqueeElement;
}

interface SVGRect {
    y: number;
    width: number;
    x: number;
    height: number;
}
declare var SVGRect: {
    prototype: SVGRect;
    new (): SVGRect;
}

interface MSNodeExtensions {
    swapNode( otherNode: Node ): Node;
    removeNode( deep?: boolean ): Node;
    replaceNode( replacement: Node ): Node;
}

interface History {
    length: number;
    back( distance?: any ): void;
    forward( distance?: any ): void;
    go( delta?: any ): void;
}
declare var History: {
    prototype: History;
    new (): History;
}

interface SVGPathSegCurvetoCubicAbs extends SVGPathSeg {
    y: number;
    y1: number;
    x2: number;
    x: number;
    x1: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicAbs: {
    prototype: SVGPathSegCurvetoCubicAbs;
    new (): SVGPathSegCurvetoCubicAbs;
}

interface SVGPathSegCurvetoQuadraticAbs extends SVGPathSeg {
    y: number;
    y1: number;
    x: number;
    x1: number;
}
declare var SVGPathSegCurvetoQuadraticAbs: {
    prototype: SVGPathSegCurvetoQuadraticAbs;
    new (): SVGPathSegCurvetoQuadraticAbs;
}

interface TimeRanges {
    length: number;
    start( index: number ): number;
    end( index: number ): number;
}
declare var TimeRanges: {
    prototype: TimeRanges;
    new (): TimeRanges;
}

interface CSSRule {
    cssText: string;
    parentStyleSheet: CSSStyleSheet;
    parentRule: CSSRule;
    type: number;
    IMPORT_RULE: number;
    MEDIA_RULE: number;
    STYLE_RULE: number;
    NAMESPACE_RULE: number;
    PAGE_RULE: number;
    UNKNOWN_RULE: number;
    FONT_FACE_RULE: number;
    CHARSET_RULE: number;
}
declare var CSSRule: {
    prototype: CSSRule;
    new (): CSSRule;
    IMPORT_RULE: number;
    MEDIA_RULE: number;
    STYLE_RULE: number;
    NAMESPACE_RULE: number;
    PAGE_RULE: number;
    UNKNOWN_RULE: number;
    FONT_FACE_RULE: number;
    CHARSET_RULE: number;
}

interface SVGPathSegLinetoAbs extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegLinetoAbs: {
    prototype: SVGPathSegLinetoAbs;
    new (): SVGPathSegLinetoAbs;
}

interface HTMLModElement extends HTMLElement {
    dateTime: string;
    cite: string;
}
declare var HTMLModElement: {
    prototype: HTMLModElement;
    new (): HTMLModElement;
}

interface SVGMatrix {
    e: number;
    c: number;
    a: number;
    b: number;
    d: number;
    f: number;
    multiply( secondMatrix: SVGMatrix ): SVGMatrix;
    flipY(): SVGMatrix;
    skewY( angle: number ): SVGMatrix;
    inverse(): SVGMatrix;
    scaleNonUniform( scaleFactorX: number, scaleFactorY: number ): SVGMatrix;
    rotate( angle: number ): SVGMatrix;
    flipX(): SVGMatrix;
    translate( x: number, y: number ): SVGMatrix;
    scale( scaleFactor: number ): SVGMatrix;
    rotateFromVector( x: number, y: number ): SVGMatrix;
    skewX( angle: number ): SVGMatrix;
}
declare var SVGMatrix: {
    prototype: SVGMatrix;
    new (): SVGMatrix;
}

interface MSPopupWindow {
    document: Document;
    isOpen: boolean;
    show( x: number, y: number, w: number, h: number, element?: any ): void;
    hide(): void;
}
declare var MSPopupWindow: {
    prototype: MSPopupWindow;
    new (): MSPopupWindow;
}

interface BeforeUnloadEvent extends Event {
    returnValue: string;
}
declare var BeforeUnloadEvent: {
    prototype: BeforeUnloadEvent;
    new (): BeforeUnloadEvent;
}

interface SVGUseElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    animatedInstanceRoot: SVGElementInstance;
    instanceRoot: SVGElementInstance;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
}
declare var SVGUseElement: {
    prototype: SVGUseElement;
    new (): SVGUseElement;
}

interface Event {
    timeStamp: number;
    defaultPrevented: boolean;
    isTrusted: boolean;
    currentTarget: EventTarget;
    cancelBubble: boolean;
    target: EventTarget;
    eventPhase: number;
    cancelable: boolean;
    type: string;
    srcElement: Element;
    bubbles: boolean;
    initEvent( eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean ): void;
    stopPropagation(): void;
    stopImmediatePropagation(): void;
    preventDefault(): void;
    CAPTURING_PHASE: number;
    AT_TARGET: number;
    BUBBLING_PHASE: number;
}
declare var Event: {
    prototype: Event;
    new (): Event;
    CAPTURING_PHASE: number;
    AT_TARGET: number;
    BUBBLING_PHASE: number;
}

interface ImageData {
    width: number;
    data: number[];
    height: number;
}
declare var ImageData: {
    prototype: ImageData;
    new (): ImageData;
}

interface HTMLTableColElement extends HTMLElement, HTMLTableAlignment {
    width: any;
    align: string;
    span: number;
}
declare var HTMLTableColElement: {
    prototype: HTMLTableColElement;
    new (): HTMLTableColElement;
}

interface SVGException {
    code: number;
    message: string;
    toString(): string;
    SVG_MATRIX_NOT_INVERTABLE: number;
    SVG_WRONG_TYPE_ERR: number;
    SVG_INVALID_VALUE_ERR: number;
}
declare var SVGException: {
    prototype: SVGException;
    new (): SVGException;
    SVG_MATRIX_NOT_INVERTABLE: number;
    SVG_WRONG_TYPE_ERR: number;
    SVG_INVALID_VALUE_ERR: number;
}

interface SVGLinearGradientElement extends SVGGradientElement {
    y1: SVGAnimatedLength;
    x2: SVGAnimatedLength;
    x1: SVGAnimatedLength;
    y2: SVGAnimatedLength;
}
declare var SVGLinearGradientElement: {
    prototype: SVGLinearGradientElement;
    new (): SVGLinearGradientElement;
}

interface HTMLTableAlignment {
    ch: string;
    vAlign: string;
    chOff: string;
}

interface SVGAnimatedEnumeration {
    animVal: number;
    baseVal: number;
}
declare var SVGAnimatedEnumeration: {
    prototype: SVGAnimatedEnumeration;
    new (): SVGAnimatedEnumeration;
}

interface DOML2DeprecatedSizeProperty {
    size: number;
}

interface HTMLUListElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {
}
declare var HTMLUListElement: {
    prototype: HTMLUListElement;
    new (): HTMLUListElement;
}

interface SVGRectElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    ry: SVGAnimatedLength;
    rx: SVGAnimatedLength;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
}
declare var SVGRectElement: {
    prototype: SVGRectElement;
    new (): SVGRectElement;
}

interface ErrorEventHandler {
    ( event: Event, source: string, fileno: number, columnNumber: number ): void;
}

interface HTMLDivElement extends HTMLElement, MSDataBindingExtensions {
    align: string;
    noWrap: boolean;
}
declare var HTMLDivElement: {
    prototype: HTMLDivElement;
    new (): HTMLDivElement;
}

interface DOML2DeprecatedBorderStyle {
    border: string;
}

interface NamedNodeMap {
    length: number;
    removeNamedItemNS( namespaceURI: string, localName: string ): Attr;
    item( index: number ): Attr;
    [index: number]: Attr;
    removeNamedItem( name: string ): Attr;
    getNamedItem( name: string ): Attr;
    setNamedItem( arg: Attr ): Attr;
    getNamedItemNS( namespaceURI: string, localName: string ): Attr;
    setNamedItemNS( arg: Attr ): Attr;
}
declare var NamedNodeMap: {
    prototype: NamedNodeMap;
    new (): NamedNodeMap;
}

interface MediaList {
    length: number;
    mediaText: string;
    deleteMedium( oldMedium: string ): void;
    appendMedium( newMedium: string ): void;
    item( index: number ): string;
    [index: number]: string;
    toString(): string;
}
declare var MediaList: {
    prototype: MediaList;
    new (): MediaList;
}

interface SVGPathSegCurvetoQuadraticSmoothAbs extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegCurvetoQuadraticSmoothAbs: {
    prototype: SVGPathSegCurvetoQuadraticSmoothAbs;
    new (): SVGPathSegCurvetoQuadraticSmoothAbs;
}

interface SVGPathSegCurvetoCubicSmoothRel extends SVGPathSeg {
    y: number;
    x2: number;
    x: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicSmoothRel: {
    prototype: SVGPathSegCurvetoCubicSmoothRel;
    new (): SVGPathSegCurvetoCubicSmoothRel;
}

interface SVGLengthList {
    numberOfItems: number;
    replaceItem( newItem: SVGLength, index: number ): SVGLength;
    getItem( index: number ): SVGLength;
    clear(): void;
    appendItem( newItem: SVGLength ): SVGLength;
    initialize( newItem: SVGLength ): SVGLength;
    removeItem( index: number ): SVGLength;
    insertItemBefore( newItem: SVGLength, index: number ): SVGLength;
}
declare var SVGLengthList: {
    prototype: SVGLengthList;
    new (): SVGLengthList;
}

interface ProcessingInstruction extends Node {
    target: string;
    data: string;
}
declare var ProcessingInstruction: {
    prototype: ProcessingInstruction;
    new (): ProcessingInstruction;
}

interface MSWindowExtensions {
    status: string;
    onmouseleave: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseleave", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    screenLeft: number;
    offscreenBuffering: any;
    maxConnectionsPerServer: number;
    onmouseenter: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseenter", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    clipboardData: DataTransfer;
    defaultStatus: string;
    clientInformation: Navigator;
    closed: boolean;
    onhelp: ( ev: Event ) => any;
    addEventListener( type: "help", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    external: External;
    event: MSEventObj;
    onfocusout: ( ev: FocusEvent ) => any;
    addEventListener( type: "focusout", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    screenTop: number;
    onfocusin: ( ev: FocusEvent ) => any;
    addEventListener( type: "focusin", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    showModelessDialog( url?: string, argument?: any, options?: any ): Window;
    navigate( url: string ): void;
    resizeBy( x?: number, y?: number ): void;
    item( index: any ): any;
    resizeTo( x?: number, y?: number ): void;
    createPopup( arguments?: any ): MSPopupWindow;
    toStaticHTML( html: string ): string;
    execScript( code: string, language?: string ): any;
    msWriteProfilerMark( profilerMarkName: string ): void;
    moveTo( x?: number, y?: number ): void;
    moveBy( x?: number, y?: number ): void;
    showHelp( url: string, helpArg?: any, features?: string ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}

interface MSBehaviorUrnsCollection {
    length: number;
    item( index: number ): string;
}
declare var MSBehaviorUrnsCollection: {
    prototype: MSBehaviorUrnsCollection;
    new (): MSBehaviorUrnsCollection;
}

interface CSSFontFaceRule extends CSSRule {
    style: CSSStyleDeclaration;
}
declare var CSSFontFaceRule: {
    prototype: CSSFontFaceRule;
    new (): CSSFontFaceRule;
}

interface DOML2DeprecatedBackgroundStyle {
    background: string;
}

interface TextEvent extends UIEvent {
    inputMethod: number;
    data: string;
    locale: string;
    initTextEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, inputMethod: number, locale: string ): void;
    DOM_INPUT_METHOD_KEYBOARD: number;
    DOM_INPUT_METHOD_DROP: number;
    DOM_INPUT_METHOD_IME: number;
    DOM_INPUT_METHOD_SCRIPT: number;
    DOM_INPUT_METHOD_VOICE: number;
    DOM_INPUT_METHOD_UNKNOWN: number;
    DOM_INPUT_METHOD_PASTE: number;
    DOM_INPUT_METHOD_HANDWRITING: number;
    DOM_INPUT_METHOD_OPTION: number;
    DOM_INPUT_METHOD_MULTIMODAL: number;
}
declare var TextEvent: {
    prototype: TextEvent;
    new (): TextEvent;
    DOM_INPUT_METHOD_KEYBOARD: number;
    DOM_INPUT_METHOD_DROP: number;
    DOM_INPUT_METHOD_IME: number;
    DOM_INPUT_METHOD_SCRIPT: number;
    DOM_INPUT_METHOD_VOICE: number;
    DOM_INPUT_METHOD_UNKNOWN: number;
    DOM_INPUT_METHOD_PASTE: number;
    DOM_INPUT_METHOD_HANDWRITING: number;
    DOM_INPUT_METHOD_OPTION: number;
    DOM_INPUT_METHOD_MULTIMODAL: number;
}

interface DocumentFragment extends Node, NodeSelector, MSEventAttachmentTarget, MSNodeExtensions {
}
declare var DocumentFragment: {
    prototype: DocumentFragment;
    new (): DocumentFragment;
}

interface SVGPolylineElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGAnimatedPoints, SVGTests, SVGExternalResourcesRequired {
}
declare var SVGPolylineElement: {
    prototype: SVGPolylineElement;
    new (): SVGPolylineElement;
}

interface SVGAnimatedPathData {
    pathSegList: SVGPathSegList;
}

interface Position {
    timestamp: number;
    coords: Coordinates;
}
declare var Position: {
    prototype: Position;
    new (): Position;
}

interface BookmarkCollection {
    length: number;
    item( index: number ): any;
    [index: number]: any;
}
declare var BookmarkCollection: {
    prototype: BookmarkCollection;
    new (): BookmarkCollection;
}

interface PerformanceMark extends PerformanceEntry {
}
declare var PerformanceMark: {
    prototype: PerformanceMark;
    new (): PerformanceMark;
}

interface CSSPageRule extends CSSRule {
    pseudoClass: string;
    selectorText: string;
    selector: string;
    style: CSSStyleDeclaration;
}
declare var CSSPageRule: {
    prototype: CSSPageRule;
    new (): CSSPageRule;
}

interface HTMLBRElement extends HTMLElement {
    clear: string;
}
declare var HTMLBRElement: {
    prototype: HTMLBRElement;
    new (): HTMLBRElement;
}

interface MSNavigatorExtensions {
    userLanguage: string;
    plugins: MSPluginsCollection;
    cookieEnabled: boolean;
    appCodeName: string;
    cpuClass: string;
    appMinorVersion: string;
    connectionSpeed: number;
    browserLanguage: string;
    mimeTypes: MSMimeTypesCollection;
    systemLanguage: string;
    javaEnabled(): boolean;
    taintEnabled(): boolean;
}

interface HTMLSpanElement extends HTMLElement, MSDataBindingExtensions {
}
declare var HTMLSpanElement: {
    prototype: HTMLSpanElement;
    new (): HTMLSpanElement;
}

interface HTMLHeadElement extends HTMLElement {
    profile: string;
}
declare var HTMLHeadElement: {
    prototype: HTMLHeadElement;
    new (): HTMLHeadElement;
}

interface HTMLHeadingElement extends HTMLElement, DOML2DeprecatedTextFlowControl {
    align: string;
}
declare var HTMLHeadingElement: {
    prototype: HTMLHeadingElement;
    new (): HTMLHeadingElement;
}

interface HTMLFormElement extends HTMLElement, MSHTMLCollectionExtensions {
    length: number;
    target: string;
    acceptCharset: string;
    enctype: string;
    elements: HTMLCollection;
    action: string;
    name: string;
    method: string;
    encoding: string;
    reset(): void;
    item( name?: any, index?: any ): any;
    submit(): void;
    namedItem( name: string ): any;
    [name: string]: any;
}
declare var HTMLFormElement: {
    prototype: HTMLFormElement;
    new (): HTMLFormElement;
}

interface SVGZoomAndPan {
    zoomAndPan: number;
    SVG_ZOOMANDPAN_MAGNIFY: number;
    SVG_ZOOMANDPAN_UNKNOWN: number;
    SVG_ZOOMANDPAN_DISABLE: number;
}
declare var SVGZoomAndPan: {
    prototype: SVGZoomAndPan;
    new (): SVGZoomAndPan;
    SVG_ZOOMANDPAN_MAGNIFY: number;
    SVG_ZOOMANDPAN_UNKNOWN: number;
    SVG_ZOOMANDPAN_DISABLE: number;
}

interface HTMLMediaElement extends HTMLElement {
    initialTime: number;
    played: TimeRanges;
    currentSrc: string;
    readyState: any;
    autobuffer: boolean;
    loop: boolean;
    ended: boolean;
    buffered: TimeRanges;
    error: MediaError;
    seekable: TimeRanges;
    autoplay: boolean;
    controls: boolean;
    volume: number;
    src: string;
    playbackRate: number;
    duration: number;
    muted: boolean;
    defaultPlaybackRate: number;
    paused: boolean;
    seeking: boolean;
    currentTime: number;
    preload: string;
    networkState: number;
    pause(): void;
    play(): void;
    load(): void;
    canPlayType( type: string ): string;
    HAVE_METADATA: number;
    HAVE_CURRENT_DATA: number;
    HAVE_NOTHING: number;
    NETWORK_NO_SOURCE: number;
    HAVE_ENOUGH_DATA: number;
    NETWORK_EMPTY: number;
    NETWORK_LOADING: number;
    NETWORK_IDLE: number;
    HAVE_FUTURE_DATA: number;
}
declare var HTMLMediaElement: {
    prototype: HTMLMediaElement;
    new (): HTMLMediaElement;
    HAVE_METADATA: number;
    HAVE_CURRENT_DATA: number;
    HAVE_NOTHING: number;
    NETWORK_NO_SOURCE: number;
    HAVE_ENOUGH_DATA: number;
    NETWORK_EMPTY: number;
    NETWORK_LOADING: number;
    NETWORK_IDLE: number;
    HAVE_FUTURE_DATA: number;
}

interface ElementCSSInlineStyle {
    runtimeStyle: MSStyleCSSProperties;
    currentStyle: MSCurrentStyleCSSProperties;
    doScroll( component?: any ): void;
    componentFromPoint( x: number, y: number ): string;
}

interface DOMParser {
    parseFromString( source: string, mimeType: string ): Document;
}
declare var DOMParser: {
    prototype: DOMParser;
    new (): DOMParser;
}

interface MSMimeTypesCollection {
    length: number;
}
declare var MSMimeTypesCollection: {
    prototype: MSMimeTypesCollection;
    new (): MSMimeTypesCollection;
}

interface StyleSheet {
    disabled: boolean;
    ownerNode: Node;
    parentStyleSheet: StyleSheet;
    href: string;
    media: MediaList;
    type: string;
    title: string;
}
declare var StyleSheet: {
    prototype: StyleSheet;
    new (): StyleSheet;
}

interface SVGTextPathElement extends SVGTextContentElement, SVGURIReference {
    startOffset: SVGAnimatedLength;
    method: SVGAnimatedEnumeration;
    spacing: SVGAnimatedEnumeration;
    TEXTPATH_SPACINGTYPE_EXACT: number;
    TEXTPATH_METHODTYPE_STRETCH: number;
    TEXTPATH_SPACINGTYPE_AUTO: number;
    TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_ALIGN: number;
}
declare var SVGTextPathElement: {
    prototype: SVGTextPathElement;
    new (): SVGTextPathElement;
    TEXTPATH_SPACINGTYPE_EXACT: number;
    TEXTPATH_METHODTYPE_STRETCH: number;
    TEXTPATH_SPACINGTYPE_AUTO: number;
    TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_ALIGN: number;
}

interface HTMLDTElement extends HTMLElement {
    noWrap: boolean;
}
declare var HTMLDTElement: {
    prototype: HTMLDTElement;
    new (): HTMLDTElement;
}

interface NodeList {
    length: number;
    item( index: number ): Node;
    [index: number]: Node;
}
declare var NodeList: {
    prototype: NodeList;
    new (): NodeList;
}

interface NodeListOf<TNode extends Node> extends NodeList {
    length: number;
    item( index: number ): TNode;
    [index: number]: TNode;
}

interface XMLSerializer {
    serializeToString( target: Node ): string;
}
declare var XMLSerializer: {
    prototype: XMLSerializer;
    new (): XMLSerializer;
}

interface PerformanceMeasure extends PerformanceEntry {
}
declare var PerformanceMeasure: {
    prototype: PerformanceMeasure;
    new (): PerformanceMeasure;
}

interface SVGGradientElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGExternalResourcesRequired, SVGURIReference {
    spreadMethod: SVGAnimatedEnumeration;
    gradientTransform: SVGAnimatedTransformList;
    gradientUnits: SVGAnimatedEnumeration;
    SVG_SPREADMETHOD_REFLECT: number;
    SVG_SPREADMETHOD_PAD: number;
    SVG_SPREADMETHOD_UNKNOWN: number;
    SVG_SPREADMETHOD_REPEAT: number;
}
declare var SVGGradientElement: {
    prototype: SVGGradientElement;
    new (): SVGGradientElement;
    SVG_SPREADMETHOD_REFLECT: number;
    SVG_SPREADMETHOD_PAD: number;
    SVG_SPREADMETHOD_UNKNOWN: number;
    SVG_SPREADMETHOD_REPEAT: number;
}

interface NodeFilter {
    acceptNode( n: Node ): number;
    SHOW_ENTITY_REFERENCE: number;
    SHOW_NOTATION: number;
    SHOW_ENTITY: number;
    SHOW_DOCUMENT: number;
    SHOW_PROCESSING_INSTRUCTION: number;
    FILTER_REJECT: number;
    SHOW_CDATA_SECTION: number;
    FILTER_ACCEPT: number;
    SHOW_ALL: number;
    SHOW_DOCUMENT_TYPE: number;
    SHOW_TEXT: number;
    SHOW_ELEMENT: number;
    SHOW_COMMENT: number;
    FILTER_SKIP: number;
    SHOW_ATTRIBUTE: number;
    SHOW_DOCUMENT_FRAGMENT: number;
}
declare var NodeFilter: {
    prototype: NodeFilter;
    new (): NodeFilter;
    SHOW_ENTITY_REFERENCE: number;
    SHOW_NOTATION: number;
    SHOW_ENTITY: number;
    SHOW_DOCUMENT: number;
    SHOW_PROCESSING_INSTRUCTION: number;
    FILTER_REJECT: number;
    SHOW_CDATA_SECTION: number;
    FILTER_ACCEPT: number;
    SHOW_ALL: number;
    SHOW_DOCUMENT_TYPE: number;
    SHOW_TEXT: number;
    SHOW_ELEMENT: number;
    SHOW_COMMENT: number;
    FILTER_SKIP: number;
    SHOW_ATTRIBUTE: number;
    SHOW_DOCUMENT_FRAGMENT: number;
}

interface SVGNumberList {
    numberOfItems: number;
    replaceItem( newItem: SVGNumber, index: number ): SVGNumber;
    getItem( index: number ): SVGNumber;
    clear(): void;
    appendItem( newItem: SVGNumber ): SVGNumber;
    initialize( newItem: SVGNumber ): SVGNumber;
    removeItem( index: number ): SVGNumber;
    insertItemBefore( newItem: SVGNumber, index: number ): SVGNumber;
}
declare var SVGNumberList: {
    prototype: SVGNumberList;
    new (): SVGNumberList;
}

interface MediaError {
    code: number;
    MEDIA_ERR_ABORTED: number;
    MEDIA_ERR_NETWORK: number;
    MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    MEDIA_ERR_DECODE: number;
}
declare var MediaError: {
    prototype: MediaError;
    new (): MediaError;
    MEDIA_ERR_ABORTED: number;
    MEDIA_ERR_NETWORK: number;
    MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    MEDIA_ERR_DECODE: number;
}

interface HTMLFieldSetElement extends HTMLElement {
    align: string;
    form: HTMLFormElement;
}
declare var HTMLFieldSetElement: {
    prototype: HTMLFieldSetElement;
    new (): HTMLFieldSetElement;
}

interface HTMLBGSoundElement extends HTMLElement {
    balance: any;
    volume: any;
    src: string;
    loop: number;
}
declare var HTMLBGSoundElement: {
    prototype: HTMLBGSoundElement;
    new (): HTMLBGSoundElement;
}

interface HTMLElement extends Element, ElementCSSInlineStyle, MSEventAttachmentTarget, MSNodeExtensions {
    onmouseleave: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseleave", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onbeforecut: ( ev: DragEvent ) => any;
    addEventListener( type: "beforecut", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    onkeydown: ( ev: KeyboardEvent ) => any;
    addEventListener( type: "keydown", listener: ( ev: KeyboardEvent ) => any, useCapture?: boolean ): void;
    onmove: ( ev: MSEventObj ) => any;
    addEventListener( type: "move", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onkeyup: ( ev: KeyboardEvent ) => any;
    addEventListener( type: "keyup", listener: ( ev: KeyboardEvent ) => any, useCapture?: boolean ): void;
    onreset: ( ev: Event ) => any;
    addEventListener( type: "reset", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onhelp: ( ev: Event ) => any;
    addEventListener( type: "help", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    ondragleave: ( ev: DragEvent ) => any;
    addEventListener( type: "dragleave", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    className: string;
    onfocusin: ( ev: FocusEvent ) => any;
    addEventListener( type: "focusin", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    onseeked: ( ev: Event ) => any;
    addEventListener( type: "seeked", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    recordNumber: any;
    title: string;
    parentTextEdit: Element;
    outerHTML: string;
    ondurationchange: ( ev: Event ) => any;
    addEventListener( type: "durationchange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    offsetHeight: number;
    all: HTMLCollection;
    onblur: ( ev: FocusEvent ) => any;
    addEventListener( type: "blur", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    dir: string;
    onemptied: ( ev: Event ) => any;
    addEventListener( type: "emptied", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onseeking: ( ev: Event ) => any;
    addEventListener( type: "seeking", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    oncanplay: ( ev: Event ) => any;
    addEventListener( type: "canplay", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    ondeactivate: ( ev: UIEvent ) => any;
    addEventListener( type: "deactivate", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    ondatasetchanged: ( ev: MSEventObj ) => any;
    addEventListener( type: "datasetchanged", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onrowsdelete: ( ev: MSEventObj ) => any;
    addEventListener( type: "rowsdelete", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    sourceIndex: number;
    onloadstart: ( ev: Event ) => any;
    addEventListener( type: "loadstart", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onlosecapture: ( ev: MSEventObj ) => any;
    addEventListener( type: "losecapture", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    ondragenter: ( ev: DragEvent ) => any;
    addEventListener( type: "dragenter", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    oncontrolselect: ( ev: MSEventObj ) => any;
    addEventListener( type: "controlselect", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onsubmit: ( ev: Event ) => any;
    addEventListener( type: "submit", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    behaviorUrns: MSBehaviorUrnsCollection;
    scopeName: string;
    onchange: ( ev: Event ) => any;
    addEventListener( type: "change", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    id: string;
    onlayoutcomplete: ( ev: MSEventObj ) => any;
    addEventListener( type: "layoutcomplete", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    uniqueID: string;
    onbeforeactivate: ( ev: UIEvent ) => any;
    addEventListener( type: "beforeactivate", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    oncanplaythrough: ( ev: Event ) => any;
    addEventListener( type: "canplaythrough", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onbeforeupdate: ( ev: MSEventObj ) => any;
    addEventListener( type: "beforeupdate", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onfilterchange: ( ev: MSEventObj ) => any;
    addEventListener( type: "filterchange", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    offsetParent: Element;
    ondatasetcomplete: ( ev: MSEventObj ) => any;
    addEventListener( type: "datasetcomplete", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onsuspend: ( ev: Event ) => any;
    addEventListener( type: "suspend", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    readyState: any;
    onmouseenter: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseenter", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    innerText: string;
    onerrorupdate: ( ev: MSEventObj ) => any;
    addEventListener( type: "errorupdate", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onmouseout: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseout", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    parentElement: HTMLElement;
    onmousewheel: ( ev: MouseWheelEvent ) => any;
    addEventListener( type: "mousewheel", listener: ( ev: MouseWheelEvent ) => any, useCapture?: boolean ): void;
    onvolumechange: ( ev: Event ) => any;
    addEventListener( type: "volumechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    oncellchange: ( ev: MSEventObj ) => any;
    addEventListener( type: "cellchange", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onrowexit: ( ev: MSEventObj ) => any;
    addEventListener( type: "rowexit", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onrowsinserted: ( ev: MSEventObj ) => any;
    addEventListener( type: "rowsinserted", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onpropertychange: ( ev: MSEventObj ) => any;
    addEventListener( type: "propertychange", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    filters: Object;
    children: HTMLCollection;
    ondragend: ( ev: DragEvent ) => any;
    addEventListener( type: "dragend", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    onbeforepaste: ( ev: DragEvent ) => any;
    addEventListener( type: "beforepaste", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    ondragover: ( ev: DragEvent ) => any;
    addEventListener( type: "dragover", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    offsetTop: number;
    onmouseup: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseup", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    ondragstart: ( ev: DragEvent ) => any;
    addEventListener( type: "dragstart", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    onbeforecopy: ( ev: DragEvent ) => any;
    addEventListener( type: "beforecopy", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    ondrag: ( ev: DragEvent ) => any;
    addEventListener( type: "drag", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    innerHTML: string;
    onmouseover: ( ev: MouseEvent ) => any;
    addEventListener( type: "mouseover", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    lang: string;
    uniqueNumber: number;
    onpause: ( ev: Event ) => any;
    addEventListener( type: "pause", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    tagUrn: string;
    onmousedown: ( ev: MouseEvent ) => any;
    addEventListener( type: "mousedown", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onclick: ( ev: MouseEvent ) => any;
    addEventListener( type: "click", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onwaiting: ( ev: Event ) => any;
    addEventListener( type: "waiting", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onresizestart: ( ev: MSEventObj ) => any;
    addEventListener( type: "resizestart", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    offsetLeft: number;
    isTextEdit: boolean;
    isDisabled: boolean;
    onpaste: ( ev: DragEvent ) => any;
    addEventListener( type: "paste", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    canHaveHTML: boolean;
    onmoveend: ( ev: MSEventObj ) => any;
    addEventListener( type: "moveend", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    language: string;
    onstalled: ( ev: Event ) => any;
    addEventListener( type: "stalled", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onmousemove: ( ev: MouseEvent ) => any;
    addEventListener( type: "mousemove", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    style: MSStyleCSSProperties;
    isContentEditable: boolean;
    onbeforeeditfocus: ( ev: MSEventObj ) => any;
    addEventListener( type: "beforeeditfocus", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onratechange: ( ev: Event ) => any;
    addEventListener( type: "ratechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    contentEditable: string;
    tabIndex: number;
    document: Document;
    onprogress: ( ev: any ) => any;
    addEventListener( type: "progress", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    ondblclick: ( ev: MouseEvent ) => any;
    addEventListener( type: "dblclick", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    oncontextmenu: ( ev: MouseEvent ) => any;
    addEventListener( type: "contextmenu", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
    onloadedmetadata: ( ev: Event ) => any;
    addEventListener( type: "loadedmetadata", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onafterupdate: ( ev: MSEventObj ) => any;
    addEventListener( type: "afterupdate", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onerror: ( ev: Event ) => any;
    addEventListener( type: "error", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onplay: ( ev: Event ) => any;
    addEventListener( type: "play", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onresizeend: ( ev: MSEventObj ) => any;
    addEventListener( type: "resizeend", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onplaying: ( ev: Event ) => any;
    addEventListener( type: "playing", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    isMultiLine: boolean;
    onfocusout: ( ev: FocusEvent ) => any;
    addEventListener( type: "focusout", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    onabort: ( ev: UIEvent ) => any;
    addEventListener( type: "abort", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    ondataavailable: ( ev: MSEventObj ) => any;
    addEventListener( type: "dataavailable", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    hideFocus: boolean;
    onreadystatechange: ( ev: Event ) => any;
    addEventListener( type: "readystatechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onkeypress: ( ev: KeyboardEvent ) => any;
    addEventListener( type: "keypress", listener: ( ev: KeyboardEvent ) => any, useCapture?: boolean ): void;
    onloadeddata: ( ev: Event ) => any;
    addEventListener( type: "loadeddata", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onbeforedeactivate: ( ev: UIEvent ) => any;
    addEventListener( type: "beforedeactivate", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    outerText: string;
    disabled: boolean;
    onactivate: ( ev: UIEvent ) => any;
    addEventListener( type: "activate", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    accessKey: string;
    onmovestart: ( ev: MSEventObj ) => any;
    addEventListener( type: "movestart", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onselectstart: ( ev: Event ) => any;
    addEventListener( type: "selectstart", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onfocus: ( ev: FocusEvent ) => any;
    addEventListener( type: "focus", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
    ontimeupdate: ( ev: Event ) => any;
    addEventListener( type: "timeupdate", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onresize: ( ev: UIEvent ) => any;
    addEventListener( type: "resize", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    oncut: ( ev: DragEvent ) => any;
    addEventListener( type: "cut", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    onselect: ( ev: UIEvent ) => any;
    addEventListener( type: "select", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    ondrop: ( ev: DragEvent ) => any;
    addEventListener( type: "drop", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    offsetWidth: number;
    oncopy: ( ev: DragEvent ) => any;
    addEventListener( type: "copy", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
    onended: ( ev: Event ) => any;
    addEventListener( type: "ended", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onscroll: ( ev: UIEvent ) => any;
    addEventListener( type: "scroll", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
    onrowenter: ( ev: MSEventObj ) => any;
    addEventListener( type: "rowenter", listener: ( ev: MSEventObj ) => any, useCapture?: boolean ): void;
    onload: ( ev: Event ) => any;
    addEventListener( type: "load", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    canHaveChildren: boolean;
    oninput: ( ev: Event ) => any;
    addEventListener( type: "input", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    dragDrop(): boolean;
    scrollIntoView( top?: boolean ): void;
    addFilter( filter: Object ): void;
    setCapture( containerCapture?: boolean ): void;
    focus(): void;
    getAdjacentText( where: string ): string;
    insertAdjacentText( where: string, text: string ): void;
    getElementsByClassName( classNames: string ): NodeList;
    setActive(): void;
    removeFilter( filter: Object ): void;
    blur(): void;
    clearAttributes(): void;
    releaseCapture(): void;
    createControlRange(): ControlRangeCollection;
    removeBehavior( cookie: number ): boolean;
    contains( child: HTMLElement ): boolean;
    click(): void;
    insertAdjacentElement( position: string, insertedElement: Element ): Element;
    mergeAttributes( source: HTMLElement, preserveIdentity?: boolean ): void;
    replaceAdjacentText( where: string, newText: string ): string;
    applyElement( apply: Element, where?: string ): Element;
    addBehavior( bstrUrl: string, factory?: any ): number;
    insertAdjacentHTML( where: string, html: string ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var HTMLElement: {
    prototype: HTMLElement;
    new (): HTMLElement;
}

interface Comment extends CharacterData {
    text: string;
}
declare var Comment: {
    prototype: Comment;
    new (): Comment;
}

interface PerformanceResourceTiming extends PerformanceEntry {
    redirectStart: number;
    redirectEnd: number;
    domainLookupEnd: number;
    responseStart: number;
    domainLookupStart: number;
    fetchStart: number;
    requestStart: number;
    connectEnd: number;
    connectStart: number;
    initiatorType: string;
    responseEnd: number;
}
declare var PerformanceResourceTiming: {
    prototype: PerformanceResourceTiming;
    new (): PerformanceResourceTiming;
}

interface CanvasPattern {
}
declare var CanvasPattern: {
    prototype: CanvasPattern;
    new (): CanvasPattern;
}

interface HTMLHRElement extends HTMLElement, DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {
    width: number;
    align: string;
    noShade: boolean;
}
declare var HTMLHRElement: {
    prototype: HTMLHRElement;
    new (): HTMLHRElement;
}

interface HTMLObjectElement extends HTMLElement, GetSVGDocument, DOML2DeprecatedMarginStyle, DOML2DeprecatedBorderStyle, DOML2DeprecatedAlignmentStyle, MSDataBindingExtensions, MSDataBindingRecordSetExtensions {
    width: string;
    codeType: string;
    object: Object;
    form: HTMLFormElement;
    code: string;
    archive: string;
    standby: string;
    alt: string;
    classid: string;
    name: string;
    useMap: string;
    data: string;
    height: string;
    contentDocument: Document;
    altHtml: string;
    codeBase: string;
    declare: boolean;
    type: string;
    BaseHref: string;
}
declare var HTMLObjectElement: {
    prototype: HTMLObjectElement;
    new (): HTMLObjectElement;
}

interface HTMLEmbedElement extends HTMLElement, GetSVGDocument {
    width: string;
    palette: string;
    src: string;
    name: string;
    pluginspage: string;
    height: string;
    units: string;
}
declare var HTMLEmbedElement: {
    prototype: HTMLEmbedElement;
    new (): HTMLEmbedElement;
}

interface StorageEvent extends Event {
    oldValue: any;
    newValue: any;
    url: string;
    storageArea: Storage;
    key: string;
    initStorageEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, keyArg: string, oldValueArg: any, newValueArg: any, urlArg: string, storageAreaArg: Storage ): void;
}
declare var StorageEvent: {
    prototype: StorageEvent;
    new (): StorageEvent;
}

interface CharacterData extends Node {
    length: number;
    data: string;
    deleteData( offset: number, count: number ): void;
    replaceData( offset: number, count: number, arg: string ): void;
    appendData( arg: string ): void;
    insertData( offset: number, arg: string ): void;
    substringData( offset: number, count: number ): string;
}
declare var CharacterData: {
    prototype: CharacterData;
    new (): CharacterData;
}

interface HTMLOptGroupElement extends HTMLElement, MSDataBindingExtensions {
    index: number;
    defaultSelected: boolean;
    text: string;
    value: string;
    form: HTMLFormElement;
    label: string;
    selected: boolean;
}
declare var HTMLOptGroupElement: {
    prototype: HTMLOptGroupElement;
    new (): HTMLOptGroupElement;
}

interface HTMLIsIndexElement extends HTMLElement {
    form: HTMLFormElement;
    action: string;
    prompt: string;
}
declare var HTMLIsIndexElement: {
    prototype: HTMLIsIndexElement;
    new (): HTMLIsIndexElement;
}

interface SVGPathSegLinetoRel extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegLinetoRel: {
    prototype: SVGPathSegLinetoRel;
    new (): SVGPathSegLinetoRel;
}

interface DOMException {
    code: number;
    message: string;
    toString(): string;
    HIERARCHY_REQUEST_ERR: number;
    NO_MODIFICATION_ALLOWED_ERR: number;
    INVALID_MODIFICATION_ERR: number;
    NAMESPACE_ERR: number;
    INVALID_CHARACTER_ERR: number;
    TYPE_MISMATCH_ERR: number;
    ABORT_ERR: number;
    INVALID_STATE_ERR: number;
    SECURITY_ERR: number;
    NETWORK_ERR: number;
    WRONG_DOCUMENT_ERR: number;
    QUOTA_EXCEEDED_ERR: number;
    INDEX_SIZE_ERR: number;
    DOMSTRING_SIZE_ERR: number;
    SYNTAX_ERR: number;
    SERIALIZE_ERR: number;
    VALIDATION_ERR: number;
    NOT_FOUND_ERR: number;
    URL_MISMATCH_ERR: number;
    PARSE_ERR: number;
    NO_DATA_ALLOWED_ERR: number;
    NOT_SUPPORTED_ERR: number;
    INVALID_ACCESS_ERR: number;
    INUSE_ATTRIBUTE_ERR: number;
}
declare var DOMException: {
    prototype: DOMException;
    new (): DOMException;
    HIERARCHY_REQUEST_ERR: number;
    NO_MODIFICATION_ALLOWED_ERR: number;
    INVALID_MODIFICATION_ERR: number;
    NAMESPACE_ERR: number;
    INVALID_CHARACTER_ERR: number;
    TYPE_MISMATCH_ERR: number;
    ABORT_ERR: number;
    INVALID_STATE_ERR: number;
    SECURITY_ERR: number;
    NETWORK_ERR: number;
    WRONG_DOCUMENT_ERR: number;
    QUOTA_EXCEEDED_ERR: number;
    INDEX_SIZE_ERR: number;
    DOMSTRING_SIZE_ERR: number;
    SYNTAX_ERR: number;
    SERIALIZE_ERR: number;
    VALIDATION_ERR: number;
    NOT_FOUND_ERR: number;
    URL_MISMATCH_ERR: number;
    PARSE_ERR: number;
    NO_DATA_ALLOWED_ERR: number;
    NOT_SUPPORTED_ERR: number;
    INVALID_ACCESS_ERR: number;
    INUSE_ATTRIBUTE_ERR: number;
}

interface SVGAnimatedBoolean {
    animVal: boolean;
    baseVal: boolean;
}
declare var SVGAnimatedBoolean: {
    prototype: SVGAnimatedBoolean;
    new (): SVGAnimatedBoolean;
}

interface MSCompatibleInfoCollection {
    length: number;
    item( index: number ): MSCompatibleInfo;
}
declare var MSCompatibleInfoCollection: {
    prototype: MSCompatibleInfoCollection;
    new (): MSCompatibleInfoCollection;
}

interface SVGSwitchElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
}
declare var SVGSwitchElement: {
    prototype: SVGSwitchElement;
    new (): SVGSwitchElement;
}

interface SVGPreserveAspectRatio {
    align: number;
    meetOrSlice: number;
    SVG_PRESERVEASPECTRATIO_NONE: number;
    SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    SVG_MEETORSLICE_UNKNOWN: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
    SVG_MEETORSLICE_MEET: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    SVG_MEETORSLICE_SLICE: number;
    SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
}
declare var SVGPreserveAspectRatio: {
    prototype: SVGPreserveAspectRatio;
    new (): SVGPreserveAspectRatio;
    SVG_PRESERVEASPECTRATIO_NONE: number;
    SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    SVG_MEETORSLICE_UNKNOWN: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
    SVG_MEETORSLICE_MEET: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    SVG_MEETORSLICE_SLICE: number;
    SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
}

interface Attr extends Node {
    expando: boolean;
    specified: boolean;
    ownerElement: Element;
    value: string;
    name: string;
}
declare var Attr: {
    prototype: Attr;
    new (): Attr;
}

interface PerformanceNavigation {
    redirectCount: number;
    type: number;
    toJSON(): any;
    TYPE_RELOAD: number;
    TYPE_RESERVED: number;
    TYPE_BACK_FORWARD: number;
    TYPE_NAVIGATE: number;
}
declare var PerformanceNavigation: {
    prototype: PerformanceNavigation;
    new (): PerformanceNavigation;
    TYPE_RELOAD: number;
    TYPE_RESERVED: number;
    TYPE_BACK_FORWARD: number;
    TYPE_NAVIGATE: number;
}

interface SVGStopElement extends SVGElement, SVGStylable {
    offset: SVGAnimatedNumber;
}
declare var SVGStopElement: {
    prototype: SVGStopElement;
    new (): SVGStopElement;
}

interface PositionCallback {
    ( position: Position ): void;
}

interface SVGSymbolElement extends SVGElement, SVGStylable, SVGLangSpace, SVGFitToViewBox, SVGExternalResourcesRequired {
}
declare var SVGSymbolElement: {
    prototype: SVGSymbolElement;
    new (): SVGSymbolElement;
}

interface SVGElementInstanceList {
    length: number;
    item( index: number ): SVGElementInstance;
}
declare var SVGElementInstanceList: {
    prototype: SVGElementInstanceList;
    new (): SVGElementInstanceList;
}

interface CSSRuleList {
    length: number;
    item( index: number ): CSSRule;
    [index: number]: CSSRule;
}
declare var CSSRuleList: {
    prototype: CSSRuleList;
    new (): CSSRuleList;
}

interface MSDataBindingRecordSetExtensions {
    recordset: Object;
    namedRecordset( dataMember: string, hierarchy?: any ): Object;
}

interface LinkStyle {
    styleSheet: StyleSheet;
    sheet: StyleSheet;
}

interface HTMLVideoElement extends HTMLMediaElement {
    width: number;
    videoWidth: number;
    videoHeight: number;
    height: number;
    poster: string;
}
declare var HTMLVideoElement: {
    prototype: HTMLVideoElement;
    new (): HTMLVideoElement;
}

interface ClientRectList {
    length: number;
    item( index: number ): ClientRect;
    [index: number]: ClientRect;
}
declare var ClientRectList: {
    prototype: ClientRectList;
    new (): ClientRectList;
}

interface SVGMaskElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    maskUnits: SVGAnimatedEnumeration;
    maskContentUnits: SVGAnimatedEnumeration;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
}
declare var SVGMaskElement: {
    prototype: SVGMaskElement;
    new (): SVGMaskElement;
}

interface External {
}
declare var External: {
    prototype: External;
    new (): External;
}

declare var Audio: { new ( src?: string ): HTMLAudioElement; };
declare var Option: { new ( text?: string, value?: string, defaultSelected?: boolean, selected?: boolean ): HTMLOptionElement; };
declare var Image: { new ( width?: number, height?: number ): HTMLImageElement; };

declare var ondragend: ( ev: DragEvent ) => any;
declare function addEventListener( type: "dragend", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
declare var onkeydown: ( ev: KeyboardEvent ) => any;
declare function addEventListener( type: "keydown", listener: ( ev: KeyboardEvent ) => any, useCapture?: boolean ): void;
declare var ondragover: ( ev: DragEvent ) => any;
declare function addEventListener( type: "dragover", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
declare var onkeyup: ( ev: KeyboardEvent ) => any;
declare function addEventListener( type: "keyup", listener: ( ev: KeyboardEvent ) => any, useCapture?: boolean ): void;
declare var onreset: ( ev: Event ) => any;
declare function addEventListener( type: "reset", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onmouseup: ( ev: MouseEvent ) => any;
declare function addEventListener( type: "mouseup", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
declare var ondragstart: ( ev: DragEvent ) => any;
declare function addEventListener( type: "dragstart", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
declare var ondrag: ( ev: DragEvent ) => any;
declare function addEventListener( type: "drag", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
declare var screenX: number;
declare var onmouseover: ( ev: MouseEvent ) => any;
declare function addEventListener( type: "mouseover", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
declare var ondragleave: ( ev: DragEvent ) => any;
declare function addEventListener( type: "dragleave", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
declare var history: History;
declare var pageXOffset: number;
declare var name: string;
declare var onafterprint: ( ev: Event ) => any;
declare function addEventListener( type: "afterprint", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onpause: ( ev: Event ) => any;
declare function addEventListener( type: "pause", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onbeforeprint: ( ev: Event ) => any;
declare function addEventListener( type: "beforeprint", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var top: Window;
declare var onmousedown: ( ev: MouseEvent ) => any;
declare function addEventListener( type: "mousedown", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
declare var onseeked: ( ev: Event ) => any;
declare function addEventListener( type: "seeked", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var opener: Window;
declare var onclick: ( ev: MouseEvent ) => any;
declare function addEventListener( type: "click", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
declare var innerHeight: number;
declare var onwaiting: ( ev: Event ) => any;
declare function addEventListener( type: "waiting", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var ononline: ( ev: Event ) => any;
declare function addEventListener( type: "online", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var ondurationchange: ( ev: Event ) => any;
declare function addEventListener( type: "durationchange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var frames: Window;
declare var onblur: ( ev: FocusEvent ) => any;
declare function addEventListener( type: "blur", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
declare var onemptied: ( ev: Event ) => any;
declare function addEventListener( type: "emptied", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onseeking: ( ev: Event ) => any;
declare function addEventListener( type: "seeking", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var oncanplay: ( ev: Event ) => any;
declare function addEventListener( type: "canplay", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var outerWidth: number;
declare var onstalled: ( ev: Event ) => any;
declare function addEventListener( type: "stalled", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onmousemove: ( ev: MouseEvent ) => any;
declare function addEventListener( type: "mousemove", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
declare var innerWidth: number;
declare var onoffline: ( ev: Event ) => any;
declare function addEventListener( type: "offline", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var length: number;
declare var screen: Screen;
declare var onbeforeunload: ( ev: BeforeUnloadEvent ) => any;
declare function addEventListener( type: "beforeunload", listener: ( ev: BeforeUnloadEvent ) => any, useCapture?: boolean ): void;
declare var onratechange: ( ev: Event ) => any;
declare function addEventListener( type: "ratechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onstorage: ( ev: StorageEvent ) => any;
declare function addEventListener( type: "storage", listener: ( ev: StorageEvent ) => any, useCapture?: boolean ): void;
declare var onloadstart: ( ev: Event ) => any;
declare function addEventListener( type: "loadstart", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var ondragenter: ( ev: DragEvent ) => any;
declare function addEventListener( type: "dragenter", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
declare var onsubmit: ( ev: Event ) => any;
declare function addEventListener( type: "submit", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var self: Window;
declare var document: Document;
declare var onprogress: ( ev: any ) => any;
declare function addEventListener( type: "progress", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var ondblclick: ( ev: MouseEvent ) => any;
declare function addEventListener( type: "dblclick", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
declare var pageYOffset: number;
declare var oncontextmenu: ( ev: MouseEvent ) => any;
declare function addEventListener( type: "contextmenu", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
declare var onchange: ( ev: Event ) => any;
declare function addEventListener( type: "change", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onloadedmetadata: ( ev: Event ) => any;
declare function addEventListener( type: "loadedmetadata", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onplay: ( ev: Event ) => any;
declare function addEventListener( type: "play", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onerror: ErrorEventHandler;
declare var onplaying: ( ev: Event ) => any;
declare function addEventListener( type: "playing", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var parent: Window;
declare var location: Location;
declare var oncanplaythrough: ( ev: Event ) => any;
declare function addEventListener( type: "canplaythrough", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onabort: ( ev: UIEvent ) => any;
declare function addEventListener( type: "abort", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
declare var onreadystatechange: ( ev: Event ) => any;
declare function addEventListener( type: "readystatechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var outerHeight: number;
declare var onkeypress: ( ev: KeyboardEvent ) => any;
declare function addEventListener( type: "keypress", listener: ( ev: KeyboardEvent ) => any, useCapture?: boolean ): void;
declare var frameElement: Element;
declare var onloadeddata: ( ev: Event ) => any;
declare function addEventListener( type: "loadeddata", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onsuspend: ( ev: Event ) => any;
declare function addEventListener( type: "suspend", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var window: Window;
declare var onfocus: ( ev: FocusEvent ) => any;
declare function addEventListener( type: "focus", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
declare var onmessage: ( ev: MessageEvent ) => any;
declare function addEventListener( type: "message", listener: ( ev: MessageEvent ) => any, useCapture?: boolean ): void;
declare var ontimeupdate: ( ev: Event ) => any;
declare function addEventListener( type: "timeupdate", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onresize: ( ev: UIEvent ) => any;
declare function addEventListener( type: "resize", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
declare var onselect: ( ev: UIEvent ) => any;
declare function addEventListener( type: "select", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
declare var navigator: Navigator;
declare var styleMedia: StyleMedia;
declare var ondrop: ( ev: DragEvent ) => any;
declare function addEventListener( type: "drop", listener: ( ev: DragEvent ) => any, useCapture?: boolean ): void;
declare var onmouseout: ( ev: MouseEvent ) => any;
declare function addEventListener( type: "mouseout", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
declare var onended: ( ev: Event ) => any;
declare function addEventListener( type: "ended", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onhashchange: ( ev: Event ) => any;
declare function addEventListener( type: "hashchange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onunload: ( ev: Event ) => any;
declare function addEventListener( type: "unload", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onscroll: ( ev: UIEvent ) => any;
declare function addEventListener( type: "scroll", listener: ( ev: UIEvent ) => any, useCapture?: boolean ): void;
declare var screenY: number;
declare var onmousewheel: ( ev: MouseWheelEvent ) => any;
declare function addEventListener( type: "mousewheel", listener: ( ev: MouseWheelEvent ) => any, useCapture?: boolean ): void;
declare var onload: ( ev: Event ) => any;
declare function addEventListener( type: "load", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var onvolumechange: ( ev: Event ) => any;
declare function addEventListener( type: "volumechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var oninput: ( ev: Event ) => any;
declare function addEventListener( type: "input", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var performance: Performance;
declare function alert( message?: string ): void;
declare function scroll( x?: number, y?: number ): void;
declare function focus(): void;
declare function scrollTo( x?: number, y?: number ): void;
declare function print(): void;
declare function prompt( message?: string, defaul?: string ): string;
declare function toString(): string;
declare function open( url?: string, target?: string, features?: string, replace?: boolean ): Window;
declare function scrollBy( x?: number, y?: number ): void;
declare function confirm( message?: string ): boolean;
declare function close(): void;
declare function postMessage( message: any, targetOrigin: string, ports?: any ): void;
declare function showModalDialog( url?: string, argument?: any, options?: any ): any;
declare function blur(): void;
declare function getSelection(): Selection;
declare function getComputedStyle( elt: Element, pseudoElt?: string ): CSSStyleDeclaration;
declare function addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
declare function removeEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
declare function dispatchEvent( evt: Event ): boolean;
declare function attachEvent( event: string, listener: EventListener ): boolean;
declare function detachEvent( event: string, listener: EventListener ): void;
declare var localStorage: Storage;
declare var status: string;
declare var onmouseleave: ( ev: MouseEvent ) => any;
declare function addEventListener( type: "mouseleave", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
declare var screenLeft: number;
declare var offscreenBuffering: any;
declare var maxConnectionsPerServer: number;
declare var onmouseenter: ( ev: MouseEvent ) => any;
declare function addEventListener( type: "mouseenter", listener: ( ev: MouseEvent ) => any, useCapture?: boolean ): void;
declare var clipboardData: DataTransfer;
declare var defaultStatus: string;
declare var clientInformation: Navigator;
declare var closed: boolean;
declare var onhelp: ( ev: Event ) => any;
declare function addEventListener( type: "help", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
declare var external: External;
declare var event: MSEventObj;
declare var onfocusout: ( ev: FocusEvent ) => any;
declare function addEventListener( type: "focusout", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
declare var screenTop: number;
declare var onfocusin: ( ev: FocusEvent ) => any;
declare function addEventListener( type: "focusin", listener: ( ev: FocusEvent ) => any, useCapture?: boolean ): void;
declare function showModelessDialog( url?: string, argument?: any, options?: any ): Window;
declare function navigate( url: string ): void;
declare function resizeBy( x?: number, y?: number ): void;
declare function item( index: any ): any;
declare function resizeTo( x?: number, y?: number ): void;
declare function createPopup( arguments?: any ): MSPopupWindow;
declare function toStaticHTML( html: string ): string;
declare function execScript( code: string, language?: string ): any;
declare function msWriteProfilerMark( profilerMarkName: string ): void;
declare function moveTo( x?: number, y?: number ): void;
declare function moveBy( x?: number, y?: number ): void;
declare function showHelp( url: string, helpArg?: any, features?: string ): void;
declare var sessionStorage: Storage;
declare function clearTimeout( handle: number ): void;
declare function setTimeout( handler: any, timeout?: any, ...args: any[] ): number;
declare function clearInterval( handle: number ): void;
declare function setInterval( handler: any, timeout?: any, ...args: any[] ): number;
