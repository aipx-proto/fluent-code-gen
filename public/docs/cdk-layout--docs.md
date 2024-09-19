# Layout

Use StyledComponents to implement layout.

- Prefer modern CSS: Flexbox, Grid, etc.
- Ok to set paddings
- Parent component should implement margins as gaps when possible

## Examples

```jsx
import styled from "styled-components";

const Columns = styled.div<{ $gap?: number }>`
  display: grid;
  gap: ${({ $gap }) => $gap ?? 0}px;
`;

export default function App() {
  return (
    <Columns $gap={16}>
      <div>Column 1</div>
      <div>Column 2</div>
    </Columns>
  );
}

const Rows = styled.div<{ $gap?: number }>`
  display: grid;
  gap: ${({ $gap }) => $gap ?? 0}px;
  grid-auto-flow: row;
`;

const Flex = styled.div<{ $direction?: "row" | "column" }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction ?? "row"};
`;
```
