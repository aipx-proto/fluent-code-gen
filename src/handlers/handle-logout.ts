import { logout } from "../lib/azure";

export function handleLogout(action: string) {
  if (action !== "logout") return;

  logout();
  location.assign(`${import.meta.env.BASE_URL}logout.html`);
}
