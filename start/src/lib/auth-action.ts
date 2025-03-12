"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function checkAdminAccess() {
  const user = await currentUser();
  
  if (!user) {
    redirect("/sign-in");
  }
  
  const isAdmin = user.publicMetadata?.role === "admin";
  
  if (!isAdmin) {
    redirect("/");
  }
  
  return true;
}

export async function isUserAdmin() {
  const user = await currentUser();
  
  if (!user) return false;
  
  return user.publicMetadata?.role === "admin";
}