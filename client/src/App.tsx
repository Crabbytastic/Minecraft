import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function SupportSection() {
  return (
    <section>
      <h2>Need Help?</h2>
      <p>Contact us for support:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:Crabbytastic@gmail.com">Crabbytastic@gmail.com</a>
      </p>
      <p>
        <strong>Discord:</strong>{" "}
        <a href="https://discord.gg/q8W2bgRAXV">
          Join our Discord server
        </a>
      </p>
    </section>
  );
}


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
      <SupportSection /> {/* Added SupportSection */}
    </QueryClientProvider>
  );
}

export default App;