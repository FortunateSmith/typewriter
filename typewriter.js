const sentence = 'Do not mistake the finger that points to the moon for the moon itself.\n';
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    
    process.stdout.write(char);
    // delay += 1000;
  }, delay += 50);

}