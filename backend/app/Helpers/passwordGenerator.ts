export default function generatePassword(name: string): string {
  const names = name.split(' ');
  const firstName = names[0];
  const lastName = names[names.length - 1];
  return `${firstName.toLowerCase()}@${lastName.toLowerCase()}`;
}
