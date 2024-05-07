import { Module } from '@nestjs/common';
import { GatewayGateway } from './gateway.gateway';

@Module({
    imports: [],
    controllers: [],
    providers: [GatewayGateway],
})
export class GatewayModule {}
