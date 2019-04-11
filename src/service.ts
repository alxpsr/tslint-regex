// tslint:disable-next-line: quotemark
import { Subject } from 'rxjs';

export class SecondaryService {
    public State: Subject<boolean> = new Subject();
}
