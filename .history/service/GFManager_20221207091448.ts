import {GirlFriend} from '../model/GirlFriend';

export class GfManager {
    listGirlFriend: GirlFriend[] = [];

    showALl(): GirlFriend[] {
        return this.listGirlFriend;
    }

    findByNameContaining(name: string) {
        let arr: GirlFriend[] = [];
        for (let i of this.listGirlFriend) {
            if (i.name. === name) {)
        }
    }
}