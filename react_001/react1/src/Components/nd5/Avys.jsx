export default function AvisId() {
    const numbers = Array.from({ length: 6 }, _ => Math.floor(Math.random() * 10)).join('');
    return `A${numbers}`;
}