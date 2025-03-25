# MyLibrary

MyLibrary is a simple library management web application built with Node.js, Express, and MongoDB (using Mongoose). This project demonstrates CRUD operations for managing authors and books, including uploading a cover image for each book.

---

## Demo Video

<details>
  <summary><strong>Click to watch the demo video</strong></summary>
  <p>
    <a href="https://drive.google.com/drive/folders/1vchIKN0NuujQC6HbHTOMXx2jyICYIZYZ?usp=sharing" target="_blank">
      <img src="./public/assets/Landing Page.png" alt="Demo Video" width="600" style="max-width:100%;">
    </a>
  </p>
</details>

---

## Screenshots

You can display your screenshots in a grid using an HTML table. This helps keep large images under control by specifying a fixed width.

<table>
  <tr>
    <td align="center"><img src="./public/assets/Landing Page.png" alt="Screenshot 1" width="300" style="max-width:100%;"></td>
    <td align="center"><img src="./public/assets/Search Books Page.png" alt="Screenshot 2" width="300" style="max-width:100%;"></td>
  </tr>
  <tr>
    <td align="center"><img src="./public/assets/Add New Book Page.png" alt="Screenshot 3" width="300" style="max-width:100%;"></td>
    <td align="center"><img src="./public/assets/Search Authors.png" alt="Screenshot 4" width="300" style="max-width:100%;"></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><img src="./public/assets/Add New Author.png" alt="Screenshot 5" width="300" style="max-width:100%;"></td>
  </tr>
</table>

---

## Features

- **Author Management:**

  - Add, update, and delete authors
  - View a list of authors

- **Book Management:**

  - Add, update, and delete books
  - Upload a cover image for each book
  - View a list of books

- **CRUD Demonstration:**
  - A simple example to illustrate managing related data using Node.js, Express, and MongoDB

## Project Motivation

The primary goal of MyLibrary is to serve as a learning tool for basic CRUD operations. It demonstrates how authors and books (with cover images) can be managed using a modern web stack. This project does not include full book file uploads (such as PDFs), keeping the focus on core functionality.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/prashantsaini1525/MyLibrary.git
   cd MyLibrary
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

- Create a .env file in the root directory with your configuration:

  ```bash
  MONGO_URI=your_mongodb_connection_string
  PORT=3000
  ```

4. **Run the Application:**

- Start the server:

  ```bash
  npm start
  ```

- Or use development mode:

  ```bash
  npm run devStart
  ```

5. **Access the Application:**

Open your browser and navigate to http://localhost:3000.

## Project Structure

- **server.js:** Main file setting up Express and connecting to MongoDB.

- **models/:** Contains Mongoose models for Authors and Books.

- **views/:** Contains EJS templates for rendering the UI.

- **public/:** Contains static assets (including cover images).

--- 

## Future Enhancements

- **Book File Uploads:**
Add functionality to allow uploading complete book files (e.g., PDFs) using middleware like Multer.

- **User Authentication:**
Implement authentication for managing access to book and author data.

- **Enhanced UI/UX:**
Improve the frontend with modern frameworks or design enhancements.

## Contributing

Contributions are welcome! Feel free to fork the repository, open pull requests, or submit issues with suggestions and bug reports.