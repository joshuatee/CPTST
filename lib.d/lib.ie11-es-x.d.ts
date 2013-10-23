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
/// IE11 ECMAScript Extensions
/////////////////////////////

interface Map<K, V> {
    clear(): void;
    delete( key: K ): boolean;
    forEach( callbackfn: ( value: V, index: K, map: Map<K, V> ) => void, thisArg?: any ): void;
    get( key: K ): V;
    has( key: K ): boolean;
    set( key: K, value: V ): Map<K, V>;
    size: number;
}
declare var Map: {
    new <K, V>(): Map<K, V>;
}

interface WeakMap<K, V> {
    clear(): void;
    delete( key: K ): boolean;
    get( key: K ): V;
    has( key: K ): boolean;
    set( key: K, value: V ): WeakMap<K, V>;
}
declare var WeakMap: {
    new <K, V>(): WeakMap<K, V>;
}

interface Set<T> {
    add( value: T ): Set<T>;
    clear(): void;
    delete( value: T ): boolean;
    forEach( callbackfn: ( value: T, index: T, set: Set<T> ) => void, thisArg?: any ): void;
    has( value: T ): boolean;
    size: number;
}
declare var Set: {
    new <T>(): Set<T>;
}

declare module Intl {

    interface CollatorOptions {
        usage?: string;
        localeMatcher?: string;
        numeric?: boolean;
        caseFirst?: string;
        sensitivity?: string;
        ignorePunctuation?: boolean;
    }

    interface ResolvedCollatorOptions {
        locale: string;
        usage: string;
        sensitivity: string;
        ignorePunctuation: boolean;
        collation: string;
        caseFirst: string;
        numeric: boolean;
    }

    interface Collator {
        compare( x: string, y: string ): number;
        resolvedOptions(): ResolvedCollatorOptions;
    }
    var Collator: {
        new ( locales?: string[], options?: CollatorOptions ): Collator;
        new ( locale?: string, options?: CollatorOptions ): Collator;
        ( locales?: string[], options?: CollatorOptions ): Collator;
        ( locale?: string, options?: CollatorOptions ): Collator;
        supportedLocalesOf( locales: string[], options?: CollatorOptions ): string[];
        supportedLocalesOf( locale: string, options?: CollatorOptions ): string[];
    }

    interface NumberFormatOptions {
        localeMatcher?: string;
        style?: string;
        currency?: string;
        currencyDisplay?: string;
        useGrouping?: boolean;
    }

    interface ResolvedNumberFormatOptions {
        locale: string;
        numberingSystem: string;
        style: string;
        currency?: string;
        currencyDisplay?: string;
        minimumintegerDigits: number;
        minimumFractionDigits: number;
        maximumFractionDigits: number;
        minimumSignificantDigits?: number;
        maximumSignificantDigits?: number;
        useGrouping: boolean;
    }

    interface NumberFormat {
        format( value: number ): string;
        resolvedOptions(): ResolvedNumberFormatOptions;
    }
    var NumberFormat: {
        new ( locales?: string[], options?: NumberFormatOptions ): Collator;
        new ( locale?: string, options?: NumberFormatOptions ): Collator;
        ( locales?: string[], options?: NumberFormatOptions ): Collator;
        ( locale?: string, options?: NumberFormatOptions ): Collator;
        supportedLocalesOf( locales: string[], options?: NumberFormatOptions ): string[];
        supportedLocalesOf( locale: string, options?: NumberFormatOptions ): string[];
    }

    interface DateTimeFormatOptions {
        localeMatcher?: string;
        weekday?: string;
        era?: string;
        year?: string;
        month?: string;
        day?: string;
        hour?: string;
        minute?: string;
        second?: string;
        timeZoneName?: string;
        formatMatcher?: string;
        hour12: boolean;
    }

    interface ResolvedDateTimeFormatOptions {
        locale: string;
        calendar: string;
        numberingSystem: string;
        timeZone: string;
        hour12?: boolean;
        weekday?: string;
        era?: string;
        year?: string;
        month?: string;
        day?: string;
        hour?: string;
        minute?: string;
        second?: string;
        timeZoneName?: string;
    }

    interface DateTimeFormat {
        format( date: number ): string;
        resolvedOptions(): ResolvedDateTimeFormatOptions;
    }
    var DateTimeFormat: {
        new ( locales?: string[], options?: DateTimeFormatOptions ): Collator;
        new ( locale?: string, options?: DateTimeFormatOptions ): Collator;
        ( locales?: string[], options?: DateTimeFormatOptions ): Collator;
        ( locale?: string, options?: DateTimeFormatOptions ): Collator;
        supportedLocalesOf( locales: string[], options?: DateTimeFormatOptions ): string[];
        supportedLocalesOf( locale: string, options?: DateTimeFormatOptions ): string[];
    }
}

interface String {
    localeCompare( that: string, locales: string[], options?: Intl.CollatorOptions ): number;
    localeCompare( that: string, locale: string, options?: Intl.CollatorOptions ): number;
}

interface Numer {
    toLocaleString( locales: string[], options?: Intl.NumberFormatOptions ): string;
    toLocaleString( locale: string, options?: Intl.NumberFormatOptions ): string;
}

interface Date {
    toLocaleString( locales: string[], options?: Intl.DateTimeFormatOptions ): string;
    toLocaleString( locale: string, options?: Intl.DateTimeFormatOptions ): string;
}

