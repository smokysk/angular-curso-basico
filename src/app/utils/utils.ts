import { NavigationExtras, Router } from "@angular/router";

export class Utils{
  public static navigate(path: string, router: Router): void {
    const extra: NavigationExtras = {queryParamsHandling: "merge"}
    router.navigate([path], extra).then()
  }
}
