import { Injectable, Inject } from '@nestjs/common';
import { WorkflowHandle } from '@temporalio/client';
import { getExchangeRatesQuery } from '@app/shared';

@Injectable()
export class ExchangeRatesService {
  constructor(
    @Inject('EXCHANGE_RATES_WORKFLOW') private handle: WorkflowHandle,
  ) {}

  async getExchangeRates(): Promise<any> {
    return this.handle.query(getExchangeRatesQuery);
  }
}