// @ts-check
import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  ADMIN_USERNMAE: z.string(),
  ADMIN_PASSWORD: z.string(),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  // NEXT_PUBLIC_BAR: z.string(),
  NEXT_PUBLIC_TWITTER_LINK: z.string(),
  NEXT_PUBLIC_YOUTUBE_LINK: z.string(),
  NEXT_PUBLIC_HIGHLIGHT_VIDEO_LINK: z.string(),
  NEXT_PUBLIC_RESUME_LINK: z.string(),
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
  // NEXT_PUBLIC_BAR: process.env.NEXT_PUBLIC_BAR,
  NEXT_PUBLIC_TWITTER_LINK: process.env.NEXT_PUBLIC_TWITTER_LINK,
  NEXT_PUBLIC_YOUTUBE_LINK: process.env.NEXT_PUBLIC_YOUTUBE_LINK,
  NEXT_PUBLIC_HIGHLIGHT_VIDEO_LINK:
    process.env.NEXT_PUBLIC_HIGHLIGHT_VIDEO_LINK,
  NEXT_PUBLIC_RESUME_LINK: process.env.NEXT_PUBLIC_RESUME_LINK,
};
