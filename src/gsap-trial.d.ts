declare module "gsap-trial/ScrollSmoother" {
  import { ScrollSmoother as SS } from "gsap/ScrollSmoother";
  export { SS as ScrollSmoother };
  export default SS;
}

declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | string[] | Element | Element[] | NodeList | null, vars?: any);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
    split(vars?: any): void;
    static create(target: string | string[] | Element | Element[] | NodeList | null, vars?: any): SplitText;
  }
  export default SplitText;
}
