import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import ShopStatus from "@/models/ShopStatus";

export async function GET() {
  try {
    await dbConnect();
    
    // Find the status document - there should only be one
    let status = await ShopStatus.findOne({});
    
    // If no status exists yet, create one with default open
    if (!status) {
      status = await ShopStatus.create({ isOpen: true });
    }
    
    console.log("GET shop status:", status.isOpen); // Debug log
    return NextResponse.json({ isOpen: status.isOpen });
  } catch (error) {
    console.error("Error in GET shop status:", error);
    return NextResponse.json({ error: "Failed to fetch shop status" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { isOpen } = await request.json();
    
    console.log("Updating shop status to:", isOpen); // Debug log
    
    // Find the status document
    let status = await ShopStatus.findOne({});
    console.log("Current status in database:", status ? status.isOpen : "not found");
    
    if (status) {
      // Update existing status
      status.isOpen = isOpen;
      status.lastUpdated = new Date();
      await status.save();
      console.log("Successfully updated status to:", isOpen);
    } else {
      // Create new status if none exists
      status = await ShopStatus.create({ 
        isOpen,
        lastUpdated: new Date()
      });
      console.log("Created new status with value:", isOpen);
    }
    
    return NextResponse.json({ isOpen: status.isOpen });
  } catch (error) {
    console.error("Error in POST shop status:", error);
    return NextResponse.json({ error: "Failed to update shop status" }, { status: 500 });
  }
}