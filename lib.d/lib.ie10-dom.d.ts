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

/////////////////////////////
/// IE10 DOM APIs 
/////////////////////////////

interface ObjectURLOptions {
    oneTimeOnly?: boolean;
}

interface HTMLBodyElement {
    onpopstate: ( ev: PopStateEvent ) => any;
    addEventListener( type: "popstate", listener: ( ev: PopStateEvent ) => any, useCapture?: boolean ): void;
}

interface MSGestureEvent extends UIEvent {
    offsetY: number;
    translationY: number;
    velocityExpansion: number;
    velocityY: number;
    velocityAngular: number;
    translationX: number;
    velocityX: number;
    hwTimestamp: number;
    offsetX: number;
    screenX: number;
    rotation: number;
    expansion: number;
    clientY: number;
    screenY: number;
    scale: number;
    gestureObject: any;
    clientX: number;
    initGestureEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, offsetXArg: number, offsetYArg: number, translationXArg: number, translationYArg: number, scaleArg: number, expansionArg: number, rotationArg: number, velocityXArg: number, velocityYArg: number, velocityExpansionArg: number, velocityAngularArg: number, hwTimestampArg: number ): void;
    MSGESTURE_FLAG_BEGIN: number;
    MSGESTURE_FLAG_END: number;
    MSGESTURE_FLAG_CANCEL: number;
    MSGESTURE_FLAG_INERTIA: number;
    MSGESTURE_FLAG_NONE: number;
}
declare var MSGestureEvent: {
    prototype: MSGestureEvent;
    new (): MSGestureEvent;
    MSGESTURE_FLAG_BEGIN: number;
    MSGESTURE_FLAG_END: number;
    MSGESTURE_FLAG_CANCEL: number;
    MSGESTURE_FLAG_INERTIA: number;
    MSGESTURE_FLAG_NONE: number;
}

interface HTMLAnchorElement {
    text: string;
}

interface HTMLInputElement {
    validationMessage: string;
    files: FileList;
    max: string;
    formTarget: string;
    willValidate: boolean;
    step: string;
    autofocus: boolean;
    required: boolean;
    formEnctype: string;
    valueAsNumber: number;
    placeholder: string;
    formMethod: string;
    list: HTMLElement;
    autocomplete: string;
    min: string;
    formAction: string;
    pattern: string;
    validity: ValidityState;
    formNoValidate: string;
    multiple: boolean;
    checkValidity(): boolean;
    stepDown( n?: number ): void;
    stepUp( n?: number ): void;
    setCustomValidity( error: string ): void;
}

interface ErrorEvent extends Event {
    colno: number;
    filename: string;
    lineno: number;
    message: string;
    initErrorEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, messageArg: string, filenameArg: string, linenoArg: number ): void;
}
declare var ErrorEvent: {
    prototype: ErrorEvent;
    new (): ErrorEvent;
}

interface SVGFilterElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGURIReference, SVGExternalResourcesRequired {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    filterResX: SVGAnimatedInteger;
    filterUnits: SVGAnimatedEnumeration;
    primitiveUnits: SVGAnimatedEnumeration;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
    filterResY: SVGAnimatedInteger;
    setFilterRes( filterResX: number, filterResY: number ): void;
}
declare var SVGFilterElement: {
    prototype: SVGFilterElement;
    new (): SVGFilterElement;
}

interface TrackEvent extends Event {
    track: any;
}
declare var TrackEvent: {
    prototype: TrackEvent;
    new (): TrackEvent;
}

interface SVGFEMergeNodeElement extends SVGElement {
    in1: SVGAnimatedString;
}
declare var SVGFEMergeNodeElement: {
    prototype: SVGFEMergeNodeElement;
    new (): SVGFEMergeNodeElement;
}

interface SVGFEFloodElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
}
declare var SVGFEFloodElement: {
    prototype: SVGFEFloodElement;
    new (): SVGFEFloodElement;
}

interface MSGesture {
    target: Element;
    addPointer( pointerId: number ): void;
    stop(): void;
}
declare var MSGesture: {
    prototype: MSGesture;
    new (): MSGesture;
}

interface TextTrackCue extends EventTarget {
    onenter: ( ev: Event ) => any;
    addEventListener( type: "enter", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    track: TextTrack;
    endTime: number;
    text: string;
    pauseOnExit: boolean;
    id: string;
    startTime: number;
    onexit: ( ev: Event ) => any;
    addEventListener( type: "exit", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    getCueAsHTML(): DocumentFragment;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var TextTrackCue: {
    prototype: TextTrackCue;
    new (): TextTrackCue;
}

interface MSStreamReader extends MSBaseReader {
    error: DOMError;
    readAsArrayBuffer( stream: MSStream, size?: number ): void;
    readAsBlob( stream: MSStream, size?: number ): void;
    readAsDataURL( stream: MSStream, size?: number ): void;
    readAsText( stream: MSStream, encoding?: string, size?: number ): void;
}
declare var MSStreamReader: {
    prototype: MSStreamReader;
    new (): MSStreamReader;
}

interface DOMTokenList {
    length: number;
    contains( token: string ): boolean;
    remove( token: string ): void;
    toggle( token: string ): boolean;
    add( token: string ): void;
    item( index: number ): string;
    [index: number]: string;
    toString(): string;
}
declare var DOMTokenList: {
    prototype: DOMTokenList;
    new (): DOMTokenList;
}

interface EventException {
    name: string;
}

interface Performance {
    now(): number;
}

interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {
}
declare var SVGFEFuncAElement: {
    prototype: SVGFEFuncAElement;
    new (): SVGFEFuncAElement;
}

interface SVGFETileElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
}
declare var SVGFETileElement: {
    prototype: SVGFETileElement;
    new (): SVGFETileElement;
}

interface SVGFEBlendElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in2: SVGAnimatedString;
    mode: SVGAnimatedEnumeration;
    in1: SVGAnimatedString;
    SVG_FEBLEND_MODE_DARKEN: number;
    SVG_FEBLEND_MODE_UNKNOWN: number;
    SVG_FEBLEND_MODE_MULTIPLY: number;
    SVG_FEBLEND_MODE_NORMAL: number;
    SVG_FEBLEND_MODE_SCREEN: number;
    SVG_FEBLEND_MODE_LIGHTEN: number;
}
declare var SVGFEBlendElement: {
    prototype: SVGFEBlendElement;
    new (): SVGFEBlendElement;
    SVG_FEBLEND_MODE_DARKEN: number;
    SVG_FEBLEND_MODE_UNKNOWN: number;
    SVG_FEBLEND_MODE_MULTIPLY: number;
    SVG_FEBLEND_MODE_NORMAL: number;
    SVG_FEBLEND_MODE_SCREEN: number;
    SVG_FEBLEND_MODE_LIGHTEN: number;
}

interface WindowTimers extends WindowTimersExtension {
}
declare var WindowTimers: {
    prototype: WindowTimers;
    new (): WindowTimers;
}

interface CSSStyleDeclaration {
    animationFillMode: string;
    floodColor: string;
    animationIterationCount: string;
    textShadow: string;
    backfaceVisibility: string;
    msAnimationIterationCount: string;
    animationDelay: string;
    animationTimingFunction: string;
    columnWidth: any;
    msScrollSnapX: string;
    columnRuleColor: any;
    columnRuleWidth: any;
    transitionDelay: string;
    transition: string;
    msFlowFrom: string;
    msScrollSnapType: string;
    msContentZoomSnapType: string;
    msGridColumns: string;
    msAnimationName: string;
    msGridRowAlign: string;
    msContentZoomChaining: string;
    msGridColumn: any;
    msHyphenateLimitZone: any;
    msScrollRails: string;
    msAnimationDelay: string;
    enableBackground: string;
    msWrapThrough: string;
    columnRuleStyle: string;
    msAnimation: string;
    msFlexFlow: string;
    msScrollSnapY: string;
    msHyphenateLimitLines: any;
    msTouchAction: string;
    msScrollLimit: string;
    animation: string;
    transform: string;
    filter: string;
    colorInterpolationFilters: string;
    transitionTimingFunction: string;
    msBackfaceVisibility: string;
    animationPlayState: string;
    transformOrigin: string;
    msScrollLimitYMin: any;
    msFontFeatureSettings: string;
    msContentZoomLimitMin: any;
    columnGap: any;
    transitionProperty: string;
    msAnimationDuration: string;
    msAnimationFillMode: string;
    msFlexDirection: string;
    msTransitionDuration: string;
    fontFeatureSettings: string;
    breakBefore: string;
    msFlexWrap: string;
    perspective: string;
    msFlowInto: string;
    msTransformStyle: string;
    msScrollTranslation: string;
    msTransitionProperty: string;
    msUserSelect: string;
    msOverflowStyle: string;
    msScrollSnapPointsY: string;
    animationDirection: string;
    animationDuration: string;
    msFlex: string;
    msTransitionTimingFunction: string;
    animationName: string;
    columnRule: string;
    msGridColumnSpan: any;
    msFlexNegative: string;
    columnFill: string;
    msGridRow: any;
    msFlexOrder: string;
    msFlexItemAlign: string;
    msFlexPositive: string;
    msContentZoomLimitMax: any;
    msScrollLimitYMax: any;
    msGridColumnAlign: string;
    perspectiveOrigin: string;
    lightingColor: string;
    columns: string;
    msScrollChaining: string;
    msHyphenateLimitChars: string;
    msTouchSelect: string;
    floodOpacity: string;
    msAnimationDirection: string;
    msAnimationPlayState: string;
    columnSpan: string;
    msContentZooming: string;
    msPerspective: string;
    msFlexPack: string;
    msScrollSnapPointsX: string;
    msContentZoomSnapPoints: string;
    msGridRowSpan: any;
    msContentZoomSnap: string;
    msScrollLimitXMin: any;
    breakInside: string;
    msHighContrastAdjust: string;
    msFlexLinePack: string;
    msGridRows: string;
    transitionDuration: string;
    msHyphens: string;
    breakAfter: string;
    msTransition: string;
    msPerspectiveOrigin: string;
    msContentZoomLimit: string;
    msScrollLimitXMax: any;
    msFlexAlign: string;
    msWrapMargin: any;
    columnCount: any;
    msAnimationTimingFunction: string;
    msTransitionDelay: string;
    transformStyle: string;
    msWrapFlow: string;
    msFlexPreferredSize: string;
}

interface MessageChannel {
    port2: MessagePort;
    port1: MessagePort;
}
declare var MessageChannel: {
    prototype: MessageChannel;
    new (): MessageChannel;
}

interface SVGFEMergeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
}
declare var SVGFEMergeElement: {
    prototype: SVGFEMergeElement;
    new (): SVGFEMergeElement;
}

interface Navigator extends MSFileSaver {
    msMaxTouchPoints: number;
    msPointerEnabled: boolean;
    msManipulationViewsEnabled: boolean;
    msLaunchUri( uri: string, successCallback?: MSLaunchUriCallback, noHandlerCallback?: MSLaunchUriCallback ): void;
}

interface TransitionEvent extends Event {
    propertyName: string;
    elapsedTime: number;
    initTransitionEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, propertyNameArg: string, elapsedTimeArg: number ): void;
}
declare var TransitionEvent: {
    prototype: TransitionEvent;
    new (): TransitionEvent;
}

interface MediaQueryList {
    matches: boolean;
    media: string;
    addListener( listener: MediaQueryListListener ): void;
    removeListener( listener: MediaQueryListListener ): void;
}
declare var MediaQueryList: {
    prototype: MediaQueryList;
    new (): MediaQueryList;
}

interface DOMError {
    name: string;
    toString(): string;
}
declare var DOMError: {
    prototype: DOMError;
    new (): DOMError;
}

interface CloseEvent extends Event {
    wasClean: boolean;
    reason: string;
    code: number;
    initCloseEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, wasCleanArg: boolean, codeArg: number, reasonArg: string ): void;
}
declare var CloseEvent: {
    prototype: CloseEvent;
    new (): CloseEvent;
}

interface WebSocket extends EventTarget {
    protocol: string;
    readyState: number;
    bufferedAmount: number;
    onopen: ( ev: Event ) => any;
    addEventListener( type: "open", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    extensions: string;
    onmessage: ( ev: any ) => any;
    addEventListener( type: "message", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onclose: ( ev: CloseEvent ) => any;
    addEventListener( type: "close", listener: ( ev: CloseEvent ) => any, useCapture?: boolean ): void;
    onerror: ( ev: ErrorEvent ) => any;
    addEventListener( type: "error", listener: ( ev: ErrorEvent ) => any, useCapture?: boolean ): void;
    binaryType: string;
    url: string;
    close( code?: number, reason?: string ): void;
    send( data: any ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
    OPEN: number;
    CLOSING: number;
    CONNECTING: number;
    CLOSED: number;
}
declare var WebSocket: {
    prototype: WebSocket;
    new ( url: string ): WebSocket;
    new ( url: string, prototcol: string ): WebSocket;
    new ( url: string, prototcol: string[] ): WebSocket;
    OPEN: number;
    CLOSING: number;
    CONNECTING: number;
    CLOSED: number;
}

interface SVGFEPointLightElement extends SVGElement {
    y: SVGAnimatedNumber;
    x: SVGAnimatedNumber;
    z: SVGAnimatedNumber;
}
declare var SVGFEPointLightElement: {
    prototype: SVGFEPointLightElement;
    new (): SVGFEPointLightElement;
}

interface ProgressEvent extends Event {
    loaded: number;
    lengthComputable: boolean;
    total: number;
    initProgressEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, lengthComputableArg: boolean, loadedArg: number, totalArg: number ): void;
}
declare var ProgressEvent: {
    prototype: ProgressEvent;
    new (): ProgressEvent;
}

interface IDBObjectStore {
    indexNames: DOMStringList;
    name: string;
    transaction: IDBTransaction;
    keyPath: string;
    count( key?: any ): IDBRequest;
    add( value: any, key?: any ): IDBRequest;
    clear(): IDBRequest;
    createIndex( name: string, keyPath: string, optionalParameters?: any ): IDBIndex;
    put( value: any, key?: any ): IDBRequest;
    openCursor( range?: any, direction?: string ): IDBRequest;
    deleteIndex( indexName: string ): void;
    index( name: string ): IDBIndex;
    get( key: any ): IDBRequest;
    delete( key: any ): IDBRequest;
}
declare var IDBObjectStore: {
    prototype: IDBObjectStore;
    new (): IDBObjectStore;
}

interface HTMLCanvasElement {
    msToBlob(): Blob;
}

interface SVGFEGaussianBlurElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    stdDeviationX: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    stdDeviationY: SVGAnimatedNumber;
    setStdDeviation( stdDeviationX: number, stdDeviationY: number ): void;
}
declare var SVGFEGaussianBlurElement: {
    prototype: SVGFEGaussianBlurElement;
    new (): SVGFEGaussianBlurElement;
}

interface SVGFilterPrimitiveStandardAttributes extends SVGStylable {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
    result: SVGAnimatedString;
}

interface Element {
    msRegionOverflow: string;
    onmspointerdown: ( ev: any ) => any;
    addEventListener( type: "mspointerdown", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgotpointercapture: ( ev: any ) => any;
    addEventListener( type: "msgotpointercapture", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgesturedoubletap: ( ev: any ) => any;
    addEventListener( type: "msgesturedoubletap", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointerhover: ( ev: any ) => any;
    addEventListener( type: "mspointerhover", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgesturehold: ( ev: any ) => any;
    addEventListener( type: "msgesturehold", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointermove: ( ev: any ) => any;
    addEventListener( type: "mspointermove", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgesturechange: ( ev: any ) => any;
    addEventListener( type: "msgesturechange", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgesturestart: ( ev: any ) => any;
    addEventListener( type: "msgesturestart", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointercancel: ( ev: any ) => any;
    addEventListener( type: "mspointercancel", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgestureend: ( ev: any ) => any;
    addEventListener( type: "msgestureend", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgesturetap: ( ev: any ) => any;
    addEventListener( type: "msgesturetap", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointerout: ( ev: any ) => any;
    addEventListener( type: "mspointerout", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsinertiastart: ( ev: any ) => any;
    addEventListener( type: "msinertiastart", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmslostpointercapture: ( ev: any ) => any;
    addEventListener( type: "mslostpointercapture", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointerover: ( ev: any ) => any;
    addEventListener( type: "mspointerover", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    msContentZoomFactor: number;
    onmspointerup: ( ev: any ) => any;
    addEventListener( type: "mspointerup", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    msGetRegionContent(): MSRangeCollection;
    msReleasePointerCapture( pointerId: number ): void;
    msSetPointerCapture( pointerId: number ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}

interface IDBVersionChangeEvent extends Event {
    newVersion: number;
    oldVersion: number;
}
declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new (): IDBVersionChangeEvent;
}

interface IDBIndex {
    unique: boolean;
    name: string;
    keyPath: string;
    objectStore: IDBObjectStore;
    count( key?: any ): IDBRequest;
    getKey( key: any ): IDBRequest;
    openKeyCursor( range?: IDBKeyRange, direction?: string ): IDBRequest;
    get( key: any ): IDBRequest;
    openCursor( range?: IDBKeyRange, direction?: string ): IDBRequest;
}
declare var IDBIndex: {
    prototype: IDBIndex;
    new (): IDBIndex;
}

interface WheelEvent {
    getCurrentPoint( element: Element ): void;
}

interface FileList {
    length: number;
    item( index: number ): File;
    [index: number]: File;
}
declare var FileList: {
    prototype: FileList;
    new (): FileList;
}

interface IDBCursor {
    source: any;
    direction: string;
    key: any;
    primaryKey: any;
    advance( count: number ): void;
    delete(): IDBRequest;
    continue( key?: any ): void;
    update( value: any ): IDBRequest;
    PREV: string;
    PREV_NO_DUPLICATE: string;
    NEXT: string;
    NEXT_NO_DUPLICATE: string;
}
declare var IDBCursor: {
    prototype: IDBCursor;
    new (): IDBCursor;
    PREV: string;
    PREV_NO_DUPLICATE: string;
    NEXT: string;
    NEXT_NO_DUPLICATE: string;
}

interface SVGFESpecularLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    kernelUnitLengthY: SVGAnimatedNumber;
    surfaceScale: SVGAnimatedNumber;
    specularExponent: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    kernelUnitLengthX: SVGAnimatedNumber;
    specularConstant: SVGAnimatedNumber;
}
declare var SVGFESpecularLightingElement: {
    prototype: SVGFESpecularLightingElement;
    new (): SVGFESpecularLightingElement;
}

interface File extends Blob {
    lastModifiedDate: any;
    name: string;
}
declare var File: {
    prototype: File;
    new (): File;
}

interface URL {
    revokeObjectURL( url: string ): void;
    createObjectURL( object: any, options?: ObjectURLOptions ): string;
}
declare var URL: URL;

interface RangeException {
    name: string;
}

interface IDBCursorWithValue extends IDBCursor {
    value: any;
}
declare var IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    new (): IDBCursorWithValue;
}

interface HTMLTextAreaElement {
    validationMessage: string;
    autofocus: boolean;
    validity: ValidityState;
    required: boolean;
    maxLength: number;
    willValidate: boolean;
    placeholder: string;
    checkValidity(): boolean;
    setCustomValidity( error: string ): void;
}

interface XMLHttpRequestEventTarget extends EventTarget {
    onprogress: ( ev: ProgressEvent ) => any;
    addEventListener( type: "progress", listener: ( ev: ProgressEvent ) => any, useCapture?: boolean ): void;
    onerror: ( ev: ErrorEvent ) => any;
    addEventListener( type: "error", listener: ( ev: ErrorEvent ) => any, useCapture?: boolean ): void;
    onload: ( ev: any ) => any;
    addEventListener( type: "load", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    ontimeout: ( ev: any ) => any;
    addEventListener( type: "timeout", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onabort: ( ev: any ) => any;
    addEventListener( type: "abort", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onloadstart: ( ev: any ) => any;
    addEventListener( type: "loadstart", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onloadend: ( ev: ProgressEvent ) => any;
    addEventListener( type: "loadend", listener: ( ev: ProgressEvent ) => any, useCapture?: boolean ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var XMLHttpRequestEventTarget: {
    prototype: XMLHttpRequestEventTarget;
    new (): XMLHttpRequestEventTarget;
}

interface IDBEnvironment {
    msIndexedDB: IDBFactory;
    indexedDB: IDBFactory;
}

interface AudioTrackList extends EventTarget {
    length: number;
    onchange: ( ev: any ) => any;
    addEventListener( type: "change", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onaddtrack: ( ev: TrackEvent ) => any;
    addEventListener( type: "addtrack", listener: ( ev: TrackEvent ) => any, useCapture?: boolean ): void;
    getTrackById( id: string ): AudioTrack;
    item( index: number ): AudioTrack;
    [index: number]: AudioTrack;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var AudioTrackList: {
    prototype: AudioTrackList;
    new (): AudioTrackList;
}

interface MSBaseReader extends EventTarget {
    onprogress: ( ev: ProgressEvent ) => any;
    addEventListener( type: "progress", listener: ( ev: ProgressEvent ) => any, useCapture?: boolean ): void;
    readyState: number;
    onabort: ( ev: any ) => any;
    addEventListener( type: "abort", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onloadend: ( ev: ProgressEvent ) => any;
    addEventListener( type: "loadend", listener: ( ev: ProgressEvent ) => any, useCapture?: boolean ): void;
    onerror: ( ev: ErrorEvent ) => any;
    addEventListener( type: "error", listener: ( ev: ErrorEvent ) => any, useCapture?: boolean ): void;
    onload: ( ev: any ) => any;
    addEventListener( type: "load", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onloadstart: ( ev: any ) => any;
    addEventListener( type: "loadstart", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    result: any;
    abort(): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
    LOADING: number;
    EMPTY: number;
    DONE: number;
}

interface History {
    state: any;
    replaceState( statedata: any, title: string, url?: string ): void;
    pushState( statedata: any, title: string, url?: string ): void;
}

interface SVGFEMorphologyElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    operator: SVGAnimatedEnumeration;
    radiusX: SVGAnimatedNumber;
    radiusY: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
    SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    SVG_MORPHOLOGY_OPERATOR_DILATE: number;
}
declare var SVGFEMorphologyElement: {
    prototype: SVGFEMorphologyElement;
    new (): SVGFEMorphologyElement;
    SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
    SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    SVG_MORPHOLOGY_OPERATOR_DILATE: number;
}

interface HTMLSelectElement {
    validationMessage: string;
    autofocus: boolean;
    validity: ValidityState;
    required: boolean;
    willValidate: boolean;
    checkValidity(): boolean;
    setCustomValidity( error: string ): void;
}

interface CSSRule {
    KEYFRAMES_RULE: number;
    KEYFRAME_RULE: number;
    VIEWPORT_RULE: number;
}
//declare var CSSRule: {
//    prototype: CSSRule;
//    KEYFRAMES_RULE: number;
//    KEYFRAME_RULE: number;
//    VIEWPORT_RULE: number;
//}

interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {
}
declare var SVGFEFuncRElement: {
    prototype: SVGFEFuncRElement;
    new (): SVGFEFuncRElement;
}

interface WindowTimersExtension {
    msSetImmediate( expression: any, ...args: any[] ): number;
    clearImmediate( handle: number ): void;
    msClearImmediate( handle: number ): void;
    setImmediate( expression: any, ...args: any[] ): number;
}

interface SVGFEDisplacementMapElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in2: SVGAnimatedString;
    xChannelSelector: SVGAnimatedEnumeration;
    yChannelSelector: SVGAnimatedEnumeration;
    scale: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    SVG_CHANNEL_B: number;
    SVG_CHANNEL_R: number;
    SVG_CHANNEL_G: number;
    SVG_CHANNEL_UNKNOWN: number;
    SVG_CHANNEL_A: number;
}
declare var SVGFEDisplacementMapElement: {
    prototype: SVGFEDisplacementMapElement;
    new (): SVGFEDisplacementMapElement;
    SVG_CHANNEL_B: number;
    SVG_CHANNEL_R: number;
    SVG_CHANNEL_G: number;
    SVG_CHANNEL_UNKNOWN: number;
    SVG_CHANNEL_A: number;
}

interface AnimationEvent extends Event {
    animationName: string;
    elapsedTime: number;
    initAnimationEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, animationNameArg: string, elapsedTimeArg: number ): void;
}
declare var AnimationEvent: {
    prototype: AnimationEvent;
    new (): AnimationEvent;
}

interface SVGComponentTransferFunctionElement extends SVGElement {
    tableValues: SVGAnimatedNumberList;
    slope: SVGAnimatedNumber;
    type: SVGAnimatedEnumeration;
    exponent: SVGAnimatedNumber;
    amplitude: SVGAnimatedNumber;
    intercept: SVGAnimatedNumber;
    offset: SVGAnimatedNumber;
    SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
    SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
}
declare var SVGComponentTransferFunctionElement: {
    prototype: SVGComponentTransferFunctionElement;
    new (): SVGComponentTransferFunctionElement;
    SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
    SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
}

interface MSRangeCollection {
    length: number;
    item( index: number ): Range;
    [index: number]: Range;
}
declare var MSRangeCollection: {
    prototype: MSRangeCollection;
    new (): MSRangeCollection;
}

interface SVGFEDistantLightElement extends SVGElement {
    azimuth: SVGAnimatedNumber;
    elevation: SVGAnimatedNumber;
}
declare var SVGFEDistantLightElement: {
    prototype: SVGFEDistantLightElement;
    new (): SVGFEDistantLightElement;
}

interface SVGException {
    name: string;
}

interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {
}
declare var SVGFEFuncBElement: {
    prototype: SVGFEFuncBElement;
    new (): SVGFEFuncBElement;
}

interface IDBKeyRange {
    upper: any;
    upperOpen: boolean;
    lower: any;
    lowerOpen: boolean;
    bound( lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean ): IDBKeyRange;
    only( value: any ): IDBKeyRange;
    lowerBound( bound: any, open?: boolean ): IDBKeyRange;
    upperBound( bound: any, open?: boolean ): IDBKeyRange;
}
declare var IDBKeyRange: {
    prototype: IDBKeyRange;
    new (): IDBKeyRange;
}

interface WindowConsole {
    console: Console;
}

interface IDBTransaction extends EventTarget {
    oncomplete: ( ev: Event ) => any;
    addEventListener( type: "complete", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    db: IDBDatabase;
    mode: string;
    error: DOMError;
    onerror: ( ev: ErrorEvent ) => any;
    addEventListener( type: "error", listener: ( ev: ErrorEvent ) => any, useCapture?: boolean ): void;
    onabort: ( ev: any ) => any;
    addEventListener( type: "abort", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    abort(): void;
    objectStore( name: string ): IDBObjectStore;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
    READ_ONLY: string;
    VERSION_CHANGE: string;
    READ_WRITE: string;
}
declare var IDBTransaction: {
    prototype: IDBTransaction;
    new (): IDBTransaction;
    READ_ONLY: string;
    VERSION_CHANGE: string;
    READ_WRITE: string;
}

interface AudioTrack {
    kind: string;
    language: string;
    id: string;
    label: string;
    enabled: boolean;
}
declare var AudioTrack: {
    prototype: AudioTrack;
    new (): AudioTrack;
}

interface SVGFEConvolveMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    orderY: SVGAnimatedInteger;
    kernelUnitLengthY: SVGAnimatedNumber;
    orderX: SVGAnimatedInteger;
    preserveAlpha: SVGAnimatedBoolean;
    kernelMatrix: SVGAnimatedNumberList;
    edgeMode: SVGAnimatedEnumeration;
    kernelUnitLengthX: SVGAnimatedNumber;
    bias: SVGAnimatedNumber;
    targetX: SVGAnimatedInteger;
    targetY: SVGAnimatedInteger;
    divisor: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    SVG_EDGEMODE_WRAP: number;
    SVG_EDGEMODE_DUPLICATE: number;
    SVG_EDGEMODE_UNKNOWN: number;
    SVG_EDGEMODE_NONE: number;
}
declare var SVGFEConvolveMatrixElement: {
    prototype: SVGFEConvolveMatrixElement;
    new (): SVGFEConvolveMatrixElement;
    SVG_EDGEMODE_WRAP: number;
    SVG_EDGEMODE_DUPLICATE: number;
    SVG_EDGEMODE_UNKNOWN: number;
    SVG_EDGEMODE_NONE: number;
}

interface TextTrackCueList {
    length: number;
    item( index: number ): TextTrackCue;
    [index: number]: TextTrackCue;
    getCueById( id: string ): TextTrackCue;
}
declare var TextTrackCueList: {
    prototype: TextTrackCueList;
    new (): TextTrackCueList;
}

interface CSSKeyframesRule extends CSSRule {
    name: string;
    cssRules: CSSRuleList;
    findRule( rule: string ): CSSKeyframeRule;
    deleteRule( rule: string ): void;
    appendRule( rule: string ): void;
}
declare var CSSKeyframesRule: {
    prototype: CSSKeyframesRule;
    new (): CSSKeyframesRule;
}

interface Window extends WindowBase64, IDBEnvironment, WindowConsole {
    onmspointerdown: ( ev: any ) => any;
    addEventListener( type: "mspointerdown", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    animationStartTime: number;
    onmsgesturedoubletap: ( ev: any ) => any;
    addEventListener( type: "msgesturedoubletap", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointerhover: ( ev: any ) => any;
    addEventListener( type: "mspointerhover", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgesturehold: ( ev: any ) => any;
    addEventListener( type: "msgesturehold", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointermove: ( ev: any ) => any;
    addEventListener( type: "mspointermove", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgesturechange: ( ev: any ) => any;
    addEventListener( type: "msgesturechange", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgesturestart: ( ev: any ) => any;
    addEventListener( type: "msgesturestart", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointercancel: ( ev: any ) => any;
    addEventListener( type: "mspointercancel", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgestureend: ( ev: any ) => any;
    addEventListener( type: "msgestureend", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgesturetap: ( ev: any ) => any;
    addEventListener( type: "msgesturetap", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointerout: ( ev: any ) => any;
    addEventListener( type: "mspointerout", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    msAnimationStartTime: number;
    applicationCache: ApplicationCache;
    onmsinertiastart: ( ev: any ) => any;
    addEventListener( type: "msinertiastart", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointerover: ( ev: any ) => any;
    addEventListener( type: "mspointerover", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onpopstate: ( ev: PopStateEvent ) => any;
    addEventListener( type: "popstate", listener: ( ev: PopStateEvent ) => any, useCapture?: boolean ): void;
    onmspointerup: ( ev: any ) => any;
    addEventListener( type: "mspointerup", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    msCancelRequestAnimationFrame( handle: number ): void;
    matchMedia( mediaQuery: string ): MediaQueryList;
    cancelAnimationFrame( handle: number ): void;
    msIsStaticHTML( html: string ): boolean;
    msMatchMedia( mediaQuery: string ): MediaQueryList;
    requestAnimationFrame( callback: FrameRequestCallback ): number;
    msRequestAnimationFrame( callback: FrameRequestCallback ): number;
}

interface SVGFETurbulenceElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    baseFrequencyX: SVGAnimatedNumber;
    numOctaves: SVGAnimatedInteger;
    type: SVGAnimatedEnumeration;
    baseFrequencyY: SVGAnimatedNumber;
    stitchTiles: SVGAnimatedEnumeration;
    seed: SVGAnimatedNumber;
    SVG_STITCHTYPE_UNKNOWN: number;
    SVG_STITCHTYPE_NOSTITCH: number;
    SVG_TURBULENCE_TYPE_UNKNOWN: number;
    SVG_TURBULENCE_TYPE_TURBULENCE: number;
    SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    SVG_STITCHTYPE_STITCH: number;
}
declare var SVGFETurbulenceElement: {
    prototype: SVGFETurbulenceElement;
    new (): SVGFETurbulenceElement;
    SVG_STITCHTYPE_UNKNOWN: number;
    SVG_STITCHTYPE_NOSTITCH: number;
    SVG_TURBULENCE_TYPE_UNKNOWN: number;
    SVG_TURBULENCE_TYPE_TURBULENCE: number;
    SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    SVG_STITCHTYPE_STITCH: number;
}

interface TextTrackList {
    length: number;
    item( index: number ): TextTrack;
    [index: number]: TextTrack;
}
declare var TextTrackList: {
    prototype: TextTrackList;
    new (): TextTrackList;
}

interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {
}
declare var SVGFEFuncGElement: {
    prototype: SVGFEFuncGElement;
    new (): SVGFEFuncGElement;
}

interface SVGFEColorMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
    type: SVGAnimatedEnumeration;
    values: SVGAnimatedNumberList;
    SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
    SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
}
declare var SVGFEColorMatrixElement: {
    prototype: SVGFEColorMatrixElement;
    new (): SVGFEColorMatrixElement;
    SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
    SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
}

interface Console {
    info( message?: any, ...optionalParams: any[] ): void;
    profile( reportName?: string ): void;
    assert( test?: boolean, message?: string, ...optionalParams: any[] ): void;
    msIsIndependentlyComposed( element: Element ): boolean;
    clear(): void;
    dir( value?: any, ...optionalParams: any[] ): void;
    warn( message?: any, ...optionalParams: any[] ): void;
    error( message?: any, ...optionalParams: any[] ): void;
    log( message?: any, ...optionalParams: any[] ): void;
    profileEnd(): void;
}
declare var Console: {
    prototype: Console;
    new (): Console;
}

interface SVGFESpotLightElement extends SVGElement {
    pointsAtY: SVGAnimatedNumber;
    y: SVGAnimatedNumber;
    limitingConeAngle: SVGAnimatedNumber;
    specularExponent: SVGAnimatedNumber;
    x: SVGAnimatedNumber;
    pointsAtZ: SVGAnimatedNumber;
    z: SVGAnimatedNumber;
    pointsAtX: SVGAnimatedNumber;
}
declare var SVGFESpotLightElement: {
    prototype: SVGFESpotLightElement;
    new (): SVGFESpotLightElement;
}

interface HTMLImageElement {
    msPlayToPrimary: boolean;
    msPlayToDisabled: boolean;
    msPlayToSource: any;
}

interface WindowBase64 {
    btoa( rawString: string ): string;
    atob( encodedString: string ): string;
}

interface IDBDatabase extends EventTarget {
    version: string;
    name: string;
    objectStoreNames: DOMStringList;
    onerror: ( ev: ErrorEvent ) => any;
    addEventListener( type: "error", listener: ( ev: ErrorEvent ) => any, useCapture?: boolean ): void;
    onabort: ( ev: any ) => any;
    addEventListener( type: "abort", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    createObjectStore( name: string, optionalParameters?: any ): IDBObjectStore;
    close(): void;
    transaction( storeNames: any, mode?: string ): IDBTransaction;
    deleteObjectStore( name: string ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var IDBDatabase: {
    prototype: IDBDatabase;
    new (): IDBDatabase;
}

interface DOMStringList {
    length: number;
    contains( str: string ): boolean;
    item( index: number ): string;
    [index: number]: string;
}
declare var DOMStringList: {
    prototype: DOMStringList;
    new (): DOMStringList;
}

interface HTMLButtonElement {
    validationMessage: string;
    formTarget: string;
    willValidate: boolean;
    formAction: string;
    autofocus: boolean;
    validity: ValidityState;
    formNoValidate: string;
    formEnctype: string;
    formMethod: string;
    checkValidity(): boolean;
    setCustomValidity( error: string ): void;
}

interface IDBOpenDBRequest extends IDBRequest {
    onupgradeneeded: ( ev: IDBVersionChangeEvent ) => any;
    addEventListener( type: "upgradeneeded", listener: ( ev: IDBVersionChangeEvent ) => any, useCapture?: boolean ): void;
    onblocked: ( ev: Event ) => any;
    addEventListener( type: "blocked", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var IDBOpenDBRequest: {
    prototype: IDBOpenDBRequest;
    new (): IDBOpenDBRequest;
}

interface HTMLProgressElement extends HTMLElement {
    value: number;
    max: number;
    position: number;
    form: HTMLFormElement;
}
declare var HTMLProgressElement: {
    prototype: HTMLProgressElement;
    new (): HTMLProgressElement;
}

interface MSLaunchUriCallback {
    (): void;
}

interface SVGFEOffsetElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    dy: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    dx: SVGAnimatedNumber;
}
declare var SVGFEOffsetElement: {
    prototype: SVGFEOffsetElement;
    new (): SVGFEOffsetElement;
}

interface HTMLFormElement {
    autocomplete: string;
    noValidate: boolean;
    checkValidity(): boolean;
}

interface MSUnsafeFunctionCallback {
    (): any;
}

interface Document {
    onmspointerdown: ( ev: any ) => any;
    addEventListener( type: "mspointerdown", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    msHidden: boolean;
    msVisibilityState: string;
    onmsgesturedoubletap: ( ev: any ) => any;
    addEventListener( type: "msgesturedoubletap", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    visibilityState: string;
    onmsmanipulationstatechanged: ( ev: any ) => any;
    addEventListener( type: "msmanipulationstatechanged", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointerhover: ( ev: any ) => any;
    addEventListener( type: "mspointerhover", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmscontentzoom: ( ev: any ) => any;
    addEventListener( type: "mscontentzoom", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointermove: ( ev: any ) => any;
    addEventListener( type: "mspointermove", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgesturehold: ( ev: any ) => any;
    addEventListener( type: "msgesturehold", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgesturechange: ( ev: any ) => any;
    addEventListener( type: "msgesturechange", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgesturestart: ( ev: any ) => any;
    addEventListener( type: "msgesturestart", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointercancel: ( ev: any ) => any;
    addEventListener( type: "mspointercancel", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgestureend: ( ev: any ) => any;
    addEventListener( type: "msgestureend", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsgesturetap: ( ev: any ) => any;
    addEventListener( type: "msgesturetap", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointerout: ( ev: any ) => any;
    addEventListener( type: "mspointerout", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmsinertiastart: ( ev: any ) => any;
    addEventListener( type: "msinertiastart", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    msCSSOMElementFloatMetrics: boolean;
    onmspointerover: ( ev: any ) => any;
    addEventListener( type: "mspointerover", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    hidden: boolean;
    onmspointerup: ( ev: any ) => any;
    addEventListener( type: "mspointerup", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    msElementsFromPoint( x: number, y: number ): NodeList;
    msElementsFromRect( left: number, top: number, width: number, height: number ): NodeList;
    clear(): void;
}

interface MessageEvent extends Event {
    ports: any;
}

interface HTMLScriptElement {
    async: boolean;
}

interface HTMLMediaElement {
    msAudioCategory: string;
    msRealTime: boolean;
    msPlayToPrimary: boolean;
    textTracks: TextTrackList;
    msPlayToDisabled: boolean;
    audioTracks: AudioTrackList;
    msPlayToSource: any;
    msAudioDeviceType: string;
    msClearEffects(): void;
    msSetMediaProtectionManager( mediaProtectionManager?: any ): void;
    msInsertAudioEffect( activatableClassId: string, effectRequired: boolean, config?: any ): void;
}

interface TextTrack extends EventTarget {
    language: string;
    mode: any;
    readyState: number;
    activeCues: TextTrackCueList;
    cues: TextTrackCueList;
    oncuechange: ( ev: Event ) => any;
    addEventListener( type: "cuechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    kind: string;
    onload: ( ev: any ) => any;
    addEventListener( type: "load", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onerror: ( ev: ErrorEvent ) => any;
    addEventListener( type: "error", listener: ( ev: ErrorEvent ) => any, useCapture?: boolean ): void;
    label: string;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
    ERROR: number;
    SHOWING: number;
    LOADING: number;
    LOADED: number;
    NONE: number;
    HIDDEN: number;
    DISABLED: number;
}
declare var TextTrack: {
    prototype: TextTrack;
    new (): TextTrack;
    ERROR: number;
    SHOWING: number;
    LOADING: number;
    LOADED: number;
    NONE: number;
    HIDDEN: number;
    DISABLED: number;
}

interface MediaQueryListListener {
    ( mql: MediaQueryList ): void;
}

interface IDBRequest extends EventTarget {
    source: any;
    onsuccess: ( ev: Event ) => any;
    addEventListener( type: "success", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    error: DOMError;
    transaction: IDBTransaction;
    onerror: ( ev: ErrorEvent ) => any;
    addEventListener( type: "error", listener: ( ev: ErrorEvent ) => any, useCapture?: boolean ): void;
    readyState: string;
    result: any;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var IDBRequest: {
    prototype: IDBRequest;
    new (): IDBRequest;
}

interface MessagePort extends EventTarget {
    onmessage: ( ev: any ) => any;
    addEventListener( type: "message", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    close(): void;
    postMessage( message: any, ports?: any ): void;
    start(): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var MessagePort: {
    prototype: MessagePort;
    new (): MessagePort;
}

interface FileReader extends MSBaseReader {
    error: DOMError;
    readAsArrayBuffer( blob: Blob ): void;
    readAsDataURL( blob: Blob ): void;
    readAsText( blob: Blob, encoding?: string ): void;
}
declare var FileReader: {
    prototype: FileReader;
    new (): FileReader;
}

interface BlobPropertyBag {
    type?: string;
    endings?: string;
}

interface Blob {
    type: string;
    size: number;
    msDetachStream(): any;
    slice( start?: number, end?: number, contentType?: string ): Blob;
    close(): void;
    msClose(): void;
}
declare var Blob: {
    prototype: Blob;
    new ( blobParts?: any[], options?: BlobPropertyBag ): Blob;
}

interface ApplicationCache extends EventTarget {
    status: number;
    ondownloading: ( ev: Event ) => any;
    addEventListener( type: "downloading", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onprogress: ( ev: ProgressEvent ) => any;
    addEventListener( type: "progress", listener: ( ev: ProgressEvent ) => any, useCapture?: boolean ): void;
    onupdateready: ( ev: Event ) => any;
    addEventListener( type: "updateready", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    oncached: ( ev: Event ) => any;
    addEventListener( type: "cached", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onobsolete: ( ev: Event ) => any;
    addEventListener( type: "obsolete", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onerror: ( ev: ErrorEvent ) => any;
    addEventListener( type: "error", listener: ( ev: ErrorEvent ) => any, useCapture?: boolean ): void;
    onchecking: ( ev: Event ) => any;
    addEventListener( type: "checking", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    onnoupdate: ( ev: Event ) => any;
    addEventListener( type: "noupdate", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    swapCache(): void;
    abort(): void;
    update(): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
    CHECKING: number;
    UNCACHED: number;
    UPDATEREADY: number;
    DOWNLOADING: number;
    IDLE: number;
    OBSOLETE: number;
}
declare var ApplicationCache: {
    prototype: ApplicationCache;
    new (): ApplicationCache;
    CHECKING: number;
    UNCACHED: number;
    UPDATEREADY: number;
    DOWNLOADING: number;
    IDLE: number;
    OBSOLETE: number;
}

interface FrameRequestCallback {
    ( time: number ): void;
}

interface XMLHttpRequest {
    response: any;
    withCredentials: boolean;
    onprogress: ( ev: ProgressEvent ) => any;
    addEventListener( type: "progress", listener: ( ev: ProgressEvent ) => any, useCapture?: boolean ): void;
    onabort: ( ev: any ) => any;
    addEventListener( type: "abort", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    responseType: string;
    onloadend: ( ev: ProgressEvent ) => any;
    addEventListener( type: "loadend", listener: ( ev: ProgressEvent ) => any, useCapture?: boolean ): void;
    upload: XMLHttpRequestEventTarget;
    onerror: ( ev: ErrorEvent ) => any;
    addEventListener( type: "error", listener: ( ev: ErrorEvent ) => any, useCapture?: boolean ): void;
    onloadstart: ( ev: any ) => any;
    addEventListener( type: "loadstart", listener: ( ev: any ) => any, useCapture?: boolean ): void;
}

interface PopStateEvent extends Event {
    state: any;
    initPopStateEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, stateArg: any ): void;
}
declare var PopStateEvent: {
    prototype: PopStateEvent;
    new (): PopStateEvent;
}

interface CSSKeyframeRule extends CSSRule {
    keyText: string;
    style: CSSStyleDeclaration;
}
declare var CSSKeyframeRule: {
    prototype: CSSKeyframeRule;
    new (): CSSKeyframeRule;
}

interface MSFileSaver {
    msSaveBlob( blob: any, defaultName?: string ): boolean;
    msSaveOrOpenBlob( blob: any, defaultName?: string ): boolean;
}

interface MSStream {
    type: string;
    msDetachStream(): any;
    msClose(): void;
}
declare var MSStream: {
    prototype: MSStream;
    new (): MSStream;
}

interface MediaError {
    msExtendedCode: number;
}

interface HTMLFieldSetElement {
    validationMessage: string;
    validity: ValidityState;
    willValidate: boolean;
    checkValidity(): boolean;
    setCustomValidity( error: string ): void;
}

interface MSBlobBuilder {
    append( data: any, endings?: string ): void;
    getBlob( contentType?: string ): Blob;
}
declare var MSBlobBuilder: {
    prototype: MSBlobBuilder;
    new (): MSBlobBuilder;
}

interface HTMLElement {
    onmscontentzoom: ( ev: any ) => any;
    addEventListener( type: "mscontentzoom", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    oncuechange: ( ev: Event ) => any;
    addEventListener( type: "cuechange", listener: ( ev: Event ) => any, useCapture?: boolean ): void;
    spellcheck: boolean;
    classList: DOMTokenList;
    onmsmanipulationstatechanged: ( ev: any ) => any;
    addEventListener( type: "msmanipulationstatechanged", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    draggable: boolean;
}

interface DataTransfer {
    types: DOMStringList;
    files: FileList;
}

interface DOMSettableTokenList extends DOMTokenList {
    value: string;
}
declare var DOMSettableTokenList: {
    prototype: DOMSettableTokenList;
    new (): DOMSettableTokenList;
}

interface IDBFactory {
    open( name: string, version?: number ): IDBOpenDBRequest;
    cmp( first: any, second: any ): number;
    deleteDatabase( name: string ): IDBOpenDBRequest;
}
declare var IDBFactory: {
    prototype: IDBFactory;
    new (): IDBFactory;
}

interface Range {
    createContextualFragment( fragment: string ): DocumentFragment;
}

interface HTMLObjectElement {
    validationMessage: string;
    validity: ValidityState;
    willValidate: boolean;
    checkValidity(): boolean;
    setCustomValidity( error: string ): void;
}

interface MSPointerEvent extends MouseEvent {
    width: number;
    rotation: number;
    pressure: number;
    pointerType: any;
    isPrimary: boolean;
    tiltY: number;
    height: number;
    intermediatePoints: any;
    currentPoint: any;
    tiltX: number;
    hwTimestamp: number;
    pointerId: number;
    initPointerEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: any, hwTimestampArg: number, isPrimary: boolean ): void;
    getCurrentPoint( element: Element ): void;
    getIntermediatePoints( element: Element ): void;
    MSPOINTER_TYPE_PEN: number;
    MSPOINTER_TYPE_MOUSE: number;
    MSPOINTER_TYPE_TOUCH: number;
}
declare var MSPointerEvent: {
    prototype: MSPointerEvent;
    new (): MSPointerEvent;
    MSPOINTER_TYPE_PEN: number;
    MSPOINTER_TYPE_MOUSE: number;
    MSPOINTER_TYPE_TOUCH: number;
}

interface DOMException {
    name: string;
    INVALID_NODE_TYPE_ERR: number;
    DATA_CLONE_ERR: number;
    TIMEOUT_ERR: number;
}
//declare var DOMException: {
//    prototype: DOMException;
//    INVALID_NODE_TYPE_ERR: number;
//    DATA_CLONE_ERR: number;
//    TIMEOUT_ERR: number;
//}

interface MSManipulationEvent extends UIEvent {
    lastState: number;
    currentState: number;
    initMSManipulationEvent( typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, lastState: number, currentState: number ): void;
    MS_MANIPULATION_STATE_STOPPED: number;
    MS_MANIPULATION_STATE_ACTIVE: number;
    MS_MANIPULATION_STATE_INERTIA: number;
}
declare var MSManipulationEvent: {
    prototype: MSManipulationEvent;
    new (): MSManipulationEvent;
    MS_MANIPULATION_STATE_STOPPED: number;
    MS_MANIPULATION_STATE_ACTIVE: number;
    MS_MANIPULATION_STATE_INERTIA: number;
}

interface FormData {
    append( name: any, value: any, blobName?: string ): void;
}
declare var FormData: {
    prototype: FormData;
    new ( form?: HTMLFormElement ): FormData;
}

interface HTMLDataListElement extends HTMLElement {
    options: HTMLCollection;
}
declare var HTMLDataListElement: {
    prototype: HTMLDataListElement;
    new (): HTMLDataListElement;
}

interface SVGFEImageElement extends SVGElement, SVGLangSpace, SVGFilterPrimitiveStandardAttributes, SVGURIReference, SVGExternalResourcesRequired {
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
}
declare var SVGFEImageElement: {
    prototype: SVGFEImageElement;
    new (): SVGFEImageElement;
}

interface AbstractWorker extends EventTarget {
    onerror: ( ev: ErrorEvent ) => any;
    addEventListener( type: "error", listener: ( ev: ErrorEvent ) => any, useCapture?: boolean ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}

interface SVGFECompositeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    operator: SVGAnimatedEnumeration;
    in2: SVGAnimatedString;
    k2: SVGAnimatedNumber;
    k1: SVGAnimatedNumber;
    k3: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    k4: SVGAnimatedNumber;
    SVG_FECOMPOSITE_OPERATOR_OUT: number;
    SVG_FECOMPOSITE_OPERATOR_OVER: number;
    SVG_FECOMPOSITE_OPERATOR_XOR: number;
    SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    SVG_FECOMPOSITE_OPERATOR_IN: number;
    SVG_FECOMPOSITE_OPERATOR_ATOP: number;
}
declare var SVGFECompositeElement: {
    prototype: SVGFECompositeElement;
    new (): SVGFECompositeElement;
    SVG_FECOMPOSITE_OPERATOR_OUT: number;
    SVG_FECOMPOSITE_OPERATOR_OVER: number;
    SVG_FECOMPOSITE_OPERATOR_XOR: number;
    SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    SVG_FECOMPOSITE_OPERATOR_IN: number;
    SVG_FECOMPOSITE_OPERATOR_ATOP: number;
}

interface ValidityState {
    customError: boolean;
    valueMissing: boolean;
    stepMismatch: boolean;
    rangeUnderflow: boolean;
    rangeOverflow: boolean;
    typeMismatch: boolean;
    patternMismatch: boolean;
    tooLong: boolean;
    valid: boolean;
}
declare var ValidityState: {
    prototype: ValidityState;
    new (): ValidityState;
}

interface HTMLTrackElement extends HTMLElement {
    kind: string;
    src: string;
    srclang: string;
    track: TextTrack;
    label: string;
    default: boolean;
}
declare var HTMLTrackElement: {
    prototype: HTMLTrackElement;
    new (): HTMLTrackElement;
}

interface MSApp {
    createFileFromStorageFile( storageFile: any ): File;
    createBlobFromRandomAccessStream( type: string, seeker: any ): Blob;
    createStreamFromInputStream( type: string, inputStream: any ): MSStream;
    terminateApp( exceptionObject: any ): void;
    createDataPackage( object: any ): any;
    execUnsafeLocalFunction( unsafeFunction: MSUnsafeFunctionCallback ): any;
    getHtmlPrintDocumentSource( htmlDoc: any ): any;
    addPublicLocalApplicationUri( uri: string ): void;
    createDataPackageFromSelection(): any;
}
declare var MSApp: MSApp;

interface HTMLVideoElement {
    msIsStereo3D: boolean;
    msStereo3DPackingMode: string;
    onMSVideoOptimalLayoutChanged: ( ev: any ) => any;
    addEventListener( type: "MSVideoOptimalLayoutChanged", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onMSVideoFrameStepCompleted: ( ev: any ) => any;
    addEventListener( type: "MSVideoFrameStepCompleted", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    msStereo3DRenderMode: string;
    msIsLayoutOptimalForPlayback: boolean;
    msHorizontalMirror: boolean;
    onMSVideoFormatChanged: ( ev: any ) => any;
    addEventListener( type: "MSVideoFormatChanged", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    msZoom: boolean;
    msInsertVideoEffect( activatableClassId: string, effectRequired: boolean, config?: any ): void;
    msSetVideoRectangle( left: number, top: number, right: number, bottom: number ): void;
    msFrameStep( forward: boolean ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}

interface SVGFEComponentTransferElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
}
declare var SVGFEComponentTransferElement: {
    prototype: SVGFEComponentTransferElement;
    new (): SVGFEComponentTransferElement;
}

interface SVGFEDiffuseLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    kernelUnitLengthY: SVGAnimatedNumber;
    surfaceScale: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    kernelUnitLengthX: SVGAnimatedNumber;
    diffuseConstant: SVGAnimatedNumber;
}
declare var SVGFEDiffuseLightingElement: {
    prototype: SVGFEDiffuseLightingElement;
    new (): SVGFEDiffuseLightingElement;
}

interface MSCSSMatrix {
    m24: number;
    m34: number;
    a: number;
    d: number;
    m32: number;
    m41: number;
    m11: number;
    f: number;
    e: number;
    m23: number;
    m14: number;
    m33: number;
    m22: number;
    m21: number;
    c: number;
    m12: number;
    b: number;
    m42: number;
    m31: number;
    m43: number;
    m13: number;
    m44: number;
    multiply( secondMatrix: MSCSSMatrix ): MSCSSMatrix;
    skewY( angle: number ): MSCSSMatrix;
    setMatrixValue( value: string ): void;
    inverse(): MSCSSMatrix;
    rotateAxisAngle( x: number, y: number, z: number, angle: number ): MSCSSMatrix;
    toString(): string;
    rotate( angleX: number, angleY?: number, angleZ?: number ): MSCSSMatrix;
    translate( x: number, y: number, z?: number ): MSCSSMatrix;
    scale( scaleX: number, scaleY?: number, scaleZ?: number ): MSCSSMatrix;
    skewX( angle: number ): MSCSSMatrix;
}
declare var MSCSSMatrix: {
    prototype: MSCSSMatrix;
    new ( text?: string ): MSCSSMatrix;
}

interface Worker extends AbstractWorker {
    onmessage: ( ev: any ) => any;
    addEventListener( type: "message", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    postMessage( message: any, ports?: any ): void;
    terminate(): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var Worker: {
    prototype: Worker;
    new ( stringUrl: string ): Worker;
}

interface HTMLIFrameElement {
    sandbox: DOMSettableTokenList;
}

declare var onmspointerdown: ( ev: any ) => any;
declare function addEventListener( type: "mspointerdown", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var animationStartTime: number;
declare var onmsgesturedoubletap: ( ev: any ) => any;
declare function addEventListener( type: "msgesturedoubletap", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var onmspointerhover: ( ev: any ) => any;
declare function addEventListener( type: "mspointerhover", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var onmsgesturehold: ( ev: any ) => any;
declare function addEventListener( type: "msgesturehold", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var onmspointermove: ( ev: any ) => any;
declare function addEventListener( type: "mspointermove", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var onmsgesturechange: ( ev: any ) => any;
declare function addEventListener( type: "msgesturechange", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var onmsgesturestart: ( ev: any ) => any;
declare function addEventListener( type: "msgesturestart", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var onmspointercancel: ( ev: any ) => any;
declare function addEventListener( type: "mspointercancel", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var onmsgestureend: ( ev: any ) => any;
declare function addEventListener( type: "msgestureend", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var onmsgesturetap: ( ev: any ) => any;
declare function addEventListener( type: "msgesturetap", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var onmspointerout: ( ev: any ) => any;
declare function addEventListener( type: "mspointerout", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var msAnimationStartTime: number;
declare var applicationCache: ApplicationCache;
declare var onmsinertiastart: ( ev: any ) => any;
declare function addEventListener( type: "msinertiastart", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var onmspointerover: ( ev: any ) => any;
declare function addEventListener( type: "mspointerover", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var onpopstate: ( ev: PopStateEvent ) => any;
declare function addEventListener( type: "popstate", listener: ( ev: PopStateEvent ) => any, useCapture?: boolean ): void;
declare var onmspointerup: ( ev: any ) => any;
declare function addEventListener( type: "mspointerup", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare function msCancelRequestAnimationFrame( handle: number ): void;
declare function matchMedia( mediaQuery: string ): MediaQueryList;
declare function cancelAnimationFrame( handle: number ): void;
declare function msIsStaticHTML( html: string ): boolean;
declare function msMatchMedia( mediaQuery: string ): MediaQueryList;
declare function requestAnimationFrame( callback: FrameRequestCallback ): number;
declare function msRequestAnimationFrame( callback: FrameRequestCallback ): number;
declare function btoa( rawString: string ): string;
declare function atob( encodedString: string ): string;
declare var msIndexedDB: IDBFactory;
declare var indexedDB: IDBFactory;
declare var console: Console;