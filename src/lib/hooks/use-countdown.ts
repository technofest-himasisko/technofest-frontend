import { Ref, useState } from "react";

function useCountdown(date: Date) {
  const [countdownString, setCountdownString] = useState<string>("0D0H0M0S");

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = date.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    setCountdownString(
      days + "D " + hours + "H " + minutes + "M " + seconds + "S",
    );

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      setCountdownString("0D0H0M0S");
    }
  }, 1000);

  return { countdownString };
}

export default useCountdown;
