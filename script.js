document.addEventListener("DOMContentLoaded", function () {
  // Donation amount buttons
  const amountButtons = document.querySelectorAll(
    ".grid.grid-cols-3.gap-3.mb-4 button",
  );
  const amountInput = document.querySelector(".donation-amount input");

  amountButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      amountButtons.forEach((btn) => {
        btn.classList.remove("bg-primary", "text-white");
        btn.classList.add("bg-orange-50", "text-gray-800");
      });

      // Add active class to clicked button
      if (this.innerText !== "Custom") {
        this.classList.remove("bg-orange-50", "text-gray-800");
        this.classList.add("bg-primary", "text-white");
        amountInput.value = this.innerText.replace("₹", "").replace(",", "");
      } else {
        this.classList.remove("bg-orange-50", "text-gray-800");
        this.classList.add("bg-primary", "text-white");
        amountInput.value = "";
        amountInput.focus();
      }
    });
  });

  // Payment method selection
  const paymentMethods = document.querySelectorAll(
    ".grid.grid-cols-3.gap-3.mb-4 > div",
  );

  paymentMethods.forEach((method) => {
    method.addEventListener("click", function () {
      // Remove active class from all methods
      paymentMethods.forEach((m) => {
        m.classList.remove("border-primary", "bg-orange-50");
        m.classList.add("border-gray-300");
      });

      // Add active class to clicked method
      this.classList.remove("border-gray-300");
      this.classList.add("border-primary", "bg-orange-50");
    });
  });
});

tailwind.config = {
    theme: {
      extend: {
        colors: { primary: "#FF7722", secondary: "#FFC107" },
        borderRadius: {
          none: "0px",
          sm: "4px",
          DEFAULT: "8px",
          md: "12px",
          lg: "16px",
          xl: "20px",
          "2xl": "24px",
          "3xl": "32px",
          full: "9999px",
          button: "8px",
        },
      },
    },
  };

  let currentIndex = 0;
const row1 = document.querySelectorAll('.carousel-row')[0];
const row2 = document.querySelectorAll('.carousel-row')[1];

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex < 4) currentIndex += 4;
  updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) currentIndex -= 4;
  updateCarousel();
});

function updateCarousel() {
  const offset = -(currentIndex * 25);
  row1.style.transform = `translateX(${offset}%)`;
  row2.style.transform = `translateX(${offset}%)`;
}

