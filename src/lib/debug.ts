import { tap } from "rxjs";

export function debugTap(name: string) {
  return tap((value) => console.log(name, value));
}
