/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const helpCmd = require('../../lib/cmds/help');
const messages = require('../../lib/cmds/helpMessages.js');
const MockLogger = require('../helpers/MockLogger');

describe('Version', () => {
  const mockLogger = new MockLogger();

  afterEach(() => {
    mockLogger.clear();
  });

  it('prints the generic help', (done) => {
    const args = {
      _: ['help'],
    };
    helpCmd(args, mockLogger)
        .then(() => {
          const output = mockLogger.getLogs();
          expect(output).toBe(messages['main']);
          done();
        })
        .catch((e) => done.fail(e));
  });

  it('prints the generic help, if unknown command', (done) => {
    const args = {
      _: ['help', 'unknown'],
    };
    helpCmd(args, mockLogger)
        .then(() => {
          const output = mockLogger.getLogs();
          expect(output).toBe(messages['main']);
          done();
        })
        .catch((e) => done.fail(e));
  });

  it('prints help for "update-cache"', (done) => {
    const args = {
      _: ['help', 'update-cache'],
    };
    helpCmd(args, mockLogger)
        .then(() => {
          const output = mockLogger.getLogs();
          expect(output).toBe(messages['update-cache']);
          done();
        })
        .catch((e) => done.fail(e));
  });
});
