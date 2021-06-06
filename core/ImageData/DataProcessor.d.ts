/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { IStateProcessor, IDataProcessor, ILogger, ICommunicator } from '../Interfaces';
import { StateProcessorFactory } from '../StateProcessorFactory';
import { Desktop } from '../Desktop';
/**
 * DataProcessor provides the functionality for processing different states of RFB leveraging
 * the different StateProcessors
 */
export declare class DataProcessor implements IDataProcessor {
    acc: string;
    remoteFrameBufferStateManager: IStateProcessor;
    stateProcessorFac: StateProcessorFactory;
    parent: Desktop;
    logger: ILogger;
    constructor(logger: ILogger, comm: ICommunicator, parent: Desktop);
    /**
     * processData is called from ICommunicator on new data coming over the wire
     * @param data is the current data block received on the web socket
     */
    processData(data: string): any;
    updateRFBState(state: number): void;
}
