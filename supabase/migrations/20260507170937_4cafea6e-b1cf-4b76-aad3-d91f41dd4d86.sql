
-- 1) Lock down user_roles: deny all direct writes from anon/authenticated
CREATE POLICY "Deny direct inserts on user_roles"
ON public.user_roles AS RESTRICTIVE
FOR INSERT TO anon, authenticated
WITH CHECK (false);

CREATE POLICY "Deny direct updates on user_roles"
ON public.user_roles AS RESTRICTIVE
FOR UPDATE TO anon, authenticated
USING (false) WITH CHECK (false);

CREATE POLICY "Deny direct deletes on user_roles"
ON public.user_roles AS RESTRICTIVE
FOR DELETE TO anon, authenticated
USING (false);

-- 2) Restrict EXECUTE on the SECURITY DEFINER has_role function
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;

-- 3) Tighten the reservations INSERT policy so empty/garbage rows are rejected
DROP POLICY IF EXISTS "Anyone can create reservations" ON public.reservations;

CREATE POLICY "Anyone can create valid reservations"
ON public.reservations
FOR INSERT TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 2 AND 100
  AND length(btrim(email)) BETWEEN 3 AND 255
  AND email LIKE '%_@_%.__%'
  AND length(btrim(phone)) BETWEEN 7 AND 30
  AND party_size BETWEEN 1 AND 50
  AND reservation_date >= CURRENT_DATE
  AND (special_requests IS NULL OR length(special_requests) <= 1000)
  AND status = 'pending'
);
