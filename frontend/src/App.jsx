import { useState } from "react";
import { Container, TextInput, Button, Text, Loader, Paper, Title } from "@mantine/core";
import axios from "axios";
import '@mantine/core/styles.css';
import './App.css';
import { API_BASE_URL } from './config';

import { MantineProvider } from '@mantine/core';

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setResponse("");
    try {
      const res = await axios.post(`${API_BASE_URL}/generate`, { query });
      setResponse(res.data.result);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MantineProvider>
      <div className="app-wrapper">
        <Container size="sm" py="xl" className="centered-container">
          <Paper shadow="sm" p="xl" radius="md" className="sparkly-paper">
            <Title order={2} mb="md" align="center" className="sparkly-title">Legal Document Search</Title>
            <TextInput
              placeholder="Enter your legal query..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              mb="md"
            />
            <Button fullWidth onClick={handleSearch} disabled={loading} className="sparkly-button">
              {loading ? <Loader size="xs" /> : "Search"}
            </Button>

            {error && <Text color="red" mt="md">{error}</Text>}
            {response && (
              <Paper mt="md" p="md" withBorder className="sparkly-response">
                <Text>{response}</Text>
              </Paper>
            )}
          </Paper>
        </Container>
      </div>
    </MantineProvider>
  );
}

export default App;