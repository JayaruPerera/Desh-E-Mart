"use server";

// Function to get the current shop status
export async function getShopStatus(): Promise<boolean> {
  try {
    // For server components, we'll use a simple file-based approach
    // In a real app, you'd use a database
    const fs = require('fs');
    const path = require('path');
    
    const statusFilePath = path.join(process.cwd(), 'shop-status.json');
    
    // Check if the file exists
    if (!fs.existsSync(statusFilePath)) {
      // Create the file with default status (open)
      fs.writeFileSync(statusFilePath, JSON.stringify({ isOpen: true }));
      return true;
    }
    
    // Read the status from the file
    const statusData = fs.readFileSync(statusFilePath, 'utf8');
    const { isOpen } = JSON.parse(statusData);
    
    return isOpen;
  } catch (error) {
    console.error("Error fetching shop status:", error);
    // Default to open if there's an error
    return true;
  }
}

// Function to toggle the shop status (admin only)
export async function toggleShopStatus(): Promise<boolean> {
  try {
    const fs = require('fs');
    const path = require('path');
    
    const statusFilePath = path.join(process.cwd(), 'shop-status.json');
    
    // Get current status
    const currentStatus = await getShopStatus();
    const newStatus = !currentStatus;
    
    // Write the new status to the file
    fs.writeFileSync(statusFilePath, JSON.stringify({ isOpen: newStatus }));
    
    return newStatus;
  } catch (error) {
    console.error("Error toggling shop status:", error);
    return false;
  }
}