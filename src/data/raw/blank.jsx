import React, { useState } from "react";
import { AppShell } from "ai-studio-cdk";
import { Button } from "@fluentui/react-components"; 
import { AddRegular } from "@fluentui/react-icons";

export default function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter + 1);

  return (
    <AppShell breadcrumbs={["hub-123", "project-123"]} activeItem="home">
      <div>
        <Button icon={<AddRegular />} onClick={handleClick}>Counter {counter}</Button>
      </div>
    </AppShell>
  );
}