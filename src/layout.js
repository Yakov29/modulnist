const container = document.querySelector(".container")
const title = document.querySelector("h1")
export const createForm = () => {
    title.insertAdjacentHTML("afterend", `<form id="feedback-form">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea>

    <button type="submit">Submit</button>
  </form>`) 
}
