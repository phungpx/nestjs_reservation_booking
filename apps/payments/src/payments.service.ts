// import Stripe from 'stripe';
// import { ConfigService } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';
import { NOTIFICATIONS_SERVICE, NotifyEmailDto } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';
import { PaymentsCreateChargeDto } from './dto/payments-create-charge.dto';

@Injectable()
export class PaymentsService {
  // // https://www.npmjs.com/package/stripe
  // private readonly stripe = new Stripe(
  //   this.configService.get('STRIPE_SECRET_KEY'),
  //   {
  //     apiVersion: '2022-11-15',
  //   },
  // );

  constructor(
    // private readonly configService: ConfigService,
    @Inject(NOTIFICATIONS_SERVICE)
    private readonly notificationsService: ClientProxy,
  ) {}

  async createCharge({ email, card, amount }: PaymentsCreateChargeDto) {
    // const paymentMethod = await this.stripe.paymentMethods.create({
    //   type: 'card',
    //   card,
    // });

    // const paymentIntent = await this.stripe.paymentIntents.create({
    //   payment_method: paymentMethod.id,
    //   amount: amount * 100,
    //   confirm: true,
    //   payment_method_types: ['card'],
    //   currency: 'usd',
    // });

    // emit pattern (String) and payload (NotifyEmailDto)
    const eventPattern = 'notify_email';
    const eventPayload: NotifyEmailDto = {
      email,
      text: `Your payment of $${amount} has completed successfully.`,
    };
    this.notificationsService.emit(eventPattern, eventPayload);

    // return paymentIntent;
    return { id: 'this-is-your-tempeting-payment-id', card, amount }; // for testing purpose, I cannot send request to Stripe API
  }
}
