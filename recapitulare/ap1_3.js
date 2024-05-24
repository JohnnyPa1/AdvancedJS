class MathUtil {
    static sum(...numbers) {
       let total = 0;
    //   for (let i = 0; i < numbers.length; i++) {
    //     total += parseInt(numbers[i]);
    //   }
      for (const number of numbers) {
        total += parseInt(number);
      }
      return total;
    }
  }
  
  const result = MathUtil.sum(1, 2, 3, 1, 1, 1, 1, 1);
  console.info(result);