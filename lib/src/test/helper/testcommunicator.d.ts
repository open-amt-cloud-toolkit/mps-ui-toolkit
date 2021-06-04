/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { ICommunicator } from '../../core/Interfaces/ICommunicator';
declare class Communicator implements ICommunicator {
    static sentData: string;
    onProcessData(data: string): void;
    onStart(): void;
    onError(): void;
    onNewState(state: number): void;
    onStateChanged(redirector: any, state: number): void;
    onSocketData(data: string): void;
    start<T>(c: new (path: string, options: any) => T): void;
    socketSend(data: string): void;
    send(data: string): void;
    stop(): void;
}
export { Communicator };
