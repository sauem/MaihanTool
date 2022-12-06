import {makeObservable, observable} from "mobx";
import {Role} from "../common/constants/Role";

export class BaseService {
    @observable userRole: Role | undefined;

    constructor() {
        makeObservable(this);
    }
}
