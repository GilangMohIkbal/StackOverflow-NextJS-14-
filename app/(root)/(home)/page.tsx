import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="h1-bold">Nextjs 14 we&apos;re coming !!</h1>

      <UserButton />
    </div>
  );
}
