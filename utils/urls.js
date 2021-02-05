export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const MAGIC_PUBIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBIC_KEY || "pk_test_8D425C948BEB00D9";

export const STRIPE_PK =
  process.env.NEXT_PUBLIC_STRIPE_PK ||
  "pk_test_51IDrppCTMG1RzMTfBg71ZS2EOLgiR41PwrnrOBcwkufEM42QVjNa6hc89W1zTl9gYV8XR2WkiqjgjJafeFSmeJ0H00IuHRM9zM";

/**
 * Given an image return the Url
 * Works for local and deployed strapis
 * @param {any} image
 */

export const fromImageToUrl = (image) => {
  if (!image) {
    return "/vercel.svg";
  }

  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
