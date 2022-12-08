export class GirlFriend {
    id: number;
    name: string;
    zodiac: string;
    homeTown: string;
    yearBirth: number;
    hobby: string;

    constructor(id: number, name: string, zodiac: string, homeTown: string, yearBirth: number, hobby: string) {
        this.id = id;
        this.name = name;
        this.zodiac = zodiac;
        this.homeTown = homeTown;
        this.yearBirth = yearBirth;
        this.hobby = hobby;
    }

    getId(): number { 
        return this.id; 
    }
    getName(): string { 
        return this.name; 
    }
    getZodiac(): string { 
        return this.zodiac; 
    }
    getHomeTown(): string { 
        return this.homeTown; 
    }
    getYearBirth(): number { 
        return this.yearBirth; 
    }
    getHobby(): string { 
        return this.hobby; 
    }

    setId(id: number): void {
        this.id = id;
    }
    setName(name: string): void {
        this.name = name;
    }
    setHomeTown(homeTown: string): void {
        this.homeTown = homeTown;
    }
    setYear(year: number): void {
        this.yearBirth = year;
    }
    setHobby(hobby: string): void {
        this.hobby = hobby;
    }

    toString(): string {
        return `ID: ${this.id} - Tên: ${this.name} - Cung HĐ: ${this.zodiac} - Quê: ${this.homeTown} - Năm sinh: ${this.year} - Sở thích: ${this.hobby}`
    }
}