import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ReservationSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  party_size: z.number().int().min(1).max(20),
  reservation_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  reservation_time: z.string().regex(/^\d{2}:\d{2}$/),
  special_requests: z.string().trim().max(500).optional().or(z.literal("")),
});

export const createReservation = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ReservationSchema.parse(input))
  .handler(async ({ data }) => {
    // Disallow past dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const reqDate = new Date(data.reservation_date);
    if (reqDate < today) {
      return { ok: false as const, error: "Please pick a future date." };
    }

    const { error } = await supabaseAdmin.from("reservations").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      party_size: data.party_size,
      reservation_date: data.reservation_date,
      reservation_time: data.reservation_time,
      special_requests: data.special_requests || null,
    });

    if (error) {
      console.error("Reservation insert failed:", error);
      return { ok: false as const, error: "Could not save reservation. Please try again." };
    }
    return { ok: true as const };
  });
