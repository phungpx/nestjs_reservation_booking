import { PaymentsService } from './payments.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { PaymentsCreateChargeDto } from './dto/payments-create-charge.dto';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern('create_charge')
  @UsePipes(new ValidationPipe())
  async createCharge(
    @Payload() paymentsCreateChargeDto: PaymentsCreateChargeDto,
  ) {
    const paymentIntent = this.paymentsService.createCharge(
      paymentsCreateChargeDto,
    );
    return paymentIntent;
  }
}
