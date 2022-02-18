const sentence = 'Do not mistake the finger that points to the moon for the moon itself.';
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    
    process.stdout.write(char);
    // delay += 1000;
  }, delay += 50);

}

setTimeout(() => {
  process.stdout.write("\n");
}, delay);