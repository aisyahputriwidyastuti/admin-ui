describe("End-to-End Testing: Access Dashboard (Overview)", () => {
  it("Login with Valid Credential and Access Dashboard", () => {
    // 1. Buka URL
    cy.visit("http://localhost:5173/"); // Pastikan URL sesuai dengan aplikasi Anda

    // 2. Verifikasi halaman login terlihat
    cy.url().should("include", "/login"); // Pastikan URL mengarah ke halaman login
    cy.get("h1").contains("Login").should("be.visible"); // Memastikan ada judul "Login"

    // 3. Input email
    cy.get("#email") // Pastikan elemen memiliki id="email"
      .should("be.visible") // Memastikan input terlihat
      .should("have.attr", "placeholder", "hello@example.com") // Placeholder sesuai
      .type("hello@example.com") // Ketik email
      .should("have.value", "hello@example.com"); // Memastikan value sesuai

    // 4. Input password
    cy.get("#password") // Pastikan elemen memiliki id="password"
      .should("be.visible") // Memastikan input terlihat
      .should("have.attr", "placeholder", "*************") // Placeholder sesuai
      .type("123456") // Ketik password
      .should("have.value", "123456"); // Memastikan value sesuai denngan password

    // 5. Klik tombol Login
    cy.contains("button", "Login") // Cari tombol dengan teks "Login"
      .should("be.visible") // Memastikan tombol terlihat
      .click(); // Klik tombol

    // 6. Verifikasi bahwa login berhasil dan diarahkan ke Dashboard
    cy.url().should("include", "/dashboard"); 

    // 7. Verifikasi elemen di halaman Dashboard
    cy.get("header").contains("Welcome").should("be.visible"); 
    cy.get("nav").should("be.visible"); 

    // 8. Verifikasi menu navigasi di sidebar
    cy.get("nav").within(() => {
      cy.contains("Overview").should("be.visible"); 
      cy.contains("Balance").should("be.visible"); 
      cy.contains("Expenses").should("be.visible"); 
      cy.contains("Goals").should("be.visible");
    });

    // 9. Verifikasi elemen utama pada halaman Dashboard
    cy.get("h1").contains("Dashboard Overview").should("be.visible"); 
    cy.get(".card").should("have.length.greaterThan", 0);

    // 10. Verifikasi card "Goals" memuat data dengan benar
    cy.get(".card").contains("Goals").should("be.visible"); 
    cy.get(".card").contains("Target Achieved").should("be.visible"); 
    cy.get(".loader").should("not.exist"); 

    // 11. Verifikasi navigasi ke halaman lain dari menu sidebar (contoh: Expenses)
    cy.contains("nav", "Expenses").click(); 
    cy.url().should("include", "/expenses"); s
    cy.get("h1").contains("Expenses").should("be.visible"); 
  });
});
