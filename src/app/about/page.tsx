import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <Link href={"/"}>
        <button>Root</button>
      </Link>
    </>
  );
}
