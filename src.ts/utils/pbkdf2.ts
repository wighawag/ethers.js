'use strict';

import { pbkdf2Sync as _pbkdf2 } from 'crypto';

import { arrayify, Arrayish } from './bytes';

function bufferify(value: Arrayish): Buffer {
    return new Buffer(arrayify(value));
}

export function pbkdf2(password: Arrayish, salt: Arrayish, iterations: number, keylen: number, hashAlgorithm: string): Uint8Array {
    return arrayify(_pbkdf2(bufferify(password), bufferify(salt), iterations, keylen, hashAlgorithm));
}