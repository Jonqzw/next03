import { Metadata } from "next";
import getAllUseres from "@/lib/getAllUseres";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

import React from "react";

export default async function UsersPage() {
  const userData: Promise<User[]> = getAllUseres();

  const users = await userData;

  console.log('Hello')

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={"/users/${user.id"}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
}
