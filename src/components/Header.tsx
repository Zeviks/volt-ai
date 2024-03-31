import NavBar from "@/components/NavBar";
import { createClient } from "@/prismicio";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <div>
      <NavBar settings={settings} />
    </div>
  );
}

// This is a great example of how to leverage cleint and server components in one.
// Currently we can't use async functions in a client component, so this is a great workaround.

// Structure : Lives in Layout.tsx
// > Header.tsx(Server Component) we fetch our data and pass it to NavBar component
// > NavBar.tsx(Client Component) we used the props passed to us from the parent header to create the actual nav-bar.
