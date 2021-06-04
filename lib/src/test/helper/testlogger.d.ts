/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { ILogger } from '../../core';
declare class TestLogger implements ILogger {
    static verboseData: string;
    debug(log: string): void;
    info(log: string): void;
    error(log: string): void;
    warn(log: string): void;
    verbose(log: string): void;
}
export { TestLogger };
