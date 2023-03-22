import { IFile } from 'src/interfaces/IFile';
import { UploadService } from './upload.service';

export class AwsUploadService implements UploadService {
    
    constructor() {
        // setup aws config
    }

    async uploadFile(file: IFile): Promise<string> {
        return null;
    }
}
