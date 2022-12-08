import { ThemeProvider } from "styled-components";
import * as firebase from "firebase";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyCIu0JtfO5ElJCcNCN5XCGmpAnaDEryG-8",
  authDomain: "patina-da0b3.firebaseapp.com",
  projectId: "patina-da0b3",
  storageBucket: "patina-da0b3.appspot.com",
  messagingSenderId: "141298177911",
  appId: "1:141298177911:web:3c02033469b1a45b757372",
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
