export default function isStrongPassword(password: string) {
  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }
  // Check for at least one digit
  if (!/[0-9]/.test(password)) {
    return false;
  }
  // Check for at least one special character
  if (!/[!@#$%^&-_]/.test(password)) {
    return false;
  }
  // Check for minimum length requirement (you can adjust this as needed)
  if (password.length < 8) {
    return false;
  }
  return true;
};