import Header from "./components/Header";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <Header title="My Team Members" />

      <UserCard name="Abdullah Shahid" role="React Intern" city="Lahore" />
      <UserCard name="Ali Khan" role="Backend Developer" city="Karachi" />
      <UserCard name="Sara Ahmed" role="UI/UX Designer" city="Islamabad" />

      <Footer text="© 2026 My React Learning Project" />
    </>
  );
}

export default App;