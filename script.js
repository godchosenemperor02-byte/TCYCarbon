document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle mobile menu visibility
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking any menu item
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
});

const wheelOrderForm = document.getElementById("wheelOrderForm");

wheelOrderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get selected carbon style
  const carbonStyle = document.querySelector(
    'input[name="carbonStyle"]:checked'
  )?.value;

  // Collect form data
  const orderData = {
    carMake: document.getElementById("carMake").value.trim(),
    carYear: document.getElementById("carYear").value.trim(),
    carbonStyle: carbonStyle || "Not specified",
    gripMaterial: document.getElementById("gripMaterial").value,
    stitchColor: document.getElementById("stitchColor").value,
    fullName: document.getElementById("fullName").value.trim(),
    phone: document.getElementById("number").value.trim(),
    email: document.getElementById("emailAddress").value.trim(),
    customNotes: document.getElementById("customNotes").value.trim()
  };

  // Build the WhatsApp message
  const message = `
*New Custom Wheel Order*

*Car Details*
• Make: ${orderData.carMake}
• Year: ${orderData.carYear}

*Wheel Specs*
• Carbon Style: ${orderData.carbonStyle}
• Grip Material: ${orderData.gripMaterial}
• Stitch Color: ${orderData.stitchColor}

*Customer Info*
• Name: ${orderData.fullName}
• Phone: ${orderData.phone}
• Email: ${orderData.email}

*Notes*
${orderData.customNotes || "None"}
  `.trim();

  // Encode the message for the URL
  const encodedMessage = encodeURIComponent(message);

  // Replace with your WhatsApp number (country code + number, no + or spaces)
  // Example: 2348012345678 for a Nigerian number
  const whatsappNumber = "8615338220601";

  // Open WhatsApp (works on mobile and desktop)
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");

  // Optional: reset the form after opening WhatsApp
  // wheelOrderForm.reset();
});

function orderViaWhatsApp(productName, price) {
  // Replace with your WhatsApp number (country code + number, no + or spaces)
  // Example: 2348012345678
  const whatsappNumber = "8615338220601";

  const message = `Hi TYC Carbon, I want to order the ${productName} for ${price}.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
}