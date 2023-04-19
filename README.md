# Accounting hash

[![Test](https://github.com/nexys-admin/accounting-hash/actions/workflows/test.yml/badge.svg)](https://github.com/nexys-admin/accounting-hash/actions/workflows/test.yml)
[![Publish](https://github.com/nexys-admin/accounting-hash/actions/workflows/publish.yml/badge.svg)](https://github.com/nexys-admin/accounting-hash/actions/workflows/publish.yml)
[![NPM package](https://badge.fury.io/js/%40nexys%2Faccounting-hash.svg)](https://www.npmjs.com/package/@nexys/accounting-hash)
[![NPM package](https://img.shields.io/npm/v/@nexys/accounting-hash.svg)](https://www.npmjs.com/package/@nexys/accounting-hash)
[![Bundleophobia](https://badgen.net/bundlephobia/min/@nexys/accounting-hash)](https://bundlephobia.com/result?p=@nexys/accounting-hash)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

Generates a unique hash for a set of transactions. Typically used when locking a set of transactions so the hash can be associated with the event.

## Get Started

```
import * as AccountingHash from '@nexys/accounting-hash'

const entries = []

AccountingHash.entriesToHash(entries)
```
