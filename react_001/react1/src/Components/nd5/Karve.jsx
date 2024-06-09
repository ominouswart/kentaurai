export default function KarveId() {
    const numbers = Array.from({ length: 6 }, _ => Math.floor(Math.random() * 10)).join('');
    return { id: `K${numbers}`, type: 'karve' };
}