const apiClient = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
    
    async post(endpoint: string, body: any) {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      
      return response.json();
    },
    
    async coachChat(messages: Array<{role: string, content: string}>) {
      return this.post('/coach/chat', { messages });
    },
  };
  
  export default apiClient;
  