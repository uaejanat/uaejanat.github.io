document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const nav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        const collapse = bootstrap.Collapse.getInstance(nav);
        if (collapse) collapse.hide();
      }
    });
  });

  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) backToTop.classList.add("show");
    else backToTop.classList.remove("show");
  });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", (event) => {
    // Opens the visitor's email client. Replace this with your backend/API
    // if you want enquiries submitted directly from the website.
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const sector = document.getElementById("sector").value;
    const body = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Website Enquiry — ${sector}`);
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${sector}\n\nMessage:\n${body}`
    );

    window.location.href = `mailto:info@janatuae.com?subject=${subject}&body=${mailBody}`;
    message.textContent = "Opening your email application…";
  });
});
