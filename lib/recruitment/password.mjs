export async function changePassword(client, user, values) {
  const { currentPassword, newPassword, confirmPassword } = values;
  if (!currentPassword) throw new Error("Enter your current password.");
  if (typeof newPassword !== "string" || newPassword.length < 12) throw new Error("Use at least 12 characters for the new password.");
  if (newPassword !== confirmPassword) throw new Error("New passwords do not match.");
  if (newPassword === currentPassword) throw new Error("Choose a different new password.");
  const { data, error } = await client.auth.signInWithPassword({ email: user.email, password: currentPassword });
  if (error) throw new Error("Current password could not be verified. Check it and try again.");
  if (data.user?.id !== user.id) throw new Error("Account verification failed. Please sign in again.");
  const result = await client.auth.updateUser({ password: newPassword });
  if (result.error) throw result.error;
}
