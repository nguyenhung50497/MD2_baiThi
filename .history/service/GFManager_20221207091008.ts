import {GirlFriend} from '../model/GirlFriend';

export class GfManager {
    listGirlFriend: GirlFriend[] = [];

    showALl(): GirlFriend[] {
        return this.listGirlFriend;
    }
}