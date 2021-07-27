import hello from '../source/hello';

describe("hello", () => {
    describe("when the greeted name is provided", () => {
        it("greets the provided greeted name", () => {
            const greetedName: string = "TJ";
            const greeting = hello(greetedName);
            
            expect(greeting).toEqual(`Hello, ${greetedName}!`);
        });
    });

    describe("when the greeted name is NOT provided", () => {
        it("greets the world", () => {
            const greeting = hello();

            expect(greeting).toEqual("Hello, World!")
        });
    });
});