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

/// <reference path="lib.es-api-ext.d.ts" />

/// <reference path="lib.ie9-dom.d.ts" />

/// <reference path="lib.ie10-dom.d.ts" />

/// <reference path="lib.ie10-es-x.d.ts" />

/////////////////////////////
/// IE11 APIs 
/////////////////////////////

interface StoreExceptionsInformation extends ExceptionInformation {
    siteName?: string;
    explanationString?: string;
    detailURI?: string;
}

interface StoreSiteSpecificExceptionsInformation extends StoreExceptionsInformation {
    arrayOfDomainStrings?: Array<string>;
}

interface ConfirmSiteSpecificExceptionsInformation extends ExceptionInformation {
    arrayOfDomainStrings?: Array<string>;
}

interface AlgorithmParameters {
}

interface MutationObserverInit {
    childList?: boolean;
    attributes?: boolean;
    characterData?: boolean;
    subtree?: boolean;
    attributeOldValue?: boolean;
    characterDataOldValue?: boolean;
    attributeFilter?: Array<string>;
}

interface ExceptionInformation {
    domain?: string;
}

interface MsZoomToOptions {
    contentX?: number;
    contentY?: number;
    viewportX?: string;
    viewportY?: string;
    scaleFactor?: number;
    animate?: string;
}

interface DeviceAccelerationDict {
    x?: number;
    y?: number;
    z?: number;
}

interface DeviceRotationRateDict {
    alpha?: number;
    beta?: number;
    gamma?: number;
}

interface Algorithm {
    name?: string;
    params?: AlgorithmParameters;
}

interface NavigatorID {
    product: string;
    vendor: string;
}
declare var NavigatorID: {
    prototype: NavigatorID;
    new (): NavigatorID;
}

interface HTMLBodyElement {
    onpageshow: ( ev: PageTransitionEvent ) => any;
    addEventListener( type: "pageshow", listener: ( ev: PageTransitionEvent ) => any, useCapture?: boolean ): void;
    onpagehide: ( ev: PageTransitionEvent ) => any;
    addEventListener( type: "pagehide", listener: ( ev: PageTransitionEvent ) => any, useCapture?: boolean ): void;
}

interface MSExecAtPriorityFunctionCallback {
    ( ...args: any[] ): any;
}

interface MSWindowExtensions {
    captureEvents(): void;
    releaseEvents(): void;
}
declare var MSWindowExtensions: {
    prototype: MSWindowExtensions;
    new (): MSWindowExtensions;
}

interface MSGraphicsTrust {
    status: string;
    constrictionActive: boolean;
}
declare var MSGraphicsTrust: {
    prototype: MSGraphicsTrust;
    new (): MSGraphicsTrust;
}

interface AudioTrack {
    sourceBuffer: SourceBuffer;
}

interface DragEvent {
    msConvertURL( file: File, targetType: string, targetURL?: string ): boolean;
}

interface SubtleCrypto {
    unwrapKey( wrappedKey: ArrayBufferView, keyAlgorithm: any, keyEncryptionKey: Key, extractable?: boolean, keyUsages?: string[] ): KeyOperation;
    encrypt( algorithm: any, key: Key, buffer?: ArrayBufferView ): CryptoOperation;
    importKey( format: string, keyData: ArrayBufferView, algorithm: any, extractable?: boolean, keyUsages?: string[] ): KeyOperation;
    wrapKey( key: Key, keyEncryptionKey: Key, keyWrappingAlgorithm: any ): KeyOperation;
    verify( algorithm: any, key: Key, signature: ArrayBufferView, buffer?: ArrayBufferView ): CryptoOperation;
    deriveKey( algorithm: any, baseKey: Key, derivedKeyType: any, extractable?: boolean, keyUsages?: string[] ): KeyOperation;
    digest( algorithm: any, buffer?: ArrayBufferView ): CryptoOperation;
    exportKey( format: string, key: Key ): KeyOperation;
    generateKey( algorithm: any, extractable?: boolean, keyUsages?: string[] ): KeyOperation;
    sign( algorithm: any, key: Key, buffer?: ArrayBufferView ): CryptoOperation;
    decrypt( algorithm: any, key: Key, buffer?: ArrayBufferView ): CryptoOperation;
}
declare var SubtleCrypto: {
    prototype: SubtleCrypto;
    new (): SubtleCrypto;
}

interface Crypto extends RandomSource {
    subtle: SubtleCrypto;
}
declare var Crypto: {
    prototype: Crypto;
    new (): Crypto;
}

interface VideoPlaybackQuality {
    creationTime: number;
    totalVideoFrames: number;
    droppedVideoFrames: number;
}
declare var VideoPlaybackQuality: {
    prototype: VideoPlaybackQuality;
    new (): VideoPlaybackQuality;
}

interface Window {
    onpageshow: ( ev: PageTransitionEvent ) => any;
    addEventListener( type: "pageshow", listener: ( ev: PageTransitionEvent ) => any, useCapture?: boolean ): void;
    ondevicemotion: ( ev: DeviceMotionEvent ) => any;
    addEventListener( type: "devicemotion", listener: ( ev: DeviceMotionEvent ) => any, useCapture?: boolean ): void;
    devicePixelRatio: number;
    msCrypto: Crypto;
    ondeviceorientation: ( ev: DeviceOrientationEvent ) => any;
    addEventListener( type: "deviceorientation", listener: ( ev: DeviceOrientationEvent ) => any, useCapture?: boolean ): void;
    onmspointerenter: ( ev: any ) => any;
    addEventListener( type: "mspointerenter", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onpagehide: ( ev: PageTransitionEvent ) => any;
    addEventListener( type: "pagehide", listener: ( ev: PageTransitionEvent ) => any, useCapture?: boolean ): void;
    onmspointerleave: ( ev: any ) => any;
    addEventListener( type: "mspointerleave", listener: ( ev: any ) => any, useCapture?: boolean ): void;
}

interface Key {
    algorithm: Algorithm;
    type: string;
    extractable: boolean;
    keyUsage: string[];
}
declare var Key: {
    prototype: Key;
    new (): Key;
}

interface TextTrackList extends EventTarget {
    onaddtrack: ( ev: any ) => any;
    addEventListener( type: "addtrack", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}

interface DeviceAcceleration {
    y: number;
    x: number;
    z: number;
}
declare var DeviceAcceleration: {
    prototype: DeviceAcceleration;
    new (): DeviceAcceleration;
}

interface Console {
    count( countTitle?: string ): void;
    groupEnd(): void;
    time( timerName?: string ): void;
    timeEnd( timerName?: string ): void;
    trace(): void;
    group( groupTitle?: string ): void;
    dirxml( value: any ): void;
    debug( message?: string, ...optionalParams: any[] ): void;
    groupCollapsed( groupTitle?: string ): void;
    select( element: Element ): void;
}

interface MSNavigatorDoNotTrack {
    removeSiteSpecificTrackingException( args: ExceptionInformation ): boolean;
    removeWebWideTrackingException( args: ExceptionInformation ): boolean;
    storeWebWideTrackingException( args: StoreExceptionsInformation ): void;
    storeSiteSpecificTrackingException( args: StoreSiteSpecificExceptionsInformation ): void;
    confirmSiteSpecificTrackingException( args: ConfirmSiteSpecificExceptionsInformation ): boolean;
    confirmWebWideTrackingException( args: ExceptionInformation ): boolean;
}
declare var MSNavigatorDoNotTrack: {
    prototype: MSNavigatorDoNotTrack;
    new (): MSNavigatorDoNotTrack;
}

interface HTMLImageElement {
    crossOrigin: string;
}

interface HTMLAllCollection extends HTMLCollection {
    namedItem( name: string ): Element;
}
declare var HTMLAllCollection: {
    prototype: HTMLAllCollection;
    new (): HTMLAllCollection;
}

interface MSNavigatorExtensions {
    language: string;
}
declare var MSNavigatorExtensions: {
    prototype: MSNavigatorExtensions;
    new (): MSNavigatorExtensions;
}

interface AesGcmEncryptResult {
    ciphertext: ArrayBuffer;
    tag: ArrayBuffer;
}
declare var AesGcmEncryptResult: {
    prototype: AesGcmEncryptResult;
    new (): AesGcmEncryptResult;
}

interface CSSStyleDeclaration {
    alignItems: string;
    borderImageSource: string;
    flexBasis: string;
    borderImageWidth: string;
    borderImageRepeat: string;
    order: string;
    flex: string;
    alignContent: string;
    msImeAlign: string;
    flexShrink: string;
    flexGrow: string;
    borderImageSlice: string;
    flexWrap: string;
    borderImageOutset: string;
    flexDirection: string;
    flexFlow: string;
    borderImage: string;
    justifyContent: string;
    alignSelf: string;
    msTextCombineHorizontal: string;
}

interface HTMLSourceElement {
    msKeySystem: string;
}

interface NavigationCompletedEvent extends NavigationEvent {
    webErrorStatus: number;
    isSuccess: boolean;
}
declare var NavigationCompletedEvent: {
    prototype: NavigationCompletedEvent;
    new (): NavigationCompletedEvent;
}

interface MutationRecord {
    oldValue: string;
    previousSibling: Node;
    addedNodes: NodeList;
    attributeName: string;
    removedNodes: NodeList;
    target: Node;
    nextSibling: Node;
    attributeNamespace: string;
    type: string;
}
declare var MutationRecord: {
    prototype: MutationRecord;
    new (): MutationRecord;
}

interface Document extends MSDocumentExtensions {
    msFullscreenEnabled: boolean;
    onmsfullscreenerror: ( ev: any ) => any;
    addEventListener( type: "msfullscreenerror", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointerenter: ( ev: any ) => any;
    addEventListener( type: "mspointerenter", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    msFullscreenElement: Element;
    onmsfullscreenchange: ( ev: any ) => any;
    addEventListener( type: "msfullscreenchange", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointerleave: ( ev: any ) => any;
    addEventListener( type: "mspointerleave", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    msExitFullscreen(): void;
}

interface MimeTypeArray {
    length: number;
    item( index: number ): Plugin;
    [index: number]: Plugin;
    namedItem( type: string ): Plugin;
}
declare var MimeTypeArray: {
    prototype: MimeTypeArray;
    new (): MimeTypeArray;
}

interface HTMLMediaElement {
    msPlayToPreferredSourceUri: string;
    onmsneedkey: ( ev: MSMediaKeyNeededEvent ) => any;
    addEventListener( type: "msneedkey", listener: ( ev: MSMediaKeyNeededEvent ) => any, useCapture?: boolean ): void;
    msKeys: MSMediaKeys;
    msGraphicsTrustStatus: MSGraphicsTrust;
    msSetMediaKeys( mediaKeys: MSMediaKeys ): void;
    addTextTrack( kind: string, label?: string, language?: string ): TextTrack;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}

interface TextTrack {
    addCue( cue: TextTrackCue ): void;
    removeCue( cue: TextTrackCue ): void;
}

interface KeyOperation extends EventTarget {
    oncomplete: ( ev: any ) => any;
    addEventListener( type: "complete", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onerror: ( ev: any ) => any;
    addEventListener( type: "error", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    result: any;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var KeyOperation: {
    prototype: KeyOperation;
    new (): KeyOperation;
}

interface DOMStringMap {
}
declare var DOMStringMap: {
    prototype: DOMStringMap;
    new (): DOMStringMap;
}

interface DeviceOrientationEvent extends Event {
    gamma: number;
    alpha: number;
    absolute: boolean;
    beta: number;
    initDeviceOrientationEvent( type: string, bubbles: boolean, cancelable: boolean, alpha: number, beta: number, gamma: number, absolute: boolean ): void;
}
declare var DeviceOrientationEvent: {
    prototype: DeviceOrientationEvent;
    new (): DeviceOrientationEvent;
}

interface MSMediaKeyMessageEvent extends Event {
    destinationURL: string;
    message: Uint8Array;
}
declare var MSMediaKeyMessageEvent: {
    prototype: MSMediaKeyMessageEvent;
    new (): MSMediaKeyMessageEvent;
}

interface MSMediaKeys {
    keySystem: string;
    createSession( type: string, initData: Uint8Array, cdmData?: Uint8Array ): MSMediaKeySession;
    isTypeSupported( keySystem: string, type?: string ): boolean;
}
declare var MSMediaKeys: {
    prototype: MSMediaKeys;
    new (): MSMediaKeys;
}

interface MSHTMLWebViewElement extends HTMLElement {
    documentTitle: string;
    width: number;
    src: string;
    canGoForward: boolean;
    height: number;
    canGoBack: boolean;
    navigateWithHttpRequestMessage( requestMessage: any ): void;
    goBack(): void;
    navigate( uri: string ): void;
    stop(): void;
    navigateToString( contents: string ): void;
    captureSelectedContentToDataPackageAsync(): MSWebViewAsyncOperation;
    capturePreviewToBlobAsync(): MSWebViewAsyncOperation;
    refresh(): void;
    goForward(): void;
    navigateToLocalStreamUri( source: string, streamResolver: any ): void;
    invokeScriptAsync( scriptName: string, ...args: any[] ): MSWebViewAsyncOperation;
    buildLocalStreamUri( contentIdentifier: string, relativePath: string ): string;
}
declare var MSHTMLWebViewElement: {
    prototype: MSHTMLWebViewElement;
    new (): MSHTMLWebViewElement;
}

interface NavigationEvent extends Event {
    uri: string;
}
declare var NavigationEvent: {
    prototype: NavigationEvent;
    new (): NavigationEvent;
}

interface Element {
    onmspointerenter: ( ev: any ) => any;
    addEventListener( type: "mspointerenter", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onmspointerleave: ( ev: any ) => any;
    addEventListener( type: "mspointerleave", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    msZoomTo( args: MsZoomToOptions ): void;
    msGetUntransformedBounds(): ClientRect;
    msRequestFullscreen(): void;
}

interface RandomSource {
    getRandomValues( array: ArrayBufferView ): ArrayBufferView;
}

interface XMLHttpRequest {
    msCaching: string;
    msCachingEnabled(): boolean;
    overrideMimeType( mime: string ): void;
}

interface SourceBuffer extends EventTarget {
    updating: boolean;
    appendWindowStart: number;
    appendWindowEnd: number;
    buffered: TimeRanges;
    timestampOffset: number;
    audioTracks: AudioTrackList;
    appendBuffer( data: ArrayBuffer ): void;
    remove( start: number, end: number ): void;
    abort(): void;
    appendStream( stream: MSStream, maxSize?: number ): void;
}
declare var SourceBuffer: {
    prototype: SourceBuffer;
    new (): SourceBuffer;
}

interface MSInputMethodContext extends EventTarget {
    oncandidatewindowshow: ( ev: any ) => any;
    addEventListener( type: "candidatewindowshow", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    target: HTMLElement;
    compositionStartOffset: number;
    oncandidatewindowhide: ( ev: any ) => any;
    addEventListener( type: "candidatewindowhide", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    oncandidatewindowupdate: ( ev: any ) => any;
    addEventListener( type: "candidatewindowupdate", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    compositionEndOffset: number;
    getCompositionAlternatives(): string[];
    getCandidateWindowClientRect(): ClientRect;
    hasComposition(): boolean;
    isCandidateWindowVisible(): boolean;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var MSInputMethodContext: {
    prototype: MSInputMethodContext;
    new (): MSInputMethodContext;
}

interface DeviceRotationRate {
    gamma: number;
    alpha: number;
    beta: number;
}
declare var DeviceRotationRate: {
    prototype: DeviceRotationRate;
    new (): DeviceRotationRate;
}

interface PluginArray {
    length: number;
    refresh( reload?: boolean ): void;
    item( index: number ): Plugin;
    [index: number]: Plugin;
    namedItem( name: string ): Plugin;
}
declare var PluginArray: {
    prototype: PluginArray;
    new (): PluginArray;
}

interface MSMediaKeyError {
    systemCode: number;
    code: number;
    MS_MEDIA_KEYERR_SERVICE: number;
    MS_MEDIA_KEYERR_HARDWARECHANGE: number;
    MS_MEDIA_KEYERR_OUTPUT: number;
    MS_MEDIA_KEYERR_DOMAIN: number;
    MS_MEDIA_KEYERR_UNKNOWN: number;
    MS_MEDIA_KEYERR_CLIENT: number;
}
declare var MSMediaKeyError: {
    prototype: MSMediaKeyError;
    new (): MSMediaKeyError;
    MS_MEDIA_KEYERR_SERVICE: number;
    MS_MEDIA_KEYERR_HARDWARECHANGE: number;
    MS_MEDIA_KEYERR_OUTPUT: number;
    MS_MEDIA_KEYERR_DOMAIN: number;
    MS_MEDIA_KEYERR_UNKNOWN: number;
    MS_MEDIA_KEYERR_CLIENT: number;
}

interface Plugin {
    length: number;
    filename: string;
    version: string;
    name: string;
    description: string;
    item( index: number ): MimeType;
    [index: number]: MimeType;
    namedItem( type: string ): MimeType;
}
declare var Plugin: {
    prototype: Plugin;
    new (): Plugin;
}

interface HTMLFrameSetElement {
    onpageshow: ( ev: PageTransitionEvent ) => any;
    addEventListener( type: "pageshow", listener: ( ev: PageTransitionEvent ) => any, useCapture?: boolean ): void;
    onpagehide: ( ev: PageTransitionEvent ) => any;
    addEventListener( type: "pagehide", listener: ( ev: PageTransitionEvent ) => any, useCapture?: boolean ): void;
}

interface Screen extends EventTarget {
    msOrientation: string;
    onmsorientationchange: ( ev: any ) => any;
    addEventListener( type: "msorientationchange", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    msLockOrientation( orientations: string[] ): boolean;
    msUnlockOrientation(): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}

interface MediaSource extends EventTarget {
    sourceBuffers: SourceBufferList;
    duration: string;
    readyState: any;
    activeSourceBuffers: SourceBufferList;
    addSourceBuffer( type: string ): SourceBuffer;
    endOfStream( error?: string ): void;
    isTypeSupported( type: string ): boolean;
    removeSourceBuffer( sourceBuffer: SourceBuffer ): void;
}
declare var MediaSource: {
    prototype: MediaSource;
    new (): MediaSource;
}

interface MediaError {
    MS_MEDIA_ERR_ENCRYPTED: number;
}
//declare var MediaError: {
//    prototype: MediaError;
//    MS_MEDIA_ERR_ENCRYPTED: number;
//}

interface SourceBufferList extends EventTarget {
    length: number;
    item( index: number ): SourceBuffer;
    [index: number]: SourceBuffer;
}
declare var SourceBufferList: {
    prototype: SourceBufferList;
    new (): SourceBufferList;
}

interface XMLDocument extends Document {
}
declare var XMLDocument: {
    prototype: XMLDocument;
    new (): XMLDocument;
}

interface DeviceMotionEvent extends Event {
    rotationRate: DeviceRotationRate;
    acceleration: DeviceAcceleration;
    interval: number;
    accelerationIncludingGravity: DeviceAcceleration;
    initDeviceMotionEvent( type: string, bubbles: boolean, cancelable: boolean, acceleration: DeviceAccelerationDict, accelerationIncludingGravity: DeviceAccelerationDict, rotationRate: DeviceRotationRateDict, interval: number ): void;
}
declare var DeviceMotionEvent: {
    prototype: DeviceMotionEvent;
    new (): DeviceMotionEvent;
}

interface MimeType {
    enabledPlugin: Plugin;
    suffixes: string;
    type: string;
    description: string;
}
declare var MimeType: {
    prototype: MimeType;
    new (): MimeType;
}

interface MSDocumentExtensions {
    captureEvents(): void;
    releaseEvents(): void;
}

interface HTMLElement {
    dataset: DOMStringMap;
    hidden: boolean;
    msGetInputContext(): MSInputMethodContext;
}

interface MutationObserver {
    observe( target: Node, options: MutationObserverInit ): void;
    takeRecords(): MutationRecord[];
    disconnect(): void;
}
declare var MutationObserver: {
    prototype: MutationObserver;
    new (): MutationObserver;
}

interface AudioTrackList {
    onremovetrack: ( ev: PluginArray ) => any;
    //addEventListener(type: "removetrack", listener: (ev: PluginArray) => any, useCapture?: boolean): void;
}

interface HTMLObjectElement {
    msPlayToPreferredSourceUri: string;
    msPlayToPrimary: boolean;
    msPlayToDisabled: boolean;
    msPlayToSource: any;
}

interface HTMLEmbedElement {
    msPlayToPreferredSourceUri: string;
    msPlayToPrimary: boolean;
    msPlayToDisabled: boolean;
    msPlayToSource: any;
}

interface MSWebViewAsyncOperation extends EventTarget {
    target: MSHTMLWebViewElement;
    oncomplete: ( ev: any ) => any;
    addEventListener( type: "complete", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    error: DOMError;
    onerror: ( ev: any ) => any;
    addEventListener( type: "error", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    readyState: number;
    type: number;
    result: any;
    start(): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
    ERROR: number;
    TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;
    TYPE_INVOKE_SCRIPT: number;
    COMPLETED: number;
    TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;
    STARTED: number;
}
declare var MSWebViewAsyncOperation: {
    prototype: MSWebViewAsyncOperation;
    new (): MSWebViewAsyncOperation;
    ERROR: number;
    TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;
    TYPE_INVOKE_SCRIPT: number;
    COMPLETED: number;
    TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;
    STARTED: number;
}

interface ScriptNotifyEvent extends Event {
    value: string;
    callingUri: string;
}
declare var ScriptNotifyEvent: {
    prototype: ScriptNotifyEvent;
    new (): ScriptNotifyEvent;
}

interface PerformanceNavigationTiming extends PerformanceEntry {
    redirectStart: number;
    domainLookupEnd: number;
    responseStart: number;
    domComplete: number;
    domainLookupStart: number;
    loadEventStart: number;
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
    redirectCount: number;
    unloadEventStart: number;
    domContentLoadedEventStart: number;
    domContentLoadedEventEnd: number;
    type: string;
}
declare var PerformanceNavigationTiming: {
    prototype: PerformanceNavigationTiming;
    new (): PerformanceNavigationTiming;
}

interface MSMediaKeyNeededEvent extends Event {
    initData: Uint8Array;
}
declare var MSMediaKeyNeededEvent: {
    prototype: MSMediaKeyNeededEvent;
    new (): MSMediaKeyNeededEvent;
}

interface MSManipulationEvent {
    MS_MANIPULATION_STATE_SELECTING: number;
    MS_MANIPULATION_STATE_COMMITTED: number;
    MS_MANIPULATION_STATE_PRESELECT: number;
    MS_MANIPULATION_STATE_DRAGGING: number;
    MS_MANIPULATION_STATE_CANCELLED: number;
}
//declare var MSManipulationEvent: {
//    prototype: MSManipulationEvent;
//    MS_MANIPULATION_STATE_SELECTING: number;
//    MS_MANIPULATION_STATE_COMMITTED: number;
//    MS_MANIPULATION_STATE_PRESELECT: number;
//    MS_MANIPULATION_STATE_DRAGGING: number;
//    MS_MANIPULATION_STATE_CANCELLED: number;
//}

interface LongRunningScriptDetectedEvent extends Event {
    stopPageScriptExecution: boolean;
    executionTime: number;
}
declare var LongRunningScriptDetectedEvent: {
    prototype: LongRunningScriptDetectedEvent;
    new (): LongRunningScriptDetectedEvent;
}

interface MSAppView {
    viewId: number;
    close(): void;
    postMessage( message: any, targetOrigin: string, ports?: any ): void;
}
declare var MSAppView: {
    prototype: MSAppView;
    new (): MSAppView;
}

interface PerfWidgetExternal {
    maxCpuSpeed: number;
    performanceCounterFrequency: number;
    performanceCounter: number;
    averagePaintTime: number;
    activeNetworkRequestCount: number;
    paintRequestsPerSecond: number;
    repositionWindow( x: number, y: number ): void;
    getRecentMemoryUsage( last: number ): any;
    getMemoryUsage(): number;
    resizeWindow( width: number, height: number ): void;
    getProcessCpuUsage(): number;
    removeEventListener( eventType: string, callback: ( ev: any ) => any ): void;
    getRecentCpuUsage( last: number ): any;
    addEventListener( eventType: string, callback: ( ev: any ) => any ): void;
    getRecentPaintRequests( last: number ): any;
}
declare var PerfWidgetExternal: {
    prototype: PerfWidgetExternal;
    new (): PerfWidgetExternal;
}

interface PageTransitionEvent extends Event {
    persisted: boolean;
}
declare var PageTransitionEvent: {
    prototype: PageTransitionEvent;
    new (): PageTransitionEvent;
}

interface MutationCallback {
    ( mutations: MutationRecord[], observer: MutationObserver ): void;
}

interface HTMLDocument extends Document {
}
declare var HTMLDocument: {
    prototype: HTMLDocument;
    new (): HTMLDocument;
}

interface KeyPair {
    privateKey: Key;
    publicKey: Key;
}
declare var KeyPair: {
    prototype: KeyPair;
    new (): KeyPair;
}

interface MSApp {
    getViewOpener(): MSAppView;
    suppressSubdownloadCredentialPrompts( suppress: boolean ): void;
    execAsyncAtPriority( asynchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[] ): void;
    isTaskScheduledAtPriorityOrHigher( priority: string ): boolean;
    execAtPriority( synchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[] ): any;
    createNewView( uri: string ): MSAppView;
    getCurrentPriority(): string;
    NORMAL: string;
    HIGH: string;
    IDLE: string;
    CURRENT: string;
}
//declare var MSApp: {
//    prototype: MSApp;
//    NORMAL: string;
//    HIGH: string;
//    IDLE: string;
//    CURRENT: string;
//}

interface HTMLTrackElement {
    readyState: number;
    ERROR: number;
    LOADING: number;
    LOADED: number;
    NONE: number;
}
//declare var HTMLTrackElement: {
//    prototype: HTMLTrackElement;
//    ERROR: number;
//    LOADING: number;
//    LOADED: number;
//    NONE: number;
//}

interface MSMediaKeySession extends EventTarget {
    sessionId: string;
    error: MSMediaKeyError;
    keySystem: string;
    close(): void;
    update( key: Uint8Array ): void;
}
declare var MSMediaKeySession: {
    prototype: MSMediaKeySession;
    new (): MSMediaKeySession;
}

interface HTMLVideoElement {
    videoPlaybackQuality: VideoPlaybackQuality;
}

interface UnviewableContentIdentifiedEvent extends NavigationEvent {
    referrer: string;
}
declare var UnviewableContentIdentifiedEvent: {
    prototype: UnviewableContentIdentifiedEvent;
    new (): UnviewableContentIdentifiedEvent;
}

interface CryptoOperation extends EventTarget {
    algorithm: Algorithm;
    oncomplete: ( ev: any ) => any;
    addEventListener( type: "complete", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onerror: ( ev: any ) => any;
    addEventListener( type: "error", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onprogress: ( ev: any ) => any;
    addEventListener( type: "progress", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    onabort: ( ev: any ) => any;
    addEventListener( type: "abort", listener: ( ev: any ) => any, useCapture?: boolean ): void;
    key: Key;
    result: any;
    abort(): void;
    finish(): void;
    process( buffer: ArrayBufferView ): void;
    addEventListener( type: string, listener: EventListener, useCapture?: boolean ): void;
}
declare var CryptoOperation: {
    prototype: CryptoOperation;
    new (): CryptoOperation;
}

declare var onpageshow: ( ev: PageTransitionEvent ) => any;
declare function addEventListener( type: "pageshow", listener: ( ev: PageTransitionEvent ) => any, useCapture?: boolean ): void;
declare var ondevicemotion: ( ev: DeviceMotionEvent ) => any;
declare function addEventListener( type: "devicemotion", listener: ( ev: DeviceMotionEvent ) => any, useCapture?: boolean ): void;
declare var devicePixelRatio: number;
declare var msCrypto: Crypto;
declare var ondeviceorientation: ( ev: DeviceOrientationEvent ) => any;
declare function addEventListener( type: "deviceorientation", listener: ( ev: DeviceOrientationEvent ) => any, useCapture?: boolean ): void;
declare var onmspointerenter: ( ev: any ) => any;
declare function addEventListener( type: "mspointerenter", listener: ( ev: any ) => any, useCapture?: boolean ): void;
declare var onpagehide: ( ev: PageTransitionEvent ) => any;
declare function addEventListener( type: "pagehide", listener: ( ev: PageTransitionEvent ) => any, useCapture?: boolean ): void;
declare var onmspointerleave: ( ev: any ) => any;
declare function addEventListener( type: "mspointerleave", listener: ( ev: any ) => any, useCapture?: boolean ): void;
