import { NotifyEmailDto } from '@app/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotificationsService } from './notifications.service';
import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @UsePipes(new ValidationPipe()) // validate data based on dto
  @EventPattern('notify_email')
  async notifyEmail(@Payload() notifyEmailDto: NotifyEmailDto) {
    console.log(
      `Email: ${notifyEmailDto.email} - Text: ${notifyEmailDto.text}`,
    );
    this.notificationsService.notifyEmail(notifyEmailDto);
  }
}
