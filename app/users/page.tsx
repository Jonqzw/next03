import { Metadata } from "next";
import getAllUseres from "@/lib/getAllUseres";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Users'
}

import React from 'react'

export default async function UsersPage() {
    const userData: Promise<User[]> = getAllUseres();

    const users = await userData;
  return (
    <div>page</div>
  )
}
