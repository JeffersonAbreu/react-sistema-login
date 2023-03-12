import RouterApp from "./routes";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./contexts/auth";

const App = () => {
  return (
    <AuthProvider>
      <RouterApp />
      <GlobalStyle />
    </AuthProvider>
  )
}
export default App