import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path=":articleId" element={<Article />} />
		</Routes>
	</BrowserRouter>
);
