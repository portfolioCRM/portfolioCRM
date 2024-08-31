import { auth } from "../service/auth/auth";

/**
 * Checks if a user is connected by verifying the authentication session.
 *
 * @async
 * @function isUserConnected
 * @returns {Promise<boolean>} A promise that resolves to a boolean indicating whether the user is connected.
 * @throws {Error} Throws an error if the authentication service fails.
 */
export async function isUserConnected(): Promise<boolean> {
  const session = await auth();
  return Boolean(session?.user);
}
