//The file has been added to create some utility method
export function generateId(prefix = "id") {
  return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
}
export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
