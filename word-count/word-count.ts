class Words {
  count(words: string): Map<string, number> {
    return words
      .split(/\s+/)
      .filter((word) => word.length !== 0)
      .reduce((counts: Map<string, number>, word: string) => {
        const key = word.toLowerCase();
        const count = counts.get(key) || 0;
        counts.set(key, count + 1);
        return counts;
      }, new Map());
  }
}
// one fish two fish red fish blue fish
// ["one", "fish", "two", "fish", "red", "fish", "blue", "fish"]
export default Words;
