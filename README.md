# Image Search App

A simple React application for searching and browsing images using an external API. The project includes features such as search, pagination, modal preview, loading indicators, and error handling.

## 🚀 Features

- Search images by keyword
- Display image gallery
- Load more results (pagination)
- Fullscreen modal preview when clicking an image
- Loader while fetching data
- Error notifications using react-hot-toast
- Clean and modular component structure

## 🛠️ Technologies Used

React (hooks, functional components)

react-hot-toast for notifications

Custom API utility for fetching images

## 📦 Installation

```bash
git clone <repository-url>
cd project-folder
npm install
npm start
```

## 📚 Usage

-> Enter a keyword in the search bar

-> Click Search

-> Scroll through the images

-> Click Load More to load the next page

-> Click any image to open it in a modal

## 🔧 Main Logic (App.jsx Overview)

Manages state for photos, loading, pagination, search query, and modal

Calls fetchImages when search or page changes

Handles errors and empty search input

Renders UI components based on app state

## ⚙️ Environment Variables

If your API requires a key, create .env:

`REACT_APP_API_KEY=your_api_key_here`
