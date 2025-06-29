import { UserProvider } from "@/components/UserProvider/UserProvider";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ul>
            <li>
              <Link href="/notes">Notes</Link>
            </li>
            <li>
              <Link href="/user">User</Link>
            </li>
            <li>
              <Link href="/subscription">Subscription</Link>
            </li>
          </ul>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
