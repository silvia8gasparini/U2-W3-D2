document.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("username")
    if (savedName) {
      document.getElementById("savedName").textContent = savedName
    }
  })

  const saveName = () => {
    const name = document.getElementById("nameInput").value
    if (name) {
      localStorage.setItem("username", name)
      document.getElementById("savedName").textContent = name
      document.getElementById("nameInput").value = ""
    }
  }

  const removeName = () => {
    localStorage.removeItem("username")
    document.getElementById("savedName").textContent = ""
    document.getElementById("nameInput").value = ""
  }