"use server";

// Function to get the current shop status
export async function getShopStatus(): Promise<boolean> {
  try {
    // Use absolute URL in production, relative URL in development
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const response = await fetch(`${baseUrl}/api/shop-status`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch shop status');
    }
    
    const data = await response.json();
    console.log("Fetched shop status:", data.isOpen);
    return data.isOpen;
  } catch (error) {
    console.error("Error fetching shop status:", error);
    // Default to open if there's an error
    return true;
  }
}

// Function to toggle the shop status (admin only)
export async function toggleShopStatus(): Promise<boolean> {
  try {
    const currentStatus = await getShopStatus();
    console.log("Current status before toggle:", currentStatus);

    // Use absolute URL in production, relative URL in development
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const newStatus = !currentStatus;
    console.log("Sending request to update status to:", newStatus);

    const response = await fetch(`${baseUrl}/api/shop-status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isOpen: newStatus }),
      cache: 'no-store'
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error('Failed to update shop status: ${response.status} ${response.statusText}');
    }
    
    const data = await response.json();
    console.log("Toggled shop status to:", data.isOpen);
    return data.isOpen;
  } catch (error) {
    console.error("Error toggling shop status:", error);
    return false;
  }
}