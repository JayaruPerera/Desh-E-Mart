import { currentUser } from "@clerk/nextjs";

// List of admin email addresses
const ADMIN_EMAILS = ["admin@example.com"]; // Replace with your actual admin email

export async function isAdmin() {
  const user = await currentUser();
  
  if (!user) return false;
  
  // Check if the user's primary email is in the admin list
  const userEmail = user.emailAddresses.find(
    email => email.id === user.primaryEmailAddressId
  )?.emailAddress;
  
  return userEmail ? ADMIN_EMAILS.includes(userEmail) : false;
}