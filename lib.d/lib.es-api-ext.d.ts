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
/// ECMAScript Array API (specially handled by compiler)
/////////////////////////////

interface Array<T> {
    toString(): string;
    toLocaleString(): string;
    concat<U extends T[]>( ...items: U[] ): T[];
    concat( ...items: T[] ): T[];
    join( separator?: string ): string;
    pop(): T;
    push( ...items: T[] ): number;
    reverse(): T[];
    shift(): T;
    slice( start: number, end?: number ): T[];
    sort( compareFn?: ( a: T, b: T ) => number ): T[];
    splice( start: number ): T[];
    splice( start: number, deleteCount: number, ...items: T[] ): T[];
    unshift( ...items: T[] ): number;

    indexOf( searchElement: T, fromIndex?: number ): number;
    lastIndexOf( searchElement: T, fromIndex?: number ): number;
    every( callbackfn: ( value: T, index: number, array: T[] ) => boolean, thisArg?: any ): boolean;
    some( callbackfn: ( value: T, index: number, array: T[] ) => boolean, thisArg?: any ): boolean;
    //forEach( callbackfn: ( value: T, index: number, array: T[] ) => void, thisArg?: any ): void;
    map<U>( callbackfn: ( value: T, index: number, array: T[] ) => U, thisArg?: any ): U[];
    filter( callbackfn: ( value: T, index: number, array: T[] ) => boolean, thisArg?: any ): T[];
    reduce( callbackfn: ( previousValue: T, currentValue: T, currentIndex: number, array: T[] ) => T, initialValue?: T ): T;
    reduce<U>( callbackfn: ( previousValue: U, currentValue: T, currentIndex: number, array: T[] ) => U, initialValue: U ): U;
    reduceRight( callbackfn: ( previousValue: T, currentValue: T, currentIndex: number, array: T[] ) => T, initialValue?: T ): T;
    reduceRight<U>( callbackfn: ( previousValue: U, currentValue: T, currentIndex: number, array: T[] ) => U, initialValue: U ): U;

    length: number;

    [n: number]: T;
}
declare var Array: {
    new <T>( arrayLength: number ): T[];
    new <T>( ...items: T[] ): T[];
    <T>( arrayLength: number ): T[];
    <T>( ...items: T[] ): T[];
    isArray( arg: any ): boolean;
    prototype: Array<any>;
}
