import { currentUser } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";

// Function to check if the current user is an admin
export async function isAdmin() {
  // Get the current authenticated user
  const user = await currentUser();
  
  if (!user) return false;
  
  // Check if the user has the admin role in public metadata
  return user.publicMetadata?.role === "admin";
}

// Function to check if a specific user ID is an admin
export async function isUserAdmin(userId: string | null) {
  if (!userId) return false;
  
  try {
    // Use clerkClient to get user by ID
    const user = await currentUser();
    
    if (!user || user.id !== userId) return false;
    
    // Check if the user has the admin role in public metadata
    return user.publicMetadata?.role === "admin";
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
}