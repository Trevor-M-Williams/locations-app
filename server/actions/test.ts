"use server";
import fs from "fs";
import { db } from "@/server/db";
import { locations } from "@/server/db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function getLocations() {
  return await db.select().from(locations).orderBy(locations.name);
}

export async function addLocation(location: MapsLocation) {
  try {
    await db.insert(locations).values(location);
    revalidatePath("/dashboard");
    return { success: true };
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
    return { error: "Failed to add location" };
  }
}

export async function updateLocation(location: MapsLocationWithId) {
  try {
    await db
      .update(locations)
      .set(location)
      .where(eq(locations.id, location.id));
    revalidatePath("/dashboard");
    return { success: true };
  } catch (e) {
    return { error: "Failed to update location" };
  }
}

export async function deleteLocation(id: number) {
  try {
    await db.delete(locations).where(eq(locations.id, id));
    revalidatePath("/dashboard");
    return { success: true };
  } catch (e) {
    return { error: "Failed to delete location" };
  }
}
