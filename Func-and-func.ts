// Function parameters

export function PrintFile(text: string, callback: ()=> void ): void {
    console.log(text);
    callback();
};


export function Mutate(number: number[], mutate: (v: number) => number) : number[]{
    return number.map(mutate)
}