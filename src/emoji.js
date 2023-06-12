function chooseRandomEmoji () {
    const emojis = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    return randomEmoji;
  }
  
  export { chooseRandomEmoji }