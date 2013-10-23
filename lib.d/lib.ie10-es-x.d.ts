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
/// IE10 ECMAScript Extensions
/////////////////////////////

interface ArrayBuffer {
    byteLength: number;
}
declare var ArrayBuffer: {
    prototype: ArrayBuffer;
    new ( byteLength: number ): ArrayBuffer;
}

interface ArrayBufferView {
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}

interface Int8Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get( index: number ): number;
    set( index: number, value: number ): void;
    set( array: Int8Array, offset?: number ): void;
    set( array: number[], offset?: number ): void;
    subarray( begin: number, end?: number ): Int8Array;
}
declare var Int8Array: {
    prototype: Int8Array;
    new ( length: number ): Int8Array;
    new ( array: Int8Array ): Int8Array;
    new ( array: number[] ): Int8Array;
    new ( buffer: ArrayBuffer, byteOffset?: number, length?: number ): Int8Array;
    BYTES_PER_ELEMENT: number;
}

interface Uint8Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get( index: number ): number;
    set( index: number, value: number ): void;
    set( array: Uint8Array, offset?: number ): void;
    set( array: number[], offset?: number ): void;
    subarray( begin: number, end?: number ): Uint8Array;
}
declare var Uint8Array: {
    prototype: Uint8Array;
    new ( length: number ): Uint8Array;
    new ( array: Uint8Array ): Uint8Array;
    new ( array: number[] ): Uint8Array;
    new ( buffer: ArrayBuffer, byteOffset?: number, length?: number ): Uint8Array;
    BYTES_PER_ELEMENT: number;
}

interface Int16Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get( index: number ): number;
    set( index: number, value: number ): void;
    set( array: Int16Array, offset?: number ): void;
    set( array: number[], offset?: number ): void;
    subarray( begin: number, end?: number ): Int16Array;
}
declare var Int16Array: {
    prototype: Int16Array;
    new ( length: number ): Int16Array;
    new ( array: Int16Array ): Int16Array;
    new ( array: number[] ): Int16Array;
    new ( buffer: ArrayBuffer, byteOffset?: number, length?: number ): Int16Array;
    BYTES_PER_ELEMENT: number;
}

interface Uint16Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get( index: number ): number;
    set( index: number, value: number ): void;
    set( array: Uint16Array, offset?: number ): void;
    set( array: number[], offset?: number ): void;
    subarray( begin: number, end?: number ): Uint16Array;
}
declare var Uint16Array: {
    prototype: Uint16Array;
    new ( length: number ): Uint16Array;
    new ( array: Uint16Array ): Uint16Array;
    new ( array: number[] ): Uint16Array;
    new ( buffer: ArrayBuffer, byteOffset?: number, length?: number ): Uint16Array;
    BYTES_PER_ELEMENT: number;
}

interface Int32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get( index: number ): number;
    set( index: number, value: number ): void;
    set( array: Int32Array, offset?: number ): void;
    set( array: number[], offset?: number ): void;
    subarray( begin: number, end?: number ): Int32Array;
}
declare var Int32Array: {
    prototype: Int32Array;
    new ( length: number ): Int32Array;
    new ( array: Int32Array ): Int32Array;
    new ( array: number[] ): Int32Array;
    new ( buffer: ArrayBuffer, byteOffset?: number, length?: number ): Int32Array;
    BYTES_PER_ELEMENT: number;
}

interface Uint32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get( index: number ): number;
    set( index: number, value: number ): void;
    set( array: Uint32Array, offset?: number ): void;
    set( array: number[], offset?: number ): void;
    subarray( begin: number, end?: number ): Uint32Array;
}
declare var Uint32Array: {
    prototype: Uint32Array;
    new ( length: number ): Uint32Array;
    new ( array: Uint32Array ): Uint32Array;
    new ( array: number[] ): Uint32Array;
    new ( buffer: ArrayBuffer, byteOffset?: number, length?: number ): Uint32Array;
    BYTES_PER_ELEMENT: number;
}

interface Float32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get( index: number ): number;
    set( index: number, value: number ): void;
    set( array: Float32Array, offset?: number ): void;
    set( array: number[], offset?: number ): void;
    subarray( begin: number, end?: number ): Float32Array;
}
declare var Float32Array: {
    prototype: Float32Array;
    new ( length: number ): Float32Array;
    new ( array: Float32Array ): Float32Array;
    new ( array: number[] ): Float32Array;
    new ( buffer: ArrayBuffer, byteOffset?: number, length?: number ): Float32Array;
    BYTES_PER_ELEMENT: number;
}

interface Float64Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get( index: number ): number;
    set( index: number, value: number ): void;
    set( array: Float64Array, offset?: number ): void;
    set( array: number[], offset?: number ): void;
    subarray( begin: number, end?: number ): Float64Array;
}
declare var Float64Array: {
    prototype: Float64Array;
    new ( length: number ): Float64Array;
    new ( array: Float64Array ): Float64Array;
    new ( array: number[] ): Float64Array;
    new ( buffer: ArrayBuffer, byteOffset?: number, length?: number ): Float64Array;
    BYTES_PER_ELEMENT: number;
}

interface DataView extends ArrayBufferView {
    getInt8( byteOffset: number ): number;
    getUint8( byteOffset: number ): number;
    getInt16( byteOffset: number, littleEndian?: boolean ): number;
    getUint16( byteOffset: number, littleEndian?: boolean ): number;
    getInt32( byteOffset: number, littleEndian?: boolean ): number;
    getUint32( byteOffset: number, littleEndian?: boolean ): number;
    getFloat32( byteOffset: number, littleEndian?: boolean ): number;
    getFloat64( byteOffset: number, littleEndian?: boolean ): number;

    setInt8( byteOffset: number, value: number ): void;
    setUint8( byteOffset: number, value: number ): void;
    setInt16( byteOffset: number, value: number, littleEndian?: boolean ): void;
    setUint16( byteOffset: number, value: number, littleEndian?: boolean ): void;
    setInt32( byteOffset: number, value: number, littleEndian?: boolean ): void;
    setUint32( byteOffset: number, value: number, littleEndian?: boolean ): void;
    setFloat32( byteOffset: number, value: number, littleEndian?: boolean ): void;
    setFloat64( byteOffset: number, value: number, littleEndian?: boolean ): void;
}
declare var DataView: {
    prototype: DataView;
    new ( buffer: ArrayBuffer, byteOffset?: number, length?: number ): DataView;
}
