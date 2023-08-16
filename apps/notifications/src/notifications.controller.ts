import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotifyEmailDto } from './dto/notify-email.dto';
import { NotificationsService } from './notifications.service';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @UsePipes(new ValidationPipe()) // validate data based on dto
  @EventPattern('notify_email')
  async notifyEmail(@Payload() data: NotifyEmailDto) {
    console.log(this.notificationsService.notifyEmail(data));
  }
}
