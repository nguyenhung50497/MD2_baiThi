class girlFriend {
    id: number;
    name: string;
    zodiac: string;
    homeTown: string;
    year: number;
    hobby: string;

    constructor(id: number, name: string, zodiac: string, homeTown: string, year: number, hobby: string) {
        this.id = id;
        this.name = name;
        this.zodiac = zodiac;
        this.homeTown = homeTown;
        this.year = year;
        this.hobby = hobby;
    }

    getId(): number { return this.id; }
    getName(): string { return this.name; }
    getZodiac(): string { return this.zodiac; }
    getHomeTown(): string { return this.homeTown; }
    getYear(): number { return this.year; }
    getHobby(): string { return this.hobby; }

    setId(id: number): void {
        this.id = id;
    }
    setName(name: string): void {
        this.name = name;
    }
    setHomeTown(homeTown: string): void {
        this.homeTown = homeTown;
    }
    setHobby(hobby: string): void {
        this.hobby = name;
    }
}