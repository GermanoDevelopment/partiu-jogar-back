import { Module } from '@nestjs/common';
import { AwsUploadService } from './aws-upload.service';
import { UploadService } from './upload.service';

const providers = [
    {
        provide: UploadService,
        useClass: AwsUploadService
    },
];

@Module({
    providers,
    exports: [ ...providers ],
})
export class UploadModule {}
