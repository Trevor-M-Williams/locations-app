"use server";
import fs from "fs";
import { db } from "@/server/db";
import { locations } from "@/server/db/schema";
import { revalidatePath } from "next/cache";

export async function getLocations() {
  return await db.select().from(locations);
}

export async function addLocation(location: MapsLocation) {
  try {
    const data = {
      name: "Test",
      ...location,
    };
    await db.insert(locations).values(data);
    revalidatePath("/dashboard");
    return { success: true };
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
    return { error: "Failed to add location" };
  }
}
