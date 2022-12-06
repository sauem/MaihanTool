import {action, observable} from "mobx";

class CommonStore {
    @observable title = "Giám sát hành trình - Asia";

    @action
    public async setTitle(title: string) {
        this.title = title;
    }
}

export const common = new CommonStore();
