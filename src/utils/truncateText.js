export default function truncateText(text, wordLimit) {
    let words = text.split(' ');
    if (words.length > wordLimit) { 
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
}