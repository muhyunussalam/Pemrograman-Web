
    function submitForm(event) {
      event.preventDefault(); 
      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const prodi = document.getElementById("prodi").value;

      alert("Pendaftaran berhasil!\n\nNama: " + nama + "\nEmail: " + email + "\nProgram Studi: " + prodi);

      
      event.target.reset();
    }
  

setInterval(() => {
    nextSlide();
    }, 5000);